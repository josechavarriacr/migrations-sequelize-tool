module.exports = (sequelize, DataTypes) => {
  const WorkingSchedule = sequelize.define(
    'WorkingSchedule',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        enum: (-1, 0, 1),
        defaultValue: 1,
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
      startHour: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      endHour: {
        type: DataTypes.TIME,
        allowNull: false,
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
      tableName: 'WorkingSchedules',
    }
  )

  WorkingSchedule.associate = models => {
    WorkingSchedule.belongsTo(models.User, {
      foreignKey: 'registeredBy',
      as: 'registered',
    })
    WorkingSchedule.belongsTo(models.User, {
      foreignKey: 'updatedBy',
      as: 'updated',
    })
    WorkingSchedule.belongsTo(models.Calendar, {
      foreignKey: 'calendarId',
    })
  }

  return WorkingSchedule
}
