module.exports = (sequelize, DataTypes) => {
  const ApplicationWay = sequelize.define(
    'ApplicationWay',
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
      detail: {
        type: DataTypes.STRING(256),
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
      tableName: 'ApplicationWays',
      spanishName: 'Formas de Aplicación',
      comment: 'Description ApplicationWays',
    }
  )
  ApplicationWay.associate = models => {
    ApplicationWay.belongsTo(models.User, {
      foreignKey: 'userId',
    })
  }
  return ApplicationWay
}
