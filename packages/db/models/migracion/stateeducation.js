module.exports = (sequelize, DataTypes) => {
  const StateEducation = sequelize.define(
    'StateEducation',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      code: {
        type: DataTypes.STRING(),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(),
        allowNull: false,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        enum: (-1, 0, 1),
      },
      order: {
        type: DataTypes.INTEGER,
      },
      description: {
        type: DataTypes.STRING(),
        allowNull: true,
      },
      localesKey: {
        type: DataTypes.STRING(),
        allowNull: true,
      },
    },
    {
      tableName: 'StatesEducation',
      spanishName: 'Estado de la Educación',
      comment: 'Description StatesEducation',
    }
  )

  return StateEducation
}
