
// //routes/users.js
// import express from 'express';
// import {Users} from '../models/user.models.js'

// const router = express.Router();

// // Define your routes here
// router.get('/', async (req, res) => {
//   console.log(req.query, 'check dataaaaa');
//   const data = await Users.getDetails();
//   res.send(data);
// });


// router.get('/getAllUsers', async (req, res) => {
//   const data = await Users.getUsers();
//   res.send(data);
// });

// // router.post('/getAllUsers', ()=>{

// // } , async (req, res) => {
// //   const data = await Users.getUsers();
// //   res.send(data);
// // });

// export default router;




// Backend: routes/users.js
import express from 'express';
import { Users } from '../models/user.models.js';
import jwt from 'jsonwebtoken'; // Make sure to install: npm install jsonwebtoken

const router = express.Router();
const JWT_SECRET = 'your-secret-key'; // In production, use environment variable

router.post('/login', async (req, res) => {
  try {
    const { userId, password } = req.body;
    const user = await Users.validateUser(userId, password);

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.USER_ID, entityCode: user.ENTITY_CODE, created:user.CR_BY},
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      token,
      entityCode: user.ENTITY_CODE,
      userId: user.USER_ID,
      created:user.CR_BY,
      message: 'Login successful'
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/', async (req, res) => {
  const data = await Users.getDetails();
  res.send(data);
});

export default router;
