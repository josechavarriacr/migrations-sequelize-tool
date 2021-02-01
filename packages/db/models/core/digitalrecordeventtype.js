module.exports = (sequelize, DataTypes) => {
  const DigitalRecordEventType = sequelize.define(
    'DigitalRecordEventType',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      code: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        enum: (-1, 0, 1),
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      localesKey: {
        type: DataTypes.STRING(),
        allowNull: true,
      },
      registeredBy: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      updatedBy: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      tableName: 'DigitalRecordEventTypes',
    }
  )

  DigitalRecordEventType.associate = models => {
    DigitalRecordEventType.belongsTo(models.User, {
      foreignKey: 'registeredBy',
      as: 'registered',
    })
    DigitalRecordEventType.belongsTo(models.User, {
      foreignKey: 'updatedBy',
      as: 'updated',
    })
  }

  return DigitalRecordEventType
}
