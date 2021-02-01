module.exports = (sequelize, DataTypes) => {
  const DigitalRecordType = sequelize.define(
    'DigitalRecordType',
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
      code: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false,
      },
    },
    {
      tableName: 'DigitalRecordTypes',
    }
  )

  return DigitalRecordType
}
