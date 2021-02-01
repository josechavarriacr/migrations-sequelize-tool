module.exports = (sequelize, DataTypes) => {
  const ProcedureEvent = sequelize.define(
    'ProcedureEvent',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      previousProcedureId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Procedures',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      nextProcedureId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Procedures',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      previousStatusId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'ProcedureStatuses',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      nextStatusId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'ProcedureStatuses',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      status: {
        // 1:Activo, 2:Borrado
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      previousReviewerRoleId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Roles',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      previousReviewerId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      nextReviewerRoleId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Roles',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      nextReviewerId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      comment: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      triggerUser: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      previousVersion: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      nextVersion: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      tableName: 'ProcedureEvents',
    }
  )

  ProcedureEvent.associate = models => {
    ProcedureEvent.belongsTo(models.Procedure, {
      foreignKey: 'previousProcedureId',
      as: 'PreviousProcedure',
    })
    ProcedureEvent.belongsTo(models.Procedure, {
      foreignKey: 'nextProcedureId',
      as: 'NextProcedure',
    })
    ProcedureEvent.belongsTo(models.ProcedureStatus, {
      foreignKey: 'previousStatusId',
      as: 'PreviousStatus',
    })
    ProcedureEvent.belongsTo(models.ProcedureStatus, {
      foreignKey: 'nextStatusId',
      as: 'NextStatus',
    })
    ProcedureEvent.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'User',
    })
    ProcedureEvent.belongsTo(models.Role, {
      foreignKey: 'previousReviewerRoleId',
      as: 'PreviousReviewerRole',
    })
    ProcedureEvent.belongsTo(models.User, {
      foreignKey: 'previousReviewerId',
      as: 'PreviousReviewer',
    })
    ProcedureEvent.belongsTo(models.Role, {
      foreignKey: 'nextReviewerRoleId',
      as: 'NextReviewerRole',
    })
    ProcedureEvent.belongsTo(models.User, {
      foreignKey: 'nextReviewerId',
      as: 'NextReviewer',
    })
    ProcedureEvent.belongsTo(models.User, {
      foreignKey: 'triggerUser',
      as: 'TriggerUser',
    })
  }

  return ProcedureEvent
}
