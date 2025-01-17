// // import React from 'react';
// // import { useNavigate, useLocation } from 'react-router-dom';

// // const BookingConfirmation = () => {
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const cart = location.state?.cart || [];
// //   const totalAmount = location.state?.totalAmount || 0;
// //   const receiptNumber = `RECEIPT${Date.now().toString().slice(-6)}`;
// //   const currentDate = new Date().toLocaleDateString();

// //   // Hardcoded devotee details
// //   const devoteeDetails = {
// //     name: 'Rajesh Kumar',
// //     mobile: '9876543210',
// //     email: 'rajesh.kumar@email.com',
// //     address: '123, Temple Road, Near City Mall',
// //     city: 'Bangalore',
// //     state: 'Karnataka',
// //     pincode: '560001'
// //   };

// //   // Group sevas by parent seva and deity
// //   const groupedSevas = cart.reduce((acc, item) => {
// //     const parentSevaName = item.parentSeva ? `${item.parentSeva.name}` : 'Individual Sevas';
// //     if (!acc[parentSevaName]) {
// //       acc[parentSevaName] = {};
// //     }
// //     if (!acc[parentSevaName][item.deityName]) {
// //       acc[parentSevaName][item.deityName] = [];
// //     }
// //     acc[parentSevaName][item.deityName].push(...item.sevas);
// //     return acc;
// //   }, {});

// //   const handleSubmit = async () => {
// //     const bookingData = {
// //       devoteeDetails,
// //       sevas: cart,
// //       totalAmount,
// //       bookingDate: new Date().toISOString(),
// //       status: 'PENDING'
// //     };

// //     try {
// //       const response = await fetch('http://localhost:2002/bookings', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify(bookingData)
// //       });

// //       if (!response.ok) throw new Error('Booking failed');
// //       const result = await response.json();
// //       localStorage.removeItem('sevaCart');
// //       navigate('/booking/success', { state: { bookingId: result.bookingId } });
// //     } catch (error) {
// //       alert('Failed to process booking. Please try again.');
// //       console.error('Booking error:', error);
// //     }
// //   };

// //   const handlePrint = () => {
// //     window.print();
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white p-6">
// //       <div className="max-w-4xl mx-auto">
// //         {/* Screen View */}
// //         <div>
// //           <h1 className="text-3xl font-bold text-orange-600 mb-6 print:hidden">Booking Confirmation</h1>
          
// //           {/* Temple Header - Visible in both views */}
// //           <div className="text-center mb-6 hidden print:block">
// //             <h1 className="text-3xl font-bold mb-2">Sri Temple Trust</h1>
// //             <p className="text-gray-600">123 Temple Street, Bangalore, Karnataka - 560001</p>
// //             <p className="text-gray-600">Phone: +91 80 1234 5678</p>
// //             <div className="border-b-2 border-gray-800 mt-4"></div>
// //           </div>

// //           {/* Receipt Details - Visible in both views */}
// //           <div className="flex justify-between mb-6 print:mt-4">
// //             <div>
// //               <p className="font-bold">Receipt No: {receiptNumber}</p>
// //               <p>Date: {currentDate}</p>
// //             </div>
// //           </div>

