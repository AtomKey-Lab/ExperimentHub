import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./Profile.css";
import Footer from "../footer/footer";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [logEntries, setLogEntries] = useState([]);
  const [activeLog, setActiveLog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");

    if (userEmail) {
      setUser({
        name: localStorage.getItem("userName") || "Unknown User",
        email: userEmail,
        school: localStorage.getItem("userSchool") || "Not Provided",
        role: localStorage.getItem("userRole") || "student",
      });

      const savedLogs = JSON.parse(localStorage.getItem("logEntries")) || [];
      setLogEntries(savedLogs);
      setIsLoading(false);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleBack = () => {
    navigate("/");
  };

  const viewLogDetails = (index) => {
    setActiveLog(index === activeLog ? null : index);
  };

  const progressData = [
    { name: "Completed", value: logEntries.length },
    { name: "Remaining", value: Math.max(10 - logEntries.length, 0) },
  ];

  const COLORS = ["#00C49F", "#FF8042"];

  return (
    <div>
      <div className="dashboard">
        {isLoading ? (
          <div className="dashboard__loading">
            <div className="dashboard__loading-spinner"></div>
            <p>Loading your profile...</p>
          </div>
        ) : (
          <>
            <header className="dashboard__header">
              <div className="dashboard__user-info">
                <div className="dashboard__avatar">
                  {user?.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h1 className="dashboard__name">{user?.name}</h1>
                  <p className="dashboard__role">
                    {user?.role === "student" ? "Student" : "Teacher"} • {user?.school}
                  </p>
                </div>
              </div>
              <div className="dashboard__actions">
                <button onClick={handleBack} className="dashboard__back-btn">
                  Back
                </button>
                <button onClick={handleLogout} className="dashboard__logout-btn">
                  Log Out
                </button>
              </div>
            </header>

            <div className="dashboard__content">
              <div className="dashboard__sidebar">
                <div className="dashboard__profile-card">
                  <h3>Profile Details</h3>
                  <div className="dashboard__info-item">
                    <span className="dashboard__info-label">Email</span>
                    <span className="dashboard__info-value">{user?.email}</span>
                  </div>
                  <div className="dashboard__info-item">
                    <span className="dashboard__info-label">School</span>
                    <span className="dashboard__info-value">{user?.school}</span>
                  </div>
                  <div className="dashboard__info-item">
                    <span className="dashboard__info-label">Role</span>
                    <span className="dashboard__info-value">
                      {user?.role === "student" ? "Student" : "Teacher"}
                    </span>
                  </div>
                </div>

                <div className="dashboard__stats">
                  <div className="dashboard__stat-item">
                    <span className="dashboard__stat-number">{logEntries.length}</span>
                    <span className="dashboard__stat-label">Log Entries</span>
                  </div>
                </div>

                <div className="dashboard__chart">
                  <h3>Progress Chart</h3>
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={progressData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={60}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) =>
                          `${name} ${(percent * 100).toFixed(0)}%`
                        }
                      >
                        {progressData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend verticalAlign="bottom" height={36} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="dashboard__main">
                <h2 className="dashboard__section-title">Your Lab Journal</h2>

                {logEntries.length === 0 ? (
                  <div className="dashboard__empty-state">
                    <div className="dashboard__empty-icon">📓</div>
                    <h3>No lab entries yet</h3>
                    <p>Your saved lab logs will appear here</p>
                  </div>
                ) : (
                  <div className="dashboard__logs">
                    {logEntries.map((entry, index) => (
                      <div
                        key={index}
                        className={`dashboard__log-card ${
                          activeLog === index ? "active" : ""
                        }`}
                      >
                        <div
                          className="dashboard__log-header"
                          onClick={() => viewLogDetails(index)}
                        >
                          <h3>{entry.title}</h3>
                          <div className="dashboard__log-meta">
                            <span className="dashboard__log-date">{entry.date}</span>
                            <span className="dashboard__expand-icon">
                              {activeLog === index ? "−" : "+"}
                            </span>
                          </div>
                        </div>

                        {activeLog === index && (
                          <div className="dashboard__log-details">
                            <div className="dashboard__log-section">
                              <h4>Objective</h4>
                              <p>{entry.objective}</p>
                            </div>

                            <div className="dashboard__log-section">
                              <h4>Materials</h4>
                              <p>{entry.materials}</p>
                            </div>

                            <div className="dashboard__log-section">
                              <h4>Setup</h4>
                              <p>{entry.setup}</p>
                            </div>

                            <div className="dashboard__log-section">
                              <h4>Steps</h4>
                              <p>{entry.steps}</p>
                            </div>

                            <div className="dashboard__log-columns">
                              <div className="dashboard__log-column">
                                <h4>Observations</h4>
                                <p>{entry.observations}</p>
                              </div>

                              <div className="dashboard__log-column">
                                <h4>Conclusion</h4>
                                <p>{entry.conclusion}</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
