module.exports = (sequelize, DataTypes) => {
  const AdjuvantType = sequelize.define(
    'AdjuvantType',
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
      adjuvantClassId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'AdjuvantClasses',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
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
      tableName: 'AdjuvantTypes',
      spanishName: 'Tipos Adyuvantes',
      comment: 'Description AdjuvantTypes',
    }
  )

  AdjuvantType.associate = models => {
    AdjuvantType.belongsTo(models.AdjuvantClass, {
      foreignKey: 'adjuvantClassId',
    })
    AdjuvantType.belongsTo(models.User, {
      foreignKey: 'userId',
    })
  }

  return AdjuvantType
}