// //           {/* Devotee Details */}
// //           <div className="bg-white rounded-lg shadow-md p-6 mb-6 print:shadow-none">
// //             <h2 className="text-xl font-semibold mb-4">Devotee Details</h2>
// //             <div className="grid grid-cols-2 gap-4">
// //               <div>
// //                 <p><strong>Name:</strong> {devoteeDetails.name}</p>
// //                 <p><strong>Mobile:</strong> {devoteeDetails.mobile}</p>
// //                 <p><strong>Email:</strong> {devoteeDetails.email}</p>
// //               </div>
// //               <div>
// //                 <p><strong>Address:</strong> {devoteeDetails.address}</p>
// //                 <p><strong>City:</strong> {devoteeDetails.city}, {devoteeDetails.state}</p>
// //                 <p><strong>Pincode:</strong> {devoteeDetails.pincode}</p>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Seva Details */}
// //           <div className="bg-white rounded-lg shadow-md p-6 mb-6 print:shadow-none">
// //             <h2 className="text-xl font-semibold mb-4">Selected Sevas</h2>
// //             {Object.entries(groupedSevas).map(([parentSeva, deities]) => (
// //               <div key={parentSeva} className="mb-6">
// //                 <h3 className="text-lg font-medium text-orange-600 mb-2">{parentSeva}</h3>
// //                 {Object.entries(deities).map(([deity, sevas]) => (
// //                   <div key={deity} className="mb-4">
// //                     <h4 className="font-medium text-gray-700 mb-2">{deity}</h4>
// //                     <div className="overflow-x-auto">
// //                       <table className="w-full border-collapse">
// //                         <thead>
// //                           <tr className="bg-gray-50">
// //                             <th className="border border-gray-300 p-2 text-left">Seva Name</th>
// //                             <th className="border border-gray-300 p-2 text-left">Date</th>
// //                             <th className="border border-gray-300 p-2 text-left">Quantity</th>
// //                             <th className="border border-gray-300 p-2 text-left">Amount</th>
// //                           </tr>
// //                         </thead>
// //                         <tbody>
// //                           {sevas.map((seva, index) => (
// //                             <tr key={index}>
// //                               <td className="border border-gray-300 p-2">{seva.sevaName}</td>
// //                               <td className="border border-gray-300 p-2">
// //                                 {new Date(seva.performanceDate).toLocaleDateString()}
// //                               </td>
// //                               <td className="border border-gray-300 p-2">{seva.quantity}</td>
// //                               <td className="border border-gray-300 p-2">₹{seva.amount.toFixed(2)}</td>
// //                             </tr>
// //                           ))}
// //                         </tbody>
// //                       </table>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             ))}
// //             <div className="mt-4 text-right">
// //               <p className="text-lg font-semibold">Total Amount: ₹{totalAmount.toFixed(2)}</p>
// //             </div>
// //           </div>

// //           {/* Action Buttons */}
// //           <div className="flex justify-between gap-4 print:hidden">
// //             <button
// //               type="button"
// //               onClick={() => navigate(-1)}
// //               className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-md"
// //             >
// //               Back
// //             </button>
// //             <button
// //               type="button"
// //               onClick={handlePrint}
// //               className="flex-1 bg-orange-100 hover:bg-orange-200 text-orange-700 font-medium py-2 px-4 rounded-md"
// //             >
// //               Print Summary
// //             </button>
// //             <button
// //               type="button"
// //               onClick={handleSubmit}
// //               className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-md"
// //             >
// //               Confirm Booking
// //             </button>
// //           </div>

// //           {/* Print Footer */}
// //           <div className="mt-12 pt-8 border-t text-center text-sm text-gray-600 hidden print:block">
// //             <p>This is a computer generated receipt and doesn't require signature.</p>
// //             <p>Thank you for your devotion. Om Namah Shivaya 🕉</p>
// //             <p className="mt-4">For any queries, please contact: +91 80 1234 5678 or email: info@temple.com</p>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default BookingConfirmation;

// import React from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';

// const BookingConfirmation = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const cart = location.state?.cart || [];
//   const totalAmount = location.state?.totalAmount || 0;
//   const receiptNumber = `RECEIPT${Date.now().toString().slice(-6)}`;
//   const currentDate = new Date().toLocaleDateString();

//   // Get devotee details from localStorage
//   const devoteeDetails = JSON.parse(localStorage.getItem('currentDevotee')) || {
//     fullName: '',
//     firstName: '',
//     middleName: '',
//     lastName: '',
//     mobile: '',
//     email: '',
//     addressLane1: '',
//     addressLane2: '',
//     city: '',
//     state: '',
//     pincode: ''
//   };

