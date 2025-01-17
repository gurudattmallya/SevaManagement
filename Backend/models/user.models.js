// //models/user.models.js


// import { getConnection } from "../utils/db.js";


// export class Users {

//     static async getDetails()
//     {
//         console.log('modelllll');
        
//         const conn = await getConnection();
//         console.log('after connection');
        
        
//         const res =  await conn.query('select * from users');
//         console.log(res,'result==============');

//         return res;
//     }

    
// }


// Backend: models/user.models.js
import { getConnection } from "../utils/db.js";

export class Users {
  static async validateUser(userId, hashedPassword) {
    const conn = await getConnection();
    const query = 'SELECT * FROM users WHERE USER_ID = ? AND password = ?';
    const [user] = await conn.query(query, [userId, hashedPassword]);
    return user;
  }

  static async getDetails() {
    const conn = await getConnection();
    const res = await conn.query('SELECT * FROM users');
    return res;
  }
}




