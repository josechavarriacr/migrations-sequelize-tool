module.exports = (sequelize, DataTypes) => {
  const FolderDocument = sequelize.define(
    'FolderDocument',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      documentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Documents',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      folderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Folders',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      folderDocumentDefinitionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'FolderDocumentDefinitions',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
    },
    {
      tableName: 'FolderDocuments',
    }
  )
  FolderDocument.associate = models => {
    FolderDocument.belongsTo(models.Document, {
      foreignKey: 'documentId',
    })
    FolderDocument.belongsTo(models.Folder, {
      foreignKey: 'folderId',
    })
    FolderDocument.belongsTo(models.FolderDocumentDefinition, {
      foreignKey: 'folderDocumentDefinitionId',
    })
  }
  return FolderDocument
}
