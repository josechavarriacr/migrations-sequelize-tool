module.exports = (sequelize, DataTypes) => {
  const ProcedureObservationReasonRequirement = sequelize.define(
    'ProcedureObservationReasonRequirement',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      procedureObservationReasonId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      requirementDefinitionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      requirementStatusId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: 'ProcedureObservationReasonRequirements',
    }
  )

  ProcedureObservationReasonRequirement.associate = models => {
    ProcedureObservationReasonRequirement.belongsTo(
      models.ProcedureObservationReason,
      {
        foreignKey: 'procedureObservationReasonId',
      }
    )
    ProcedureObservationReasonRequirement.belongsTo(
      models.RequirementDefinition,
      {
        foreignKey: 'requirementDefinitionId',
      }
    )
    ProcedureObservationReasonRequirement.belongsTo(models.RequirementStatus, {
      foreignKey: 'requirementStatusId',
    })
  }

  return ProcedureObservationReasonRequirement
}
