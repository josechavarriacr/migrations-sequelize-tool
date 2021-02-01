module.exports = (sequelize, DataTypes) => {
  const CatalogWebService = sequelize.define(
    'CatalogWebService',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      catalogId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'CatalogDefinitions',
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
      metadata: {
        type: DataTypes.JSON,
        allowNull: true,
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
      tableName: 'CatalogWebServices',
      spanishName: 'Servicios Web de catalogos',
    }
  )

  CatalogWebService.associate = models => {
    CatalogWebService.belongsTo(models.CatalogDefinition, {
      foreignKey: 'catalogId',
    })
    CatalogWebService.belongsTo(models.WebService, {
      foreignKey: 'webServiceId',
    })
    CatalogWebService.belongsTo(models.User, {
      foreignKey: 'registeredBy',
      as: 'registered',
    })
    CatalogWebService.belongsTo(models.User, {
      foreignKey: 'updatedBy',
      as: 'updated',
    })
  }

  return CatalogWebService
}
