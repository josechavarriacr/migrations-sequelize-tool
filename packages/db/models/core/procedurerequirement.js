module.exports = (sequelize, DataTypes) => {
  const ProcedureRequirement = sequelize.define(
    'ProcedureRequirement',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      procedureDefinitionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'ProcedureDefinitions',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      requirementDefinitionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'RequirementDefinitions',
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
      tableName: 'ProcedureRequirements',
    }
  )

  ProcedureRequirement.associate = models => {
    ProcedureRequirement.belongsTo(models.ProcedureDefinition, {
      foreignKey: 'procedureDefinitionId',
    })
    ProcedureRequirement.belongsTo(models.RequirementDefinition, {
      foreignKey: 'requirementDefinitionId',
    })
  }

  return ProcedureRequirement
}
