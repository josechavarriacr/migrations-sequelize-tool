module.exports = (sequelize, DataTypes) => {
  const MeetingByRole = sequelize.define(
    'MeetingByRole',
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
      roleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Role',
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
      meetingDefinitionId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'MeetingDefinition',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      operatorCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      meetingCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      startHour: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      endHour: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      validFrom: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      validTo: {
        type: DataTypes.DATE,
        allowNull: true,
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
      tableName: 'MeetingByRoles',
    }
  )

  MeetingByRole.associate = models => {
    MeetingByRole.belongsTo(models.User, {
      foreignKey: 'registeredBy',
      as: 'registered',
    })
    MeetingByRole.belongsTo(models.User, {
      foreignKey: 'updatedBy',
      as: 'updated',
    })
    MeetingByRole.belongsTo(models.Role, {
      foreignKey: 'roleId',
    })
    MeetingByRole.belongsTo(models.Location, {
      foreignKey: 'locationId',
    })
    MeetingByRole.belongsTo(models.WorkingSchedule, {
      foreignKey: 'workingScheduleId',
    })
    MeetingByRole.hasMany(models.MeetingByRoleDay, {
      foreignKey: 'meetingByRoleId',
    })
    MeetingByRole.belongsTo(models.MeetingDefinition, {
      foreignKey: 'meetingDefinitionId',
    })
  }

  return MeetingByRole
}
