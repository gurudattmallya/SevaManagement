// // import React, { useState, useEffect } from 'react';
// // import { Menu, X, BarChart3, Users, Calendar, Filter, Search, Download, ChevronDown, FileText, ArrowLeft } from 'lucide-react';
// // import axios from 'axios';


// // // Enhanced mock data
// // const sevaStats = {
// //     sashwathSeva: { total: 150, thisMonth: 25, revenue: 750000, lastMonth: 20, growth: 25 },
// //     nityanidhiSeva: { total: 280, thisMonth: 45, revenue: 420000, lastMonth: 35, growth: 28.5 },
// //     othersSeva: { total: 95, thisMonth: 15, revenue: 142500, lastMonth: 12, growth: 25 }
// //   };
  
// //   const mockBookings = [
// //     { id: 1, userName: "Rahul Sharma", sevaType: "Sashwath", sevaName: "Abhishekam", bookingDate: "2025-01-15", amount: 5000, status: "Confirmed" },
// //     { id: 2, userName: "Priya Patel", sevaType: "Nityanidhi", sevaName: "Archana", bookingDate: "2025-01-16", amount: 1500, status: "Pending" },
// //     { id: 3, userName: "Amit Kumar", sevaType: "Others", sevaName: "Annadanam", bookingDate: "2025-01-17", amount: 2500, status: "Completed" },
// //     { id: 4, userName: "Sneha Reddy", sevaType: "Sashwath", sevaName: "Kalyanam", bookingDate: "2025-01-18", amount: 15000, status: "Confirmed" },
// //     { id: 5, userName: "Karthik Iyer", sevaType: "Nityanidhi", sevaName: "Puja", bookingDate: "2025-01-19", amount: 2000, status: "Pending" }
// //   ];
  
// //   // const mockSevadars = [
// //   //   { id: 1, name: "Krishna Rao", role: "Head Priest", sevaType: "Sashwath", contact: "+91 9876543210", address: "Temple Quarter, Block A" },
// //   //   { id: 2, name: "Lakshmi Devi", role: "Assistant Priest", sevaType: "Nityanidhi", contact: "+91 9876543211", address: "Temple Quarter, Block B" },
// //   //   { id: 3, name: "Venkat Rao", role: "Seva Coordinator", sevaType: "Others", contact: "+91 9876543212", address: "Temple Quarter, Block C" }
// //   // ];
  

 

  

// // const ManageStatistics = () => {
// //     // State definitions
// //     const [isSidebarOpen, setIsSidebarOpen] = useState(true);
// //     const [activeView, setActiveView] = useState('statistics');
// //     const [showFilters, setShowFilters] = useState(false);
// //     const [searchTerm, setSearchTerm] = useState('');
// //     const [dateRange, setDateRange] = useState({ start: '', end: '' });
// //     const [selectedSevaType, setSelectedSevaType] = useState('all');
// //     const [previousView, setPreviousView] = useState(null);
// //     const [isModalOpen, setIsModalOpen] = useState(false);
// //     const [editMode, setEditMode] = useState(null);
// //     const [sevadhars, setSevadhars] = useState([]);
    
// //     // Form state
// //     const [formData, setFormData] = useState({
// //       CUST_NAME: '',
// //       CUST_GENDER: 'M',
// //       CUST_MOBILE_NUM1: '',
// //       CUST_EMAIL_ID1: '',
// //       CUST_RES_ADDRESS1: '',
// //       CUST_RES_CITY: '',
// //       is_enabled: true
// //     });
  
// //     const entityCode = localStorage.getItem('entityCode');
// //     const userId = localStorage.getItem('userId');
  
// //     useEffect(() => {
// //       const fetchSevadhars = async () => {
// //         try {
// //           const response = await axios.get(`http://localhost:2002/api/sevadhar`, {
// //             params: { entityCode }
// //           });
// //           setSevadhars(response.data);
// //         } catch (error) {
// //           console.error("Error fetching sevadhars:", error);
// //         }
// //       };
  
// //       if (entityCode) {
// //         fetchSevadhars();
// //       }
// //     }, [entityCode]);
  
// //     // Handler functions
// //     const handleInputChange = (e) => {
// //       setFormData({
// //         ...formData,
// //         [e.target.name]: e.target.value
// //       });
// //     };
// //     const addOrEditSevadhar = async () => {
// //         try {
// //           const currentDateTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
          
// //           if (editMode !== null) {
// //             await axios.put(`http://localhost:2002/api/sevadhar/${entityCode}/${editMode}`, {
// //               ...formData,
// //               ENTITY_CODE: entityCode,
// //               MO_BY: userId,
// //               MO_ON: currentDateTime
// //             });
// //           } else {
// //             await axios.post("http://localhost:2002/api/sevadhar", {
// //               ...formData,
// //               ENTITY_CODE: entityCode,
// //               CR_BY: userId,
// //               CR_ON: currentDateTime
// //             });
// //           }
// //           const response = await axios.get(`http://localhost:2002/api/sevadhar`, {
// //             params: { entityCode }
// //           });
// //           setSevadhars(response.data);
// //           closeModal();
// //         } catch (error) {
// //           console.error("Error saving sevadhar:", error);
// //         }
// //       };
  
// //     const closeModal = () => {
// //       setIsModalOpen(false);
// //       setEditMode(null);
// //       setFormData({
// //         CUST_NAME: '',
// //         CUST_GENDER: 'M',
// //         CUST_MOBILE_NUM1: '',
// //         CUST_EMAIL_ID1: '',
// //         CUST_RES_ADDRESS1: '',
// //         CUST_RES_CITY: '',
// //         is_enabled: true
// //       });
// //     };
  
