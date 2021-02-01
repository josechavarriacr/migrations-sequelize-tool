module.exports = (sequelize, DataTypes) => {
  const ExchangeRate = sequelize.define(
    'ExchangeRate',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      date: {
        allowNull: false,
        type: DataTypes.CHAR(10),
      },
      value: {
        allowNull: false,
        type: DataTypes.FLOAT,
      },
    },
    {
      tableName: 'ExchangeRates',
    }
  )
  return ExchangeRate
}
