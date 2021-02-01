module.exports = (sequelize, DataTypes) => {
  const PenetrationWays = sequelize.define(
    'PenetrationWays',
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
      tableName: 'PenetrationWays',
      spanishName: 'Vías de Penetración',
      comment: 'Description PenetrationWays',
    }
  )
  PenetrationWays.associate = models => {
    PenetrationWays.belongsTo(models.User, {
      foreignKey: 'userId',
    })
  }
  return PenetrationWays
}
