import { DataTypes } from "sequelize";
import sequelize from "../config/databaseConfig";
import User from "./userModel";
import Goal from "./goalModel";
import InvestIn from "./investInModel";

const Investment = sequelize.define('Investment', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    capital: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    company: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: InvestIn,
            key: 'company'
        }

    },
    userid: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: User,
            key: 'userid'
        }
    },
    Goal: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: Goal,
            key: 'goal'
        }
    }
});
export default Investment;