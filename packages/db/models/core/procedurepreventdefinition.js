module.exports = (sequelize, DataTypes) => {
  const ProcedurePreventDefinition = sequelize.define(
    'ProcedurePreventDefinition',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      roleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Roles',
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
      maxPreventTimes: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      code: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: true,
        enum: (-1, 0, 1),
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
      order: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      tableName: 'ProcedurePreventDefinitions',
      spanishName: 'Definición de prevenciones',
    }
  )

  ProcedurePreventDefinition.associate = models => {
    ProcedurePreventDefinition.belongsTo(models.Role, {
      foreignKey: 'roleId',
    })
    ProcedurePreventDefinition.belongsTo(models.ProcedureDefinition, {
      foreignKey: 'procedureDefinitionId',
    })
    ProcedurePreventDefinition.belongsTo(models.User, {
      foreignKey: 'registeredBy',
      as: 'registered',
    })
    ProcedurePreventDefinition.belongsTo(models.User, {
      foreignKey: 'updatedBy',
      as: 'updated',
    })
  }

  return ProcedurePreventDefinition
}