//   // Group sevas by parent seva and deity
//   const groupedSevas = cart.reduce((acc, item) => {
//     const parentSevaName = item.parentSeva ? `${item.parentSeva.name}` : 'Individual Sevas';
//     if (!acc[parentSevaName]) {
//       acc[parentSevaName] = {};
//     }
//     if (!acc[parentSevaName][item.deityName]) {
//       acc[parentSevaName][item.deityName] = [];
//     }
//     acc[parentSevaName][item.deityName].push(...item.sevas);
//     return acc;
//   }, {});

// const handleSubmit = async () => {
//   const userType = localStorage.getItem('userType');
//   console.log('User Type:', userType);
//   if (userType === 'admin') {
//     // For admin users, redirect to dummy page
//     navigate('/payment', { 
//       state: { 
//         bookingData: {
//           devoteeDetails,
//           sevas: cart,
//           totalAmount,
//           bookingDate: new Date().toISOString()
//         }
//       }
//     });
//   } else {
//     // For regular users
//     try {
//       // Show notification that payment gateway integration is pending
//       alert('Payment gateway integration is pending. Please try again later.');
//       // You can add RazorPay integration here in the future
//     } catch (error) {
//       alert('Failed to process booking. Please try again.');
//       console.error('Booking error:', error);
//     }
//   }
// };
//   const handlePrint = () => {
//     window.print();
//   };

//   // Format address for display
//   const formattedAddress = [
//     devoteeDetails.addressLane1,
//     devoteeDetails.addressLane2,
//   ].filter(Boolean).join(', ');

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white p-6">
//       <div className="max-w-4xl mx-auto">
//         {/* Screen View */}
//         <div>
//           <h1 className="text-3xl font-bold text-orange-600 mb-6 print:hidden">Booking Confirmation</h1>
          
//           {/* Temple Header - Visible in both views */}
//           <div className="text-center mb-6 hidden print:block">
//             <h1 className="text-3xl font-bold mb-2">Sri Temple Trust</h1>
//             <p className="text-gray-600">123 Temple Street, Bangalore, Karnataka - 560001</p>
//             <p className="text-gray-600">Phone: +91 80 1234 5678</p>
//             <div className="border-b-2 border-gray-800 mt-4"></div>
//           </div>

//           {/* Receipt Details - Visible in both views */}
//           <div className="flex justify-between mb-6 print:mt-4">
//             <div>
//               <p className="font-bold">Receipt No: {receiptNumber}</p>
//               <p>Date: {currentDate}</p>
//             </div>
//           </div>

//           {/* Devotee Details */}
//           <div className="bg-white rounded-lg shadow-md p-6 mb-6 print:shadow-none">
//             <h2 className="text-xl font-semibold mb-4">Devotee Details</h2>
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <p><strong>Name:</strong> {devoteeDetails.fullName || `${devoteeDetails.firstName} ${devoteeDetails.middleName} ${devoteeDetails.lastName}`.trim()}</p>
//                 <p><strong>Mobile:</strong> {devoteeDetails.mobile}</p>
//                 <p><strong>Email:</strong> {devoteeDetails.email}</p>
//               </div>
//               <div>
//                 <p><strong>Address:</strong> {formattedAddress}</p>
//                 <p><strong>City:</strong> {devoteeDetails.city}, {devoteeDetails.state}</p>
//                 <p><strong>Pincode:</strong> {devoteeDetails.pincode}</p>
//               </div>
//             </div>
//           </div>

