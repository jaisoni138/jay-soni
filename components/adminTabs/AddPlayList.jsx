import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Tooltip } from "primereact/tooltip";
import { useEffect, useRef, useState } from "react";
import { supabase } from "../../config/supabaseClient";
import { Dropdown } from "primereact/dropdown";
import { Toast } from "primereact/toast";
import { SelectButton } from "primereact/selectbutton";
import { ToggleButton } from "primereact/togglebutton";

export default function AddPlayList({ user }) {
  const addPlaylistFields = {
    title: "",
    description: "",
    videoId: "",
    collectionId: null,
    isDocument: false,
    documentFolder: "",
    documentName: "",
  };

  const toast = useRef(null);
  const [addPlaylistData, setAddPlaylistData] = useState(JSON.parse(JSON.stringify(addPlaylistFields)));
  const [collectionData, setCollectionData] = useState([]);

  const selectedCountryTemplate = (option, props) => {
    if (option) {
      return (
        <div className="flex align-items-center">
          <div>{option.title}</div>
        </div>
      );
    }

    return <span>{props.placeholder}</span>;
  };

  const countryOptionTemplate = (option) => {
    return (
      <div className="flex align-items-center">
        <div>{option.title}</div>
      </div>
    );
  };

  async function getCollectionData() {
    const { data, error } = await supabase.from("collection").select("id, title");

    if (data) {
      setCollectionData(data);
    }
  }

  useEffect(() => {
    getCollectionData();
  }, []);

  const saveForm = async ({ title, description, videoId, collectionId, isDocument, documentFolder, documentName }, setAddPlaylistData, user) => {
    try {
      if (!isDocument) {
        if (title && videoId && collectionId && collectionId.id) {
          const { data: playlistData, error: playlistError } = await supabase.from("playlist").select("videoId, collection_id").eq("videoId", videoId).single();

          if (!playlistData) {
            const { data, error } = await supabase.from("playlist").insert([
              {
                title: title,
                description: description,
                videoId: videoId,
                collection_id: collectionId.id,
              },
            ]);
            if (error) {
              // open toast
              toast.current.show({
                severity: "error",
                summary: "Error",
                detail: "Error while inserting a playlist",
              });
            } else {
              // open toast
              toast.current.show({
                severity: "success",
                summary: "Success",
                detail: "Video successfully added to Playlist",
              });
              setAddPlaylistData(JSON.parse(JSON.stringify(addPlaylistFields)));
            }
          } else {
            // open toast
            toast.current.show({
              severity: "error",
              summary: "Duplicate Entry",
              detail: "This video is already added in playlist under collection " + playlistData.collection_id,
            });
          }
        } else {
          toast.current.show({
            severity: "error",
            summary: "Error",
            detail: "Please fill all the required fields!",
          });
        }
      } else {
        if (title && documentFolder && documentName) {
          const { data: playlistData, error: playlistError } = await supabase.from("playlist").select("document_name").eq("document_folder", documentFolder).eq("document_name", documentName).single();

          if (!playlistData) {
            const { data, error } = await supabase.from("playlist").insert([
              {
                title: title,
                description: description,
                collection_id: "f9ad0eb5-bc08-4566-8c47-ae6c20510f2e",
                is_document: true,
                document_folder: documentFolder,
                document_name: documentName,
              },
            ]);
            if (error) {
              // open toast
              toast.current.show({
                severity: "error",
                summary: "Error",
                detail: "Error while inserting a playlist",
              });
            } else {
              // open toast
              toast.current.show({
                severity: "success",
                summary: "Success",
                detail: "Document successfully added to Playlist",
              });
              setAddPlaylistData(JSON.parse(JSON.stringify(addPlaylistFields)));
            }
          } else {
            // open toast
            toast.current.show({
              severity: "error",
              summary: "Duplicate Entry",
              detail: "This document is already added in playlist",
            });
          }
        } else {
          toast.current.show({
            severity: "error",
            summary: "Error",
            detail: "Please fill all the required fields!",
          });
        }
      }
    } catch (err) {
      // open toast
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "Error in catch while inserting a playlist",
      });
    }
  };

  return (
    <>
      <Toast ref={toast} appendTo={null} />
      <Tooltip target=".ap-form-tooltip" />
      <div className="grid card">
        <div className="col-12">
          <div className="p-fluid">
            <div className="field">
              <label htmlFor="apIsDoc" className="vertical-align-middle">
                Is this a Document?
              </label>
              <i
                className="pi pi-info-circle ap-form-tooltip mx-2"
                data-pr-tooltip="Required, If you are adding as a document then you must select 'YES'"
                data-pr-position="right"
                style={{ fontSize: "1rem", cursor: "pointer" }}
              />
              <ToggleButton
                checked={addPlaylistData.isDocument}
                onChange={(e) => {
                  setAddPlaylistData((previousState) => ({
                    ...previousState,
                    isDocument: e.target.value,
                  }));
                  console.log(e.target.value);
                }}
                className="w-auto h-auto vertical-align-middle"
              />
              {/* 
              <SelectButton
                value={addPlaylistData.isDocument}
                onChange={(e) => {
                  setAddPlaylistData((previousState) => ({
                    ...previousState,
                    isDocument: e.target.value,
                  }));
                }}
                options={["true"]}
              /> */}
            </div>
            <div className="field">
              <label htmlFor="apTitle">Title</label>
              <InputText
                id="apTitle"
                type="text"
                value={addPlaylistData.title}
                onChange={(e) => {
                  setAddPlaylistData((previousState) => ({
                    ...previousState,
                    title: e.target.value,
                  }));
                }}
              />
            </div>
            <div className="field">
              <label htmlFor="apDesc">Description</label>
              <InputText
                id="apDesc"
                type="text"
                value={addPlaylistData.description}
                onChange={(e) => {
                  setAddPlaylistData((previousState) => ({
                    ...previousState,
                    description: e.target.value,
                  }));
                }}
              />
            </div>
            {!addPlaylistData.isDocument ? (
              <>
                <div className="field">
                  <label htmlFor="apVideoID">Video ID</label>
                  <InputText
                    id="acSubTitle"
                    type="text"
                    value={addPlaylistData.videoId}
                    onChange={(e) => {
                      setAddPlaylistData((previousState) => ({
                        ...previousState,
                        videoId: e.target.value,
                      }));
                    }}
                  />
                </div>
                <div className="field">
                  <label htmlFor="apCollection">Collection</label>
                  <Dropdown
                    value={addPlaylistData.collectionId}
                    onChange={(e) => {
                      setAddPlaylistData((previousState) => ({
                        ...previousState,
                        collectionId: e.target.value,
                      }));
                    }}
                    options={collectionData}
                    optionLabel="title"
                    placeholder="Select a collection"
                    filter
                    filterDelay={400}
                    valueTemplate={selectedCountryTemplate}
                    itemTemplate={countryOptionTemplate}
                  />
                  {/* <InputText
                id="apCollection"
                type="text"
                value={addPlaylistData.collectionId}
                onChange={(e) => {
                  setAddPlaylistData((previousState) => ({
                    ...previousState,
                    collectionId: e.target.value,
                  }));
                }}
              /> */}
                </div>
              </>
            ) : (
              <>
                <div className="field">
                  <label htmlFor="apDocFolder">Document Folder</label>
                  <i
                    className="pi pi-info-circle ap-form-tooltip mx-2"
                    data-pr-tooltip="Required, If you are adding as a document then you must to enter the PATH/FOLDER, EXACTLY as mentioned in the storage"
                    data-pr-position="right"
                    style={{ fontSize: "1rem", cursor: "pointer" }}
                  />
                  <InputText
                    id="apDocFolder"
                    type="text"
                    value={addPlaylistData.documentFolder}
                    onChange={(e) => {
                      setAddPlaylistData((previousState) => ({
                        ...previousState,
                        documentFolder: e.target.value,
                      }));
                    }}
                  />
                </div>
                <div className="field">
                  <label htmlFor="apDocName">Document Name</label>
                  <i
                    className="pi pi-info-circle ap-form-tooltip mx-2"
                    data-pr-tooltip="Required, If you are adding as a document then you must to enter the FILE NAME, EXACTLY as mentioned in the storage"
                    data-pr-position="right"
                    style={{ fontSize: "1rem", cursor: "pointer" }}
                  />
                  <InputText
                    id="apDocName"
                    type="text"
                    value={addPlaylistData.documentName}
                    onChange={(e) => {
                      setAddPlaylistData((previousState) => ({
                        ...previousState,
                        documentName: e.target.value,
                      }));
                    }}
                  />
                </div>
              </>
            )}
          </div>
        </div>
        <div className="col-12">
          <Button
            severity="secondary"
            label="Reset Form"
            onClick={(e) => {
              e.preventDefault();
              setAddPlaylistData(JSON.parse(JSON.stringify(addPlaylistFields)));
            }}
          ></Button>
          <Button
            className="mx-2"
            label="Save"
            onClick={(e) => {
              e.preventDefault();
              saveForm(addPlaylistData, setAddPlaylistData, user);
            }}
          ></Button>
        </div>
      </div>
    </>
  );
}
