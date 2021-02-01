module.exports = (sequelize, DataTypes) => {
  const Crop = sequelize.define(
    'Crop',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING(128),
        allowNull: false,
      },
      gender: {
        type: DataTypes.STRING(128),
        allowNull: false,
      },
      species: {
        type: DataTypes.STRING(128),
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
      tableName: 'Crops',
      spanishName: 'Cultivos',
      comment: 'Description Crops',
    }
  )
  Crop.associate = models => {
    Crop.belongsTo(models.User, {
      foreignKey: 'userId',
    })
  }
  return Crop
}
