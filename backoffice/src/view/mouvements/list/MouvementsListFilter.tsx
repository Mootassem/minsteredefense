import { i18n } from 'src/i18n';
import actions from 'src/modules/mouvements/list/mouvementsListActions';
import selectors from 'src/modules/mouvements/list/mouvementsListSelectors';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FilterWrapper from 'src/view/shared/styles/FilterWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FilterPreview from 'src/view/shared/filter/FilterPreview';
import filterRenders from 'src/modules/shared/filter/filterRenders';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import InputRangeFormItem from 'src/view/shared/form/items/InputRangeFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import mouvementsEnumerators from 'src/modules/mouvements/mouvementsEnumerators';
import CategorieMouvAutocompleteFormItem from 'src/view/categorieMouv/autocomplete/CategorieMouvAutocompleteFormItem';

const schema = yup.object().shape({
  typeMouv: yupFilterSchemas.enumerator(
    i18n('entities.mouvements.fields.typeMouv'),
  ),
  categorie: yupFilterSchemas.relationToOne(
    i18n('entities.mouvements.fields.categorie'),
  ),
  titre: yupFilterSchemas.string(
    i18n('entities.mouvements.fields.titre'),
  ),
  montantRange: yupFilterSchemas.decimalRange(
    i18n('entities.mouvements.fields.montantRange'),
  ),
});

const emptyValues = {
  typeMouv: null,
  categorie: null,
  titre: null,
  montantRange: [],
}

const previewRenders = {
  typeMouv: {
    label: i18n('entities.mouvements.fields.typeMouv'),
    render: filterRenders.enumerator('entities.mouvements.enumerators.typeMouv',),
  },
  categorie: {
      label: i18n('entities.mouvements.fields.categorie'),
      render: filterRenders.relationToOne(),
    },
  titre: {
    label: i18n('entities.mouvements.fields.titre'),
    render: filterRenders.generic(),
  },
  montantRange: {
    label: i18n('entities.mouvements.fields.montantRange'),
    render: filterRenders.decimalRange(),
  },
}

function MouvementsListFilter(props) {
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
    dispatch(actions.doFetch(schema.cast(initialValues), rawFilter));
    // eslint-disable-next-line
  }, [dispatch]);

  const onSubmit = (values) => {
    const rawValues = form.getValues();
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
    dispatch(actions.doReset());
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
                      <SelectFormItem
                        name="typeMouv"
                        label={i18n('entities.mouvements.fields.typeMouv')}
                        options={mouvementsEnumerators.typeMouv.map(
                          (value) => ({
                            value,
                            label: i18n(
                              `entities.mouvements.enumerators.typeMouv.${value}`,
                            ),
                          }),
                        )}
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <CategorieMouvAutocompleteFormItem  
                        name="categorie"
                        label={i18n('entities.mouvements.fields.categorie')}        
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="titre"
                        label={i18n('entities.mouvements.fields.titre')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputRangeFormItem
                        name="montantRange"
                        label={i18n('entities.mouvements.fields.montantRange')}      
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

export default MouvementsListFilter;