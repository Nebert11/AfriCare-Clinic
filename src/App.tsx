import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';
import Patients from './pages/Patients';
import Appointments from './pages/Appointments';
import Reminders from './pages/Reminders';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import Login from './pages/Login';
import MainLayout from './components/layout/MainLayout';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPath, setCurrentPath] = useState('/dashboard');
  
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleNavigate = (path: string) => {
    setCurrentPath(path);
  };
  
  const renderContent = () => {
    if (!isLoggedIn) {
      return <Login onLogin={handleLogin} />;
    }

    let pageTitle = 'Dashboard';
    let content;

    switch (currentPath) {
      case '/dashboard':
        pageTitle = 'Dashboard';
        content = <Dashboard />;
        break;
      case '/patients':
        pageTitle = 'Patients';
        content = <Patients />;
        break;
      case '/appointments':
        pageTitle = 'Appointments';
        content = <Appointments />;
        break;
      case '/reminders':
        pageTitle = 'Reminders';
        content = <Reminders />;
        break;
      case '/analytics':
        pageTitle = 'Analytics';
        content = <Analytics />;
        break;
      case '/settings':
        pageTitle = 'Settings';
        content = <Settings />;
        break;
      default:
        content = <Dashboard />;
    }

    return (
      <MainLayout title={pageTitle} currentPath={currentPath} onNavigate={handleNavigate}>
        {content}
      </MainLayout>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {renderContent()}
    </div>
  );
}

export default App;