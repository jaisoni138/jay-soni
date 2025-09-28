import Seo from "../../components/seo";
import { useEffect, useState, useRef } from "react";
import { Card } from "primereact/card";
import { Chart } from "primereact/chart";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Badge } from "primereact/badge";
import { Toast } from "primereact/toast";
import { FaBell, FaMoon, FaSun } from "react-icons/fa";

const Dashboard = () => {
  const [meditationModal, setMeditationModal] = useState(false);
  const [reminderModal, setReminderModal] = useState(false);
  const [streak, setStreak] = useState(0);
  const [reminders, setReminders] = useState([]);
  const [newReminder, setNewReminder] = useState("");
  const [darkMode, setDarkMode] = useState(true);
  const audioRefs = useRef([]);
  const toast = useRef(null);

  useEffect(() => {
    setStreak(parseInt(localStorage.getItem("meditationStreak") || "0"));
    setReminders(JSON.parse(localStorage.getItem("reminders") || "[]"));
  }, []);

  const incrementStreak = () => {
    const newStreak = streak + 1;
    setStreak(newStreak);
    localStorage.setItem("meditationStreak", newStreak.toString());
  };

  const addReminder = () => {
    if (!newReminder) return;
    const updated = [...reminders, newReminder];
    setReminders(updated);
    localStorage.setItem("reminders", JSON.stringify(updated));
    toast.current.show({ severity: "success", summary: "Reminder Added", detail: newReminder, life: 3000 });
    setNewReminder("");
  };

  const playAudio = (index) => {
    audioRefs.current.forEach((audio, i) => {
      if (i === index) audio.play();
      else audio.pause();
    });
  };

  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Meditation chart
  const meditationData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [{ label: "Meditation (min)", data: [15, 20, 25, 30, 20, 25, 30], backgroundColor: "rgba(255, 206, 86, 0.6)" }],
  };
  const meditationOptions = { plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } };

  // Playlist
  const playlist = [
    { title: "Morning Meditation", src: "/audio/morning.mp3" },
    { title: "Chakra Healing", src: "/audio/chakra.mp3" },
    { title: "Relaxing Om", src: "/audio/om.mp3" },
  ];

  return (
    <>
      <Seo pageTitle="Meditation Dashboard" />
      <Toast ref={toast} />

      <div
        style={{
          backgroundImage: "url('/spiritual-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          padding: "2rem",
          color: darkMode ? "#fff" : "#000",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: darkMode ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.2)", animation: "pulse 6s infinite alternate", zIndex: 0 }}></div>
        <style>
          {`
          @keyframes pulse {
            0% { background: rgba(0,0,0,0.3); }
            50% { background: rgba(0,0,0,0.15); }
            100% { background: rgba(0,0,0,0.3); }
          }
          `}
        </style>

        <div style={{ position: "relative", zIndex: 1 }}>
          {/* Header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
            <h1>Welcome, Seeker</h1>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ position: "relative", cursor: "pointer" }} onClick={() => setReminderModal(true)}>
                <FaBell size={24} />
                {reminders.length > 0 && <Badge value={reminders.length} severity="danger" style={{ position: "absolute", top: -8, right: -8 }} />}
              </div>
              <div style={{ cursor: "pointer" }} onClick={toggleDarkMode}>
                {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
              </div>
            </div>
          </div>

          {/* Meditation Card */}
          <div className="p-grid" style={{ gap: "1rem", marginBottom: "2rem" }}>
            <div className="p-col-12 p-md-4">
              <Card title="Meditation" style={{ backgroundColor: darkMode ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.6)", color: darkMode ? "#fff" : "#000", cursor: "pointer" }} onClick={() => setMeditationModal(true)}>
                <p>Today's session: 25 min</p>
                <p>Streak: {streak} days</p>
              </Card>
            </div>
          </div>

          {/* Meditation Modal */}
          <Dialog header="Meditation Details" visible={meditationModal} onHide={() => setMeditationModal(false)} modal style={{ width: "50vw" }}>
            <Chart type="bar" data={meditationData} options={meditationOptions} />
            <Button label="Complete Today's Session" onClick={incrementStreak} className="p-mt-2" />
          </Dialog>

          {/* Reminder Modal */}
          <Dialog header="Reminders" visible={reminderModal} onHide={() => setReminderModal(false)} modal style={{ width: "40vw" }}>
            <div className="p-field" style={{ marginBottom: "1rem" }}>
              <InputText value={newReminder} onChange={(e) => setNewReminder(e.target.value)} placeholder="Add a new reminder..." style={{ width: "70%" }} />
              <Button label="Add" icon="pi pi-plus" onClick={addReminder} className="p-ml-2" />
            </div>
            {reminders.length === 0 ? <p>No reminders yet.</p> : <ul>{reminders.map((r, i) => <li key={i}>{r}</li>)}</ul>}
          </Dialog>

          {/* Playlist */}
          <div className="p-grid" style={{ gap: "1rem", marginTop: "2rem" }}>
            {playlist.map((track, idx) => (
              <div key={idx} className="p-col-12 p-md-4">
                <Card style={{ backgroundColor: darkMode ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.6)", color: darkMode ? "#fff" : "#000" }}>
                  <p>{track.title}</p>
                  <audio ref={(el) => (audioRefs.current[idx] = el)} controls style={{ width: "100%" }}>
                    <source src={track.src} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                  <Button label="Play" icon="pi pi-play" className="p-button-text p-ml-1" onClick={() => playAudio(idx)} />
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
