module.exports = (sequelize, DataTypes) => {
  const OrganizationStatus = sequelize.define(
    'OrganizationStatus',
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
      code: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false,
      },
    },
    {
      tableName: 'OrganizationStatuses',
    }
  )

  return OrganizationStatus
}
