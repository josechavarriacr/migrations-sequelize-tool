module.exports = (sequelize, DataTypes) => {
  const ActionNotification = sequelize.define(
    'ActionNotification',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      code: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      actionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Actions',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      applicationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Applications',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      mediumTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'NotificationMediumTypes',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      notificationMessageId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'NotificationMessages',
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
      templateId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Templates',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      localesKey: {
        type: DataTypes.STRING(),
        allowNull: true,
      },
      registeredBy: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      updatedBy: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      notEditable: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      tableName: 'ActionNotifications',
      spanishName: 'Notificación de acción',
      comment: 'Notifica la acción del sistema',
    }
  )
  ActionNotification.associate = models => {
    ActionNotification.belongsTo(models.Action, {
      foreignKey: 'actionId',
    })

    ActionNotification.belongsTo(models.Application, {
      foreignKey: 'applicationId',
    })

    ActionNotification.belongsTo(models.NotificationMessage, {
      foreignKey: 'notificationMessageId',
    })

    ActionNotification.belongsTo(models.NotificationMediumType, {
      foreignKey: 'mediumTypeId',
    })

    ActionNotification.belongsTo(models.Template, {
      foreignKey: 'templateId',
    })

    ActionNotification.belongsTo(models.User, {
      foreignKey: 'registeredBy',
      as: 'registered',
    })

    ActionNotification.belongsTo(models.User, {
      foreignKey: 'updatedBy',
      as: 'updated',
    })
  }

  return ActionNotification
}
