module.exports = (sequelize, DataTypes) => {
  const RequirementEvent = sequelize.define(
    'RequirementEvent',
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
          model: 'RequirementEventTypes',
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
          model: 'RequirementStatuses',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      nextStatusId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'RequirementStatuses',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      errorMessage: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      requirementId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Requirements',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      procedureCode: {
        type: DataTypes.STRING(50),
        allowNull: false,
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
      triggerUserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      ownerDigitalRecordId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'DigitalRecords',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      requesterDigitalRecordId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'DigitalRecords',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    },
    {
      tableName: 'RequirementEvents',
    }
  )

  RequirementEvent.associate = models => {
    RequirementEvent.belongsTo(models.Requirement, {
      foreignKey: 'RequirementId',
    })
    RequirementEvent.belongsTo(models.RequirementStatus, {
      foreignKey: 'previousStatusId',
    })
    RequirementEvent.belongsTo(models.RequirementStatus, {
      foreignKey: 'nextStatusId',
    })
    RequirementEvent.belongsTo(models.RequirementEventType, {
      foreignKey: 'type',
    })
    RequirementEvent.belongsTo(models.User, {
      foreignKey: 'triggerUserId',
    })
    RequirementEvent.belongsTo(models.DigitalRecord, {
      foreignKey: 'ownerDigitalRecord',
    })
    RequirementEvent.belongsTo(models.DigitalRecord, {
      foreignKey: 'requesterDigitalRecordId',
    })
    RequirementEvent.belongsTo(models.Procedure, {
      foreignKey: 'procedureId',
    })
  }

  return RequirementEvent
}
