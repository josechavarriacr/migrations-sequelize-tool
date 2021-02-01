module.exports = (sequelize, DataTypes) => {
  const DocumentAttachment = sequelize.define(
    'DocumentAttachment',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      code: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      extension: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      path: {
        type: DataTypes.VIRTUAL,
        get() {
          const cdnUri = this.getDataValue('cdnUri')
          const relativePath = this.getDataValue('relativePath')
          return cdnUri != null && relativePath != null
            ? cdnUri + relativePath
            : null
        },
      },
      relativePath: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cdnUri: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      documentId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Documents',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      createdBy: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: 'DocumentAttachments',
    }
  )

  DocumentAttachment.associate = models => {
    DocumentAttachment.belongsTo(models.Document, {
      foreignKey: 'documentId',
    })
    DocumentAttachment.belongsTo(models.Attachment, {
      foreignKey: 'attachment',
    })
  }

  return DocumentAttachment
}
