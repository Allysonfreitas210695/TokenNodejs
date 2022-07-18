import { DataTypes } from 'sequelize';
import { sequelize } from '../database';

const User = sequelize.define('User', {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false, 
    validate: {
      min: 6
    }
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  }
})

export { User };