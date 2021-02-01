module.exports = (sequelize, DataTypes) => {
  const ProcedureSection = sequelize.define(
    'ProcedureSection',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      procedureSectionDefinitionId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'ProcedureSectionDefinitions',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      procedureDefinitionId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'ProcedureDefinitions',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
    },
    {
      tableName: 'ProcedureSections',
    }
  )

  ProcedureSection.associate = models => {
    ProcedureSection.belongsTo(models.ProcedureDefinition, {
      foreignKey: 'procedureDefinitionId',
    })
    ProcedureSection.belongsTo(models.ProcedureSectionDefinition, {
      foreignKey: 'procedureSectionDefinitionId',
    })
  }

  return ProcedureSection
}