// //     const handleEdit = (custCode) => {
// //       const sevadhar = sevadhars.find(s => s.CUST_CODE === custCode);
// //       if (sevadhar) {
// //         setFormData({
// //           CUST_NAME: sevadhar.CUST_NAME,
// //           CUST_GENDER: sevadhar.CUST_GENDER,
// //           CUST_MOBILE_NUM1: sevadhar.CUST_MOBILE_NUM1,
// //           CUST_EMAIL_ID1: sevadhar.CUST_EMAIL_ID1,
// //           CUST_RES_ADDRESS1: sevadhar.CUST_RES_ADDRESS1,
// //           CUST_RES_CITY: sevadhar.CUST_RES_CITY,
// //           is_enabled: sevadhar.is_enabled
// //         });
// //         setEditMode(custCode);
// //         setIsModalOpen(true);
// //       }
// //     };
  
// //     const addOrEditSevadhar = async () => {
// //       try {
// //         const currentDateTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
        
// //         if (editMode !== null) {
// //           await axios.put(`http://localhost:2002/api/sevadhar/${entityCode}/${editMode}`, {
// //             ...formData,
// //             ENTITY_CODE: entityCode,
// //             MO_BY: userId,
// //             MO_ON: currentDateTime
// //           });
// //         } else {
// //           await axios.post("http://localhost:2002/api/sevadhar", {
// //             ...formData,
// //             ENTITY_CODE: entityCode,
// //             CR_BY: userId,
// //             CR_ON: currentDateTime
// //           });
// //         }
        
// //         const response = await axios.get(`http://localhost:2002/api/sevadhar`, {
// //           params: { entityCode }
// //         });
// //         setSevadhars(response.data);
// //         closeModal();
// //       } catch (error) {
// //         console.error("Error saving sevadhar:", error);
// //       }
// //     };
  
// //     const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  
// //     const handleNavigate = (view) => {
// //       setPreviousView(activeView);
// //       setActiveView(view);
// //     };
  
// //     const handleBack = () => {
// //       if (previousView) {
// //         setActiveView(previousView);
// //         setPreviousView(null);
// //       }
// //     };
  
// //     // Render functions
// //     const renderSevadharsTable = () => (
// //       <div className="overflow-x-auto">
// //         <table className="w-full">
// //           <thead className="bg-orange-600 text-white">
// //             <tr>
// //               <th className="p-2">Name</th>
// //               <th className="p-2">Mobile</th>
// //               <th className="p-2">Email</th>
// //               <th className="p-2">City</th>
// //               <th className="p-2">Actions</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {sevadhars.map((sevadhar) => (
// //               <tr key={sevadhar.CUST_CODE} className="border-b">
// //                 <td className="p-2">{sevadhar.CUST_NAME}</td>
// //                 <td className="p-2">{sevadhar.CUST_MOBILE_NUM1}</td>
// //                 <td className="p-2">{sevadhar.CUST_EMAIL_ID1}</td>
// //                 <td className="p-2">{sevadhar.CUST_RES_CITY}</td>
// //                 <td className="p-2">
// //                   <button 
// //                     onClick={() => handleEdit(sevadhar.CUST_CODE)}
// //                     className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
// //                   >
// //                     Edit
// //                   </button>
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     );
  
// //     return (
// //       <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
// //         <nav className="bg-white shadow-md p-4">
// //           <div className="flex items-center justify-between">
// //             <div className="flex items-center space-x-4">
// //               <button onClick={toggleSidebar} className="p-2 hover:bg-gray-100 rounded-lg">
// //                 <Menu className="h-6 w-6" />
// //               </button>
// //               {previousView && (
// //                 <button onClick={handleBack} className="flex items-center p-2 hover:bg-gray-100 rounded-lg text-gray-600">
// //                   <ArrowLeft className="h-5 w-5 mr-1" />
// //                   Back
// //                 </button>
// //               )}
// //               <h1 className="text-xl font-bold text-gray-800">Temple Dashboard</h1>
// //             </div>
// //           </div>
// //         </nav>
  
// //         <div className="flex">
// //           <aside className={`${isSidebarOpen ? 'block' : 'hidden'} bg-white w-64 min-h-screen shadow-md`}>
// //             <nav className="p-4">
// //               <div className="space-y-2">
// //                 <button
// //                   onClick={() => handleNavigate('sevadars')}
// //                   className={`w-full flex items-center px-4 py-2 rounded-lg ${
// //                     activeView === 'sevadars' ? 'bg-orange-100 text-orange-600' : 'hover:bg-gray-100'
// //                   }`}
// //                 >
// //                   <Users className="w-5 h-5 mr-3" />
// //                   Sevadars
// //                 </button>
// //               </div>
// //             </nav>
// //           </aside>
  
// //           <main className="flex-1 p-6">
// //             <div className="bg-white rounded-lg shadow-md">
// //               <div className="p-6">
// //                 <div className="flex justify-between items-center mb-6">
// //                   <h2 className="text-xl font-bold">Sevadar Management</h2>
// //                   <button 
// //                     onClick={() => setIsModalOpen(true)}
// //                     className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700"
// //                   >
// //                     Add New Sevadar
// //                   </button>
// //                 </div>
// //                 {renderSevadharsTable()}
// //               </div>
// //             </div>
// //           </main>
// //         </div>
  
