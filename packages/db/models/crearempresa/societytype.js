module.exports = (sequelize, DataTypes) => {
  const SocietyType = sequelize.define(
    'SocietyType',
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
        unique: true,
      },
    },
    {
      tableName: 'SocietyTypes',
    }
  )

  return SocietyType
}
