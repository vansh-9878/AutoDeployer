import React from "react";
import {
  Activity,
  ArrowUp,
  ArrowDown,
  Clock,
  Server,
  Cpu,
  MemoryStick as Memory,
} from "lucide-react";
import CPUUsageGraph from "../Graph";

const MetricCard = ({ title, value, change, icon }) => (
  <div className="metric-card">
    <div className="metric-card-header">
      <div>
        <p className="metric-title">{title}</p>
        <h3 className="metric-value">{value}</h3>
      </div>
      <div className="metric-icon">{icon}</div>
    </div>
    <div className={`metric-change ${change >= 0 ? "positive" : "negative"}`}>
      {change >= 0 ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
      <span>{Math.abs(change)}% from last hour</span>
    </div>
  </div>
);

const LogsTable = ({ logs }) => (
  <div className="table-container">
    <div className="table-overlay">
    <table className="table">
      <thead className="table-thead">
        <tr>
          <th>Timestamp</th>
          <th>Level</th>
          <th>Message</th>
        </tr>
      </thead>
      <tbody>
        {logs.map((log, index) => (
          <tr key={index}>
            <td>{log.timestamp}</td>
            <td>
              <span
                className={`badge ${
                  log.level === "ERROR"
                    ? "badge-error"
                    : log.level === "WARN"
                    ? "badge-warning"
                    : "badge-success"
                }`}
              >
                {log.level}
              </span>
            </td>
            <td>{log.message}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  </div>
);

const Dashboard = ({ activeSection }) => {
  const mockLogs = [
    {
      timestamp: "2024-03-15 10:30:45",
      level: "INFO",
      message: "Application started successfully",
    },
    {
      timestamp: "2024-03-15 10:31:15",
      level: "WARN",
      message: "High memory usage detected",
    },
    {
      timestamp: "2024-03-15 10:32:00",
      level: "ERROR",
      message: "Failed to connect to database",
    },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "health":
        return (
          <>
            <div className="grid grid-cols-4 mb-8">
              <MetricCard
                title="CPU Usage"
                value="45%"
                change={5}
                icon={<Cpu size={24} />}
              />
              <MetricCard
                title="Memory Usage"
                value="2.4GB"
                change={-2}
                icon={<Memory size={24} />}
              />
              <MetricCard
                title="Response Time"
                value="234ms"
                change={-8}
                icon={<Clock size={24} />}
              />
              <MetricCard
                title="Active Ports"
                value="3"
                change={0}
                icon={<Server size={24} />}
              />
            </div>
            <div className="grid grid-cols-2">
              <div className="metric-card">
                <h2 className="metric-title">Resource Consumption</h2>
                <div
                  style={{
                    height: "256px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--gray-500)",
                  }}
                >
                  <CPUUsageGraph />
                </div>
              </div>
              <div className="metric-card">
                <h2 className="metric-title">System Health Overview</h2>
                <div className="space-y-4">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span>System Status</span>
                    <span className="badge badge-success">Healthy</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span>Last Health Check</span>
                    <span>2 minutes ago</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span>Uptime</span>
                    <span>99.9%</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        );

      case "response":
        return (
          <div className="space-y-6">
            <div className="metric-card">
              <h2 className="metric-title">Response Time Analysis</h2>
              <div
                style={{
                  height: "256px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--gray-500)",
                }}
              >
                <CPUUsageGraph />
              </div>
            </div>
            <div className="metric-card">
              <h2 className="metric-title">Endpoint Performance</h2>
              <div className="space-y-4">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span className="text-gray-500">/api/users</span>
                  <span style={{ fontWeight: "500" }}>124ms</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span className="text-gray-500">/api/products</span>
                  <span style={{ fontWeight: "500" }}>156ms</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span className="text-gray-500">/api/orders</span>
                  <span style={{ fontWeight: "500" }}>189ms</span>
                </div>
              </div>
            </div>
          </div>
        );

      case "resources":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-4">
              <MetricCard
                title="CPU Usage"
                value="45%"
                change={5}
                icon={<Cpu size={24} />}
              />
              <MetricCard
                title="Memory Usage"
                value="2.4GB"
                change={-2}
                icon={<Memory size={24} />}
              />
              <MetricCard
                title="Network I/O"
                value="1.2MB/s"
                change={3}
                icon={<Activity size={24} />}
              />
            </div>
            <div className="metric-card">
              <h2 className="metric-title">Resource Allocation</h2>
              <div className="space-y-4">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span>Total CPU Cores</span>
                  <span style={{ fontWeight: "500" }}>4 cores</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span>Total Memory</span>
                  <span style={{ fontWeight: "500" }}>8GB</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span>Storage Usage</span>
                  <span style={{ fontWeight: "500" }}>45GB / 100GB</span>
                </div>
              </div>
            </div>
          </div>
        );

      case "ports":
        return (
          <div className="space-y-6">
            <div className="metric-card">
              <h2 className="metric-title">Active Ports</h2>
              <div className="space-y-4">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <span style={{ fontWeight: "500" }}>Port 80</span>
                    <p
                      style={{ fontSize: "0.875rem", color: "var(--gray-500)" }}
                    >
                      HTTP Traffic
                    </p>
                  </div>
                  <span className="badge badge-success">Active</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <span style={{ fontWeight: "500" }}>Port 443</span>
                    <p
                      style={{ fontSize: "0.875rem", color: "var(--gray-500)" }}
                    >
                      HTTPS Traffic
                    </p>
                  </div>
                  <span className="badge badge-success">Active</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <span style={{ fontWeight: "500" }}>Port 5432</span>
                    <p
                      style={{ fontSize: "0.875rem", color: "var(--gray-500)" }}
                    >
                      Database Connection
                    </p>
                  </div>
                  <span className="badge badge-success">Active</span>
                </div>
              </div>
            </div>
          </div>
        );

      case "details":
        return (
          <div className="space-y-6">
            <div className="metric-card">
              <h2 className="metric-title">Deployment Information</h2>
              <div className="space-y-4">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>Deployment ID</span>
                  <span style={{ fontWeight: "500" }}>
                    deploy-2024-03-15-001
                  </span>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>Environment</span>
                  <span style={{ fontWeight: "500" }}>Production</span>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>Region</span>
                  <span style={{ fontWeight: "500" }}>us-east-1</span>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>Instance Type</span>
                  <span style={{ fontWeight: "500" }}>t3.medium</span>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>Last Modified</span>
                  <span style={{ fontWeight: "500" }}>
                    March 15, 2024 10:30 AM
                  </span>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>Version</span>
                  <span style={{ fontWeight: "500" }}>1.2.0</span>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>Git Branch</span>
                  <span style={{ fontWeight: "500" }}>main</span>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>Commit Hash</span>
                  <span style={{ fontWeight: "500" }}>8f4d76b</span>
                </div>
              </div>
            </div>
            <div className="metric-card">
              <h2 className="metric-title">Build Information</h2>
              <div className="space-y-4">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>Build Time</span>
                  <span style={{ fontWeight: "500" }}>2m 45s</span>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>Build Status</span>
                  <span className="badge badge-success">Success</span>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>Tests Passed</span>
                  <span style={{ fontWeight: "500" }}>142/142</span>
                </div>
              </div>
            </div>
          </div>
        );

      case "logs":
        return (
          <div className="space-y-6">
            <div className="metric-card">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <h2 className="metric-title">System Logs</h2>
                <select className="select">
                  <option>All Levels</option>
                  <option>Error</option>
                  <option>Warning</option>
                  <option>Info</option>
                </select>
              </div>
              <LogsTable logs={mockLogs} />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return <div style={{ padding: "1.5rem" }}>{renderContent()}</div>;
};

export default Dashboard;