// //         {isModalOpen && (
// //           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
// //             <div className="bg-white p-6 rounded-lg w-96">
// //               <h2 className="text-xl font-bold mb-4">{editMode ? 'Edit Sevadar' : 'Add Sevadar'}</h2>
// //               <div className="space-y-4">
// //                 <input
// //                   className="w-full p-2 border rounded"
// //                   placeholder="Name"
// //                   name="CUST_NAME"
// //                   value={formData.CUST_NAME}
// //                   onChange={handleInputChange}
// //                 />
// //                 <select
// //                   className="w-full p-2 border rounded"
// //                   name="CUST_GENDER"
// //                   value={formData.CUST_GENDER}
// //                   onChange={handleInputChange}
// //                 >
// //                   <option value="M">Male</option>
// //                   <option value="F">Female</option>
// //                 </select>
// //                 <input
// //                   className="w-full p-2 border rounded"
// //                   placeholder="Mobile Number"
// //                   name="CUST_MOBILE_NUM1"
// //                   value={formData.CUST_MOBILE_NUM1}
// //                   onChange={handleInputChange}
// //                 />
// //                 <input
// //                   className="w-full p-2 border rounded"
// //                   placeholder="Email"
// //                   name="CUST_EMAIL_ID1"
// //                   value={formData.CUST_EMAIL_ID1}
// //                   onChange={handleInputChange}
// //                 />
// //                 <input
// //                   className="w-full p-2 border rounded"
// //                   placeholder="Address"
// //                   name="CUST_RES_ADDRESS1"
// //                   value={formData.CUST_RES_ADDRESS1}
// //                   onChange={handleInputChange}
// //                 />
// //                 <input
// //                   className="w-full p-2 border rounded"
// //                   placeholder="City"
// //                   name="CUST_RES_CITY"
// //                   value={formData.CUST_RES_CITY}
// //                   onChange={handleInputChange}
// //                 />
// //                 <div className="flex justify-end space-x-2">
// //                   <button
// //                     onClick={closeModal}
// //                     className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
// //                   >
// //                     Cancel
// //                   </button>
// //                   <button
// //                     onClick={addOrEditSevadhar}
// //                     className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
// //                   >
// //                     {editMode ? 'Save Changes' : 'Add Sevadar'}
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     );
  
  
  
// //   const FiltersPanel = () => (
// //     <div className={`bg-white p-4 mb-6 rounded-lg shadow-md ${showFilters ? 'block' : 'hidden'}`}>
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //         <div>
// //           <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
// //           <input
// //             type="date"
// //             className="w-full border border-gray-300 rounded-lg p-2"
// //             value={dateRange.start}
// //             onChange={(e) => setDateRange({...dateRange, start: e.target.value})}
// //           />
// //         </div>
// //         <div>
// //           <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
// //           <input
// //             type="date"
// //             className="w-full border border-gray-300 rounded-lg p-2"
// //             value={dateRange.end}
// //             onChange={(e) => setDateRange({...dateRange, end: e.target.value})}
// //           />
// //         </div>
// //         <div>
// //           <label className="block text-sm font-medium text-gray-700 mb-1">Seva Type</label>
// //           <select 
// //             className="w-full border border-gray-300 rounded-lg p-2"
// //             value={selectedSevaType}
// //             onChange={(e) => setSelectedSevaType(e.target.value)}
// //           >
// //             <option value="all">All Sevas</option>
// //             <option value="sashwath">Sashwath Seva</option>
// //             <option value="nityanidhi">Nityanidhi Seva</option>
// //             <option value="others">Others</option>
// //           </select>
// //         </div>
// //       </div>
// //     </div>
// //   );

// //   const renderStatistics = () => (
// //     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //       <div className="bg-white rounded-lg shadow-md p-6">
// //         <h3 className="text-lg font-semibold text-orange-600 mb-4">Sashwath Seva</h3>
// //         <div className="space-y-4">
// //           <div>
// //             <p className="text-sm text-gray-500">Total Bookings</p>
// //             <p className="text-2xl font-bold">{sevaStats.sashwathSeva.total}</p>
// //           </div>
// //           <div>
// //             <p className="text-sm text-gray-500">This Month</p>
// //             <p className="text-xl font-semibold">{sevaStats.sashwathSeva.thisMonth}</p>
// //             <p className="text-sm text-green-600">+{sevaStats.sashwathSeva.growth}% vs last month</p>
// //           </div>
// //           <div>
// //             <p className="text-sm text-gray-500">Total Revenue</p>
// //             <p className="text-xl font-semibold">₹{sevaStats.sashwathSeva.revenue.toLocaleString()}</p>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="bg-white rounded-lg shadow-md p-6">
// //         <h3 className="text-lg font-semibold text-orange-600 mb-4">Nityanidhi Seva</h3>
// //         <div className="space-y-4">
// //           <div>
// //             <p className="text-sm text-gray-500">Total Bookings</p>
// //             <p className="text-2xl font-bold">{sevaStats.nityanidhiSeva.total}</p>
// //           </div>
// //           <div>
// //             <p className="text-sm text-gray-500">This Month</p>
// //             <p className="text-xl font-semibold">{sevaStats.nityanidhiSeva.thisMonth}</p>
// //             <p className="text-sm text-green-600">+{sevaStats.nityanidhiSeva.growth}% vs last month</p>
// //           </div>
// //           <div>
// //             <p className="text-sm text-gray-500">Total Revenue</p>
// //             <p className="text-xl font-semibold">₹{sevaStats.nityanidhiSeva.revenue.toLocaleString()}</p>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="bg-white rounded-lg shadow-md p-6">
// //         <h3 className="text-lg font-semibold text-orange-600 mb-4">Others Seva</h3>
// //         <div className="space-y-4">
// //           <div>
// //             <p className="text-sm text-gray-500">Total Bookings</p>
// //             <p className="text-2xl font-bold">{sevaStats.othersSeva.total}</p>
// //           </div>
// //           <div>
// //             <p className="text-sm text-gray-500">This Month</p>
// //             <p className="text-xl font-semibold">{sevaStats.othersSeva.thisMonth}</p>
// //             <p className="text-sm text-green-600">+{sevaStats.othersSeva.growth}% vs last month</p>
// //           </div>
// //           <div>
// //             <p className="text-sm text-gray-500">Total Revenue</p>
// //             <p className="text-xl font-semibold">₹{sevaStats.othersSeva.revenue.toLocaleString()}</p>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );

