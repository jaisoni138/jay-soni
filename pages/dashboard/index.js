import Seo from "../../components/seo";
import { useEffect, useState, useRef } from "react";
import { Card } from "primereact/card";
import { Chart } from "primereact/chart";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { FaBell, FaMoon, FaSun } from "react-icons/fa";

const Dashboard = () => {
  const user = useSelector((state) => state.initialState.user);
  const [meditationModal, setMeditationModal] = useState(false);
  const [reminderModal, setReminderModal] = useState(false);
  const [streak, setStreak] = useState(0);
  const [reminders, setReminders] = useState([]);
  const [newReminder, setNewReminder] = useState("");
  const [darkMode, setDarkMode] = useState(true);
  const [timer, setTimer] = useState(0); // in seconds
  const timerRef = useRef(null);
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

  // Countdown Timer
  const startTimer = (minutes) => {
    clearInterval(timerRef.current);
    setTimer(minutes * 60);
    timerRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          toast.current.show({ severity: "info", summary: "Meditation Complete", detail: "Well done!" });
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

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
            <h1>Welcome, {user.name} </h1>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ position: "relative", cursor: "pointer" }} onClick={() => setReminderModal(true)}>
                <FaBell size={24} />
                {reminders.length > 0 && <span style={{ position: "absolute", top: -8, right: -8, background: "red", color: "#fff", borderRadius: "50%", padding: "2px 6px", fontSize: "0.75rem" }}>{reminders.length}</span>}
              </div>
              <div style={{ cursor: "pointer" }} onClick={toggleDarkMode}>
                {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
              </div>
            </div>
          </div>

          {/* Meditation Card */}
          <div className="p-grid" style={{ gap: "1rem" }}>
            <div className="p-col-12 p-md-4">
              <Card
                title="Meditation"
                style={{ backgroundColor: darkMode ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.6)", color: darkMode ? "#fff" : "#000", cursor: "pointer" }}
                onClick={() => setMeditationModal(true)}
              >
                <p>Today's session: 25 min</p>
                <p>Streak: {streak} days</p>
              </Card>
            </div>
          </div>

          {/* Meditation Modal with Timer and Playlist */}
          <Dialog header="Meditation Dashboard" visible={meditationModal} onHide={() => setMeditationModal(false)} modal style={{ width: "60vw" }}>
            <h3>Meditation Chart</h3>
            <Chart type="bar" data={meditationData} options={meditationOptions} />

            <div style={{ margin: "1rem 0" }}>
              <h3>Start Meditation Timer</h3>
              <Button label="5 min" className="p-mr-2" onClick={() => startTimer(5)} />
              <Button label="10 min" className="p-mr-2" onClick={() => startTimer(10)} />
              <Button label="15 min" onClick={() => startTimer(15)} />
              {timer > 0 && <p style={{ marginTop: "0.5rem" }}>Time Remaining: {formatTime(timer)}</p>}
            </div>

            <Button label="Complete Today's Session" onClick={incrementStreak} className="p-mt-2 p-mb-4" />

            <h3>Playlist</h3>
            {playlist.map((track, idx) => (
              <div key={idx} style={{ marginBottom: "1rem" }}>
                <p>{track.title}</p>
                <audio ref={(el) => (audioRefs.current[idx] = el)} controls style={{ width: "100%" }}>
                  <source src={track.src} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
                <Button label="Play" icon="pi pi-play" className="p-button-text p-ml-1" onClick={() => playAudio(idx)} />
              </div>
            ))}
          </Dialog>

          {/* Reminder Modal */}
          <Dialog header="Reminders" visible={reminderModal} onHide={() => setReminderModal(false)} modal style={{ width: "40vw" }}>
            <div style={{ marginBottom: "1rem" }}>
              <input value={newReminder} onChange={(e) => setNewReminder(e.target.value)} placeholder="Add a new reminder..." style={{ width: "70%", padding: "0.5rem" }} />
              <Button label="Add" icon="pi pi-plus" onClick={addReminder} className="p-ml-2" />
            </div>
            {reminders.length === 0 ? <p>No reminders yet.</p> : <ul>{reminders.map((r, i) => <li key={i}>{r}</li>)}</ul>}
          </Dialog>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
