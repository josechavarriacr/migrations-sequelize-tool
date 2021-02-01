module.exports = (sequelize, DataTypes) => {
  const ProcedureStatusObservationReason = sequelize.define(
    'ProcedureStatusObservationReason',
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
      procedureDefinitionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      procedureStatusId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: 'ProcedureStatusObservationReasons',
    }
  )

  ProcedureStatusObservationReason.associate = models => {
    ProcedureStatusObservationReason.belongsTo(
      models.ProcedureObservationReason,
      {
        foreignKey: 'procedureObservationReasonId',
      }
    )
    ProcedureStatusObservationReason.belongsTo(models.ProcedureDefinition, {
      foreignKey: 'procedureDefinitionId',
    })
    ProcedureStatusObservationReason.belongsTo(models.ProcedureStatus, {
      foreignKey: 'procedureStatusId',
    })
  }

  return ProcedureStatusObservationReason
}
