module.exports = (sequelize, DataTypes) => {
  const ProcedureWebService = sequelize.define(
    'ProcedureWebService',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
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
      procedureStatusDefinitionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'ProcedureStatuses',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      webServiceId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'WebService',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      code: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(128),
        allowNull: false,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        enum: (-1, 0, 1),
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      localesKey: {
        type: DataTypes.STRING(),
        allowNull: true,
      },
      registeredBy: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      updatedBy: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      tableName: 'ProcedureWebServices',
      spanishName: 'Servicios Web de tramites',
    }
  )

  ProcedureWebService.associate = models => {
    ProcedureWebService.belongsTo(models.ProcedureDefinition, {
      foreignKey: 'procedureDefinitionId',
    })
    ProcedureWebService.belongsTo(models.ProcedureStatus, {
      foreignKey: 'procedureStatusDefinitionId',
    })
    ProcedureWebService.belongsTo(models.WebService, {
      foreignKey: 'webServiceId',
    })
    ProcedureWebService.belongsTo(models.User, {
      foreignKey: 'registeredBy',
      as: 'registered',
    })
    ProcedureWebService.belongsTo(models.User, {
      foreignKey: 'updatedBy',
      as: 'updated',
    })
  }

  return ProcedureWebService
}
