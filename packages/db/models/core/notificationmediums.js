module.exports = (sequelize, DataTypes) => {
  const NotificationMedium = sequelize.define(
    'NotificationMedium',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      value: {
        type: DataTypes.STRING(500),
        allowNull: false,
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
      mediumType: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'NotificationMediumTypes',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      ownerName: {
        type: DataTypes.STRING(128),
        allowNull: false,
      },
      procedureCode: {
        type: DataTypes.STRING(128),
        allowNull: true,
      },
      order: {
        type: DataTypes.INTEGER,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        enum: (-1, 0, 1),
      },
    },
    {
      tableName: 'NotificationMediums',
      spanishName: 'Medios de notificación',
    }
  )
  NotificationMedium.associate = models => {
    NotificationMedium.belongsTo(models.DigitalRecord, {
      foreignKey: 'digitalRecordId',
    })
    NotificationMedium.belongsTo(models.NotificationMediumType, {
      foreignKey: 'mediumType',
    })
    NotificationMedium.belongsTo(models.User, {
      foreignKey: 'userId',
    })
  }

  return NotificationMedium
}
