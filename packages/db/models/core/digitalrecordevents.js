module.exports = (sequelize, DataTypes) => {
  const DigitalRecordEvent = sequelize.define(
    'DigitalRecordEvent',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      type: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'DigitalRecordEventTypes',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      description: {
        type: DataTypes.STRING(256),
        allowNull: true,
      },
      code: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      previousStatusId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'DigitalRecordStatuses',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      nextStatusId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'DigitalRecordStatuses',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      digitalRecordId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'DigitalRecords',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      triggerUserId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      tableName: 'DigitalRecordEvents',
    }
  )

  DigitalRecordEvent.associate = models => {
    DigitalRecordEvent.belongsTo(models.DigitalRecordStatus, {
      foreignKey: 'previousStatusId',
    })
    DigitalRecordEvent.belongsTo(models.DigitalRecordStatus, {
      foreignKey: 'nextStatusId',
    })
    DigitalRecordEvent.belongsTo(models.DigitalRecordEventType, {
      foreignKey: 'type',
    })
    DigitalRecordEvent.belongsTo(models.DigitalRecord, {
      foreignKey: 'digitalRecordId',
    })
  }

  return DigitalRecordEvent
}
