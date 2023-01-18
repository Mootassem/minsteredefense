import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import donsSelectors from 'src/modules/dons/donsSelectors';
import destroyActions from 'src/modules/dons/destroy/donsDestroyActions';
import destroySelectors from 'src/modules/dons/destroy/donsDestroySelectors';
import actions from 'src/modules/dons/list/donsListActions';
import selectors from 'src/modules/dons/list/donsListSelectors';
import TableColumnHeader from 'src/view/shared/table/TableColumnHeader';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';
import Spinner from 'src/view/shared/Spinner';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import Pagination from 'src/view/shared/table/Pagination';
import UserListItem from 'src/view/user/list/UserListItem';
import { useForm } from 'react-hook-form';
import ImagesListView from 'src/view/shared/table/ImagesListView';
import moment from 'moment';

function DonsListTable(props) {

  const [
    recordIdToDestroy,
    setRecordIdToDestroy,
  ] = useState(null);
  const [
    recordMontant,
    setRecordMontant,
  ] = useState(null);
  const dispatch = useDispatch();
  const { setValue, getValues } = useForm();
  const findLoading = useSelector(selectors.selectLoading);

  const destroyLoading = useSelector(
    destroySelectors.selectLoading,
  );

  const loading = findLoading || destroyLoading;

  const rows = useSelector(selectors.selectRows);
  const pagination = useSelector(
    selectors.selectPagination,
  );
  const selectedKeys = useSelector(
    selectors.selectSelectedKeys,
  );
  const hasRows = useSelector(selectors.selectHasRows);
  const sorter = useSelector(selectors.selectSorter);
  const isAllSelected = useSelector(
    selectors.selectIsAllSelected,
  );
  const hasPermissionToEdit = useSelector(
    donsSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    donsSelectors.selectPermissionToDestroy,
  );

  const doOpenDestroyConfirmModal = (id) => {
    setRecordIdToDestroy(id);
  };

  const doCloseDestroyConfirmModal = () => {
    setRecordIdToDestroy(null);
  };

  const doChangeSort = (field) => {
    const order =
      sorter.field === field && sorter.order === 'ascend'
        ? 'descend'
        : 'ascend';

    dispatch(
      actions.doChangeSort({
        field,
        order,
      }),
    );
  };
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const doCloseModal = () => {
    setModalVisible(false);
  };
  let donsMontant
  const doOpenModal = (montant) => {
    donsMontant = montant;
    setRecordMontant(montant);

    setModalVisible(true);
  };

  const doChangePagination = (pagination) => {
    dispatch(actions.doChangePagination(pagination));
  };

  const doDestroy = (id) => {
    doCloseDestroyConfirmModal();

    dispatch(destroyActions.doDestroy(id));
  };

  const doToggleAllSelected = () => {
    dispatch(actions.doToggleAllSelected());
  };

  const doToggleOneSelected = (id) => {
    dispatch(actions.doToggleOneSelected(id));
  };

  const doCreateSuccess = (record) => {
    const { name, mode } = props;
    if (mode && mode === 'multiple') {
      setValue(name, [
        ...(getValues()[name] || []),
        record,
        props.donsMontant,
      ]);
    } else {
      setValue(name, [
        record,
        props.donsMontant,
      ]);
    }

    doCloseModal();
  };

  return (
    <TableWrapper>
      <div className="table-responsive">
        <table className="table table-striped     mt-2">
          <thead className="thead">
            <tr>
              <TableColumnHeader className="th-checkbox">
                {hasRows && (
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="table-header-checkbox"
                      checked={Boolean(isAllSelected)}
                      onChange={() => doToggleAllSelected()}
                    />
                    <label
                      htmlFor="table-header-checkbox"
                      className="custom-control-label"
                    >
                      &#160;
                    </label>
                  </div>
                )}
              </TableColumnHeader>
              <TableColumnHeader
                label={i18n(
                  'entities.dons.fields.adherent',
                )}
              />
              <TableColumnHeader
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'createdAt'}
                label={i18n(
                  'entities.dons.fields.createdAt',
                )}
              />
              <TableColumnHeader
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'montant'}
                label={i18n(
                  'entities.dons.fields.montant',
                )}
                align="right"
              />
              <TableColumnHeader
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'typePaiement'}
                label={i18n(
                  'entities.dons.fields.typePaiement',
                )}
              />
              <TableColumnHeader
                label={i18n(
                  'entities.dons.fields.attachements',
                )}
              />
              <TableColumnHeader className="th-actions" />
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan={100}>
                  <Spinner />
                </td>
              </tr>
            )}
            {!loading && !hasRows && (
              <tr>
                <td colSpan={100}>
                  <div className="d-flex justify-content-center">
                    {i18n('table.noData')}
                  </div>
                </td>
              </tr>
            )}
            {!loading &&
              rows.map((row) => (
                <tr key={row.id}>
                  <th className="th-checkbox" scope="row">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id={`table-header-checkbox-${row.id}`}
                        checked={selectedKeys.includes(
                          row.id,
                        )}
                        onChange={() =>
                          doToggleOneSelected(row.id)
                        }
                      />
                      <label
                        htmlFor={`table-header-checkbox-${row.id}`}
                        className="custom-control-label"
                      >
                        &#160;
                      </label>
                    </div>
                  </th>
                  <td>
                    <UserListItem value={row.adherent} />
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    {moment(row.createdAt).format('DD-MM-YYYY')}
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    {row.montant}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    {row.typePaiement
                      ? i18n(
                        `entities.dons.enumerators.typePaiement.${row.typePaiement}`,
                      )
                      : null}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <ImagesListView value={row.attachements} />
                  </td>
                  <td className="td-actions">
                    <Link
                      className="btn btn-link"
                      to={`/dons/${row.id}`}
                    >
                      {i18n('common.view')}
                    </Link>
                    {hasPermissionToEdit && (
                      <Link
                        className="btn btn-link"
                        to={`/dons/${row.id}/edit`}
                      >
                        {i18n('common.edit')}
                      </Link>
                    )}
                    {hasPermissionToDestroy && (
                      <button
                        className="btn btn-link"
                        type="button"
                        onClick={() =>
                          doOpenDestroyConfirmModal(row.id)
                        }
                      >
                        {i18n('common.destroy')}
                      </button>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <Pagination
        onChange={doChangePagination}
        disabled={loading}
        pagination={pagination}
      />

      {recordIdToDestroy && (
        <ConfirmModal
          title={i18n('common.areYouSure')}
          onConfirm={() => doDestroy(recordIdToDestroy)}
          onClose={() => doCloseDestroyConfirmModal()}
          okText={i18n('common.yes')}
          cancelText={i18n('common.no')}
        />
      )}
    </TableWrapper>
  );
}

export default DonsListTable;
