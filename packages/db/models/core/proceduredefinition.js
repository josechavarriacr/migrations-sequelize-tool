module.exports = (sequelize, DataTypes) => {
  const ProcedureDefinition = sequelize.define(
    'ProcedureDefinition',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cost: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        defaultValue: 0,
      },
      costSymbol: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      expiryTime: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      type: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'ProcedureTypes',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      code: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false,
      },
      preventTimes: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      expiredAt: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 10,
      },
      needsOperatorSigning: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      needsUserSigning: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      helpVideoURI: {
        type: DataTypes.STRING,
        allowNull: true,
        isUrl: true,
      },
      reassignMeetingTimes: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      expiredMeetingType: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'expiredAndAssign',
      },
      preventNeedsOperatorSign: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      localesKey: {
        type: DataTypes.STRING(),
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
      notEditable: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      version: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      tableName: 'ProcedureDefinitions',
    }
  )

  ProcedureDefinition.associate = models => {
    ProcedureDefinition.belongsTo(models.ProcedureType, {
      foreignKey: 'type',
    })
    ProcedureDefinition.hasOne(models.ProcedurePaymentDefinition, {
      foreignKey: 'procedureDefinitionId',
    })
    ProcedureDefinition.belongsTo(models.User, {
      foreignKey: 'registeredBy',
      as: 'registered',
    })
    ProcedureDefinition.belongsTo(models.User, {
      foreignKey: 'updatedBy',
      as: 'updated',
    })
  }

  return ProcedureDefinition
}