// //   const renderSevaFilters = () => (
// //     <div className="bg-white rounded-lg shadow-md">
// //       <div className="p-6">
// //         <div className="flex justify-between items-center mb-6">
// //           <h2 className="text-xl font-bold">Seva Bookings</h2>
// //           <div className="flex space-x-4">
// //             <div className="relative">
// //               <input
// //                 type="text"
// //                 placeholder="Search bookings..."
// //                 className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
// //                 value={searchTerm}
// //                 onChange={(e) => setSearchTerm(e.target.value)}
// //               />
// //               <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
// //             </div>
// //             <button className="flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
// //               <Download className="w-4 h-4 mr-2" />
// //               Export
// //             </button>
// //           </div>
// //         </div>
// //         <div className="overflow-x-auto">
// //           <table className="w-full">
// //             <thead className="bg-gray-50">
// //               <tr>
// //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User Name</th>
// //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Seva Type</th>
// //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Seva Name</th>
// //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Booking Date</th>
// //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
// //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
// //               </tr>
// //             </thead>
// //             <tbody className="divide-y divide-gray-200">
// //               {filteredBookings.map((booking) => (
// //                 <tr key={booking.id} className="hover:bg-gray-50">
// //                   <td className="px-6 py-4 whitespace-nowrap">{booking.userName}</td>
// //                   <td className="px-6 py-4 whitespace-nowrap">{booking.sevaType}</td>
// //                   <td className="px-6 py-4 whitespace-nowrap">{booking.sevaName}</td>
// //                   <td className="px-6 py-4 whitespace-nowrap">{booking.bookingDate}</td>
// //                   <td className="px-6 py-4 whitespace-nowrap">₹{booking.amount}</td>
// //                   <td className="px-6 py-4 whitespace-nowrap">
// //                     <span className={`px-2 py-1 rounded-full text-xs ${
// //                       booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
// //                       booking.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
// //                       'bg-blue-100 text-blue-800'
// //                     }`}>
// //                       {booking.status}
// //                     </span>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       </div>
// //     </div>
// //   );

// //   const renderSevadars = () => (
// //     <div className="space-y-6">
// //     {showAddSevadarForm ? (
// //       <AddSevadarForm />
// //     ) : (
// //       <div className="bg-white rounded-lg shadow-md">
// //         <div className="p-6">
// //           <div className="flex justify-between items-center mb-6">
// //             <h2 className="text-xl font-bold">Sevadar Management</h2>
// //             <div className="flex space-x-4">
// //               <div className="relative">
// //                 <input
// //                   type="text"
// //                   placeholder="Search sevadars..."
// //                   className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
// //                   value={searchTerm}
// //                   onChange={(e) => setSearchTerm(e.target.value)}
// //                 />
// //                 <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
// //               </div>
// //               <button 
// //                 className="flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
// //                 onClick={() => setShowAddSevadarForm(true)}
// //               >
// //                 Add New Sevadar
// //               </button>
// //             </div>
// //           </div>
// //             <div className="overflow-x-auto">
// //               {/* <table className="w-full">
// //                 <thead className="bg-gray-50">
// //                   <tr>
// //                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
// //                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
// //                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Seva Type</th>
// //                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact</th>
// //                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Address</th>
// //                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
// //                   </tr>
// //                 </thead> */}
// //                 {/* <tbody className="divide-y divide-gray-200">
// //                   {localSevadars.map((sevadar) => (
// //                     <tr key={sevadar.id} className="hover:bg-gray-50">
// //                       <td className="px-6 py-4 whitespace-nowrap">{sevadar.name}</td>
// //                       <td className="px-6 py-4 whitespace-nowrap">{sevadar.role}</td>
// //                       <td className="px-6 py-4 whitespace-nowrap">{sevadar.sevaType}</td>
// //                       <td className="px-6 py-4 whitespace-nowrap">{sevadar.contact}</td>
// //                       <td className="px-6 py-4 whitespace-nowrap">{sevadar.address}</td>
// //                       <td className="px-6 py-4 whitespace-nowrap">
// //                         <div className="flex space-x-2">
// //                           <button
// //                             onClick={() => setEditingSevadar(sevadar)}
// //                             className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded hover:bg-blue-200"
// //                           >
// //                             Edit
// //                           </button>
// //                           <button
// //                             onClick={() => handleDeleteSevadar(sevadar.id)}
// //                             className="px-3 py-1 text-sm bg-red-100 text-red-600 rounded hover:bg-red-200"
// //                           >
// //                             Delete
// //                           </button>
// //                         </div>
// //                       </td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table> */}
// //              <table className="w-full">
// //   <thead className="bg-orange-600 text-white">
// //     <tr>
// //       <th>Name</th>
// //       <th>Mobile</th>
// //       <th>Email</th>
// //       <th>City</th>
// //       <th>Actions</th>
// //     </tr>
// //   </thead>
// //   <tbody>
// //     {sevadhars.map((sevadhar) => (
// //       <tr key={sevadhar.CUST_CODE}>
// //         <td>{sevadhar.CUST_NAME}</td>
// //         <td>{sevadhar.CUST_MOBILE_NUM1}</td>
// //         <td>{sevadhar.CUST_EMAIL_ID1}</td>
// //         <td>{sevadhar.CUST_RES_CITY}</td>
// //         <td>
// //           <button onClick={() => handleEdit(sevadhar.CUST_CODE)}>Edit</button>
// //           <button onClick={() => handleView(sevadhar)}>View</button>
// //         </td>
// //       </tr>
// //     ))}
// //   </tbody>
// // </table>
// // <Modal isOpen={isModalOpen} onClose={closeModal}>
// //   <div className="p-6">
// //     <h2 className="text-xl font-bold">{editMode ? 'Edit Sevadhar' : 'Add Sevadhar'}</h2>
// //     <div className="space-y-4">
// //       <input
// //         placeholder="Name"
// //         name="CUST_NAME"
// //         value={formData.CUST_NAME}
// //         onChange={handleInputChange}
// //       />
// //       <select
// //         name="CUST_GENDER"
// //         value={formData.CUST_GENDER}
// //         onChange={handleInputChange}
// //       >
// //         <option value="M">Male</option>
// //         <option value="F">Female</option>
// //       </select>
// //       <input
// //         placeholder="Mobile Number"
// //         name="CUST_MOBILE_NUM1"
// //         value={formData.CUST_MOBILE_NUM1}
// //         onChange={handleInputChange}
// //       />
// //       <input
// //         placeholder="Email"
// //         name="CUST_EMAIL_ID1"
// //         value={formData.CUST_EMAIL_ID1}
// //         onChange={handleInputChange}
// //       />
// //       <input
// //         placeholder="Address"
// //         name="CUST_RES_ADDRESS1"
// //         value={formData.CUST_RES_ADDRESS1}
// //         onChange={handleInputChange}
// //       />
// //       <input
// //         placeholder="City"
// //         name="CUST_RES_CITY"
// //         value={formData.CUST_RES_CITY}
// //         onChange={handleInputChange}
// //       />
// //       <button onClick={addOrEditSevadhar}>
// //         {editMode ? 'Save Changes' : 'Add Sevadhar'}
// //       </button>
// //     </div>
// //   </div>
// // </Modal>


// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
// //       <nav className="bg-white shadow-md">
// //       <div className="flex items-center justify-between">
// //   <div className="flex items-center space-x-4">
// //     <button onClick={toggleSidebar} className="p-2 hover:bg-gray-100 rounded-lg">
// //       <Menu className="h-6 w-6" />
// //     </button>
// //     {previousView && (
// //       <button onClick={handleBack} className="flex items-center p-2 hover:bg-gray-100 rounded-lg text-gray-600">
// //         <ArrowLeft className="h-5 w-5 mr-1" />
// //         Back
// //       </button>
// //     )}
// //     <h1 className="text-xl font-bold text-gray-800">Temple Dashboard</h1>
// //   </div>
// //   {activeView !== 'sevadars' && (
// //     <button
// //       onClick={() => setShowFilters(!showFilters)}
// //       className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
// //     >
// //       <Filter className="w-4 h-4 mr-2" />
// //       Filters
// //       <ChevronDown className={`w-4 h-4 ml-2 transform ${showFilters ? 'rotate-180' : ''}`} />
// //     </button>
// //   )}
// // </div>

// //       </nav>

// //       <div className="flex">
// //         <aside className={`${isSidebarOpen ? 'block' : 'hidden'} bg-white w-64 min-h-screen shadow-md`}>
// //           <nav className="p-4">
// //             <div className="space-y-2">
// //               <button
// //                 onClick={() => handleNavigate('statistics')}
// //                 className={`w-full flex items-center px-4 py-2 rounded-lg ${
// //                   activeView === 'statistics' ? 'bg-orange-100 text-orange-600' : 'hover:bg-gray-100'
// //                 }`}
// //               >
// //                 <BarChart3 className="w-5 h-5 mr-3" />
// //                 Statistics
// //               </button>
// //               <button
// //                 onClick={() => handleNavigate('sevaFilters')}
// //                 className={`w-full flex items-center px-4 py-2 rounded-lg ${
// //                   activeView === 'sevaFilters' ? 'bg-orange-100 text-orange-600' : 'hover:bg-gray-100'
// //                 }`}
// //               >
// //                 <FileText className="w-5 h-5 mr-3" />
// //                 Seva Bookings
// //               </button>
// //               <button
// //                 onClick={() => handleNavigate('sevadars')}
// //                 className={`w-full flex items-center px-4 py-2 rounded-lg ${
// //                   activeView === 'sevadars' ? 'bg-orange-100 text-orange-600' : 'hover:bg-gray-100'
// //                 }`}
// //               >
// //                 <Users className="w-5 h-5 mr-3" />
// //                 Sevadars
// //               </button>
// //             </div>
// //           </nav>
// //         </aside>

// //         <main className="flex-1 p-6">
// //           <FiltersPanel />
// //           {activeView === 'statistics' && renderStatistics()}
// //           {activeView === 'sevaFilters' && renderSevaFilters()}
// //           {activeView === 'sevadars' && renderSevadars()}
// //         </main>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ManageStatistics;



// import React, { useState, useEffect } from 'react';
// import { Menu, X, BarChart3, Users, Calendar, Filter, Search, Download, ChevronDown, FileText, ArrowLeft, Bookmark } from 'lucide-react';
// import axios from 'axios';
// const ManageStatistics = () => {
//   // State definitions
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [activeView, setActiveView] = useState('statistics');
//   const [showFilters, setShowFilters] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [dateRange, setDateRange] = useState({ start: '', end: '' });
//   const [selectedSevaType, setSelectedSevaType] = useState('all');
//   const [previousView, setPreviousView] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editMode, setEditMode] = useState(null);
//   const [sevadhars, setSevadhars] = useState([]);
//   const [showSevaDropdown, setShowSevaDropdown] = useState(false);

//   const [userContext, setUserContext] = useState({
//     entityCode: '',
//     userId: ''
//   });
//   const [formData, setFormData] = useState({
//     CUST_NAME: '',
//     CUST_GENDER: 'M',
//     CUST_MOBILE_NUM1: '',
//     CUST_EMAIL_ID1: '',
//     CUST_RES_ADDRESS1: '',
//     CUST_RES_CITY: '',
//     is_enabled: true
//   });

//   useEffect(() => {
//     const entityCode = localStorage.getItem('entityCode');
//     const userId = localStorage.getItem('userId');
//     setUserContext({ entityCode, userId });
//   }, []);




// useEffect(() => {
//     const fetchSevadhars = async () => {
//         if (userContext.entityCode) {
//             try {
//                 const response = await axios.get(`http://localhost:2002/api/sevadhar`, {
//                     params: { entityCode: userContext.entityCode }
//                 });
//                 setSevadhars(response.data);
//             } catch (error) {
//                 console.error('Error fetching sevadhars:', error);
//             }
//         }
//     };
    
//     fetchSevadhars();
// }, [userContext.entityCode]);

  
//   // Handler functions
//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setEditMode(null);
//     setFormData({
//       CUST_NAME: '',
//       CUST_GENDER: 'M',
//       CUST_MOBILE_NUM1: '',
//       CUST_EMAIL_ID1: '',
//       CUST_RES_ADDRESS1: '',
//       CUST_RES_CITY: '',
//       is_enabled: true
//     });
//   };



// const addOrEditSevadhar = async (e) => {
//   e.preventDefault();
  
