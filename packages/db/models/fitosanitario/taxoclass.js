module.exports = (sequelize, DataTypes) => {
  const TaxoClass = sequelize.define(
    'TaxoClass',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      taxoDivisionId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'TaxoDivisions',
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
      tableName: 'TaxoClasses',
      spanishName: 'Clases Taxonómicas',
      comment: 'Catálogo con las clases taxonómicas de especies.',
    }
  )
  TaxoClass.associate = models => {
    TaxoClass.belongsTo(models.User, {
      foreignKey: 'userId',
    })
    TaxoClass.belongsTo(models.TaxoDivision, {
      foreignKey: 'taxoDivisionId',
    })
  }
  return TaxoClass
}
