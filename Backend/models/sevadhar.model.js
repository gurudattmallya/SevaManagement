import { getConnection } from "../utils/db.js";

export class Sevadhar {
    static async getAllSevadhar(entityCode) {
        const conn = await getConnection();
        const result = await conn.query(
            `SELECT * FROM sevadhar WHERE ENTITY_CODE = ?`,
            [entityCode]
        );
        return result;
    }
    static async getSevadharById(entityCode, custCode) {
        const conn = await getConnection();
        const result = await conn.query(
            `SELECT * FROM sevadhar WHERE ENTITY_CODE = ? AND CUST_CODE = ?`,
            [entityCode, custCode]
        );
        return result[0];
    }

    // static async createSevadhar(sevadharData) {
    //     const conn = await getConnection();
    //     // Get next CUST_CODE for the entity
    //     const [maxResult] = await conn.query(
    //         `SELECT COALESCE(MAX(CUST_CODE), 0) + 1 as nextCode 
    //          FROM sevadhar WHERE ENTITY_CODE = ?`,
    //         [sevadharData.ENTITY_CODE]
    //     );
    //     const custCode = maxResult.nextCode;
        
    //     // Add CUST_CODE to data
    //     const dataToInsert = { ...sevadharData, CUST_CODE: custCode };
        
    //     const result = await conn.query(
    //         `INSERT INTO sevadhar SET ?`,
    //         [dataToInsert]
    //     );
    //     return { ...result, CUST_CODE: custCode };
    // }
    static async createSevadhar(sevadharData) {
        const conn = await getConnection();
        try {
            // Get next CUST_CODE for the entity
            const [maxResult] = await conn.query(
                `SELECT COALESCE(MAX(CUST_CODE), 0) + 1 as nextCode 
                 FROM sevadhar WHERE ENTITY_CODE = ?`,
                [sevadharData.ENTITY_CODE]
            );
            
            const custCode = Number(maxResult.nextCode);
            
            const result = await conn.query(
                `INSERT INTO sevadhar (
                    CUST_CODE, ENTITY_CODE, CUST_NAME, CUST_GENDER,
                    CUST_MOBILE_NUM1, CUST_EMAIL_ID1, CUST_RES_ADDRESS1,
                    CUST_RES_CITY, CR_BY, CR_ON 
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [
                    custCode,
                    sevadharData.ENTITY_CODE,
                    sevadharData.CUST_NAME,
                    sevadharData.CUST_GENDER,
                    sevadharData.CUST_MOBILE_NUM1,
                    sevadharData.CUST_EMAIL_ID1,
                    sevadharData.CUST_RES_ADDRESS1,
                    sevadharData.CUST_RES_CITY,
                    sevadharData.CR_BY,
                    new Date(sevadharData.CR_ON),
                    1
                ]
            );
    
            // Handle BigInt serialization
            const serializedResult = JSON.parse(JSON.stringify(
                { ...result, CUST_CODE: custCode },
                (key, value) => typeof value === 'bigint' ? value.toString() : value
            ));
    
            return serializedResult;
        } catch (error) {
            console.log('Database error:', error);
            throw error;
        }
    }
    

    // static async updateSevadhar(entityCode, custCode, updateData) {
    //     const conn = await getConnection();
    //     const result = await conn.query(
    //         `UPDATE sevadhar SET ? WHERE ENTITY_CODE = ? AND CUST_CODE = ?`,
    //         [updateData, entityCode, custCode]
    //     );
    //     return result;
    // }


    // static async updateSevadhar(entityCode, custCode, updateData) {
    //     const conn = await getConnection();
    //     try {
    //         // Log incoming data for verification
    //         console.log('Updating sevadhar with:', { entityCode, custCode, updateData });
    
    //         const result = await conn.query(
    //             `UPDATE sevadhar 
    //              SET CUST_NAME = ?,
    //                  CUST_GENDER = ?,
    //                  CUST_MOBILE_NUM1 = ?,
    //                  CUST_EMAIL_ID1 = ?,
    //                  CUST_RES_ADDRESS1 = ?,
    //                  CUST_RES_CITY = ?,
    //                  MO_BY = ?,
    //                  MO_ON = CURRENT_TIMESTAMP,
                    
    //              WHERE ENTITY_CODE = ? AND CUST_CODE = ?`,
    //             [
    //                 updateData.CUST_NAME,
    //                 updateData.CUST_GENDER,
    //                 updateData.CUST_MOBILE_NUM1,
    //                 updateData.CUST_EMAIL_ID1,
    //                 updateData.CUST_RES_ADDRESS1,
    //                 updateData.CUST_RES_CITY,
    //                 updateData.MO_BY,
    //                 Number(entityCode),
    //                 Number(custCode)
    //             ]
    //         );
    
    //         // Return serialized result
    //         return {
    //             success: true,
    //             message: 'Sevadhar updated successfully',
    //             data: JSON.parse(JSON.stringify(result, (key, value) => 
    //                 typeof value === 'bigint' ? value.toString() : value
    //             ))
    //         };
    //     } catch (error) {
    //         console.log('Database update error:', error);
    //         throw new Error('Failed to update sevadhar: ' + error.message);
    //     }
    // }
    
    static async updateSevadhar(entityCode, custCode, updateData) {
        const conn = await getConnection();
        try {
            const result = await conn.query(
                `UPDATE sevadhar 
                 SET CUST_NAME = ?,
                     CUST_GENDER = ?,
                     CUST_MOBILE_NUM1 = ?,
                     CUST_EMAIL_ID1 = ?,
                     CUST_RES_ADDRESS1 = ?,
                     CUST_RES_CITY = ?,
                     MO_BY = ?,
                     MO_ON = NOW()
                 WHERE ENTITY_CODE = ? AND CUST_CODE = ?`,
                [
                    updateData.CUST_NAME,
                    updateData.CUST_GENDER,
                    updateData.CUST_MOBILE_NUM1,
                    updateData.CUST_EMAIL_ID1,
                    updateData.CUST_RES_ADDRESS1,
                    updateData.CUST_RES_CITY,
                    updateData.MO_BY,
                    entityCode,
                    custCode
                ]
            );
    
            return JSON.parse(JSON.stringify(result, (key, value) => 
                typeof value === 'bigint' ? value.toString() : value
            ));
        } catch (error) {
            console.log('Update error:', error);
            throw error;
        }
    }
    


    static async deleteSevadhar(entityCode, custCode) {
        const conn = await getConnection();
        const result = await conn.query(
            `DELETE FROM sevadhar WHERE ENTITY_CODE = ? AND CUST_CODE = ?`,
            [entityCode, custCode]
        );
        return result;
    }
}
