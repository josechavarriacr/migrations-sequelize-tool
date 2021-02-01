module.exports = (sequelize, DataTypes) => {
  const ResidueLimit = sequelize.define(
    'ResidueLimit',
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
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        enum: (-1, 0, 1),
      },
      order: {
        type: DataTypes.INTEGER,
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
      tableName: 'ResidueLimit',
      spanishName: 'Límite de residuos',
      comment: 'Description ResidueLimit',
    }
  )
  ResidueLimit.associate = models => {
    ResidueLimit.belongsTo(models.User, {
      foreignKey: 'userId',
    })
  }
  return ResidueLimit
}
