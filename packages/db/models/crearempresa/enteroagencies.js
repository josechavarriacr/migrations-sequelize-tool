module.exports = (sequelize, DataTypes) => {
  const EnteroAgency = sequelize.define(
    'EnteroAgency',
    {
      Code: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
        field: 'code',
      },
      Description: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'description',
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
    },
    {
      tableName: 'EnteroAgencies',
    }
  )

  return EnteroAgency
}
