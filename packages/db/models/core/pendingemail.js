module.exports = (sequelize, DataTypes) => {
  const PendingEmail = sequelize.define(
    'PendingEmail',
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
      tableName: 'PendingEmails',
      spanishName: 'Correos Pendientes',
      comment: 'Correos Pendientes',
    }
  )

  PendingEmail.associate = models => {
    PendingEmail.belongsTo(models.NotificationEvent, {
      foreignKey: 'notificationEventId',
    })
  }

  return PendingEmail
}
