module.exports = (sequelize, DataTypes) => {
  const Meeting = sequelize.define(
    'Meeting',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      procedureId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Procedures',
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
      motive: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      meetingAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      statusId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'MeetingStatus',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      operatorId: {
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
        allowNull: false,
        references: {
          model: 'User',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      digitalRecordId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'DigitalRecord',
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
    },
    {
      tableName: 'Meetings',
    }
  )
  Meeting.associate = models => {
    Meeting.belongsTo(models.Procedure, {
      foreignKey: 'procedureId',
    })
    Meeting.belongsTo(models.Location, {
      foreignKey: 'locationId',
    })
    Meeting.belongsTo(models.MeetingStatus, {
      foreignKey: 'statusId',
    })
    Meeting.belongsTo(models.User, {
      foreignKey: 'operatorId',
      as: 'operator',
    })
    Meeting.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    })
    Meeting.belongsTo(models.DigitalRecord, {
      foreignKey: 'digitalRecordId',
    })
    Meeting.belongsTo(models.User, {
      foreignKey: 'registeredBy',
      as: 'registered',
    })
    Meeting.belongsTo(models.User, {
      foreignKey: 'updatedBy',
      as: 'updated',
    })
    Meeting.belongsTo(models.Role, {
      foreignKey: 'roleId',
    })
  }
  return Meeting
}
