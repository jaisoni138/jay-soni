import Seo from "../../components/seo";
import { useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { Card } from "primereact/card";
import { Chart } from "primereact/chart";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { ProgressBar } from 'primereact/progressbar';
import { FaCamera, FaImage, FaCloudUploadAlt, FaMoon, FaSun } from "react-icons/fa";

const PhotoDashboard = () => {
    const user = useSelector((state) => state.initialState.user);
    const [uploadModal, setUploadModal] = useState(false);
    const [clientModal, setClientModal] = useState(false);
    const [totalPhotos, setTotalPhotos] = useState(0);
    const [clients, setClients] = useState([]);
    const [newClient, setNewClient] = useState("");
    const [darkMode, setDarkMode] = useState(true);
    const toast = useRef(null);

    useEffect(() => {
        setTotalPhotos(parseInt(localStorage.getItem("photoCount") || "1240"));
        setClients(JSON.parse(localStorage.getItem("clients") || '["Smith Wedding", "Nike Commercial"]'));
    }, []);

    const addClient = () => {
        if (!newClient) return;
        const updated = [...clients, newClient];
        setClients(updated);
        localStorage.setItem("clients", JSON.stringify(updated));
        toast.current.show({ severity: "success", summary: "Project Created", detail: newClient, life: 3000 });
        setNewClient("");
    };

    const toggleDarkMode = () => setDarkMode(!darkMode);

    // Storage and Shooting Analytics
    const workflowData = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
            { 
                label: "Photos Captured", 
                data: [450, 0, 1200, 300, 0, 2500, 800], 
                borderColor: "#6366f1",
                tension: 0.4,
                fill: true,
                backgroundColor: "rgba(99, 102, 241, 0.2)"
            }
        ],
    };

    const workflowOptions = { 
        plugins: { legend: { display: false } }, 
        scales: { y: { beginAtZero: true, grid: { color: darkMode ? '#444' : '#eee' } } } 
    };

    return (
        <>
            <Seo pageTitle="Photographer Studio" />
            <Toast ref={toast} />

            <div style={{
                backgroundColor: darkMode ? "#121212" : "#f8f9fa",
                minHeight: "100vh",
                padding: "2rem",
                color: darkMode ? "#fff" : "#333",
                transition: "all 0.3s ease"
            }}>
                
                {/* Header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                    <div>
                        <h1 className="m-0">Studio Command</h1>
                        <small className="text-secondary">Welcome back, {user.name}</small>
                    </div>
                    <div style={{ display: "flex", gap: "1.5rem" }}>
                        <Button icon="pi pi-plus" label="New Shoot" onClick={() => setClientModal(true)} className="p-button-sm p-button-raised" />
                        <div style={{ cursor: "pointer", alignSelf: "center" }} onClick={toggleDarkMode}>
                            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
                        </div>
                    </div>
                </div>

                {/* Status Cards */}
                <div className="grid">
                    <div className="col-12 md:col-4">
                        <Card title="Storage" subTitle="Cloud Sync Status" className="shadow-2">
                            <div className="flex justify-content-between mb-2">
                                <span>850GB / 1TB</span>
                                <span>85%</span>
                            </div>
                            <ProgressBar value={85} showValue={false} style={{ height: '8px' }} color="#6366f1"></ProgressBar>
                        </Card>
                    </div>
                    <div className="col-12 md:col-4">
                        <Card 
                            title="Active Projects" 
                            style={{ cursor: 'pointer' }} 
                            onClick={() => setClientModal(true)}
                            className="shadow-2"
                        >
                            <div className="flex align-items-center gap-3">
                                <FaCamera size={30} className="text-primary" />
                                <span className="text-4xl font-bold">{clients.length}</span>
                            </div>
                        </Card>
                    </div>
                    <div className="col-12 md:col-4">
                        <Card title="Total Assets" className="shadow-2">
                            <div className="flex align-items-center gap-3">
                                <FaImage size={30} className="text-orange-500" />
                                <span className="text-4xl font-bold">{totalPhotos.toLocaleString()}</span>
                            </div>
                        </Card>
                    </div>
                </div>

                {/* Workflow Chart */}
                <Card className="mt-4 shadow-2" title="Weekly Capture Volume">
                    <Chart type="line" data={workflowData} options={workflowOptions} height="300px" />
                </Card>

                {/* Modals */}
                <Dialog header="Project Management" visible={clientModal} onHide={() => setClientModal(false)} modal style={{ width: "450px" }}>
                    <div className="p-inputgroup mb-4">
                        <input 
                            value={newClient} 
                            onChange={(e) => setNewClient(e.target.value)} 
                            placeholder="Client/Project Name" 
                            className="p-inputtext p-2 w-full"
                        />
                        <Button label="Add" onClick={addClient} />
                    </div>
                    <ul className="list-none p-0 m-0">
                        {clients.map((c, i) => (
                            <li key={i} className="flex align-items-center justify-content-between p-3 border-bottom-1 surface-border">
                                <span>{c}</span>
                                <span className="p-tag p-tag-warning">In Progress</span>
                            </li>
                        ))}
                    </ul>
                </Dialog>
            </div>
        </>
    );
};

export default PhotoDashboard;