//           {/* Seva Details */}
//           <div className="bg-white rounded-lg shadow-md p-6 mb-6 print:shadow-none">
//             <h2 className="text-xl font-semibold mb-4">Selected Sevas</h2>
//             {Object.entries(groupedSevas).map(([parentSeva, deities]) => (
//               <div key={parentSeva} className="mb-6">
//               {/* <h3 className="text-lg font-medium text-orange-600 mb-2">{parentSeva}</h3> */}
//                 {Object.entries(deities).map(([deity, sevas]) => (
//                   <div key={deity} className="mb-4">
//                     <h4 className="font-medium text-gray-700 mb-2">{deity}</h4>
//                     <div className="overflow-x-auto">
//                       <table className="w-full border-collapse">
//                         <thead>
//                           <tr className="bg-gray-50">
//                             <th className="border border-gray-300 p-2 text-left">Seva Name</th>
//                             <th className="border border-gray-300 p-2 text-left">Date</th>
//                             <th className="border border-gray-300 p-2 text-left">Quantity</th>
//                             <th className="border border-gray-300 p-2 text-left">Amount</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {sevas.map((seva, index) => (
//                             <tr key={index}>
//                               <td className="border border-gray-300 p-2">{seva.sevaName}</td>
//                               <td className="border border-gray-300 p-2">
//                                 {new Date(seva.performanceDate).toLocaleDateString()}
//                               </td>
//                               <td className="border border-gray-300 p-2">{seva.quantity}</td>
//                               <td className="border border-gray-300 p-2">₹{seva.amount.toFixed(2)}</td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ))}
//             <div className="mt-4 text-right">
//               <p className="text-lg font-semibold">Total Amount: ₹{totalAmount.toFixed(2)}</p>
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex justify-between gap-4 print:hidden">
//             <button
//               type="button"
//               onClick={() => navigate(-1)}
//               className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-md"
//             >
//               Back
//             </button>
//             <button
//               type="button"
//               onClick={handlePrint}
//               className="flex-1 bg-orange-100 hover:bg-orange-200 text-orange-700 font-medium py-2 px-4 rounded-md"
//             >
//               Print Summary
//             </button>
//             <button
//               type="button"
//               onClick={handleSubmit}
//               className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-md"
//             >
//               Confirm Booking
//             </button>
//           </div>

//           {/* Print Footer */}
//           <div className="mt-12 pt-8 border-t text-center text-sm text-gray-600 hidden print:block">
//             <p>This is a computer generated receipt and doesn't require signature.</p>
//             <p>Thank you for your devotion. Om Namah Shivaya 🕉</p>
//             <p className="mt-4">For any queries, please contact: +91 80 1234 5678 or email: info@temple.com</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookingConfirmation;


// import React from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';

// const BookingConfirmation = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const cart = location.state?.cart || [];
//   const totalAmount = location.state?.totalAmount || 0;
//   const receiptNumber = `RECEIPT${Date.now().toString().slice(-6)}`;
//   const currentDate = new Date().toLocaleDateString();

//   // Hardcoded devotee details
//   const devoteeDetails = {
//     name: 'Rajesh Kumar',
//     mobile: '9876543210',
//     email: 'rajesh.kumar@email.com',
//     address: '123, Temple Road, Near City Mall',
//     city: 'Bangalore',
//     state: 'Karnataka',
//     pincode: '560001'
//   };

//   // Group sevas by parent seva and deity
//   const groupedSevas = cart.reduce((acc, item) => {
//     const parentSevaName = item.parentSeva ? `${item.parentSeva.name}` : 'Individual Sevas';
//     if (!acc[parentSevaName]) {
//       acc[parentSevaName] = {};
//     }
//     if (!acc[parentSevaName][item.deityName]) {
//       acc[parentSevaName][item.deityName] = [];
//     }
//     acc[parentSevaName][item.deityName].push(...item.sevas);
//     return acc;
//   }, {});

//   const handleSubmit = async () => {
//     const bookingData = {
//       devoteeDetails,
//       sevas: cart,
//       totalAmount,
//       bookingDate: new Date().toISOString(),
//       status: 'PENDING'
//     };

//     try {
//       const response = await fetch('http://localhost:2002/bookings', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(bookingData)
//       });

//       if (!response.ok) throw new Error('Booking failed');
//       const result = await response.json();
//       localStorage.removeItem('sevaCart');
//       navigate('/booking/success', { state: { bookingId: result.bookingId } });
//     } catch (error) {
//       alert('Failed to process booking. Please try again.');
//       console.error('Booking error:', error);
//     }
//   };