//   const payload = {
//       CUST_NAME: formData.CUST_NAME,
//       CUST_GENDER: formData.CUST_GENDER,
//       CUST_MOBILE_NUM1: formData.CUST_MOBILE_NUM1,
//       CUST_EMAIL_ID1: formData.CUST_EMAIL_ID1,
//       CUST_RES_ADDRESS1: formData.CUST_RES_ADDRESS1,
//       CUST_RES_CITY: formData.CUST_RES_CITY,
//       ENTITY_CODE: Number(userContext.entityCode),
//       is_enabled: 1
//   };

//   try {
//       if (editMode) {
//           const updatePayload = {
//               ...payload,
//               MO_BY: userContext.userId,
//               MO_ON: new Date().toISOString()
//           };
//           await axios.put(`http://localhost:2002/api/sevadhar/${userContext.entityCode}/${editMode}`, updatePayload);
//       } else {
//           payload.CR_BY = userContext.userId;
//           payload.CR_ON = new Date().toISOString();
//           await axios.post('http://localhost:2002/api/sevadhar', payload);
//       }

//       const response = await axios.get(`http://localhost:2002/api/sevadhar?entityCode=${userContext.entityCode}`);
//       setSevadhars(response.data);
//       closeModal();
//   } catch (error) {
//       console.log('Request payload:', payload);
//       console.log('Error response:', error.response?.data);
//   }
// };




// const handleEdit = (custCode) => {
//     const sevadhar = sevadhars.find(s => s.CUST_CODE === custCode);
//     if (sevadhar) {
//         setFormData({
//             CUST_NAME: sevadhar.CUST_NAME,
//             CUST_GENDER: sevadhar.CUST_GENDER,
//             CUST_MOBILE_NUM1: sevadhar.CUST_MOBILE_NUM1,
//             CUST_EMAIL_ID1: sevadhar.CUST_EMAIL_ID1,
//             CUST_RES_ADDRESS1: sevadhar.CUST_RES_ADDRESS1,
//             CUST_RES_CITY: sevadhar.CUST_RES_CITY
//         });
//         setEditMode(custCode);
//         setIsModalOpen(true);
//     }
// };

  
  
  
//   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//   const handleNavigate = (view) => {
//     setPreviousView(activeView);
//     setActiveView(view);
//   };

//   const handleBack = () => {
//     if (previousView) {
//       setActiveView(previousView);
//       setPreviousView(null);
//     }
//   };

//   const renderSevadharsTable = () => (
//     <div className="overflow-x-auto">
//       <table className="w-full">
//         <thead className="bg-orange-600 text-white">
//           <tr>
//             <th className="p-2 text-left">Name</th>
//             <th className="p-2 text-left">Mobile</th>
//             <th className="p-2 text-left">Email</th>
//             <th className="p-2 text-left">City</th>
//             <th className="p-2 text-left">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {sevadhars.map((sevadhar) => (
//             <tr key={sevadhar.CUST_CODE} className="border-b">
//               <td className="p-2">{sevadhar.CUST_NAME}</td>
//               <td className="p-2">{sevadhar.CUST_MOBILE_NUM1}</td>
//               <td className="p-2">{sevadhar.CUST_EMAIL_ID1}</td>
//               <td className="p-2">{sevadhar.CUST_RES_CITY}</td>
//               <td className="p-2">
//                 <button 
//                   onClick={() => handleEdit(sevadhar.CUST_CODE)}
//                   className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
//                 >
//                   Edit
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
//       <nav className="bg-white shadow-md p-4">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-4">
//             <button onClick={toggleSidebar} className="p-2 hover:bg-gray-100 rounded-lg">
//               <Menu className="h-6 w-6" />
//             </button>
//             {previousView && (
//               <button onClick={handleBack} className="flex items-center p-2 hover:bg-gray-100 rounded-lg text-gray-600">
//                 <ArrowLeft className="h-5 w-5 mr-1" />
//                 Back
//               </button>
//             )}
//             <h1 className="text-xl font-bold text-gray-800">Temple Dashboard</h1>
//           </div>
//         </div>
//       </nav>

//       <div className="flex">
//         <aside className={`${isSidebarOpen ? 'block' : 'hidden'} bg-white w-64 min-h-screen shadow-md`}>
//           <nav className="p-4">
//             <div className="space-y-2">
//               <button
//                 onClick={() => handleNavigate('sevadars')}
//                 className={`w-full flex items-center px-4 py-2 rounded-lg ${
//                   activeView === 'sevadars' ? 'bg-orange-100 text-orange-600' : 'hover:bg-gray-100'
//                 }`}
//               >
//                 <Users className="w-5 h-5 mr-3" />
//                 Sevadars
//               </button>
           
// <button
//   onClick={() => handleNavigate('sevas')}
//   className={`w-full flex items-center px-4 py-2 rounded-lg ${
//     activeView === 'sevas' ? 'bg-orange-100 text-orange-600' : 'hover:bg-gray-100'
//   }`}
// >
//   <Bookmark className="w-5 h-5 mr-3" />
//   Sevas
// </button>

//             </div>
//           </nav>
//         </aside>

//         <main className="flex-1 p-6">
//           <div className="bg-white rounded-lg shadow-md">
//             <div className="p-6">
//               <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-xl font-bold">Sevadar Management</h2>
//                 <button 
//                   onClick={() => setIsModalOpen(true)}
//                   className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700"
//                 >
//                   Add New Sevadar
//                 </button>
//               </div>
//               {renderSevadharsTable()}
//             </div>
//           </div>
//         </main>
//       </div>

