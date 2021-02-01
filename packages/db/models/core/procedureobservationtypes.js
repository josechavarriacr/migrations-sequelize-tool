module.exports = (sequelize, DataTypes) => {
  const ProcedureObservationType = sequelize.define(
    'ProcedureObservationType',
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
      code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isPrivate: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
    },
    {
      tableName: 'ProcedureObservationTypes',
    }
  )

  return ProcedureObservationType
}
