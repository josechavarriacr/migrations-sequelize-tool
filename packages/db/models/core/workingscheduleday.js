module.exports = (sequelize, DataTypes) => {
  const WorkingScheduleDay = sequelize.define(
    'WorkingScheduleDay',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        enum: (-1, 0, 1),
        defaultValue: 1,
      },
      day: {
        type: DataTypes.STRING(50),
        allowNull: false,
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
      workingScheduleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'WorkingSchedule',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
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
      tableName: 'WorkingScheduleDays',
    }
  )

  WorkingScheduleDay.associate = models => {
    WorkingScheduleDay.belongsTo(models.User, {
      foreignKey: 'registeredBy',
      as: 'registered',
    })
    WorkingScheduleDay.belongsTo(models.User, {
      foreignKey: 'updatedBy',
      as: 'updated',
    })
    WorkingScheduleDay.belongsTo(models.Calendar, {
      foreignKey: 'calendarId',
    })
  }

  return WorkingScheduleDay
}
