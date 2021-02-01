module.exports = (sequelize, DataTypes) => {
  const CatalogField = sequelize.define(
    'CatalogField',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      tags: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      columnName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        enum: (-1, 0, 1),
        defaultValue: 1,
      },
      showInList: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      canFilter: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      canModify: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      showInCreate: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      showInModify: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dbType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      component: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      validations: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      possibleValues: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      source: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      metadata: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      definitionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'CatalogDefinitions',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      code: {
        type: DataTypes.STRING(50),
        allowNull: false,
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
      tableName: 'CatalogFields',
    }
  )
  CatalogField.associate = models => {
    CatalogField.belongsTo(models.CatalogDefinition, {
      foreignKey: 'definitionId',
    })
    CatalogField.belongsTo(models.User, {
      foreignKey: 'registeredBy',
      as: 'registered',
    })
    CatalogField.belongsTo(models.User, {
      foreignKey: 'updatedBy',
      as: 'updated',
    })
  }
  return CatalogField
}
