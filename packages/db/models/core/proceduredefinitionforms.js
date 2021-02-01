module.exports = (sequelize, DataTypes) => {
  const ProcedureDefinitionForm = sequelize.define(
    'ProcedureDefinitionForm',
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
        allowNull: false,
        references: {
          model: 'ProcedureDefinitions',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      tableName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      modelName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      metadata: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      alias: {
        type: DataTypes.STRING,
        allowNull: true,
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
      tableName: 'ProcedureDefinitionForms',
    }
  )

  ProcedureDefinitionForm.associate = models => {
    ProcedureDefinitionForm.belongsTo(models.ProcedureSectionDefinition, {
      foreignKey: 'procedureSectionDefinitionId',
    })
    ProcedureDefinitionForm.belongsTo(models.ProcedureDefinition, {
      foreignKey: 'procedureDefinitionId',
    })
  }

  return ProcedureDefinitionForm
}
