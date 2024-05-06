import { DataTypes } from "sequelize";
import sequelize from "../config/databaseConfig";
import User from "./userModel";
import EarningFrom from "./earningFromModel";

const Earning = sequelize.define('Earning', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    source: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: EarningFrom,
            key: 'source'
        }
    },
    userid: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: User,
            key: 'userid'
        }
    }
});

export default Earning;