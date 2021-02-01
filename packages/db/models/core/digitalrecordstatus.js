module.exports = (sequelize, DataTypes) => {
  const DigitalRecordStatus = sequelize.define(
    'DigitalRecordStatus',
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
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      message: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      code: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false,
      },
    },
    {
      tableName: 'DigitalRecordStatuses',
    }
  )

  return DigitalRecordStatus
}