//   const handlePrint = () => {
//     window.print();
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white p-6">
//       <div className="max-w-4xl mx-auto">
//         {/* Screen View */}
//         <div>
//           <h1 className="text-3xl font-bold text-orange-600 mb-6 print:hidden">Booking Confirmation</h1>
          
//           {/* Temple Header - Visible in both views */}
//           <div className="text-center mb-6 hidden print:block">
//             <h1 className="text-3xl font-bold mb-2">Sri Temple Trust</h1>
//             <p className="text-gray-600">123 Temple Street, Bangalore, Karnataka - 560001</p>
//             <p className="text-gray-600">Phone: +91 80 1234 5678</p>
//             <div className="border-b-2 border-gray-800 mt-4"></div>
//           </div>

//           {/* Receipt Details - Visible in both views */}
//           <div className="flex justify-between mb-6 print:mt-4">
//             <div>
//               <p className="font-bold">Receipt No: {receiptNumber}</p>
//               <p>Date: {currentDate}</p>
//             </div>
//           </div>

//           {/* Devotee Details */}
//           <div className="bg-white rounded-lg shadow-md p-6 mb-6 print:shadow-none">
//             <h2 className="text-xl font-semibold mb-4">Devotee Details</h2>
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <p><strong>Name:</strong> {devoteeDetails.name}</p>
//                 <p><strong>Mobile:</strong> {devoteeDetails.mobile}</p>
//                 <p><strong>Email:</strong> {devoteeDetails.email}</p>
//               </div>
//               <div>
//                 <p><strong>Address:</strong> {devoteeDetails.address}</p>
//                 <p><strong>City:</strong> {devoteeDetails.city}, {devoteeDetails.state}</p>
//                 <p><strong>Pincode:</strong> {devoteeDetails.pincode}</p>
//               </div>
//             </div>
//           </div>

//           {/* Seva Details */}
//           <div className="bg-white rounded-lg shadow-md p-6 mb-6 print:shadow-none">
//             <h2 className="text-xl font-semibold mb-4">Selected Sevas</h2>
//             {Object.entries(groupedSevas).map(([parentSeva, deities]) => (
//               <div key={parentSeva} className="mb-6">
//                 <h3 className="text-lg font-medium text-orange-600 mb-2">{parentSeva}</h3>
//                 {Object.entries(deities).map(([deity, sevas]) => (
//                   <div key={deity} className="mb-4">
//                     <h4 className="font-medium text-gray-700 mb-2">{deity}</h4>
//                     <div className="overflow-x-auto">
//                       <table className="w-full border-collapse">
//                         <thead>
//                           <tr className="bg-gray-50">
//                             <th className="border border-gray-300 p-2 text-left">Seva Name</th>
//                             <th className="border border-gray-300 p-2 text-left">Date</th>
//                             <th className="border border-gray-300 p-2 text-left">Quantity</th>
//                             <th className="border border-gray-300 p-2 text-left">Amount</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {sevas.map((seva, index) => (
//                             <tr key={index}>
//                               <td className="border border-gray-300 p-2">{seva.sevaName}</td>
//                               <td className="border border-gray-300 p-2">
//                                 {new Date(seva.performanceDate).toLocaleDateString()}
//                               </td>
//                               <td className="border border-gray-300 p-2">{seva.quantity}</td>
//                               <td className="border border-gray-300 p-2">₹{seva.amount.toFixed(2)}</td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ))}
//             <div className="mt-4 text-right">
//               <p className="text-lg font-semibold">Total Amount: ₹{totalAmount.toFixed(2)}</p>
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex justify-between gap-4 print:hidden">
//             <button
//               type="button"
//               onClick={() => navigate(-1)}
//               className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-md"
//             >
//               Back
//             </button>
//             <button
//               type="button"
//               onClick={handlePrint}
//               className="flex-1 bg-orange-100 hover:bg-orange-200 text-orange-700 font-medium py-2 px-4 rounded-md"
//             >
//               Print Summary
//             </button>
//             <button
//               type="button"
//               onClick={handleSubmit}
//               className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-md"
//             >
//               Confirm Booking
//             </button>
//           </div>

