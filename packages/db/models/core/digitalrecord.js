module.exports = (sequelize, DataTypes) => {
  const DigitalRecord = sequelize.define(
    'DigitalRecord',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'DigitalRecordTypes',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'DigitalRecordStatuses',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      organizationId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Organizations',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      parentId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'DigitalRecords',
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
    },
    {
      tableName: 'DigitalRecords',
    }
  )
  DigitalRecord.associate = models => {
    DigitalRecord.belongsTo(models.User, { foreignKey: 'userId' })
    DigitalRecord.belongsTo(models.DigitalRecordType, { foreignKey: 'type' })
    DigitalRecord.belongsTo(models.DigitalRecordStatus, {
      foreignKey: 'status',
    })
    DigitalRecord.belongsTo(models.Application, {
      foreignKey: 'applicationId',
    })
    DigitalRecord.belongsTo(models.Organization, {
      foreignKey: 'organizationId',
    })
    DigitalRecord.belongsTo(models.DigitalRecord, { foreignKey: 'parentId' })
    DigitalRecord.belongsTo(models.DigitalRecord, {
      foreignKey: 'parentId',
      as: 'Parent',
    })
    DigitalRecord.hasOne(models.ContactInformation, {
      foreignKey: 'digitalRecordId',
    })
    DigitalRecord.hasOne(models.Identification, {
      foreignKey: 'digitalRecordId',
    })
    DigitalRecord.hasMany(models.ExternalDigitalRecord, {
      foreignKey: 'digitalRecordId',
    })
    DigitalRecord.hasMany(models.ExternalDigitalRecord, {
      foreignKey: 'digitalRecordId',
      as: 'AllExternalDigitalRecords',
    })
    DigitalRecord.hasOne(models.FiliationForm, {
      foreignKey: 'digitalRecordId',
    })
    DigitalRecord.hasOne(models.PersonalInformation, {
      foreignKey: 'digitalRecordId',
    })
  }

  return DigitalRecord
}
