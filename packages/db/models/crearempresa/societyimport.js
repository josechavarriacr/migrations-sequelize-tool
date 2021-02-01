module.exports = (sequelize, DataTypes) => {
  const SocietyImport = sequelize.define(
    'SocietyImport',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      teid: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      procedureId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      error: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      stack: {
        type: DataTypes.STRING(10000),
        allowNull: true,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      isHistorical: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      tableName: 'SocietyImports',
    }
  )

  return SocietyImport
}
