module.exports = (sequelize, DataTypes) => {
  const Regent = sequelize.define(
    'Regent',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userCodeId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      collegiateId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      regentTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'RegentTypes',
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
      tableName: 'Regents',
      spanishName: 'Regentes',
      comment: 'Description Regents',
    }
  )
  Regent.associate = models => {
    Regent.belongsTo(models.User, {
      foreignKey: 'userCodeId',
      as: 'UserCode',
    })
    Regent.belongsTo(models.RegentType, {
      foreignKey: 'regentTypeId',
    })
    Regent.belongsTo(models.User, {
      foreignKey: 'userId',
    })
  }

  return Regent
}
