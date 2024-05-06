import { DataTypes } from "sequelize";
import sequelize from "../config/databaseConfig";
import User from "./userModel";


// sequelize.sync()
//     .then(() => {
//         console.log('All models were synchronized successfully.');
//     })
//     .catch((error) => {
//         console.error('Error synchronizing models:', error);
//     });

const SPEND = sequelize.define('SpendOn', {
    id: {
        type: DataTypes.STRING,
        unique: true,
    },
    spendOn: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    userid: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        references: {
            model: User,
            key: 'userid'
        }
    }
});

export default SPEND;