module.exports = (sequelize, DataTypes) => {
  const PendingPush = sequelize.define(
    'PendingPush',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      notificationEventId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'NotificationEvent',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      jsonError: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      lastError: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: true,
        enum: (1, 2, 3, 4),
      },
      attempts: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      lastRetryAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      deliveredAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      tableName: 'PendingPushes',
      spanishName: 'Notificaciones a Dispositivos Pendientes',
      comment: 'Notificaciones a Dispositivos Pendientes',
    }
  )

  PendingPush.associate = models => {
    PendingPush.belongsTo(models.NotificationEvent, {
      foreignKey: 'notificationEventId',
    })
  }

  return PendingPush
}
