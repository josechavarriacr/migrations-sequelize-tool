module.exports = (sequelize, DataTypes) => {
  const FertilizerAmendmentCategory = sequelize.define(
    'FertilizerAmendmentCategory',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      description: {
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
      tableName: 'FertilizersAmendmentCategories',
      spanishName: 'Categorías de Enmiendas de Fertilizantes',
      comment: 'Description FertilizersAmendmentCategories',
    }
  )
  FertilizerAmendmentCategory.associate = models => {
    FertilizerAmendmentCategory.belongsTo(models.User, {
      foreignKey: 'userId',
    })
  }
  return FertilizerAmendmentCategory
}
