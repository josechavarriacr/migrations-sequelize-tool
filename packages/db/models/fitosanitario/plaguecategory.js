module.exports = (sequelize, DataTypes) => {
  const PlagueCategory = sequelize.define(
    'PlagueCategory',
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
      tableName: 'PlagueCategories',
      spanishName: 'Categorías de Plagas',
      comment: 'Catálogo con los tipos de plagas registrados en plataforma.',
    }
  )
  PlagueCategory.associate = models => {
    PlagueCategory.belongsTo(models.User, {
      foreignKey: 'userId',
    })
  }
  return PlagueCategory
}
