module.exports = (sequelize, DataTypes) => {
  const TempApplicantResidencyData = sequelize.define(
    'TempApplicantResidencyData',
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
        references: {
          model: 'IdentificationTypes',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      identification: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      secondlastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      knownAs: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'DGME_Genders',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
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
      birthDate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      birthPlace: {
        type: DataTypes.STRING,
        allowNull: false,
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
      academicLevel: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'DGME_AcademicLevels',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      academicLevelStatus: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'StatesEducation',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      fatherName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      motherName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      legalRepresentative: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      healer: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      district: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      otherSigns: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fax: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      telephone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      specialProxy: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        trim: true,
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
      status: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
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
      tableName: 'TempApplicantResidencyDatas',
    }
  )

  TempApplicantResidencyData.associate = models => {
    TempApplicantResidencyData.belongsTo(models.DigitalRecord, {
      foreignKey: 'digitalRecordId',
    })
    TempApplicantResidencyData.belongsTo(models.PersonalInformation, {
      foreignKey: 'procedureId',
    })
    TempApplicantResidencyData.belongsTo(models.Country, {
      foreignKey: 'countryId',
    })
    TempApplicantResidencyData.belongsTo(models.DGMEGender, {
      foreignKey: 'gender',
    })
    TempApplicantResidencyData.belongsTo(models.DGMECivilStatus, {
      foreignKey: 'civilStatus',
    })
    TempApplicantResidencyData.belongsTo(models.DGMEAcademicLevel, {
      foreignKey: 'academicLevel',
    })
    TempApplicantResidencyData.belongsTo(models.StateEducation, {
      foreignKey: 'academicLevelStatus',
    })
    TempApplicantResidencyData.belongsTo(models.IdentificationType, {
      foreignKey: 'identificationType',
    })
  }

  // Lifecycle Callbacks
  TempApplicantResidencyData.afterFind(result => {
    const tempResult = result
    if (tempResult && !tempResult.secondlastname) {
      tempResult.secondlastname = ''
    }
    return tempResult
  })

  TempApplicantResidencyData.afterUpdate(result => {
    const tempResult = result
    if (tempResult && !tempResult.secondlastname) {
      tempResult.secondlastname = ''
    }
    return tempResult
  })

  return TempApplicantResidencyData
}
