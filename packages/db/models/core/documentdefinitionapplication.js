module.exports = (sequelize, DataTypes) => {
  const DocumentDefinitionApplication = sequelize.define(
    'DocumentDefinitionApplication',
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
      documentDefinitionId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'DocumentDefinitions',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
    },
    {
      tableName: 'DocumentDefinitionApplications',
    }
  )

  DocumentDefinitionApplication.associate = models => {
    DocumentDefinitionApplication.belongsTo(models.Application, {
      foreignKey: 'applicationId',
    })
    DocumentDefinitionApplication.belongsTo(models.DocumentDefinition, {
      foreignKey: 'documentDefinitionId',
    })
  }

  return DocumentDefinitionApplication
}
