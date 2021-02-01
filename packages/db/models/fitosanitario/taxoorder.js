module.exports = (sequelize, DataTypes) => {
  const TaxoOrder = sequelize.define(
    'TaxoOrder',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      taxoClassId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'TaxoClasses',
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
      tableName: 'TaxoOrder',
      spanishName: 'Orden Taxonómico',
      comment: 'Catálogo con el orden taxonómico de especies.',
    }
  )
  TaxoOrder.associate = models => {
    TaxoOrder.belongsTo(models.User, {
      foreignKey: 'userId',
    })
    TaxoOrder.belongsTo(models.TaxoClass, {
      foreignKey: 'taxoClassId',
    })
  }
  return TaxoOrder
}
