import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import img from '../assets/venkataramana.png';


import axios from 'axios';
const BookingLanding = () => {
  const navigate = useNavigate();
  const [entityDesc, setEntityDesc] = useState('Temple');
  const entityCode = localStorage.getItem('ENTITY_CODE');

  useEffect(() => {
    const fetchEntityDesc = async () => {
      try {
        const response = await axios.get(`http://localhost:2002/entityDesc`, {
          params: { entityCode }
        });
        setEntityDesc(response.data[0].ENTITYNUM_DESCN);
      } catch (error) {
        console.error("Error fetching entity description:", error);
      }
    };

    if (entityCode) {
      fetchEntityDesc();
    }
  }, [entityCode]);

  return (
    <div className="flex flex-row h-screen bg-gradient-to-br from-orange-50 to-white">
      {/* Left Section: Sacred Symbol/Mandala */}
      <div className="w-1/2 flex items-center justify-center bg-white relative overflow-hidden p-8">
        <div className="w-full h-full flex items-center justify-center relative">
          {/* Decorative Mandala Background */}
          <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-orange-500 to-orange-300" />
          <div className="relative text-center space-y-6">
            {/* <h1 className="text-5xl font-bold text-orange-600 mb-4">
              ॐ
            </h1> */}
            <img 
  src={img} 
  alt="Venkataramana Temple"
  className="w-full max-w-xl object-contain" 
/>


            <p className="text-2xl text-orange-700 font-semibold">
              Divine Blessings
            </p>
            <p className="text-lg text-orange-600 italic">
              "Discover Peace Through Seva"
            </p>
          </div>
          
        </div>
      </div>

      {/* Right Section: Booking Content */}
      <div className="w-1/2 flex flex-col justify-center items-center p-12 bg-gradient-to-br from-white to-orange-50">
        <div className="bg-white p-10 rounded-2xl shadow-xl max-w-md w-full text-center transform hover:shadow-2xl transition-all duration-500">
         
          <h2 className="text-4xl font-bold text-orange-600 mb-6">
    {entityDesc} Seva Booking
</h2>
          
          <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-6" />
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Welcome to our sacred space. Book your sevas and connect with the divine through our seamless booking system.
          </p>
          <Link
            // to="/booking/devotee-form"
            to="/booking/phone"
            className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
          >
            Begin Seva Booking
          </Link>
          <p className="mt-6 text-sm text-gray-500">
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingLanding;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import img from '../assets/img/venkataramana.png';

// const BookingLanding = () => {
//   const navigate = useNavigate();
//   const [entityDesc, setEntityDesc] = useState('Temple');
//   const entityCode = localStorage.getItem('ENTITY_CODE');

//   useEffect(() => {
//     const fetchEntityDesc = async () => {
//       try {
//         const response = await axios.get(`http://localhost:2002/entityDesc`, {
//           params: { entityCode }
//         });
//         setEntityDesc(response.data[0].ENTITYNUM_DESCN);
//       } catch (error) {
//         console.error("Error fetching entity description:", error);
//       }
//     };

//     if (entityCode) {
//       fetchEntityDesc();
//     }
//   }, [entityCode]);

//   return (
//     <div className="flex flex-row h-screen bg-gradient-to-br from-orange-50 to-white">
//       {/* Left Section: Sacred Symbol/Mandala */}
//       <div className="w-1/2 flex items-center justify-center bg-white relative overflow-hidden p-8">
//         <div className="w-full h-full flex flex-col items-center justify-center relative">
//           {/* Decorative Background */}
//           <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-orange-500 to-orange-300" />
          
//           {/* Temple Symbols */}
//           <div className="flex justify-center items-center space-x-8 mb-8">
//             <img 
//               src="/assets/venkataramana.png" 
//               alt="Temple Symbols" 
//               className="w-full max-w-xl object-contain"
//             />
//           </div>

//           <div className="relative text-center space-y-6 mt-8">
//             <h1 className="text-5xl font-bold text-orange-600 mb-4">
//               ॐ
//             </h1>
//             <p className="text-2xl text-orange-700 font-semibold">
//               Divine Blessings
//             </p>
//             <p className="text-lg text-orange-600 italic">
//               "Discover Peace Through Seva"
//             </p>
//           </div>
          
//           <div className="absolute bottom-8 left-8 bg-white/90 p-3 rounded-lg shadow-lg">
//             <p className="text-orange-600 font-medium">
//               Begin Your Sacred Journey
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Right Section: Booking Content */}
//       <div className="w-1/2 flex flex-col justify-center items-center p-12 bg-gradient-to-br from-white to-orange-50">
//         <div className="bg-white p-10 rounded-2xl shadow-xl max-w-md w-full text-center transform hover:shadow-2xl transition-all duration-500">
//           <h2 className="text-4xl font-bold text-orange-600 mb-6">
//             {entityDesc} Seva Booking
//           </h2>
          
//           <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-6" />
//           <p className="text-lg text-gray-700 mb-8 leading-relaxed">
//             Welcome to our sacred space. Book your sevas and connect with the divine through our seamless booking system.
//           </p>
//           <Link
//             to="/booking/phone"
//             className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
//           >
//             Begin Seva Booking
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookingLanding;
