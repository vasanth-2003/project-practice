import React, { useState } from 'react';
import { 
  Menu, X, Home, BarChart2, Users, Settings, 
  Bell, Search, DollarSign, Activity, ShoppingBag 
} from 'lucide-react';
import Analytics from './Analytics';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Mock data for stat cards
  const stats = [
    { title: 'Total Revenue', value: '$45,231', icon: DollarSign, color: 'bg-green-500' },
    { title: 'Active Users', value: '2,405', icon: Users, color: 'bg-blue-500' },
    { title: 'New Sales', value: '384', icon: ShoppingBag, color: 'bg-purple-500' },
    { title: 'Engagement', value: '87%', icon: Activity, color: 'bg-orange-500' },
  ];

  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-800">
          <span className="text-xl font-bold tracking-wider">DashUI</span>
          <button onClick={toggleSidebar} className="lg:hidden text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>
        
        <nav className="p-4 space-y-2">
          <a href="#" className="flex items-center px-4 py-3 text-gray-100 bg-gray-800 rounded-lg">
            <Home size={20} className="mr-3" /> Dashboard
          </a>
          <Link to = "/analytic" className="flex items-center px-4 py-3 text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white transition-colors">
            <BarChart2 size={20} className="mr-3" /> Analytics
          </Link>
          <Link to = "/customer" className="flex items-center px-4 py-3 text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white transition-colors">
            <Users size={20} className="mr-3" /> Customers
          </Link>
          <Link to = "/settings" className="flex items-center px-4 py-3 text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white transition-colors">
            <Settings size={20} className="mr-3" /> Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        
        {/* Top Header */}
        <header className="flex items-center justify-between h-16 px-6 bg-white border-b border-gray-200">
          <div className="flex items-center">
            <button 
              onClick={toggleSidebar} 
              className="text-gray-500 focus:outline-none lg:hidden mr-4"
            >
              <Menu size={24} />
            </button>
            
            {/* Search Bar */}
            <div className="relative hidden sm:block">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <Search size={18} />
              </span>
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full py-2 pl-10 pr-4 text-sm bg-gray-100 border-transparent rounded-lg focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
              />
            </div>
          </div>

          {/* Right Header Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-400 hover:text-gray-600 relative">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold cursor-pointer">
              JS
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-gray-800">Overview</h1>
            <p className="text-gray-500 text-sm mt-1">Welcome back, here's what's happening today.</p>
          </div>

          {/* Stat Cards Grid */}
          <div className="grid grid-cols-1 gap-6 mb-8 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="flex items-center p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
                  <div className={`p-3 rounded-full ${stat.color} bg-opacity-10 mr-4`}>
                    <Icon size={24} className={`text-${stat.color.split('-')[1]}-600`} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                    <p className="text-2xl font-semibold text-gray-800">{stat.value}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Grid (Charts & Tables Placeholder) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Chart Placeholder */}
            <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 lg:col-span-2">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Revenue Overview</h2>
              <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg border border-dashed border-gray-300 text-gray-400">
                [ Chart Component Goes Here ]
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-start pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                    <div className="w-2 h-2 mt-2 rounded-full bg-indigo-500 mr-3"></div>
                    <div>
                      <p className="text-sm text-gray-800 font-medium">User logged in</p>
                      <p className="text-xs text-gray-500">2 minutes ago</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;