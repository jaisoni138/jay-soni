import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Tooltip } from "primereact/tooltip";

export default function AddPlayList({ user, title }) {
  return (
    <>
      <Tooltip target=".ap-form-tooltip" />
      <div className="grid card">
        <div className="col-12">
          <div className="p-fluid">
            <div className="field">
              <label htmlFor="apTitle">Title</label>
              <InputText id="apTitle" type="text" />
            </div>
            <div className="field">
              <label htmlFor="apDesc">Description</label>
              <InputText id="apDesc" type="text" />
            </div>
            <div className="field">
              <label htmlFor="apVideoID">Video ID</label>
              <InputText id="acSubTitle" type="text" />
            </div>
            <div className="field">
              <label htmlFor="apCollection">Collection</label>
              <InputText id="apCollection" type="text" />
            </div>
            <div className="field">
              <label htmlFor="apIsDoc">Is this a Document?</label>
              <i
                className="pi pi-info-circle ap-form-tooltip mx-2"
                data-pr-tooltip="Required, If you are adding as a document then you must select 'YES'"
                data-pr-position="right"
                style={{ fontSize: "1rem", cursor: "pointer" }}
              />
              <InputText id="apIsDoc" type="text" />
            </div>
            <div className="field">
              <label htmlFor="apDocFolder">Document Folder</label>
              <i
                className="pi pi-info-circle ap-form-tooltip mx-2"
                data-pr-tooltip="Required, If you are adding as a document then you must to enter the PATH/FOLDER, EXACTLY as mentioned in the storage"
                data-pr-position="right"
                style={{ fontSize: "1rem", cursor: "pointer" }}
              />
              <InputText id="apDocFolder" type="text" />
            </div>
            <div className="field">
              <label htmlFor="apDocName">Document Name</label>
              <i
                className="pi pi-info-circle ap-form-tooltip mx-2"
                data-pr-tooltip="Required, If you are adding as a document then you must to enter the FILE NAME, EXACTLY as mentioned in the storage"
                data-pr-position="right"
                style={{ fontSize: "1rem", cursor: "pointer" }}
              />
              <InputText id="apDocName" type="text" />
            </div>
          </div>
        </div>
        <div className="col-12">
          <Button severity="secondary" label="Reset Form"></Button>
          <Button className="mx-2" label="Save"></Button>
        </div>
      </div>
    </>
  );
}
