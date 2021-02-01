module.exports = (sequelize, DataTypes) => {
  const NotificationMessage = sequelize.define(
    'NotificationMessage',
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
      description: {
        type: DataTypes.STRING(128),
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING(128),
        allowNull: false,
      },
      message: {
        type: DataTypes.STRING(500),
        allowNull: false,
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
        defaultValue: true,
      },
      shortMessage: {
        type: DataTypes.STRING(250),
        allowNull: true,
      },
    },
    {
      tableName: 'NotificationMessages',
      spanishName: 'Mensajes de Notificación',
      comment: 'Description NotificationMessages  ',
    }
  )

  NotificationMessage.associate = models => {
    NotificationMessage.belongsTo(models.User, {
      foreignKey: 'registeredBy',
      as: 'registered',
    })
    NotificationMessage.belongsTo(models.User, {
      foreignKey: 'updatedBy',
      as: 'updated',
    })
  }

  return NotificationMessage
}
