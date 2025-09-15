import React, { useEffect, useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { supabase } from "../../config/supabaseClient";
import { Chip } from "primereact/chip";

const Documents = () => {
  const [documentListData, setDocumentListData] = useState([]);

  const header = (
    <img
      alt="Card"
      src="https://primefaces.org/cdn/primereact/images/usercard.png"
    />
  );
  const footer = (
    <>
      <Button label="Save" icon="pi pi-check" />
      <Button
        label="Cancel"
        severity="secondary"
        icon="pi pi-times"
        style={{ marginLeft: "0.5em" }}
      />
    </>
  );

  async function fetchDocuments() {
    // fetch documents data
    try {
      const { data, error } = await supabase
        .from("playlist")
        .select("*")
        .eq("collection_id", "f9ad0eb5-bc08-4566-8c47-ae6c20510f2e")
        .order("created_dttm", { ascending: false });
      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setDocumentListData(data);
      }
    } catch (e) {
      // todo: add new error toast...
      //   toast.error(
      //     "System is unavailable.  Unable to fetch Client Data.  Please try again later or contact tech support!",
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
    }
  }

  useEffect(() => {
    fetchDocuments();
  }, []);

  async function viewDocument(document) {
    console.log(document);
    const documentFolder = document.document_folder;
    const documentName = document.document_name;

    const { data, error } = supabase.storage
      .from("application")
      .getPublicUrl(documentFolder + "/" + documentName);

    if (data && data.publicUrl) {
      console.log(data.publicUrl);
      window.open(data.publicUrl);
    } else {
      console.error("Error while fetching document URL", error);
    }
  }

  return (
    // <div className="card grid mt-1">
    //   <div class="col-12 md:col-6 lg:col-3">
    //     <Card
    //       title="Advanced Card"
    //       subTitle="Card subtitle"
    //       footer={footer}
    //       // header={header}
    //       className="md:w-25rem"
    //     >
    //       <p className="m-0">
    //         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
    //         sed consequuntur error repudiandae numquam deserunt quisquam
    //         repellat libero asperiores earum nam nobis, culpa ratione quam
    //         perferendis esse, cupiditate neque quas!
    //       </p>
    //     </Card>
    //   </div>
    // </div>
    <>
      <div className="grid">
        {Array.from(documentListData).map((document) => (
          <div className="col-12 lg:col-6 xl:col-3">
            <div className="card mb-0">
              <div className="flex justify-content-between mb-3">
                <div>
                  <span className="block font-medium text-xl mb-3">
                    {document.title}
                  </span>

                  <div className="font-medium">
                    <Chip className="text-sm" label="PDF in Gujarati Version" />
                  </div>
                </div>
                <Button
                  className="pi pi-file"
                  tooltip="View/Print"
                  tooltipOptions={{ position: "top" }}
                  onClick={() => {
                    viewDocument(document);
                  }}
                  style={{ width: "1rem", height: "2.5rem" }}
                />
              </div>
              {/* <span className="text-green-500 font-medium">24 new </span>
            <span className="text-500">since last visit</span> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Documents;