//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-6 rounded-lg w-96">
//             <h2 className="text-xl font-bold mb-4">{editMode ? 'Edit Sevadar' : 'Add Sevadar'}</h2>
//             <div className="space-y-4">
//               <input
//                 className="w-full p-2 border rounded"
//                 placeholder="Name"
//                 name="CUST_NAME"
//                 value={formData.CUST_NAME}
//                 onChange={handleInputChange}
//               />
//               <select
//                 className="w-full p-2 border rounded"
//                 name="CUST_GENDER"
//                 value={formData.CUST_GENDER}
//                 onChange={handleInputChange}
//               >
//                 <option value="M">Male</option>
//                 <option value="F">Female</option>
//               </select>
//               <input
//                 className="w-full p-2 border rounded"
//                 placeholder="Mobile Number"
//                 name="CUST_MOBILE_NUM1"
//                 value={formData.CUST_MOBILE_NUM1}
//                 onChange={handleInputChange}
//               />
//               <input
//                 className="w-full p-2 border rounded"
//                 placeholder="Email"
//                 name="CUST_EMAIL_ID1"
//                 value={formData.CUST_EMAIL_ID1}
//                 onChange={handleInputChange}
//               />
//               <input
//                 className="w-full p-2 border rounded"
//                 placeholder="Address"
//                 name="CUST_RES_ADDRESS1"
//                 value={formData.CUST_RES_ADDRESS1}
//                 onChange={handleInputChange}
//               />
//               <input
//                 className="w-full p-2 border rounded"
//                 placeholder="City"
//                 name="CUST_RES_CITY"
//                 value={formData.CUST_RES_CITY}
//                 onChange={handleInputChange}
//               />
//               <div className="flex justify-end space-x-2">
//                 <button
//                   onClick={closeModal}
//                   className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
//                 >
//                   Cancel
//                 </button>
//                 <button
//     onClick={addOrEditSevadhar}
//     className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
// >
//     {editMode ? 'Save Changes' : 'Add Sevadar'}
// </button>

//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManageStatistics;


import React, { useState, useEffect } from 'react';
import { Menu, X, BarChart3, Users, Calendar, Filter, Search, Download, ChevronDown, FileText, ArrowLeft, Bookmark } from 'lucide-react';
import axios from 'axios';

