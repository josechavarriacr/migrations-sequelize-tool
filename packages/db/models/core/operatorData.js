module.exports = (sequelize, DataTypes) => {
  const OperatorData = sequelize.define(
    'OperatorData',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
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
      bossId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      locationId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Locations',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      institutionId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Institutions',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
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
    },
    {
      tableName: 'OperatorsData',
    }
  )
  OperatorData.associate = models => {
    OperatorData.belongsTo(models.User, {
      foreignKey: 'userId',
      alias: 'Operator',
    })
    OperatorData.belongsTo(models.User, {
      foreignKey: 'bossId',
      as: 'Boss',
    })
    OperatorData.belongsTo(models.Location, {
      foreignKey: 'locationId',
    })
    OperatorData.belongsTo(models.Institution, {
      foreignKey: 'institutionId',
    })
  }
  return OperatorData
}
