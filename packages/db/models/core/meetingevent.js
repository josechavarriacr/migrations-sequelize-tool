module.exports = (sequelize, DataTypes) => {
  const MeetingEvent = sequelize.define(
    'MeetingEvent',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      procedureId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Procedure',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      meetingId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Meeting',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      assignedUserId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'User',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'User',
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
      tableName: 'MeetingEvents',
    }
  )
  MeetingEvent.associate = models => {
    MeetingEvent.belongsTo(models.Procedure, {
      foreignKey: 'procedureId',
    })
    MeetingEvent.belongsTo(models.Meeting, {
      foreignKey: 'meetingId',
    })
    MeetingEvent.belongsTo(models.User, {
      foreignKey: 'assignedUserId',
      as: 'AssignedUser',
    })
    MeetingEvent.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'ApplicantUser',
    })
    MeetingEvent.belongsTo(models.User, {
      foreignKey: 'registeredBy',
      as: 'Registered',
    })
    MeetingEvent.belongsTo(models.User, {
      foreignKey: 'updatedBy',
      as: 'Updated',
    })
  }
  return MeetingEvent
}
