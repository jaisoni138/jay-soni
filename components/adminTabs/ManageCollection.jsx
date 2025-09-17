import React, { useState, useEffect } from "react";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { supabase } from "../../config/supabaseClient";
import { Tooltip } from "primereact/tooltip";

export default function ManageCollection({ user }) {
  const [fetchedCollectionData, setFetchedCollectionData] = useState([]);
  const [filters, setFilters] = useState(null);
  const [globalFilterValue, setGlobalFilterValue] = useState("");

  const dateTimeFormat = (val) => {
    if (val) {
      return new Date(val);
    }
  };

  async function fetchCollection() {
    try {
      let query = supabase.from("collection").select("*");

      let { data: collectionData, error } = await query.order("created_dttm", {
        ascending: false,
        nullsFirst: false,
      });

      if (collectionData) {
        collectionData.forEach((i) => (i.created_dttm = dateTimeFormat(i.created_dttm)));
        collectionData.forEach((i) => (i.updated_dttm = dateTimeFormat(i.updated_dttm)));

        setFetchedCollectionData(collectionData);
      }
    } catch (e) {
      // TODO: open error toast
      //   toast.error(
      //     "System is unavailable.  Please try again later or contact tech support!",
      //     {
      //       position: "bottom-right",
      //       autoClose: false,
      //       hideProgressBar: false,
      //       closeOnClick: true,
      //       pauseOnHover: true,
      //       draggable: true,
      //       progress: undefined,
      //       theme: "colored",
      //     }
      //   );
      // console.warn(e);
    }
  }

  useEffect(() => {
    fetchCollection();
    initFilters();
  }, []);

  // on row edit logic
  const onRowEditComplete = (e) => {
    let _products = [...products];
    let { newData, index } = e;

    _products[index] = newData;

    setProducts(_products);
  };

  const allowEdit = (rowData) => {
    return;
  };

  const textEditor = (options) => {
    return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
  };

  const clearFilter = () => {
    initFilters();
  };

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const initFilters = () => {
    setFilters({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });
    setGlobalFilterValue("");
  };

  const renderHeader = () => {
    return (
      <div className="p-fluid formgrid grid justify-content-between">
        <div className="flex col-12 lg:col-1">
          <Button type="button" icon="pi pi-filter-slash" label="Clear" outlined onClick={clearFilter} />
        </div>
        <div className="col-12 lg:col-4">
          <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
          </span>
        </div>
      </div>
    );
  };

  const header = renderHeader();

  const createdUpdatedDateRender = (rowData) => {
    return (
      <>
        <span>{rowData.created_dttm.toLocaleString("en-EN")}</span> <br />
        <span>{rowData.updated_dttm ? rowData.updated_dttm.toLocaleString("en-EN") : ""}</span>
      </>
    );
  };

  const descriptionRender = (rowData) => {
    return (
      <>
        <div className="max-w-10rem text-overflow-ellipsis overflow-hidden tooltip-show-full-description" data-pr-tooltip={rowData.description} data-pr-position="bottom">
          {rowData.description}
        </div>
        <Tooltip target=".tooltip-show-full-description" />
      </>
    );
  };

  return (
    <>
      <div className="card">
        <DataTable
          value={fetchedCollectionData}
          paginator
          showGridlines
          stripedRows
          rowHover
          removableSort
          scrollHeight="50vh"
          sortMode="multiple"
          tableStyle={{ minWidth: "50rem" }}
          resizableColumns
          columnResizeMode="expand"
          rows={10}
          rowsPerPageOptions={[10, 20, 30, 50]}
          dataKey="collection_id"
          filters={filters}
          header={header}
          editMode="row"
          onRowEditComplete={onRowEditComplete}
          emptyMessage="No collection found."
        >
          <Column rowEditor={allowEdit} header="Edit" headerStyle={{ width: "10%" }} bodyStyle={{ textAlign: "center" }}></Column>
          <Column field="created_dttm" header="Created/Updated On" body={createdUpdatedDateRender} sortable />
          <Column field="title" header="Title" sortable />
          <Column field="description" header="Description" body={descriptionRender} sortable />
          <Column field="sub_title" header="Sub Title" sortable />
          <Column field="url" header="URL" sortable />
          <Column field="label" header="Label" sortable />
          <Column field="icon" header="Icon" sortable />
          <Column field="role" header="Role" sortable />
        </DataTable>
      </div>
    </>
  );
}
