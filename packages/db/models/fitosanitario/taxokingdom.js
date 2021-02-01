module.exports = (sequelize, DataTypes) => {
  const TaxoKingdom = sequelize.define(
    'TaxoKingdom',
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
      tableName: 'TaxoKingdoms',
      spanishName: 'Reinos Taxonómicos',
      comment: 'Catálogo con los reinos taxonómicos de especies.',
    }
  )
  TaxoKingdom.associate = models => {
    TaxoKingdom.belongsTo(models.User, {
      foreignKey: 'userId',
    })
  }
  return TaxoKingdom
}
