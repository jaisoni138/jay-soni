import Seo from "../../components/seo";
import { useSelector } from "react-redux";
import { Card } from "primereact/card";
import { Chart } from "primereact/chart";
import { Carousel } from "primereact/carousel";

const Dashboard = () => {
  const user = useSelector((state) => state.initialState.user);

  // Sample meditation progress data
  const meditationData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Meditation (min)",
        data: [15, 20, 25, 30, 20, 25, 30],
        backgroundColor: "rgba(255, 206, 86, 0.6)",
      },
    ],
  };

  const meditationOptions = {
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  // Spiritual quotes
  const quotes = [
    "Peace comes from within. Do not seek it without.",
    "The mind is everything. What you think you become.",
    "Meditation is the soul’s perspective glass.",
    "Be where you are; otherwise you will miss your life.",
  ];

  const quoteTemplate = (quote) => (
    <Card
      style={{
        backgroundColor: "rgba(0,0,0,0.5)",
        color: "#fff",
        textAlign: "center",
        minHeight: "120px",
      }}
    >
      <p style={{ fontStyle: "italic" }}>{quote}</p>
    </Card>
  );

  return (
    <>
      <Seo pageTitle="Spiritual Dashboard" />

      <div
        style={{
          backgroundImage: "url('/spiritual-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          padding: "2rem",
          color: "#fff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Animated Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.3)",
            animation: "pulse 6s infinite alternate",
            zIndex: 0,
          }}
        ></div>

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
          <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
            Welcome, {user?.name || "Seeker"}
          </h1>

          <div className="p-grid" style={{ gap: "1rem", marginBottom: "2rem" }}>
            <div className="p-col-12 p-md-4">
              <Card
                title="Meditation"
                style={{ backgroundColor: "rgba(0,0,0,0.5)", color: "#fff" }}
              >
                <p>Today's session: 25 minutes</p>
                <p>Streak: 5 days</p>
              </Card>
            </div>
            <div className="p-col-12 p-md-4">
              <Card
                title="Daily Affirmation"
                style={{ backgroundColor: "rgba(0,0,0,0.5)", color: "#fff" }}
              >
                <p>"I am calm, centered, and peaceful."</p>
              </Card>
            </div>
            <div className="p-col-12 p-md-4">
              <Card
                title="Gratitude"
                style={{ backgroundColor: "rgba(0,0,0,0.5)", color: "#fff" }}
              >
                <ul>
                  <li>Health</li>
                  <li>Family</li>
                  <li>Peace of Mind</li>
                </ul>
              </Card>
            </div>
          </div>

          <div className="p-grid" style={{ gap: "2rem", marginBottom: "2rem" }}>
            <div className="p-col-12 p-md-6">
              <Card
                title="Weekly Meditation Progress"
                style={{ backgroundColor: "rgba(0,0,0,0.5)", color: "#fff" }}
              >
                <Chart type="bar" data={meditationData} options={meditationOptions} />
              </Card>
            </div>
            <div className="p-col-12 p-md-6">
              <Card
                title="Spiritual Quotes"
                style={{ backgroundColor: "rgba(0,0,0,0.5)", color: "#fff" }}
              >
                <Carousel
                  value={quotes}
                  numVisible={1}
                  numScroll={1}
                  circular
                  autoplayInterval={5000}
                  itemTemplate={quoteTemplate}
                />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
