import { i18n } from 'src/i18n';
import actions from 'src/modules/dons/list/donsListActions';
import selectors from 'src/modules/dons/list/donsListSelectors';
import React, { useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FilterWrapper from 'src/view/shared/styles/FilterWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FilterPreview from 'src/view/shared/filter/FilterPreview';
import filterRenders from 'src/modules/shared/filter/filterRenders';
import InputRangeFormItem from 'src/view/shared/form/items/InputRangeFormItem';
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import donsEnumerators from 'src/modules/dons/donsEnumerators';
import { useDispatch, useSelector } from 'react-redux';
//import userselectors from 'src/modules/user/view/userViewSelectors';

 
const schema = yup.object().shape({
  adherent: yupFilterSchemas.relationToOne(
    i18n('entities.dons.fields.adherent'),
  ),
  montantRange: yupFilterSchemas.decimalRange(
    i18n('entities.dons.fields.montantRange'),
  ),
  typePaiement: yupFilterSchemas.enumerator(
    i18n('entities.dons.fields.typePaiement'),
  ),

});

const emptyValues = {
  adherent: null,
  montantRange: [],
  typePaiement: null,
  projet:null
}

const previewRenders = {
  adherent: {
    label: i18n('entities.dons.fields.adherent'),
    render: filterRenders.relationToOne(),
  },
  montantRange: {
    label: i18n('entities.dons.fields.montantRange'),
    render: filterRenders.decimalRange(),
  },
  typePaiement: {
    label: i18n('entities.dons.fields.typePaiement'),
    render: filterRenders.enumerator('entities.dons.enumerators.typePaiement',),
  },
  projet: {
    label: i18n('entities.dons.fields.projet'),
    render: filterRenders.relationToOne(),
  },

}

function ProjetDonsListFilter(props) {
  const rawFilter = useSelector(selectors.selectRawFilter);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);
 
  const [initialValues] = useState(() => {
    return {
      ...emptyValues,
      ...rawFilter,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
    mode: 'all',
  });
  useEffect(() => {

    initialValues.projet=props.idprojet;
    dispatch(actions.doFetch(schema.cast(initialValues), rawFilter));
    // eslint-disable-next-line
  }, [dispatch]);

  const onSubmit = (values) => {
    const rawValues = form.getValues();
    rawValues.projet= props.idprojet;
    values.projet= props.idprojet;
    dispatch(actions.doFetch(values, rawValues));
    setExpanded(false);
  };

  const onRemove = (key) => {
    form.setValue(key, emptyValues[key]);
    return form.handleSubmit(onSubmit)();
  };

  const onReset = () => {
    Object.keys(emptyValues).forEach((key) => {
      form.setValue(key, emptyValues[key]);
    });
    // dispatch(actions.doResetprojet());
    setExpanded(false);
  };

  return (
    <FilterWrapper>
      <FilterPreview
        onClick={() => {
          setExpanded(!expanded);
        }}
        renders={previewRenders}
        values={rawFilter}
        expanded={expanded}
        onRemove={onRemove}
      />
      <div className="container">
        <div
          className={`collapse ${expanded ? 'show' : ''}`}
        >
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="row">
                    <div className="col-lg-6 col-12">
                      <UserAutocompleteFormItem  
                        name="adherent"
                        label={i18n('entities.dons.fields.adherent')}        
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputRangeFormItem
                        name="montantRange"
                        label={i18n('entities.dons.fields.montantRange')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <SelectFormItem
                        name="typePaiement"
                        label={i18n('entities.dons.fields.typePaiement')}
                        options={donsEnumerators.typePaiement.map(
                          (value) => ({
                            value,
                            label: i18n(
                              `entities.dons.enumerators.typePaiement.${value}`,
                            ),
                          }),
                        )}
                      />
                    </div>
                    <div style={{ display: 'none' }}>
                    <input
                        name="projet"
                    />
                    </div>
              </div>

              <div className="row">
                <div className="col-12 filter-buttons">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={props.loading}
                  >
                    <ButtonIcon
                      loading={props.loading}
                      iconClass="fas fa-search"
                    />{' '}
                    {i18n('common.search')}
                  </button>
                  <button
                    className="btn btn-light"
                    type="button"
                    onClick={onReset}
                    disabled={props.loading}
                  >
                    <ButtonIcon
                      loading={props.loading}
                      iconClass="fas fa-undo"
                    />{' '}
                    {i18n('common.reset')}
                  </button>
                </div>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </FilterWrapper>
  );
}

export default ProjetDonsListFilter;