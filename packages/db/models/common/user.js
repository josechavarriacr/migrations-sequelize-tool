module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      secondlastname: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        trim: true,
        unique: true,
      },
      hasSignature: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      fullName: {
        type: DataTypes.VIRTUAL,
        get() {
          return `${this.name} ${this.lastname}${
            this.secondlastname ? ` ${this.secondlastname}` : ''
          }`
        },
      },
      verify: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      status: {
        // 0: Inactivo, 1: Activo
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      lastPasswordChange: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      passwordExpireAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      tableName: 'Users',
    }
  )

  User.associate = models => {
    User.hasMany(models.UserRole, {
      foreignKey: 'userId',
    })
    User.hasOne(models.DigitalRecord, {
      foreignKey: 'userId',
    })
    User.hasOne(models.OperatorData, {
      foreignKey: 'userId',
      as: 'OperatorData',
    })
  }

  // Lifecycle Callbacks
  User.afterFind(result => {
    const tempResult = result
    if (tempResult && !tempResult.secondlastname) {
      tempResult.secondlastname = ''
    }
    return tempResult
  })

  User.afterUpdate(result => {
    const tempResult = result
    if (tempResult && !tempResult.secondlastname) {
      tempResult.secondlastname = ''
    }
    return tempResult
  })

  return User
}
