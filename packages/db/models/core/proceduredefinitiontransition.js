module.exports = (sequelize, DataTypes) => {
  const ProcedureDefinitionTransition = sequelize.define(
    'ProcedureDefinitionTransition',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      code: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      currentRoleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Roles',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      currentStatusId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'ProcedureStatuses',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nextRoleId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Roles',
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
      procedureDefinitionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'ProcedureDefinitions',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      scope: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      localesKey: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      registeredBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
          model: 'Users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      locationId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Locations',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      conditionalMetadata: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      changeSectionStatus: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      tableName: 'ProcedureDefinitionTransitions',
      spanishName: 'Definición de Transiciones para Trámites',
      comment: 'Description Definición de Transiciones para Trámites',
    }
  )

  ProcedureDefinitionTransition.associate = models => {
    ProcedureDefinitionTransition.belongsTo(models.Role, {
      foreignKey: 'currentRoleId',
      as: 'CurrentRole',
    })
    ProcedureDefinitionTransition.belongsTo(models.ProcedureStatus, {
      foreignKey: 'currentStatusId',
      as: 'CurrentStatus',
    })
    ProcedureDefinitionTransition.belongsTo(models.Role, {
      foreignKey: 'nextRoleId',
      as: 'NextRole',
    })
    ProcedureDefinitionTransition.belongsTo(models.ProcedureStatus, {
      foreignKey: 'nextStatusId',
      as: 'NextStatus',
    })
    ProcedureDefinitionTransition.belongsTo(models.ProcedureDefinition, {
      foreignKey: 'procedureDefinitionId',
      as: 'ProcedureDefinition',
    })
    ProcedureDefinitionTransition.belongsTo(models.User, {
      foreignKey: 'registeredBy',
      as: 'RegisteredBy',
    })
    ProcedureDefinitionTransition.belongsTo(models.User, {
      foreignKey: 'updatedBy',
      as: 'UpdatedBy',
    })
    ProcedureDefinitionTransition.belongsTo(models.Location, {
      foreignKey: 'locationId',
      as: 'Location',
    })
  }

  return ProcedureDefinitionTransition
}
