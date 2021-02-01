module.exports = (sequelize, DataTypes) => {
  const ProcedureCategory = sequelize.define(
    'ProcedureCategory',
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
      fullName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      type: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: 'procedures',
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      hasPreviousValidation: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      parentId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'ProcedureCategories',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      code: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false,
      },
      iconRelativePath: {
        type: DataTypes.STRING(250),
        allowNull: true,
      },
      cdnUri: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      icon: {
        type: DataTypes.VIRTUAL,
        get() {
          const cdnUri = this.getDataValue('cdnUri')
          const relativePath = this.getDataValue('iconRelativePath')
          return cdnUri != null && relativePath != null // !==
            ? cdnUri + relativePath
            : null
        },
      },
      procedureDefinitionId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'ProcedureDefinitions',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
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
      notEditable: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
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
      tableName: 'ProcedureCategories',
    }
  )

  ProcedureCategory.associate = models => {
    ProcedureCategory.belongsTo(models.ProcedureCategory, {
      foreignKey: 'parentId',
      as: 'parent',
    })
    ProcedureCategory.belongsTo(models.ProcedureDefinition, {
      foreignKey: 'procedureDefinitionId',
    })
    ProcedureCategory.belongsTo(models.Application, {
      foreignKey: 'applicationId',
    })
  }

  return ProcedureCategory
}
