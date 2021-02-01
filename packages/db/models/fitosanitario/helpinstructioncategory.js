module.exports = (sequelize, DataTypes) => {
  const HelpInstructionCategory = sequelize.define(
    'HelpInstructionCategory',
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
      tableName: 'HelpInstructionCategories',
      spanishName: 'Actividades',
      comment: 'Description FormulationOrigin',
    }
  )

  return HelpInstructionCategory
}
