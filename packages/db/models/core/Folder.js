module.exports = (sequelize, DataTypes) => {
  const Folder = sequelize.define(
    'Folder',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      folderDefinitionId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'FolderDefinitions',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      digitalRecordId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'DigitalRecords',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      parentId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Folders',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      name: {
        type: DataTypes.STRING(),
        allowNull: true,
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
      tableName: 'Folders',
      spanishName: 'Carpetas',
      comment: 'Description Folders',
    }
  )
  Folder.associate = models => {
    Folder.belongsTo(models.FolderDefinition, {
      foreignKey: 'folderDefinitionId',
    })
    Folder.belongsTo(models.DigitalRecord, {
      foreignKey: 'digitalRecordId',
    })
    Folder.belongsTo(models.Folder, {
      foreignKey: 'parentId',
      as: 'Parent',
    })
  }
  return Folder
}
