module.exports = (sequelize, DataTypes) => {
  const FolderDocumentDefinition = sequelize.define(
    'FolderDocumentDefinition',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      documentDefinitionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'DocumentDefinitions',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      folderDefinitionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'FolderDefinitions',
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
      tableName: 'FolderDocumentDefinitions',
    }
  )
  FolderDocumentDefinition.associate = models => {
    FolderDocumentDefinition.belongsTo(models.DocumentDefinition, {
      foreignKey: 'documentDefinitionId',
    })
    FolderDocumentDefinition.belongsTo(models.FolderDefinition, {
      foreignKey: 'folderDefinitionId',
    })
  }
  return FolderDocumentDefinition
}
