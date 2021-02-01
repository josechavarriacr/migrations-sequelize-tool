module.exports = (sequelize, DataTypes) => {
  const SectionEvent = sequelize.define(
    'SectionEvent',
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
          model: 'SectionEventTypes',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      description: {
        type: DataTypes.STRING(256),
        allowNull: true,
      },
      previousStatusId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'SectionStatuses',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      nextStatusId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'SectionStatuses',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      sectionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Sections',
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
      reviewerRoleId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Roles',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      reviewerId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      procedureSectionDefinitionId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'ProcedureSectionDefinitions',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    },
    {
      tableName: 'SectionEvents',
    }
  )

  SectionEvent.associate = models => {
    SectionEvent.belongsTo(models.Section, {
      foreignKey: 'sectionId',
    })
    SectionEvent.belongsTo(models.SectionStatus, {
      foreignKey: 'previousStatusId',
      as: 'previousStatus',
    })
    SectionEvent.belongsTo(models.SectionStatus, {
      foreignKey: 'nextStatusId',
      as: 'nextStatus',
    })
    SectionEvent.belongsTo(models.SectionEventType, {
      foreignKey: 'type',
    })
    SectionEvent.belongsTo(models.User, {
      foreignKey: 'triggerUserId',
      as: 'TriggerUser',
    })
    SectionEvent.belongsTo(models.DigitalRecord, {
      foreignKey: 'ownerDigitalRecordId',
      as: 'ownerDigitalRecord',
    })
    SectionEvent.belongsTo(models.Role, {
      foreignKey: 'reviewerRoleId',
      as: 'reviewerRole',
    })
    SectionEvent.belongsTo(models.User, {
      foreignKey: 'reviewerId',
      as: 'Reviewer',
    })
    SectionEvent.belongsTo(models.Procedure, {
      foreignKey: 'procedureId',
    })
    SectionEvent.belongsTo(models.ProcedureSectionDefinition, {
      foreignKey: 'procedureSectionDefinitionId',
    })
  }

  return SectionEvent
}
