module.exports = (sequelize, DataTypes) => {
  const ProcedureObservationReason = sequelize.define(
    'ProcedureObservationReason',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
        enum: ('procedure', 'requirement'),
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      state: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
        enum: (-1, 0, 1),
      },
    },
    {
      tableName: 'ProcedureObservationReasons',
    }
  )

  ProcedureObservationReason.associate = models => {
    ProcedureObservationReason.hasOne(
      models.ProcedureObservationReasonRequirement,
      {
        foreignKey: 'procedureObservationReasonId',
      }
    )
    ProcedureObservationReason.hasOne(models.ProcedureStatusObservationReason, {
      foreignKey: 'procedureObservationReasonId',
    })
  }

  return ProcedureObservationReason
}
