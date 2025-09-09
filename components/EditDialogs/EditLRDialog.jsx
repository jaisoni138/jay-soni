import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { useEffect, useMemo, useRef, useState } from "react";
import { supabase } from "../../config/supabaseClient";
import { Toast } from "primereact/toast";
import Spinner from "../spinner";
import ViewOldLR from "../ViewOldLR/ViewOldLR";

export default function EditLRDialog({
    editLRDialogVisible,
    setEditLRDialogVisible,
    references,
    user,
    setRefreshLRData,
    lrDetails,
    setLrDetails,
    selectedLRData,
    setSelectedLRData,
}) {
    const [loading, setLoading] = useState(false);
    const toast = useRef(null);

    const [isLoading, setIsLoading] = useState(false);
    const [loadingText, setLoadingText] = useState("");

    // form states
    // initialize form field
    const editLRFields = {
        // Consignor Block Fields
        consignorName: "",
        consignorGST: "",
        consignorPhone: null,
        consignorAddress: "",
        consignorEmail: "",

        // Consignor Block Fields
        consigneeName: "",
        consigneeGST: "",
        consigneePhone: null,
        consigneeAddress: "",
        consigneeEmail: "",

        // Other Block Fields
        fromCity: "",
        toCity: "",
        vehicalNumber: "",
        driverName: "",
        driverPhone: null,

        // Material Details Block Fields
        materialDetails: "",
        weight: null,
        status: null,
    };
    const [lrFormData, setLrFormData] = useState(
        JSON.parse(JSON.stringify(editLRFields))
    );
    const {
        // Consignor Block Fields
        consignorName,
        consignorGST,
        consignorPhone,
        consignorAddress,
        consignorEmail,

        // Consignor Block Fields
        consigneeName,
        consigneeGST,
        consigneePhone,
        consigneeAddress,
        consigneeEmail,

        // Other Block Fields
        fromCity,
        toCity,
        vehicalNumber,
        driverName,
        driverPhone,

        // Material Details Block Fields
        materialDetails,
        weight,
        status,
    } = useMemo(() => lrFormData, [lrFormData]);

    // set pre loaded values
    useEffect(() => {
        if (editLRDialogVisible) {
            setLrFormData((previousState) => ({
                ...previousState,

                // Consignor Block Fields
                consignorName: lrDetails.editedConsignorName,
                consignorGST: lrDetails.editedConsignorGST,
                consignorPhone: lrDetails.editedConsignorPhone,
                consignorAddress: lrDetails.editedConsignorAddress,
                consignorEmail: lrDetails.editedConsignorEmail,

                // Consignor Block Fields
                consigneeName: lrDetails.editedConsigneeName,
                consigneeGST: lrDetails.editedConsigneeGST,
                consigneePhone: lrDetails.editedConsigneePhone,
                consigneeAddress: lrDetails.editedConsigneeAddress,
                consigneeEmail: lrDetails.editedConsigneeEmail,

                // Other Block Fields
                fromCity: lrDetails.editedFromCity,
                toCity: lrDetails.editedToCity,
                vehicalNumber: lrDetails.editedVehicalNumber,
                driverName: lrDetails.editedDriverName,
                driverPhone: lrDetails.editedDriverPhone,

                // Material Details Block Fields
                materialDetails: lrDetails.editedMaterialDetails,
                weight: lrDetails.editedWeight,
                status: lrDetails.editedStatus,
            }));
        }
    }, [editLRDialogVisible]);

    // all refs
    const [lrStatusRefs, setLrStatusRefs] = useState([]);
    const [clientTypeRefs, setClientTypeRefs] = useState([]);

    // get references block
    async function getReferences() {
        setLrStatusRefs(references.filter((i) => i.ref_nm === "lrStatus"));
    }
    useEffect(() => {
        if (references.length !== 0) getReferences();
    }, [references]);

    const resetForm = () => {
        setLrFormData(JSON.parse(JSON.stringify(editLRFields)));
    };

    const saveEditedChanges = async () => {
        try {
            const { data, error: clientError } = await supabase
                .from("lr")
                .update({
                    // Consignor Fields
                    consignor: consignorName,
                    pickup_address: consignorAddress,
                    consignor_gst: consignorGST,
                    consignor_email: consignorEmail,
                    consignor_phone: consignorPhone,

                    // Consignee Fields
                    consignee: consigneeName,
                    drop_address: consigneeAddress,
                    consignee_gst: consigneeGST,
                    consignee_email: consigneeEmail,
                    consignee_phone: consigneePhone,

                    // Other Block Fields
                    from_city: fromCity,
                    to_city: toCity,
                    vehical_number: vehicalNumber,
                    driver_name: driverName,
                    driver_phone: driverPhone,

                    // Material Details Block Fields
                    material_details: materialDetails,
                    weight: weight,

                    // Default fields
                    status: status ? status.ref_dspl : null,
                    lr_last_modified_date: new Date(),
                    lr_updated_by: user.id,
                })
                .eq("lr_number", lrDetails.editedLrNumber);

            if (clientError) {
                // open toast
                toast.current.show({
                    severity: "error",
                    summary: "Error",
                    detail: "Error while saving LR Details, Please try again later or contact tech support",
                });
            } else {
                // open toast
                toast.current.show({
                    severity: "success",
                    summary: "Success",
                    detail: "LR Details saved successfully.",
                });

                resetForm();
            }
        } catch (err) {
            // open toast
            toast.current.show({
                severity: "error",
                summary: "Error",
                detail: "Error while saving LR Details, Please try again later or contact tech support",
            });
        }
    };

    const saveChanges = () => {
        setLoading(true);

        try {
            saveEditedChanges().then(() => {
                setEditLRDialogVisible(false);
                setLoading(false);
                setRefreshLRData(true);
            });
        } catch (e) {
            setLoading(false);
        }
    };

    const footerContent = (
        <div>
            <span className="px-3">
                <Button
                    label="Reset"
                    outlined
                    icon="pi pi-times"
                    onClick={resetForm}
                    severity="danger"
                />
            </span>
            <Button
                label="Add LR"
                outlined
                icon="pi pi-check"
                autoFocus
                loading={loading}
                onClick={saveChanges}
            />
        </div>
    );

    async function savePDF() {
        setIsLoading(true);
        setLoadingText("LR PDF is being generated...");
        var element = document.getElementById("print-old-lr");
        element.classList.remove("hide-old-lr-block");
        var opt = {
            margin: 0,
            filename: lrDetails.editedLrNumber + ".pdf",
            image: { type: "jpeg", quality: 1 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: "in", format: "A4", orientation: "portrait" },
        };

        window
            .html2pdf()
            .from(element)
            .set(opt)
            .save()
            .then(() => {
                element.classList.add("hide-old-lr-block");
                setIsLoading(false);
                setLoadingText("");
            });
    }

    const renderHeader = (
        <>
            <div class="flex flex-wrap">
                <div class="surface-overlay">
                    <span className="vertical-align-middle">Edit LR </span>
                    <span className="vertical-align-middle">
                        {lrDetails.editedLrNumber}
                    </span>{" "}
                    <Button
                        label="Print / Export to PDF"
                        severity="success"
                        icon="pi pi-print"
                        loading={loading}
                        onClick={() => savePDF()}
                        size="small"
                        className="vertical-align-middle"
                    />
                </div>
            </div>
        </>
    );
    return (
        <>
            <Toast ref={toast} appendTo={null} />
            <Spinner isLoading={isLoading} loadingText={loadingText} />

            <Dialog
                header={renderHeader}
                visible={editLRDialogVisible}
                style={{
                    width: "80vw",
                    height: "70vh",
                    backgroundColor: "#eee",
                }}
                onHide={() => {
                    if (!editLRDialogVisible) return;
                    setEditLRDialogVisible(false);
                }}
                footer={footerContent}
                maximizable
            >
                <div className="grid p-fluid mt-1">
                    <div className="col-12">
                        <div className="card">
                            <h5>Consignor</h5>
                            <div className="p-fluid formgrid grid">
                                <div className="field col-12 lg:col-6 md:col-6">
                                    <label htmlFor="consignorName">Name</label>
                                    <InputText
                                        id="consignorName"
                                        value={consignorName}
                                        placeholder="Enter consignor name"
                                        onChange={(e) => {
                                            setLrFormData((previousState) => ({
                                                ...previousState,
                                                consignorName: e.target.value,
                                            }));
                                        }}
                                    />
                                </div>
                                <div className="field col-12 lg:col-6 md:col-6">
                                    <label htmlFor="consignorGST">GSTIN</label>
                                    <InputText
                                        id="consignorGST"
                                        value={consignorGST}
                                        placeholder="Enter consignor GST number"
                                        onChange={(e) => {
                                            setLrFormData((previousState) => ({
                                                ...previousState,
                                                consignorGST:
                                                    e.target.value.toUpperCase(),
                                            }));
                                        }}
                                    />
                                </div>
                                <div className="field col-12 lg:col-6 md:col-6">
                                    <label htmlFor="consignorPhone">
                                        Phone Number
                                    </label>
                                    <InputNumber
                                        id="consignorPhone"
                                        value={consignorPhone}
                                        onChange={(e) => {
                                            setLrFormData((previousState) => ({
                                                ...previousState,
                                                consignorPhone: e.value,
                                            }));
                                        }}
                                        prefix="+91 "
                                        useGrouping={false}
                                    />
                                </div>
                                <div className="field col-12 lg:col-6 md:col-6">
                                    <label htmlFor="consignorEmail">
                                        Email Address
                                    </label>
                                    <InputText
                                        id="consignorEmail"
                                        value={consignorEmail}
                                        onChange={(e) => {
                                            setLrFormData((previousState) => ({
                                                ...previousState,
                                                consignorEmail: e.target.value,
                                            }));
                                        }}
                                        placeholder="Enter consignor email address"
                                    />
                                </div>
                                <div className="field col-12">
                                    <label htmlFor="consignorAddress">
                                        Address
                                    </label>
                                    <InputText
                                        id="consignorAddress"
                                        value={consignorAddress}
                                        onChange={(e) => {
                                            setLrFormData((previousState) => ({
                                                ...previousState,
                                                consignorAddress:
                                                    e.target.value,
                                            }));
                                        }}
                                        placeholder="Enter consignor/pickup full address"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="card">
                            <h5>Consignee</h5>
                            <div className="p-fluid formgrid grid">
                                <div className="field col-12 lg:col-6 md:col-6">
                                    <label htmlFor="consigneeName">Name</label>
                                    <InputText
                                        id="consigneeName"
                                        value={consigneeName}
                                        placeholder="Enter consignee name"
                                        onChange={(e) => {
                                            setLrFormData((previousState) => ({
                                                ...previousState,
                                                consigneeName: e.target.value,
                                            }));
                                        }}
                                    />
                                </div>
                                <div className="field col-12 lg:col-6 md:col-6">
                                    <label htmlFor="consigneeGST">GSTIN</label>
                                    <InputText
                                        id="consigneeGST"
                                        value={consigneeGST}
                                        placeholder="Enter consignee GST number"
                                        onChange={(e) => {
                                            setLrFormData((previousState) => ({
                                                ...previousState,
                                                consigneeGST:
                                                    e.target.value.toUpperCase(),
                                            }));
                                        }}
                                    />
                                </div>
                                <div className="field col-12 lg:col-6 md:col-6">
                                    <label htmlFor="consigneePhone">
                                        Phone Number
                                    </label>
                                    <InputNumber
                                        id="consigneePhone"
                                        value={consigneePhone}
                                        onChange={(e) => {
                                            setLrFormData((previousState) => ({
                                                ...previousState,
                                                consigneePhone: e.value,
                                            }));
                                        }}
                                        prefix="+91 "
                                        useGrouping={false}
                                    />
                                </div>
                                <div className="field col-12 lg:col-6 md:col-6">
                                    <label htmlFor="consigneeEmail">
                                        Email Address
                                    </label>
                                    <InputText
                                        id="consigneeEmail"
                                        value={consigneeEmail}
                                        onChange={(e) => {
                                            setLrFormData((previousState) => ({
                                                ...previousState,
                                                consigneeEmail: e.target.value,
                                            }));
                                        }}
                                        placeholder="Enter consignee email address"
                                    />
                                </div>
                                <div className="field col-12">
                                    <label htmlFor="consigneeAddress">
                                        Address
                                    </label>
                                    <InputText
                                        id="consigneeAddress"
                                        value={consigneeAddress}
                                        onChange={(e) => {
                                            setLrFormData((previousState) => ({
                                                ...previousState,
                                                consigneeAddress:
                                                    e.target.value,
                                            }));
                                        }}
                                        placeholder="Enter consignee/drop full address"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="card">
                            <h5>Other</h5>
                            <div className="p-fluid formgrid grid">
                                <div className="field col-12 lg:col-6 md:col-6">
                                    <label htmlFor="fromCity">From</label>
                                    <InputText
                                        id="fromCity"
                                        value={fromCity}
                                        placeholder="Enter city"
                                        onChange={(e) => {
                                            setLrFormData((previousState) => ({
                                                ...previousState,
                                                fromCity: e.target.value,
                                            }));
                                        }}
                                    />
                                </div>
                                <div className="field col-12 lg:col-6 md:col-6">
                                    <label htmlFor="toCity">To</label>
                                    <InputText
                                        id="toCity"
                                        value={toCity}
                                        placeholder="Enter city"
                                        onChange={(e) => {
                                            setLrFormData((previousState) => ({
                                                ...previousState,
                                                toCity: e.target.value,
                                            }));
                                        }}
                                    />
                                </div>
                                <div className="field col-12 lg:col-6 md:col-6">
                                    <label htmlFor="vehicalNumber">
                                        Vehical Number
                                    </label>
                                    <InputText
                                        id="vehicalNumber"
                                        value={vehicalNumber}
                                        placeholder="Enter vehical number"
                                        onChange={(e) => {
                                            setLrFormData((previousState) => ({
                                                ...previousState,
                                                vehicalNumber: e.target.value,
                                            }));
                                        }}
                                    />
                                </div>
                                <div className="field col-12 lg:col-6 md:col-6">
                                    <label htmlFor="driverName">
                                        Driver Name
                                    </label>
                                    <InputText
                                        id="driverName"
                                        value={driverName}
                                        placeholder="Enter driver name"
                                        onChange={(e) => {
                                            setLrFormData((previousState) => ({
                                                ...previousState,
                                                driverName: e.target.value,
                                            }));
                                        }}
                                    />
                                </div>
                                <div className="field col-12 lg:col-6 md:col-6">
                                    <label htmlFor="driverPhone">
                                        Driver Phone
                                    </label>
                                    <InputNumber
                                        id="driverPhone"
                                        value={driverPhone}
                                        onChange={(e) => {
                                            setLrFormData((previousState) => ({
                                                ...previousState,
                                                driverPhone: e.value,
                                            }));
                                        }}
                                        prefix="+91 "
                                        useGrouping={false}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="card">
                            <h5>Material Details</h5>
                            <div className="p-fluid formgrid grid">
                                <div className="field col-12 lg:col-6 md:col-6">
                                    <label htmlFor="materialDetails">
                                        Material Details
                                    </label>
                                    <InputText
                                        id="materialDetails"
                                        value={materialDetails}
                                        placeholder="Enter material details"
                                        onChange={(e) => {
                                            setLrFormData((previousState) => ({
                                                ...previousState,
                                                materialDetails: e.target.value,
                                            }));
                                        }}
                                    />
                                </div>
                                <div className="field col-12 lg:col-6 md:col-6">
                                    <label htmlFor="weight">Weight</label>
                                    <InputNumber
                                        value={weight}
                                        onValueChange={(e) => {
                                            setLrFormData((previousState) => ({
                                                ...previousState,
                                                weight: e.target.value,
                                            }));
                                        }}
                                        locale="en-IN"
                                        suffix=" Kg"
                                    />
                                </div>
                                <div className="field col-12 lg:col-6 md:col-6">
                                    <label htmlFor="status">Status</label>
                                    <Dropdown
                                        id="status"
                                        showClear
                                        value={status}
                                        onChange={(e) => {
                                            setLrFormData((previousState) => ({
                                                ...previousState,
                                                status: e.target.value,
                                            }));
                                        }}
                                        options={lrStatusRefs}
                                        optionLabel="ref_dspl"
                                        placeholder="select status"
                                    ></Dropdown>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ViewOldLR selectedLRData={selectedLRData} />
            </Dialog>
        </>
    );
}
