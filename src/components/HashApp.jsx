import React from 'react';
import {
  HashRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';


function Dashboard() {
  return (
    <div className="dashboard-page">

      <div className="welcome-box">
        <div className="welcome-icon">
          🚀
        </div>

        <div>
          <h3>
            System Dashboard
          </h3>

          <p>
            All systems are running normally.
          </p>
        </div>

        <span className="online-badge">
          ● ONLINE
        </span>
      </div>


      <div className="dashboard-grid">

        <div className="system-card blue-card">
          <div className="card-icon">
            💻
          </div>

          <div className="card-title">
            System Status
          </div>

          <div className="card-value">
            Active
          </div>

          <div className="card-small">
            All services operational
          </div>
        </div>


        <div className="system-card green-card">
          <div className="card-icon">
            ⚡
          </div>

          <div className="card-title">
            Performance
          </div>

          <div className="card-value">
            98%
          </div>

          <div className="card-small">
            Excellent performance
          </div>
        </div>


        <div className="system-card purple-card">
          <div className="card-icon">
            🔒
          </div>

          <div className="card-title">
            Security
          </div>

          <div className="card-value">
            Secure
          </div>

          <div className="card-small">
            No security issues
          </div>
        </div>

      </div>


      <div className="activity-box">

        <h3>
          📋 Recent Activity
        </h3>

        <div className="activity-item">
          <span>🟢</span>
          System started successfully
          <small>Just now</small>
        </div>

        <div className="activity-item">
          <span>🔵</span>
          Dashboard connection verified
          <small>2 min ago</small>
        </div>

        <div className="activity-item">
          <span>🟣</span>
          Security check completed
          <small>5 min ago</small>
        </div>

      </div>

    </div>
  );
}


function Settings() {
  return (
    <div className="settings-page">

      <div className="settings-header">
        <div className="settings-icon">
          ⚙️
        </div>

        <div>
          <h3>
            System Settings
          </h3>

          <p>
            Manage your application configuration.
          </p>
        </div>
      </div>


      <div className="setting-row">

        <div>
          <strong>
            Notifications
          </strong>

          <p>
            Receive system notifications
          </p>
        </div>

        <div className="toggle active">
          ON
        </div>

      </div>


      <div className="setting-row">

        <div>
          <strong>
            Auto Sync
          </strong>

          <p>
            Automatically synchronize data
          </p>
        </div>

        <div className="toggle active">
          ON
        </div>

      </div>


      <div className="setting-row">

        <div>
          <strong>
            Maintenance Mode
          </strong>

          <p>
            Temporarily disable system access
          </p>
        </div>

        <div className="toggle">
          OFF
        </div>

      </div>


      <div className="configuration-box">

        <div className="configuration-icon">
          🛠️
        </div>

        <div>
          <h4>
            Configuration Status
          </h4>

          <p>
            Your system configuration is up to date.
          </p>
        </div>

      </div>

    </div>
  );
}


function Navigation() {
  const location = useLocation();

  return (
    <div className="navigation">

      <Link
        to="/"
        className={
          location.pathname === '/'
            ? 'nav-link active'
            : 'nav-link'
        }
      >
        🏠 Dashboard
      </Link>

      <Link
        to="/settings"
        className={
          location.pathname === '/settings'
            ? 'nav-link active'
            : 'nav-link'
        }
      >
        ⚙️ Settings
      </Link>

    </div>
  );
}


function HashApp() {
  return (
    <HashRouter>

      <div className="hash-app">

        <style>{`

          * {
            box-sizing: border-box;
          }

          .hash-app {
            width: 100%;
            max-width: 650px;
            margin: 30px auto;
            padding: 25px;

            background: white;

            border: 1px solid #e2e8f0;
            border-radius: 22px;

            box-shadow:
              0 20px 50px
              rgba(15, 23, 42, 0.10);

            font-family:
              Arial,
              Helvetica,
              sans-serif;
          }

          /* =====================
             HEADER
          ===================== */

          .app-header {
            display: flex;
            align-items: center;
            gap: 13px;
            margin-bottom: 20px;
          }

          .app-logo {
            width: 50px;
            height: 50px;

            display: flex;
            align-items: center;
            justify-content: center;

            color: white;

            background:
              linear-gradient(
                135deg,
                #2563eb,
                #7c3aed
              );

            border-radius: 14px;

            font-size: 23px;

            box-shadow:
              0 8px 20px
              rgba(37, 99, 235, 0.25);
          }

          .app-title {
            margin: 0;

            color: #1e293b;

            font-size: 20px;
            font-weight: 900;
          }

          .app-subtitle {
            margin: 4px 0 0;

            color: #94a3b8;

            font-size: 9px;
          }

          /* =====================
             NAVIGATION
          ===================== */

          .navigation {
            display: flex;
            gap: 8px;

            padding: 5px;

            margin-bottom: 20px;

            background: #f8fafc;

            border: 1px solid #e2e8f0;

            border-radius: 12px;
          }

          .nav-link {
            flex: 1;

            padding: 10px;

            color: #64748b;

            border-radius: 8px;

            font-size: 10px;

            font-weight: 800;

            text-align: center;

            text-decoration: none;

            transition: 0.25s ease;
          }

          .nav-link:hover {
            color: #2563eb;
            background: #eff6ff;
          }

          .nav-link.active {
            color: white;

            background:
              linear-gradient(
                135deg,
                #2563eb,
                #4f46e5
              );

            box-shadow:
              0 5px 12px
              rgba(37, 99, 235, 0.20);
          }

          /* =====================
             DASHBOARD
          ===================== */

          .welcome-box {
            display: flex;
            align-items: center;
            gap: 12px;

            padding: 16px;

            margin-bottom: 15px;

            background:
              linear-gradient(
                135deg,
                #eff6ff,
                #eef2ff
              );

            border: 1px solid #c7d2fe;

            border-radius: 14px;
          }

          .welcome-icon {
            width: 40px;
            height: 40px;

            display: flex;
            align-items: center;
            justify-content: center;

            background: white;

            border-radius: 10px;

            font-size: 20px;
          }

          .welcome-box h3 {
            margin: 0;

            color: #1e3a8a;

            font-size: 12px;
            font-weight: 900;
          }

          .welcome-box p {
            margin: 4px 0 0;

            color: #64748b;

            font-size: 8px;
          }

          .online-badge {
            margin-left: auto;

            padding: 6px 8px;

            color: #15803d;

            background: #dcfce7;

            border-radius: 20px;

            font-size: 7px;

            font-weight: 900;
          }

          /* =====================
             DASHBOARD CARDS
          ===================== */

          .dashboard-grid {
            display: grid;

            grid-template-columns:
              repeat(3, 1fr);

            gap: 10px;

            margin-bottom: 15px;
          }

          .system-card {
            padding: 14px;

            border-radius: 12px;

            border: 1px solid;
          }

          .blue-card {
            color: #1d4ed8;
            background: #eff6ff;
            border-color: #bfdbfe;
          }

          .green-card {
            color: #15803d;
            background: #f0fdf4;
            border-color: #bbf7d0;
          }

          .purple-card {
            color: #7e22ce;
            background: #faf5ff;
            border-color: #e9d5ff;
          }

          .card-icon {
            font-size: 18px;
            margin-bottom: 8px;
          }

          .card-title {
            font-size: 8px;
            font-weight: 800;
          }

          .card-value {
            margin-top: 4px;

            font-size: 15px;

            font-weight: 900;
          }

          .card-small {
            margin-top: 4px;

            color: #64748b;

            font-size: 7px;
          }

          /* =====================
             ACTIVITY
          ===================== */

          .activity-box {
            padding: 15px;

            border: 1px solid #e2e8f0;

            border-radius: 13px;
          }

          .activity-box h3 {
            margin: 0 0 12px;

            color: #334155;

            font-size: 11px;

            font-weight: 900;
          }

          .activity-item {
            display: flex;
            align-items: center;
            gap: 7px;

            padding: 9px 0;

            color: #475569;

            border-bottom:
              1px solid #f1f5f9;

            font-size: 8px;
          }

          .activity-item:last-child {
            border-bottom: none;
          }

          .activity-item small {
            margin-left: auto;

            color: #94a3b8;

            font-size: 7px;
          }

          /* =====================
             SETTINGS
          ===================== */

          .settings-header {
            display: flex;
            align-items: center;
            gap: 12px;

            margin-bottom: 15px;

            padding: 15px;

            background: #fffbeb;

            border: 1px solid #fde68a;

            border-radius: 13px;
          }

          .settings-icon {
            width: 40px;
            height: 40px;

            display: flex;
            align-items: center;
            justify-content: center;

            background: white;

            border-radius: 10px;

            font-size: 19px;
          }

          .settings-header h3 {
            margin: 0;

            color: #92400e;

            font-size: 12px;

            font-weight: 900;
          }

          .settings-header p {
            margin: 4px 0 0;

            color: #a16207;

            font-size: 8px;
          }

          .setting-row {
            display: flex;
            align-items: center;
            justify-content: space-between;

            padding: 14px 5px;

            border-bottom:
              1px solid #f1f5f9;
          }

          .setting-row strong {
            color: #334155;

            font-size: 9px;
          }

          .setting-row p {
            margin: 4px 0 0;

            color: #94a3b8;

            font-size: 7px;
          }

          .toggle {
            padding: 6px 9px;

            color: #64748b;

            background: #f1f5f9;

            border-radius: 20px;

            font-size: 7px;

            font-weight: 900;
          }

          .toggle.active {
            color: #15803d;

            background: #dcfce7;
          }

          .configuration-box {
            display: flex;
            align-items: center;
            gap: 10px;

            margin-top: 16px;
            padding: 13px;

            background: #f0fdf4;

            border: 1px solid #bbf7d0;

            border-radius: 11px;
          }

          .configuration-icon {
            font-size: 20px;
          }

          .configuration-box h4 {
            margin: 0;

            color: #166534;

            font-size: 9px;
          }

          .configuration-box p {
            margin: 4px 0 0;

            color: #64748b;

            font-size: 7px;
          }

          /* =====================
             RESPONSIVE
          ===================== */

          @media (max-width: 600px) {

            .hash-app {
              margin: 15px 10px;
              padding: 18px;
            }

            .dashboard-grid {
              grid-template-columns: 1fr;
            }

            .welcome-box {
              align-items: flex-start;
              flex-wrap: wrap;
            }

            .online-badge {
              margin-left: 52px;
            }

          }

        `}</style>


        {/* HEADER */}

        <div className="app-header">

          <div className="app-logo">
            ⚙️
          </div>

          <div>

            <h2 className="app-title">
              Utility Panel
            </h2>

            <p className="app-subtitle">
              HashRouter Based System Control
            </p>

          </div>

        </div>


        {/* NAVIGATION */}

        <Navigation />


        {/* ROUTES */}

        <Routes>

          <Route
            path="/"
            element={<Dashboard />}
          />

          <Route
            path="/settings"
            element={<Settings />}
          />

        </Routes>

      </div>

    </HashRouter>
  );
}

export default HashApp;