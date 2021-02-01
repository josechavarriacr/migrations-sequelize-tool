module.exports = (sequelize, DataTypes) => {
  const Procedure = sequelize.define(
    'Procedure',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      version: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      number: {
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
        allowNull: true,
      },
      cdnUri: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      extension: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      procedureDefinitionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'ProcedureDefinitions',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      signPath: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'ProcedureStatuses',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
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
      ownerDigitalRecordId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'DigitalRecords',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      reviewerRoleId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Roles',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      reviewerId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      locationId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Locations',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      createdAtProcedure: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      },
      lastReviewedAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },
      isHistorical: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      removed: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      isMigrated: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      migratedReference: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      forMe: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      requesterIdentification: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Identifications',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      requesterIdentificationType: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      requesterDigitalRecordId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'DigitalRecords',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      requesterName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      expiresAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },
    },
    {
      tableName: 'Procedures',
    }
  )

  Procedure.associate = models => {
    Procedure.belongsTo(models.ProcedureDefinition, {
      foreignKey: 'procedureDefinitionId',
    })
    Procedure.belongsTo(models.ProcedureStatus, {
      foreignKey: 'status',
    })
    Procedure.belongsTo(models.User, {
      foreignKey: 'user',
      as: 'User',
    })
    Procedure.belongsTo(models.DigitalRecord, {
      foreignKey: 'digitalRecordId',
      as: 'DigitalRecord',
    })
    Procedure.belongsTo(models.Application, {
      foreignKey: 'applicationId',
    })
    Procedure.belongsTo(models.DigitalRecord, {
      foreignKey: 'ownerDigitalRecordId',
      as: 'GeneratedDigitalRecord',
    })
    Procedure.belongsTo(models.Role, {
      foreignKey: 'reviewerRoleId',
    })
    Procedure.belongsTo(models.User, {
      foreignKey: 'reviewerId',
      as: 'Reviewer',
    })
    Procedure.belongsTo(models.Location, {
      foreignKey: 'locationId',
    })
    Procedure.belongsTo(models.IdentificationType, {
      foreignKey: 'requesterIdentificationType',
      as: 'RequesterIdentificationType',
    })
    Procedure.belongsTo(models.DigitalRecord, {
      foreignKey: 'requesterDigitalRecordId',
      as: 'RequesterDigitalRecord',
    })
    Procedure.hasOne(models.GeneralInformation, {
      foreignKey: 'procedureId',
    })
    Procedure.hasOne(models.HistoricalSociety, {
      foreignKey: 'procedureId',
    })
  }

  return Procedure
}
