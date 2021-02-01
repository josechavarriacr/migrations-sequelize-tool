module.exports = (sequelize, DataTypes) => {
  const NotificationMediumType = sequelize.define(
    'NotificationMediumType',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      code: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      category: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        enum: (-1, 0, 1),
      },
      order: {
        type: DataTypes.INTEGER,
      },
      localesKey: {
        type: DataTypes.STRING(255),
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
      tableName: 'NotificationMediumTypes',
      spanishName: 'Tipos de medios de notificación',
    }
  )

  NotificationMediumType.associate = models => {
    NotificationMediumType.belongsTo(models.User, {
      foreignKey: 'registeredBy',
      as: 'registered',
    })
    NotificationMediumType.belongsTo(models.User, {
      foreignKey: 'updatedBy',
      as: 'updated',
    })
  }

  return NotificationMediumType
}
