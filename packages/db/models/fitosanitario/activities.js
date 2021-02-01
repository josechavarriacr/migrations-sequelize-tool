module.exports = (sequelize, DataTypes) => {
  const Activity = sequelize.define(
    'Activity',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING(),
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(),
        allowNull: true,
      },
    },
    {
      tableName: 'Activities',
      spanishName: 'Actividades',
      comment: 'Description Activities',
    }
  )

  return Activity
}