//           {/* Print Footer */}
//           <div className="mt-12 pt-8 border-t text-center text-sm text-gray-600 hidden print:block">
//             <p>This is a computer generated receipt and doesn't require signature.</p>
//             <p>Thank you for your devotion. Om Namah Shivaya 🕉</p>
//             <p className="mt-4">For any queries, please contact: +91 80 1234 5678 or email: info@temple.com</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookingConfirmation;

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';


const BookingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cart = location.state?.cart || [];
  const totalAmount = location.state?.totalAmount || 0;
  const receiptNumber = `RECEIPT${Date.now().toString().slice(-6)}`;
  const currentDate = new Date().toLocaleDateString();
  const [entityDetails, setEntityDetails] = useState(null);
  // Get devotee details from localStorage
  const devoteeDetails = JSON.parse(localStorage.getItem('currentDevotee')) || {
    fullName: '',
    firstName: '',
    middleName: '',
    lastName: '',
    mobile: '',
    email: '',
    addressLane1: '',
    addressLane2: '',
    city: '',
    state: '',
    pincode: ''
  };

  // Group sevas by parent seva and deity
  const groupedSevas = cart.reduce((acc, item) => {
    const parentSevaName = item.parentSeva ? `${item.parentSeva.name}` : 'Individual Sevas';
    if (!acc[parentSevaName]) {
      acc[parentSevaName] = {};
    }
    if (!acc[parentSevaName][item.deityName]) {
      acc[parentSevaName][item.deityName] = [];
    }
    acc[parentSevaName][item.deityName].push(...item.sevas);
    return acc;
  }, {});

  useEffect(() => {
    const entityCode = localStorage.getItem('entityCode');
    if (entityCode) {
      axios.get(`http://localhost:2002/entity/${entityCode}`)
        .then(response => setEntityDetails(response.data))
        .catch(error => console.error('Error:', error));
    }
  }, []);
// const handleSubmit = async () => {
//   const userType = localStorage.getItem('userType');
//   console.log('User Type:', userType);
//   if (userType === 'admin') {
//     // For admin users, redirect to dummy page
//     navigate('/payment', { 
//       state: { 
//         bookingData: {
//           devoteeDetails,
//           sevas: cart,
//           totalAmount,
//           bookingDate: new Date().toISOString()
//         }
//       }
//     });
//   } else {
//     // For regular users
//     try {
//       // Show notification that payment gateway integration is pending
//       alert('Payment gateway integration is pending. Please try again later.');
//       // You can add RazorPay integration here in the future
//     } catch (error) {
//       alert('Failed to process booking. Please try again.');
//       console.error('Booking error:', error);
//     }
//   }
// };



// const handleSubmit = async () => {
//   const userType = localStorage.getItem('userType');
//   const entityCode = localStorage.getItem('entityCode');

//   const bookingData = {
//     devoteeDetails,
//     sevas: cart,
//     totalAmount,
//     bookingDate: new Date().toISOString()
//   };

//   try {
//     const ssSevas = cart.filter(item => 
//       item.sevas.some(seva => seva.sevaShashwath === 'SS')
//     );

//     if (ssSevas.length > 0) {
//       const response = await axios.post(
//         `http://localhost:2002/shashwath-seva/${entityCode}/book`,
//         bookingData
//       );
//       console.log('Shashwath seva booking successful:', response.data);
//     }

//     if (userType === 'admin') {
//       navigate('/payment', { 
//         state: { bookingData }
//       });
//     } else {
//       alert('Payment gateway integration pending. Your booking is confirmed.');
//       localStorage.removeItem('sevaCart');
//       navigate('/booking/success');
//     }
//   } catch (error) {
//     console.error('Booking error:', error);
//     alert('Failed to process booking. Please try again.');
//   }
// };


