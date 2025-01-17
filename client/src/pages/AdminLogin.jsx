// // // src/pages/AdminLogin.jsx
// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import Button from '../components/Common/Button';
// // import axios from '../../utils/axios';

// // const AdminLogin = () => {
// //   const [credentials, setCredentials] = useState({ username: '', password: '' });
// //   const [error, setError] = useState('');
// //   const navigate = useNavigate();

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setCredentials({ ...credentials, [name]: value });
// //   };

// //   const handleLogin = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await axios.get('http://localhost:2002/users',{
        
// //       });

// //       console.log(response.data,'check front end***********************************');
      

// //       if (response.status === 200) {
// //         const { token } = response.data;
// //         localStorage.setItem('token', token); // Save token in localStorage
// //         navigate('/admin/dashboard');
// //       }
// //     } catch (err) {
// //       setError(err.response?.data?.message || 'Invalid credentials. Please try again.');
// //     }
// //   };

// //   return (
// //     <div className="flex justify-center items-center h-screen bg-gradient-to-br from-yellow-50 to-white">
// //       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
// //         <h2 className="text-2xl font-bold text-center mb-6 text-yellow-600">Admin Login</h2>

// //         {error && <p className="text-red-500 text-center mb-4">{error}</p>}

// //         <form onSubmit={handleLogin} className="space-y-4">
// //           <div>
// //             <input
// //               type="text"
// //               name="username"
// //               placeholder="Username"
// //               value={credentials.username}
// //               onChange={handleChange}
// //               className="w-full p-3 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
// //             />
// //           </div>

// //           <div>
// //             <input
// //               type="password"
// //               name="password"
// //               placeholder="Password"
// //               value={credentials.password}
// //               onChange={handleChange}
// //               className="w-full p-3 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
// //             />
// //           </div>

// //           <div>
// //             <Button
// //               type="submit"
// //               className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-medium py-3 px-4 rounded-md transition-all duration-300"
// //             >
// //               Login
// //             </Button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AdminLogin;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Button from '../components/Common/Button';
// import axios from '../../utils/axios';
// import md5 from 'md5'; // Make sure to install this package: npm install md5

// const AdminLogin = () => {
//   const [credentials, setCredentials] = useState({ userId: '', password: '' });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCredentials({ ...credentials, [name]: value });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const hashedPassword = md5(credentials.password);
//       const response = await axios.post('http://localhost:2002/users/login', {
//         userId: credentials.userId,
//         password: hashedPassword
//       });

//       if (response.status === 200) {
//         const { token, entityCode, userId,created } = response.data;
//         console.log(response.data);
        
//         localStorage.setItem('token', token);
//         localStorage.setItem('entityCode', entityCode);
//         localStorage.setItem('userId', userId);
//         localStorage.setItem('created',created);
//         navigate('/admin/dashboard');
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || 'Invalid credentials. Please try again.');
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gradient-to-br from-yellow-50 to-white">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-bold text-center mb-6 text-yellow-600">Admin Login</h2>
//         {error && <p className="text-red-500 text-center mb-4">{error}</p>}
//         <form onSubmit={handleLogin} className="space-y-4">
//           <div>
//             <input
//               type="text"
//               name="userId"
//               placeholder="User ID"
//               value={credentials.userId}
//               onChange={handleChange}
//               className="w-full p-3 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
//             />
//           </div>
//           <div>
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={credentials.password}
//               onChange={handleChange}
//               className="w-full p-3 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
//             />
//           </div>
//           <div>
//             <Button
//               type="submit"
//               className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-medium py-3 px-4 rounded-md transition-all duration-300"
//             >
//               Login
//             </Button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Common/Button';
import axios from '../../utils/axios';
import md5 from 'md5';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ userId: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const hashedPassword = md5(credentials.password);
      const response = await axios.post('http://localhost:2002/users/login', {
        userId: credentials.userId,
        password: hashedPassword
      });

      if (response.status === 200) {
        const { token, entityCode, userId, created } = response.data;
        
        // Set all required localStorage items
        localStorage.setItem('token', token);
        localStorage.setItem('entityCode', entityCode);
        localStorage.setItem('userId', userId);
        localStorage.setItem('created', created);
        localStorage.setItem('isLoggedIn', 'true'); // Add this for navbar visibility
        localStorage.setItem('ENTITY_CODE', entityCode); // Add this for consistency with previous code
        localStorage.setItem('userType', 'admin');

        // Navigate to dashboard
        navigate('/admin/dashboard', { replace: true });
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid credentials. Please try again.');
      // Clear any existing auth data on error
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('token');
      localStorage.removeItem('entityCode');
      localStorage.removeItem('userId');
      localStorage.removeItem('created');
      localStorage.removeItem('ENTITY_CODE');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-yellow-50 to-white">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6 text-yellow-600">Admin Login</h2>
        
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <input
              type="text"
              name="userId"
              placeholder="User ID"
              value={credentials.userId}
              onChange={handleChange}
              className="w-full p-3 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={credentials.password}
              onChange={handleChange}
              className="w-full p-3 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          
          <div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-medium py-3 px-4 rounded-md transition-all duration-300"
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
