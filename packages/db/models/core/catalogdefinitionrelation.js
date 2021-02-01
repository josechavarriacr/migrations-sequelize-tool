module.exports = (sequelize, DataTypes) => {
  const CatalogDefinitionRelation = sequelize.define(
    'CatalogDefinitionRelation',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      parentCatalogDefinitionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'CatalogDefinition',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      childCatalogDefinitionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'CatalogDefinition',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      metadata: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        enum: (-1, 0, 1),
      },
      code: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
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
      notEditable: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      tableName: 'CatalogDefinitionRelations',
    }
  )
  CatalogDefinitionRelation.associate = models => {
    CatalogDefinitionRelation.belongsTo(models.CatalogDefinition, {
      foreignKey: 'parentCatalogDefinitionId',
      as: 'parentCatalogDefinition',
    })
    CatalogDefinitionRelation.belongsTo(models.CatalogDefinition, {
      foreignKey: 'childCatalogDefinitionId',
      as: 'childCatalogDefinition',
    })
    CatalogDefinitionRelation.belongsTo(models.User, {
      foreignKey: 'registeredBy',
      as: 'registered',
    })
    CatalogDefinitionRelation.belongsTo(models.User, {
      foreignKey: 'updatedBy',
      as: 'updated',
    })
  }

  return CatalogDefinitionRelation
}