const handleSubmit = async () => {
  const userType = localStorage.getItem('userType');
  const entityCode = localStorage.getItem('entityCode');
  const devoteeDetails = JSON.parse(localStorage.getItem('currentDevotee'));

  // Group sevas by type for better organization
  const bookingData = {
    devoteeDetails,
    sevas: cart.map(item => ({
      ...item,
      sevas: item.sevas.map(seva => ({
        ...seva,
        sevaShashwath: seva.sevaShashwath || 'O',
        performanceDate: seva.performanceDate || new Date().toISOString(),
        inMemoryOf: seva.ssDetails?.inMemoryOf || null,
        deityId: item.deityId,
        deityName: item.deityName,
        prasadDelivery: item.prasadDelivery
      }))
    })),
    totalAmount,
    bookingDate: new Date().toISOString()
  };

  try {
    const response = await axios.post(
      `http://localhost:2002/shashwath-seva/${entityCode}/book`,
      bookingData
    );
    
    console.log('All sevas booking successful:', response.data);

    if (userType === 'admin') {
      navigate('/payment', { state: { bookingData } });
    } else {
      // Clear all related localStorage items
      localStorage.removeItem('sevaCart');
      localStorage.removeItem('ssSevaDetails');
      localStorage.removeItem('selectedSevas');
      
      navigate('/booking/success', { 
        state: { 
          bookingId: response.data.custCode,
          message: 'Your seva booking has been confirmed successfully.',
          sevaTypes: {
            hasShashwath: cart.some(item => item.sevas.some(seva => seva.sevaShashwath === 'SS')),
            hasNityanidhi: cart.some(item => item.sevas.some(seva => seva.sevaShashwath === 'N')),
            hasOther: cart.some(item => item.sevas.some(seva => seva.sevaShashwath === 'O'))
          }
        }
      });
    }
  } catch (error) {
    console.error('Booking error:', error);
    alert('Failed to process booking. Please try again.');
  }
};

  const handlePrint = () => {
    window.print();
  };

  // const formatSevaDate = (seva) => {
  //   if (seva.sevaShashwath === 'SS') {
  //     if (seva.ssDetails?.calendarType === 'ritual') {
  //       return `${seva.ssDetails.maasaDesc} ${seva.ssDetails.paksha} ${seva.ssDetails.tithiDesc}`;
  //     }
  //     return `${seva.ssDetails.month}/${seva.ssDetails.day}`;
  //   }
  //   return new Date(seva.performanceDate).toLocaleDateString();
  // };

  const formatSevaDate = (seva) => {
    if (seva.sevaShashwath === 'SS') {
      if (seva.ssDetails?.calendarType === 'ritual') {
        const maasaDesc = seva.ssDetails.maasaDesc || '';
        const paksha = seva.ssDetails.paksha === 'S' ? 'Shukla' : 'Krishna';
        const tithiDesc = seva.ssDetails.tithiDesc || '';
        return `${maasaDesc} ${paksha} ${tithiDesc}`;
      }
      return `${seva.ssDetails?.month || ''}/${seva.ssDetails?.day || ''}`;
    }
    return new Date(seva.performanceDate).toLocaleDateString('en-IN');
  };
  
  

  // Format address for display
  const formattedAddress = [
    devoteeDetails.addressLane1,
    devoteeDetails.addressLane2,
  ].filter(Boolean).join(', ');

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Screen View */}
        <div>
          <h1 className="text-3xl font-bold text-orange-600 mb-6 print:hidden">Booking Confirmation</h1>
          
          {/* Temple Header - Visible in both views */}
          <div className="text-center mb-6 hidden print:block">
            {/* <h1 className="text-3xl font-bold mb-2">Sri Temple Trust</h1>
            <p className="text-gray-600">123 Temple Street, Bangalore, Karnataka - 560001</p>
            <p className="text-gray-600">Phone: +91 80 1234 5678</p>
            <div className="border-b-2 border-gray-800 mt-4"></div> */}
            <h1 className="text-3xl font-bold mb-2">{entityDetails?.name || 'Temple Trust'}</h1>
  <p className="text-gray-600">
    {[entityDetails?.address1, entityDetails?.address2, entityDetails?.address3]
      .filter(Boolean)
      .join(', ')}
  </p>
  <p className="text-gray-600">Phone: {entityDetails?.phone}</p>
  <div className="border-b-2 border-gray-800 mt-4"></div>
          </div>

          {/* Receipt Details - Visible in both views */}
          <div className="flex justify-between mb-6 print:mt-4">
            <div>
              <p className="font-bold">Receipt No: {receiptNumber}</p>
              <p>Date: {currentDate}</p>
            </div>
          </div>

          {/* Devotee Details */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6 print:shadow-none">
            <h2 className="text-xl font-semibold mb-4">Devotee Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p><strong>Name:</strong> {devoteeDetails.fullName || `${devoteeDetails.firstName} ${devoteeDetails.middleName} ${devoteeDetails.lastName}`.trim()}</p>
                <p><strong>Mobile:</strong> {devoteeDetails.mobile}</p>
                <p><strong>Email:</strong> {devoteeDetails.email}</p>
              </div>
              <div>
                <p><strong>Address:</strong> {formattedAddress}</p>
                <p><strong>City:</strong> {devoteeDetails.city}, {devoteeDetails.state}</p>
                <p><strong>Pincode:</strong> {devoteeDetails.pincode}</p>
              </div>
            </div>
          </div>

          {/* Seva Details */}
  
<div className="bg-white rounded-lg shadow-md p-6 mb-6 print:shadow-none">
  <h2 className="text-xl font-semibold mb-4">Selected Sevas</h2>
  <table className="w-full border-collapse">
    <thead>
      <tr className="bg-gray-50">
        <th className="border border-gray-300 p-2 text-left">Seva Name</th>
        <th className="border border-gray-300 p-2 text-left">Date</th>
        <th className="border border-gray-300 p-2 text-left">Quantity</th>
        <th className="border border-gray-300 p-2 text-left">Amount</th>
      </tr>
    </thead>
    <tbody>
    {Object.entries(groupedSevas).map(([parentSeva, deities]) => 
  Object.entries(deities).map(([deity, sevas]) => 
    sevas.map((seva, index) => {
      // Find the corresponding cart item for this seva
      const cartItem = cart.find(item => 
        item.sevas.some(s => s.sevaCode === seva.sevaCode)
      );
      
      return (
        <tr key={index}>
          <td className="border border-gray-300 p-2">{seva.sevaName}</td>
          <td className="border border-gray-300 p-2">{cartItem?.date}</td>
          <td className="border border-gray-300 p-2">{seva.quantity}</td>
          <td className="border border-gray-300 p-2">₹{seva.amount.toFixed(2)}</td>
        </tr>
      );
    })
  )
)}

    </tbody>
  </table>
  <div className="mt-4 text-right">
    <p className="text-lg font-semibold">Total Amount: ₹{totalAmount.toFixed(2)}</p>
  </div>
</div>


          {/* Action Buttons */}
          <div className="flex justify-between gap-4 print:hidden">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-md"
            >
              Back
            </button>
            <button
              type="button"
              onClick={handlePrint}
              className="flex-1 bg-orange-100 hover:bg-orange-200 text-orange-700 font-medium py-2 px-4 rounded-md"
            >
              Print Summary
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-md"
            >
              Confirm Booking
            </button>
          </div>

          {/* Print Footer */}
          <div className="mt-12 pt-8 border-t text-center text-sm text-gray-600 hidden print:block">
            <p>This is a computer generated receipt and doesn't require signature.</p>
            <p>Thank you for your devotion. Om Namah Shivaya 🕉</p>
            <p className="mt-4">For any queries, please contact: +91 80 1234 5678 or email: info@temple.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;