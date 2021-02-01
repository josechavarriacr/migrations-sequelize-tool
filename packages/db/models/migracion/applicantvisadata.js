module.exports = (sequelize, DataTypes) => {
  const ApplicantVisaData = sequelize.define(
    'ApplicantVisaData',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      forMe: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      identificationType: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      identification: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      expeditionPlace: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      expeditionDate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      validUntil: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fullName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      birthPlace: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      birthDate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      years: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      countryId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Countries',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      civilStatus: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'DGME_CivilStatuses',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      profession: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      actualDirection: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      telephone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fax: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      visa: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      otherVisa: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      lastname: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      secondlastname: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      locationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Locations',
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
      procedureId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: null,
        references: {
          model: 'Procedures',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    },
    {
      tableName: 'ApplicantVisaDatas',
    }
  )

  ApplicantVisaData.associate = models => {
    ApplicantVisaData.belongsTo(models.DigitalRecord, {
      foreignKey: 'digitalRecordId',
    })
    ApplicantVisaData.belongsTo(models.PersonalInformation, {
      foreignKey: 'procedureId',
    })
    ApplicantVisaData.belongsTo(models.Location, {
      foreignKey: 'locationId',
    })
    ApplicantVisaData.belongsTo(models.Country, {
      foreignKey: 'countryId',
    })
    ApplicantVisaData.belongsTo(models.DGMECivilStatus, {
      foreignKey: 'civilStatus',
    })
  }

  // Lifecycle Callbacks
  ApplicantVisaData.afterFind(result => {
    const tempResult = result
    if (tempResult && !tempResult.secondlastname) {
      tempResult.secondlastname = ''
    }
    return tempResult
  })

  ApplicantVisaData.afterUpdate(result => {
    const tempResult = result
    if (tempResult && !tempResult.secondlastname) {
      tempResult.secondlastname = ''
    }
    return tempResult
  })

  return ApplicantVisaData
}
