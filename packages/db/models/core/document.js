module.exports = (sequelize, DataTypes) => {
  const Document = sequelize.define(
    'Document',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      validFrom: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      validTo: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      legalized: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      signed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      code: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      tableId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      isResolution: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
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
      procedureId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Procedures',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      requirementId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Requirements',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      applicationId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Applications',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      definitionId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'DocumentDefinitions',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      registeredBy: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      isHistorical: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      createdBy: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      procedureVersion: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      procedureCode: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      summary: {
        type: DataTypes.JSON,
        allowNull: true,
      },
    },
    {
      tableName: 'Documents',
    }
  )

  Document.associate = models => {
    Document.belongsTo(models.DocumentDefinition, {
      foreignKey: 'definitionId',
    })
    Document.belongsTo(models.Application, {
      foreignKey: 'applicationId',
    })
    Document.belongsTo(models.Requirement, {
      foreignKey: 'requirementId',
    })
    Document.belongsTo(models.DigitalRecord, {
      foreignKey: 'digitalRecordId',
    })
    Document.belongsTo(models.Procedure, {
      foreignKey: 'procedureId',
    })
    Document.belongsTo(models.User, {
      foreignKey: 'registeredBy',
    })
    Document.belongsTo(models.User, {
      foreignKey: 'createdBy',
      as: 'CreatedBy',
    })
    Document.hasMany(models.DocumentAttachment, {
      foreignKey: 'documentId',
    })
    Document.hasMany(models.FolderDocument, {
      foreignKey: 'documentId',
    })
  }

  return Document
}
