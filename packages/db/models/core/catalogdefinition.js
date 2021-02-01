module.exports = (sequelize, DataTypes) => {
  const CatalogDefinition = sequelize.define(
    'CatalogDefinition',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      code: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        enum: (-1, 0, 1),
        defaultValue: 1,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      tableName: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      modelName: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      localesKey: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      endpoints: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      metadata: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      type: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'CatalogTypes',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      order: {
        type: DataTypes.INTEGER,
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
      notEditable: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      tableName: 'CatalogDefinitions',
    }
  )
  CatalogDefinition.associate = models => {
    CatalogDefinition.belongsTo(models.CatalogType, { foreignKey: 'type' })
    CatalogDefinition.hasMany(models.CatalogDefinitionRelation, {
      foreignKey: 'parentCatalogDefinitionId',
      as: 'parentCatalogDefinition',
    })
    CatalogDefinition.hasMany(models.CatalogDefinitionRelation, {
      foreignKey: 'childCatalogDefinitionId',
      as: 'childCatalogDefinition',
    })
    CatalogDefinition.belongsTo(models.User, {
      foreignKey: 'registeredBy',
      as: 'registered',
    })
    CatalogDefinition.belongsTo(models.User, {
      foreignKey: 'updatedBy',
      as: 'updated',
    })
  }

  return CatalogDefinition
}
