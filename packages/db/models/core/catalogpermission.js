module.exports = (sequelize, DataTypes) => {
  const CatalogPermission = sequelize.define(
    'CatalogPermission',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      category: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 1,
        // 1: Type, 2: Definition
      },
      definitionId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'CatalogDefinitions',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      typeId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'CatalogTypes',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      permission: {
        type: DataTypes.CHAR(1),
        allowNull: false,
        enum: ['R', 'W'],
        defaultValue: 'R',
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
      tableName: 'CatalogPermissions',
    }
  )
  CatalogPermission.associate = models => {
    CatalogPermission.belongsTo(models.Role, {
      foreignKey: 'roleId',
    })
    CatalogPermission.belongsTo(models.CatalogDefinition, {
      foreignKey: 'definitionId',
    })
    CatalogPermission.belongsTo(models.CatalogType, {
      foreignKey: 'typeId',
    })
    CatalogPermission.belongsTo(models.User, {
      foreignKey: 'registeredBy',
      as: 'registered',
    })
    CatalogPermission.belongsTo(models.User, {
      foreignKey: 'updatedBy',
      as: 'updated',
    })
  }
  return CatalogPermission
}
