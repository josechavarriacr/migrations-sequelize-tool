module.exports = (sequelize, DataTypes) => {
  const RegentType = sequelize.define(
    'RegentType',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      code: {
        type: DataTypes.STRING(8),
        allowNull: false,
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
      tableName: 'RegentTypes',
      spanishName: 'Tipos de Regentes',
      comment: 'Description RegentTypes',
    }
  )
  RegentType.associate = models => {
    RegentType.belongsTo(models.User, {
      foreignKey: 'userId',
    })
  }
  return RegentType
}
