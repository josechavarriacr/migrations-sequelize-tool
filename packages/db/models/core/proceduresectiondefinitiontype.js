module.exports = (sequelize, DataTypes) => {
  const ProcedureSectionDefinitionType = sequelize.define(
    'ProcedureSectionDefinitionType',
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
      order: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      code: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        enum: (-1, 0, 1),
      },
    },
    {
      tableName: 'ProcedureSectionDefinitionTypes',
    }
  )

  return ProcedureSectionDefinitionType
}
