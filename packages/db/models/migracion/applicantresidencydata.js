module.exports = (sequelize, DataTypes) => {
  const ApplicantResidencyData = sequelize.define(
    'ApplicantResidencyData',
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
        defaultValue: true,
      },
      otherIdentificationTypeId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'IdentificationTypes',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      otherIdentification: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      secondLastName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      knownAs: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      genderId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'DGME_Genders',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      nationalityId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'DGME_Countries',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      birthAt: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      birthPlaceId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'DGME_Countries',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      birthPlace: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      civilStatusId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'DGME_CivilStatuses',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      academicLevelId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'DGME_AcademicLevels',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      fatherName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      motherName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      legalRepresentative: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      healer: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      stateId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'DGME_States',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      cityId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'DGME_Cities',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      districtId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'DGME_Districts',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      cellphone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      telephone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
        trim: true,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
      passportType: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      otherPassportType: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      professionId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'DGME_Professions',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      jobTitle: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fatherLastName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fatherSecondLastName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      motherLastName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      motherSecondLastName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      partnerName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      partnerNationalityId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'DGME_Countries',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      entryCRAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      entryCRPlace: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      partnerIdentification: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      dimex: {
        type: DataTypes.STRING(32),
        allowNull: true,
      },
      recordNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      recordType: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      passportNumber: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      headquarterId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Location',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      otherEmail: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      isMinor: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      hasADisability: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      employerName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      employerIdentification: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      employerTelephone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      employerStateId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'DGME_States',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      employerCityId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'DGME_Cities',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      employerDistrictId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'DGME_Districts',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      employerAddress: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      recordId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'DigitalRecord',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      requestType: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      investmentType: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      relativeDimex: {
        type: DataTypes.STRING(32),
        allowNull: true,
      },
    },
    {
      tableName: 'DGME_ApplicantResidencyDatas',
    }
  )

  ApplicantResidencyData.associate = models => {
    ApplicantResidencyData.belongsTo(models.PersonalInformation, {
      foreignKey: 'procedureId',
    })
    ApplicantResidencyData.belongsTo(models.DGMECountry, {
      as: 'Nationality',
      foreignKey: 'nationalityId',
    })
    ApplicantResidencyData.belongsTo(models.DGMEGender, {
      foreignKey: 'genderId',
      as: 'Gender',
    })
    ApplicantResidencyData.belongsTo(models.DGMECivilStatus, {
      foreignKey: 'civilStatusId',
      as: 'CivilStatus',
    })
    ApplicantResidencyData.belongsTo(models.DGMEAcademicLevel, {
      foreignKey: 'academicLevelId',
      as: 'AcademicLevel',
    })
    ApplicantResidencyData.belongsTo(models.IdentificationType, {
      foreignKey: 'otherIdentificationTypeId',
      as: 'OtherIdentificationType',
    })
    ApplicantResidencyData.belongsTo(models.DGMEProfession, {
      foreignKey: 'professionId',
      as: 'Profession',
    })
    ApplicantResidencyData.belongsTo(models.DGMECountry, {
      as: 'PartnerNationality',
      foreignKey: 'partnerNationalityId',
    })
    ApplicantResidencyData.belongsTo(models.DGMEState, {
      as: 'State',
      foreignKey: 'stateId',
    })
    ApplicantResidencyData.belongsTo(models.DGMECity, {
      as: 'City',
      foreignKey: 'cityId',
    })
    ApplicantResidencyData.belongsTo(models.DGMEDistrict, {
      as: 'District',
      foreignKey: 'districtId',
    })
    ApplicantResidencyData.belongsTo(models.Location, {
      foreignKey: 'headquarterId',
      as: 'Headquarter',
    })
    ApplicantResidencyData.belongsTo(models.DGMECountry, {
      as: 'BirthPlace',
      foreignKey: 'birthPlaceId',
    })
    ApplicantResidencyData.hasMany(models.PreviousNationality, {
      as: 'OtherNationalities',
      foreignKey: 'applicantResidencyDataId',
    })
    ApplicantResidencyData.belongsTo(models.DGMEState, {
      as: 'EmployerState',
      foreignKey: 'employerStateId',
    })
    ApplicantResidencyData.belongsTo(models.DGMECity, {
      as: 'EmployerCity',
      foreignKey: 'employerCityId',
    })
    ApplicantResidencyData.belongsTo(models.DGMEDistrict, {
      as: 'EmployerDistrict',
      foreignKey: 'employerDistrictId',
    })
    ApplicantResidencyData.belongsTo(models.DigitalRecord, {
      as: 'Record',
      foreignKey: 'recordId',
    })
  }

  // Lifecycle Callbacks
  ApplicantResidencyData.afterFind(result => {
    const tempResult = result
    if (tempResult && !tempResult.secondLastName) {
      tempResult.secondLastName = ''
    }
    return tempResult
  })

  ApplicantResidencyData.afterUpdate(result => {
    const tempResult = result
    if (tempResult && !tempResult.secondLastName) {
      tempResult.secondLastName = ''
    }
    return tempResult
  })

  return ApplicantResidencyData
}
