module.exports = (sequelize, DataTypes) => {
  const CalendarLocation = sequelize.define(
    'CalendarLocation',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      calendarId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Calendar',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      locationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Location',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      institutionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Institution',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        enum: (-1, 0, 1),
        defaultValue: 1,
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
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
      tableName: 'CalendarLocations',
    }
  )
  CalendarLocation.associate = models => {
    CalendarLocation.belongsTo(models.Calendar, {
      foreignKey: 'calendarId',
    })
    CalendarLocation.belongsTo(models.Institution, {
      foreignKey: 'institutionId',
    })
    CalendarLocation.belongsTo(models.Location, {
      foreignKey: 'locationId',
    })
    CalendarLocation.belongsTo(models.User, {
      foreignKey: 'registeredBy',
      as: 'registered',
    })
    CalendarLocation.belongsTo(models.User, {
      foreignKey: 'updatedBy',
      as: 'updated',
    })
  }
  return CalendarLocation
}
