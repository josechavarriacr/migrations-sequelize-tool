module.exports = (sequelize, DataTypes) => {
  const Deposit = sequelize.define(
    'Deposit',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      number: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      amount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      documentId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      tableName: 'Deposits',
    }
  )

  Deposit.associate = models => {
    Deposit.belongsTo(models.Document, {
      foreignKey: 'documentId',
    })
  }

  return Deposit
}
