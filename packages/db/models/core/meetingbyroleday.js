module.exports = (sequelize, DataTypes) => {
  const MeetingByRoleDay = sequelize.define(
    'MeetingByRoleDay',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      meetingByRoleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'MeetingByRole',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      workingScheduleDayId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'WorkingScheduleDay',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      registeredBy: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Users',
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
      tableName: 'MeetingByRoleDays',
    }
  )

  MeetingByRoleDay.associate = models => {
    MeetingByRoleDay.belongsTo(models.User, {
      foreignKey: 'registeredBy',
      as: 'registered',
    })
    MeetingByRoleDay.belongsTo(models.User, {
      foreignKey: 'updatedBy',
      as: 'updated',
    })
    MeetingByRoleDay.belongsTo(models.WorkingScheduleDay, {
      foreignKey: 'workingScheduleDayId',
    })
    MeetingByRoleDay.belongsTo(models.MeetingByRole, {
      foreignKey: 'meetingByRoleId',
    })
  }

  return MeetingByRoleDay
}
