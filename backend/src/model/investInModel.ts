import { DataTypes } from "sequelize";
import sequelize from "../config/databaseConfig";
import User from "./userModel";


const InvestIn = sequelize.define('InvestIn', {
    id: {
        type: DataTypes.STRING,
    },
    company: {
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
export default InvestIn;