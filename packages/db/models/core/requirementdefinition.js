module.exports = (sequelize, DataTypes) => {
  const RequirementDefinition = sequelize.define(
    'RequirementDefinition',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      userInstructions: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      userInstructionsHTML: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      operatorInstructions: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      category: {
        // Prerequisito, requisito, etc...
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'RequirementCategories',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      type: {
        // REST, None, etc...
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'RequirementTypes',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      isRequired: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      validations: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      code: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false,
      },
      documentDefinitionId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'DocumentDefinitions',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      errorMessage: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
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
      isConditional: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      conditionalType: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'RequirementConditionalTypes',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      conditionalMetadata: {
        type: DataTypes.JSON,
        allowNull: true,
      },
    },
    {
      tableName: 'RequirementDefinitions',
    }
  )

  RequirementDefinition.associate = models => {
    RequirementDefinition.belongsTo(models.DocumentDefinition, {
      foreignKey: 'documentDefinitionId',
    })
    RequirementDefinition.belongsTo(models.RequirementType, {
      foreignKey: 'type',
    })
    RequirementDefinition.belongsTo(models.RequirementCategory, {
      foreignKey: 'category',
    })
    RequirementDefinition.belongsTo(models.User, {
      foreignKey: 'registeredBy',
      as: 'registered',
    })
    RequirementDefinition.belongsTo(models.User, {
      foreignKey: 'updatedBy',
      as: 'updated',
    })
    RequirementDefinition.belongsTo(models.RequirementConditionalType, {
      foreignKey: 'conditionalType',
    })
  }

  return RequirementDefinition
}
