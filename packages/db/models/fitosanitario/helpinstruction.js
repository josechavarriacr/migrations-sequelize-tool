module.exports = (sequelize, DataTypes) => {
  const HelpInstruction = sequelize.define(
    'HelpInstruction',
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
        allowNull: true,
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      type: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'HelpInstructionCategories',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      category: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'HelpInstructionTypes',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      extension: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      relativePath: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cdnUri: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      path: {
        type: DataTypes.VIRTUAL,
        get() {
          const cdnUri = this.getDataValue('cdnUri')
          const relativePath = this.getDataValue('relativePath')
          return cdnUri != null && relativePath != null
            ? cdnUri + relativePath
            : null
        },
      },
      applicationId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Applications',
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
      imagePath: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      time: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
    },
    {
      tableName: 'HelpInstructions',
      spanishName: 'Actividades',
      comment: 'Description FormulationOrigin',
    }
  )

  HelpInstruction.associate = models => {
    HelpInstruction.belongsTo(models.HelpInstructionType, {
      foreignKey: 'type',
    })
    HelpInstruction.belongsTo(models.HelpInstructionCategory, {
      foreignKey: 'category',
    })
    HelpInstruction.belongsTo(models.Application, {
      foreignKey: 'applicationId',
    })
    HelpInstruction.belongsTo(models.ProcedureDefinition, {
      foreignKey: 'procedureDefinitionId',
    })
    HelpInstruction.belongsTo(models.User, {
      foreignKey: 'userId',
    })
  }

  return HelpInstruction
}
