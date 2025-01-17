import React from 'react';
import { Link } from 'react-router-dom';
import { Gem, ScrollText, Star, Layers, ChevronRight } from 'lucide-react';

const DashboardCard = ({ title, description, icon: Icon, to }) => (
  <Link
    to={to}
    className="group flex items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all border border-orange-100 hover:border-orange-200"
  >
    <div className="p-3 bg-orange-100 rounded-lg group-hover:bg-orange-200 transition-colors">
      <Icon className="w-6 h-6 text-orange-600" />
    </div>
    <div className="ml-4 flex-1">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm mt-1">{description}</p>
    </div>
    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-colors" />
  </Link>
);

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      <div className="max-w-6xl mx-auto p-6">
    {/* //     <header className="mb-8">
    //       <div className="bg-white rounded-lg shadow-md p-6 mb-6">
    //         <h1 className="text-3xl font-bold text-gray-800">
    //           Admin Dashboard
    //         </h1>
    //         <p className="text-gray-600 mt-2">
    //           Manage your temple services and configurations
    //         </p>
    //       </div>
    //     </header> */}

        <main className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Quick Actions</h2>
            <div className="grid gap-4">
              <DashboardCard
                title="Add Deity"
                description="Create and configure new deity profiles"
                icon={Gem}
                to="/admin/manage/deity"
              />
              <DashboardCard
                title="Manage Master Sevas"
                description="Configure and update primary seva offerings"
                icon={ScrollText}
                to="/admin/manage/master-sevas"
              />
              <DashboardCard
                title="Manage Special Sevas"
                description="Handle special occasions and festival sevas"
                icon={Star}
                to="/admin/manage/special-sevas"
              />
              <DashboardCard
                title="Manage Sub-Sevas"
                description="Configure subsidiary and related seva services"
                icon={Layers}
                to="/admin/manage/sub-sevas"
              />
              <DashboardCard
  title="Statistics"
  description="Configure subsidiary and related seva services"
  icon={Layers}
  to="/admin/manage/statistics"  // This path should match the route in App.jsx
/>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;