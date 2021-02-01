module.exports = (sequelize, DataTypes) => {
  const TaxoFamily = sequelize.define(
    'TaxoFamily',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      taxoOrderId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'TaxoOrder',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
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
        allowNull: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    },
    {
      tableName: 'TaxoFamilies',
      spanishName: 'Familias taxonómicas',
      comment: 'Catálogo con la familia taxonómica de especies.',
    }
  )
  TaxoFamily.associate = models => {
    TaxoFamily.belongsTo(models.User, {
      foreignKey: 'userId',
    })
    TaxoFamily.belongsTo(models.TaxoOrder, {
      foreignKey: 'taxoOrderId',
    })
  }
  return TaxoFamily
}
