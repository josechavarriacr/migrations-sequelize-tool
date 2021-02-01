module.exports = (sequelize, DataTypes) => {
  const ProcedureDefinitionApplication = sequelize.define(
    'ProcedureDefinitionApplication',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      applicationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Applications',
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
      tableName: 'ProcedureDefinitionApplications',
    }
  )

  ProcedureDefinitionApplication.associate = models => {
    ProcedureDefinitionApplication.belongsTo(models.Application, {
      foreignKey: 'applicationId',
    })
    ProcedureDefinitionApplication.belongsTo(models.ProcedureDefinition, {
      foreignKey: 'procedureDefinitionId',
    })
  }

  return ProcedureDefinitionApplication
}
