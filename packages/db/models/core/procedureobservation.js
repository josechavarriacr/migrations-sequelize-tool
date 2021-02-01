module.exports = (sequelize, DataTypes) => {
  const ProcedureObservation = sequelize.define(
    'ProcedureObservation',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      code: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      message: {
        type: DataTypes.STRING(1000),
        allowNull: true,
      },
      messageJSON: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      type: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'ProcedureObservationType',
          key: 'id',
        },
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
      requirementId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Requirements',
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
      roleId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Roles',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      status: {
        // 1:Activo, -1:Borrado
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      isPrivate: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      generatedBy: {
        type: DataTypes.STRING,
        allowNull: false,
        enum: ('user', 'system', 'operator'),
      },
      previousObservation: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'ProcedureObservations',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      nextObservation: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'ProcedureObservations',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      documentId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Documents',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      procedureObservationReasonId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'ProcedureObservationReasons',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    },
    {
      tableName: 'ProcedureObservations',
    }
  )

  ProcedureObservation.associate = models => {
    ProcedureObservation.belongsTo(models.Procedure, {
      foreignKey: 'procedureId',
    })
    ProcedureObservation.belongsTo(models.Requirement, {
      foreignKey: 'requirementId',
    })
    ProcedureObservation.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'User',
    })
    ProcedureObservation.belongsTo(models.Role, {
      foreignKey: 'roleId',
      as: 'Role',
    })
    ProcedureObservation.belongsTo(models.ProcedureObservation, {
      foreignKey: 'previousObservation',
      as: 'Question',
    })
    ProcedureObservation.belongsTo(models.ProcedureObservation, {
      foreignKey: 'nextObservation',
      as: 'Answer',
    })
    ProcedureObservation.belongsTo(models.Document, {
      foreignKey: 'documentId',
    })
    ProcedureObservation.belongsTo(models.ProcedureObservationType, {
      foreignKey: 'type',
    })
    ProcedureObservation.belongsTo(models.ProcedureObservationReason, {
      foreignKey: 'procedureObservationReasonId',
    })
  }

  return ProcedureObservation
}
