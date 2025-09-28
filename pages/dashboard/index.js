import Seo from "../../components/seo";
import { useSelector } from "react-redux";
import { Card } from "primereact/card";

const Dashboard = () => {
  const user = useSelector((state) => state.initialState.user);

  return (
    <>
      <Seo pageTitle="Spiritual Dashboard" />

      <div
        style={{
          backgroundImage: "url('/spiritual-bg.jpg')", // place your image in /public
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          padding: "2rem",
          color: "#fff", // text color for visibility
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
          Welcome, {user?.name || "Seeker"}
        </h1>

        <div className="p-grid" style={{ gap: "1rem" }}>
          <div className="p-col-12 p-md-4">
            <Card title="Meditation" className="p-mb-3" style={{ backgroundColor: "rgba(0,0,0,0.5)", color: "#fff" }}>
              <p>Today's session: 20 minutes</p>
              <p>Streak: 5 days</p>
            </Card>
          </div>
          <div className="p-col-12 p-md-4">
            <Card title="Daily Affirmation" className="p-mb-3" style={{ backgroundColor: "rgba(0,0,0,0.5)", color: "#fff" }}>
              <p>"I am calm, centered, and peaceful."</p>
            </Card>
          </div>
          <div className="p-col-12 p-md-4">
            <Card title="Gratitude" className="p-mb-3" style={{ backgroundColor: "rgba(0,0,0,0.5)", color: "#fff" }}>
              <p>Today I am grateful for:</p>
              <ul>
                <li>Health</li>
                <li>Family</li>
                <li>Peace of Mind</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
