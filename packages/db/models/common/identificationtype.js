module.exports = (sequelize, DataTypes) => {
  const IdentificationType = sequelize.define(
    'IdentificationType',
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
        unique: true,
      },
      status: {
        // 0: Inactivo, 1: Activo
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      code: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false,
      },
      isAvailableInSignUp: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      isAvailableInRecords: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      isAvailableInProcedures: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      tableName: 'IdentificationTypes',
    }
  )

  IdentificationType.associate = models => {
    IdentificationType.hasMany(models.IdentificationTypeApplication, {
      foreignKey: 'identificationTypeId',
    })
  }

  return IdentificationType
}
