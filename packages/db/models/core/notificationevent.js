module.exports = (sequelize, DataTypes) => {
  const NotificationEvent = sequelize.define(
    'NotificationEvent',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      actionId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Actions',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      mediumTypeId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'NotificationMediumTypes',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      subject: {
        type: DataTypes.STRING(500),
        allowNull: true,
      },
      message: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      triggerUser: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      sendTo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      procedureCode: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      procedureId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Procedures',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      digitalRecordId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'DigitalRecords',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      procedureStatusId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'ProcedureStatuses',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      status: {
        // 1:enviado, 0:error al enviar
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      procedureVersion: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      tableName: 'NotificationEvents',
      spanishName: 'Trazabilidad de Notificaciones',
      comment: 'Trazabilidad de las notificaciones del sistema',
    }
  )

  NotificationEvent.associate = models => {
    NotificationEvent.belongsTo(models.Action, {
      foreignKey: 'actionId',
    })
    NotificationEvent.belongsTo(models.NotificationMediumType, {
      foreignKey: 'mediumTypeId',
    })
    NotificationEvent.belongsTo(models.User, {
      foreignKey: 'triggerUser',
      as: 'TriggerUser',
    })
    NotificationEvent.belongsTo(models.Procedure, {
      foreignKey: 'procedureId',
    })
    NotificationEvent.belongsTo(models.DigitalRecord, {
      foreignKey: 'digitalRecordId',
    })
    NotificationEvent.belongsTo(models.ProcedureStatus, {
      foreignKey: 'procedureStatusId',
    })
  }

  return NotificationEvent
}
