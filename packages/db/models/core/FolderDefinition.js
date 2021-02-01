module.exports = (sequelize, DataTypes) => {
  const FolderDefinition = sequelize.define(
    'FolderDefinition',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      applicationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Applications',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      name: {
        type: DataTypes.STRING(),
        allowNull: false,
      },
      type: {
        // * list or dir
        type: DataTypes.STRING(),
        allowNull: false,
        defaultValue: 'list',
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      parentId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING(),
        allowNull: true,
      },
    },
    {
      tableName: 'FolderDefinitions',
    }
  )
  FolderDefinition.associate = models => {
    FolderDefinition.belongsTo(models.Application, {
      foreignKey: 'applicationId',
    })
    FolderDefinition.hasMany(models.FolderDocumentDefinition, {
      foreignKey: 'folderDefinitionId',
    })
  }
  return FolderDefinition
}
