module.exports = (sequelize, DataTypes) => {
  const PermissionAction = sequelize.define(
    'PermissionAction',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      effect: {
        type: DataTypes.STRING(10),
        allowNull: false,
        enum: ['grant', 'deny'],
      },
      subjectId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      subjectType: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      action: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      condition: {
        type: DataTypes.STRING(512),
        allowNull: true,
      },
      code: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: true,
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
      entityId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'PermissionEntity',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      localesKey: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      registeredBy: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'User',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      updatedBy: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'User',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    },
    {
      tableName: 'PermissionActions',
      spanishName: 'Permiso de Accion',
      comment: 'Permiso de Accion',
    }
  )

  PermissionAction.associate = models => {
    // PermissionAction.belongsTo(models.PermissionEntity, {
    //   foreignKey: 'entityId',
    // })
    PermissionAction.belongsTo(models.User, {
      foreignKey: 'registeredBy',
      as: 'registered',
    })
    PermissionAction.belongsTo(models.User, {
      foreignKey: 'updatedBy',
      as: 'updated',
    })
  }

  return PermissionAction
}
