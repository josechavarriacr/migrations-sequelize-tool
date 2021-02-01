module.exports = (sequelize, DataTypes) => {
  const ProcedureError = sequelize.define(
    'ProcedureError',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      errorCode: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      GUIidentification: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      errorType: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      methodType: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      procedureId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Procedures',
          key: 'id',
        },
      },
    },
    {
      tableName: 'ProcedureErrors',
    }
  )

  ProcedureError.associate = models => {
    ProcedureError.belongsTo(models.Procedure, {
      foreignKey: 'procedureId',
    })
  }
  return ProcedureError
}
