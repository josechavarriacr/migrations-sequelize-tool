module.exports = (sequelize, DataTypes) => {
  const Action = sequelize.define(
    'Action',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      code: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING(50),
        allowNull: false,
        enum: ('operator', 'user', 'system'),
      },
      description: {
        type: DataTypes.STRING(128),
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING(128),
        allowNull: true,
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        enum: (-1, 0, 1),
      },
      type: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'ActionTypes',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    },
    {
      tableName: 'Actions',
      spanishName: 'Acciones',
      comment: 'Acciones del sistema',
    }
  )
  Action.associate = models => {
    Action.belongsTo(models.ActionType, {
      foreignKey: 'type',
    })
  }

  return Action
}
