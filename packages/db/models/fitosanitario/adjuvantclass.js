module.exports = (sequelize, DataTypes) => {
  const AdjuvantClass = sequelize.define(
    'AdjuvantClass',
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
      tableName: 'AdjuvantClasses',
      spanishName: 'Clases Adyuvantes',
      comment: 'Description AdjuvantClasses',
    }
  )
  AdjuvantClass.associate = models => {
    AdjuvantClass.belongsTo(models.User, {
      foreignKey: 'userId',
    })
  }
  return AdjuvantClass
}