const ManageStatistics = () => {
  // Existing state
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeView, setActiveView] = useState('statistics');
  const [searchTerm, setSearchTerm] = useState('');
  const [previousView, setPreviousView] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editMode, setEditMode] = useState(null);
  const [sevadhars, setSevadhars] = useState([]);
  
  // New state for seva management
  const [showSevaDropdown, setShowSevaDropdown] = useState(false);
  const [selectedSevaType, setSelectedSevaType] = useState(null);
  const [showDateFilter, setShowDateFilter] = useState(false);
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [sevas, setSevas] = useState([]);

  // Existing user context and form data state
  const [userContext, setUserContext] = useState({
    entityCode: '',
    userId: ''
  });
  const [formData, setFormData] = useState({
    CUST_NAME: '',
    CUST_GENDER: 'M',
    CUST_MOBILE_NUM1: '',
    CUST_EMAIL_ID1: '',
    CUST_RES_ADDRESS1: '',
    CUST_RES_CITY: '',
    is_enabled: true
  });

  // Seva types
  const sevaTypes = [
    'Sashwath Seva',
    'Nityanidhi Seva',
    'Other Seva'
  ];

  useEffect(() => {
    const entityCode = localStorage.getItem('entityCode');
    const userId = localStorage.getItem('userId');
    setUserContext({ entityCode, userId });
  }, []);

  // Existing sevadhars fetch
  useEffect(() => {
    const fetchSevadhars = async () => {
      if (userContext.entityCode) {
        try {
          const response = await axios.get(`http://localhost:2002/api/sevadhar`, {
            params: { entityCode: userContext.entityCode }
          });
          setSevadhars(response.data);
        } catch (error) {
          console.error('Error fetching sevadhars:', error);
        }
      }
    };
    
    fetchSevadhars();
  }, [userContext.entityCode]);

  // Existing handler functions
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditMode(null);
    setFormData({
      CUST_NAME: '',
      CUST_GENDER: 'M',
      CUST_MOBILE_NUM1: '',
      CUST_EMAIL_ID1: '',
      CUST_RES_ADDRESS1: '',
      CUST_RES_CITY: '',
      is_enabled: true
    });
  };

  const addOrEditSevadhar = async (e) => {
    e.preventDefault();
    
    const payload = {
      CUST_NAME: formData.CUST_NAME,
      CUST_GENDER: formData.CUST_GENDER,
      CUST_MOBILE_NUM1: formData.CUST_MOBILE_NUM1,
      CUST_EMAIL_ID1: formData.CUST_EMAIL_ID1,
      CUST_RES_ADDRESS1: formData.CUST_RES_ADDRESS1,
      CUST_RES_CITY: formData.CUST_RES_CITY,
      ENTITY_CODE: Number(userContext.entityCode),
      is_enabled: 1
    };

    try {
      if (editMode) {
        const updatePayload = {
          ...payload,
          MO_BY: userContext.userId,
          MO_ON: new Date().toISOString()
        };
        await axios.put(`http://localhost:2002/api/sevadhar/${userContext.entityCode}/${editMode}`, updatePayload);
      } else {
        payload.CR_BY = userContext.userId;
        payload.CR_ON = new Date().toISOString();
        await axios.post('http://localhost:2002/api/sevadhar', payload);
      }

      const response = await axios.get(`http://localhost:2002/api/sevadhar?entityCode=${userContext.entityCode}`);
      setSevadhars(response.data);
      closeModal();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleEdit = (custCode) => {
    const sevadhar = sevadhars.find(s => s.CUST_CODE === custCode);
    if (sevadhar) {
      setFormData({
        CUST_NAME: sevadhar.CUST_NAME,
        CUST_GENDER: sevadhar.CUST_GENDER,
        CUST_MOBILE_NUM1: sevadhar.CUST_MOBILE_NUM1,
        CUST_EMAIL_ID1: sevadhar.CUST_EMAIL_ID1,
        CUST_RES_ADDRESS1: sevadhar.CUST_RES_ADDRESS1,
        CUST_RES_CITY: sevadhar.CUST_RES_CITY
      });
      setEditMode(custCode);
      setIsModalOpen(true);
    }
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleNavigate = (view) => {
    setPreviousView(activeView);
    setActiveView(view);
    if (view === 'sevas') {
      setSelectedSevaType(null);
    }
  };

  const handleBack = () => {
    if (previousView) {
      setActiveView(previousView);
      setPreviousView(null);
    }
  };

  // New handler functions for seva management
  const handleSevaTypeSelect = (sevaType) => {
    setSelectedSevaType(sevaType);
    setShowSevaDropdown(false);
  };

  const handleDateRangeChange = (e) => {
    setDateRange({
      ...dateRange,
      [e.target.name]: e.target.value
    });
  };

  const renderSevadharsTable = () => (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-orange-600 text-white">
          <tr>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Mobile</th>
            <th className="p-2 text-left">Email</th>
            <th className="p-2 text-left">City</th>
            <th className="p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {sevadhars.map((sevadhar) => (
            <tr key={sevadhar.CUST_CODE} className="border-b">
              <td className="p-2">{sevadhar.CUST_NAME}</td>
              <td className="p-2">{sevadhar.CUST_MOBILE_NUM1}</td>
              <td className="p-2">{sevadhar.CUST_EMAIL_ID1}</td>
              <td className="p-2">{sevadhar.CUST_RES_CITY}</td>
              <td className="p-2">
                <button 
                  onClick={() => handleEdit(sevadhar.CUST_CODE)}
                  className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderSevasView = () => (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">
          {selectedSevaType || 'Select Seva Type'}
        </h2>
        <div className="flex flex-wrap gap-4">
          <div className="relative">
            <button
              onClick={() => setShowSevaDropdown(!showSevaDropdown)}
              className="bg-white px-4 py-2 rounded-lg shadow flex items-center space-x-2"
            >
              <span>{selectedSevaType || 'Select Seva Type'}</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {showSevaDropdown && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg z-10">
                {sevaTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => handleSevaTypeSelect(type)}
                    className="w-full px-4 py-2 text-left hover:bg-orange-50"
                  >
                    {type}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search sevas..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <button
            onClick={() => setShowDateFilter(!showDateFilter)}
            className="bg-white px-4 py-2 rounded-lg shadow flex items-center space-x-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Date Filter</span>
          </button>
        </div>
        
        {showDateFilter && (
          <div className="mt-4 flex gap-4">
            <input
              type="date"
              name="start"
              value={dateRange.start}
              onChange={handleDateRangeChange}
              className="border rounded-lg px-4 py-2"
            />
            <input
              type="date"
              name="end"
              value={dateRange.end}
              onChange={handleDateRangeChange}
              className="border rounded-lg px-4 py-2"
            />
          </div>
        )}
      </div>
      
      {selectedSevaType && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-500">No sevas found for the selected criteria.</p>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      <nav className="bg-white shadow-md p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button onClick={toggleSidebar} className="p-2 hover:bg-gray-100 rounded-lg">
              <Menu className="h-6 w-6" />
            </button>
            {previousView && (
              <button onClick={handleBack} className="flex items-center p-2 hover:bg-gray-100 rounded-lg text-gray-600">
                <ArrowLeft className="h-5 w-5 mr-1" />
                Back
              </button>
            )}
            <h1 className="text-xl font-bold text-gray-800">Temple Dashboard</h1>
          </div>
        </div>
      </nav>

      <div className="flex">
        <aside className={`${isSidebarOpen ? 'block' : 'hidden'} bg-white w-64 min-h-screen shadow-md`}>
          <nav className="p-4">
            <div className="space-y-2">
              <button
                onClick={() => handleNavigate('sevadars')}
                className={`w-full flex items-center px-4 py-2 rounded-lg ${
                  activeView === 'sevadars' ? 'bg-orange-100 text-orange-600' : 'hover:bg-gray-100'
                }`}
              >
                <Users className="w-5 h-5 mr-3" />
                Sevadars
              </button>
              
              <button
                onClick={() => handleNavigate('sevas')}
                className={`w-full flex items-center px-4 py-2 rounded-lg ${
                  activeView === 'sevas' ? 'bg-orange-100 text-orange-600' : 'hover:bg-gray-100'
                }`}
              >
                <Bookmark className="w-5 h-5 mr-3" />
                Sevas
              </button>
            </div>
          </nav>
        </aside>

        <main className="flex-1">
          {activeView === 'sevadars' && (
            <div className="p-6">
              <div className="bg-white rounded-lg shadow-md">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold">Sevadar Management</h2>
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700"
                    >
                      Add New Sevadar
                    </button>
                  </div>
                  {renderSevadharsTable()}
                </div>
              </div>
            </div>
          )}
          
          {activeView === 'sevas' && renderSevasView()}
        </main>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">{editMode ? 'Edit Sevadar' : 'Add Sevadar'}</h2>
            <div className="space-y-4">
              <input
                className="w-full p-2 border rounded"
                placeholder="Name"
                name="CUST_NAME"
                value={formData.CUST_NAME}
                onChange={handleInputChange}
              />
              <select
                className="w-full p-2 border rounded"
                name="CUST_GENDER"
                value={formData.CUST_GENDER}
                onChange={handleInputChange}
              >
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
              <input
                className="w-full p-2 border rounded"
                placeholder="Mobile Number"
                name="CUST_MOBILE_NUM1"
                value={formData.CUST_MOBILE_NUM1}
                onChange={handleInputChange}
              />
              <input
                className="w-full p-2 border rounded"
                placeholder="Email"
                name="CUST_EMAIL_ID1"
                value={formData.CUST_EMAIL_ID1}
                onChange={handleInputChange}
              />
              <input
                className="w-full p-2 border rounded"
                placeholder="Address"
                name="CUST_RES_ADDRESS1"
                value={formData.CUST_RES_ADDRESS1}
                onChange={handleInputChange}
              />
              <input
                className="w-full p-2 border rounded"
                placeholder="City"
                name="CUST_RES_CITY"
                value={formData.CUST_RES_CITY}
                onChange={handleInputChange}
              />
              <div className="flex justify-end space-x-2">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={addOrEditSevadhar}
                  className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
                >
                  {editMode ? 'Save Changes' : 'Add Sevadar'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageStatistics;