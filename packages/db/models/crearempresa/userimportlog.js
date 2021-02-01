module.exports = (sequelize, DataTypes) => {
  const UserImportLog = sequelize.define(
    'UserImportLog',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      cedula: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      assistant: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      error: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      tableName: 'UserImportLogs',
    }
  )

  return UserImportLog
}
