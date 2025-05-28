import React from 'react';
import { HomeIcon, UsersIcon, CalendarIcon, BellIcon, SettingsIcon, BarChart3Icon, LogOutIcon } from 'lucide-react';

interface SidebarLink {
  name: string;
  icon: React.ReactNode;
  href: string;
}

interface SidebarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPath, onNavigate }) => {
  const links: SidebarLink[] = [
    { name: 'Dashboard', icon: <HomeIcon size={20} />, href: '/dashboard' },
    { name: 'Patients', icon: <UsersIcon size={20} />, href: '/patients' },
    { name: 'Appointments', icon: <CalendarIcon size={20} />, href: '/appointments' },
    { name: 'Reminders', icon: <BellIcon size={20} />, href: '/reminders' },
    { name: 'Analytics', icon: <BarChart3Icon size={20} />, href: '/analytics' },
    { name: 'Settings', icon: <SettingsIcon size={20} />, href: '/settings' },
  ];

  return (
    <div className="h-screen bg-white border-r border-gray-200 w-64 flex flex-col">
      <div className="p-6">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-md bg-blue-600 flex items-center justify-center">
            <BellIcon size={24} className="text-white" />
          </div>
          <h1 className="ml-3 text-xl font-bold text-gray-900">MediRemind</h1>
        </div>
      </div>
      
      <nav className="mt-2 flex-1">
        <div className="px-4 space-y-1">
          {links.map((link) => {
            const isActive = currentPath === link.href;
            
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(link.href);
                }}
                className={`
                  group flex items-center px-4 py-3 text-sm font-medium rounded-md
                  transition-colors
                  ${isActive 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'text-gray-700 hover:bg-gray-50'
                  }
                `}
              >
                <span className={`mr-3 ${isActive ? 'text-blue-700' : 'text-gray-500'}`}>
                  {link.icon}
                </span>
                {link.name}
              </a>
            );
          })}
        </div>
      </nav>
      
      <div className="p-4 border-t border-gray-200">
        <button 
          className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-50 w-full"
          onClick={() => onNavigate('/login')}
        >
          <LogOutIcon size={20} className="mr-3 text-gray-500" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;