module.exports = (sequelize, DataTypes) => {
  const LegalStatus = sequelize.define(
    'LegalStatus',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      identification: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      document: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      chapter: {
        // TOMO
        type: DataTypes.STRING,
        allowNull: false,
      },
      seat: {
        // ASIENTO
        type: DataTypes.STRING,
        allowNull: false,
      },
      registered: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      businessName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      inscriptionDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      validFrom: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      validTo: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      organizationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Organizations',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      procedureId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Procedures',
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
    },
    {
      tableName: 'LegalStatuses',
    }
  )

  LegalStatus.associate = models => {
    LegalStatus.belongsTo(models.Organization, {
      foreignKey: 'organizationId',
    })
    LegalStatus.belongsTo(models.DigitalRecord, {
      foreignKey: 'digitalRecordId',
    })
    LegalStatus.belongsTo(models.Procedure, {
      foreignKey: 'procedureId',
    })
  }

  return LegalStatus
}
