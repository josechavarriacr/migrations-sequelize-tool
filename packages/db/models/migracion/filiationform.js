module.exports = (sequelize, DataTypes) => {
  const FiliationForm = sequelize.define(
    'FiliationForm',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
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
      digitalRecordId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'DigitalRecords',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      recordNumber: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      forMe: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      passportType: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      otherPassportType: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      passportNumber: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      headquarterId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
        references: {
          model: 'Locations',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      identification: {
        type: DataTypes.STRING(50),
        allowNull: true,
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
      dimex: {
        type: DataTypes.STRING(32),
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      lastName: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      secondLastName: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      knownAs: {
        type: DataTypes.STRING(255),
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
      birthAt: {
        type: DataTypes.DATE,
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
        type: DataTypes.STRING(255),
        allowNull: true,
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
      entryCRAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      entryCRPlace: {
        type: DataTypes.STRING(255),
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
      legalRepresentative: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      healer: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: true,
        trim: true,
      },
      otherEmail: {
        type: DataTypes.STRING(255),
        allowNull: true,
        trim: true,
      },
      telephone: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      cellphone: {
        type: DataTypes.STRING(20),
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
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      fatherName: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      fatherLastName: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      fatherSecondLastName: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      motherName: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      motherLastName: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      motherSecondLastName: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      partnerName: {
        type: DataTypes.STRING(255),
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
      hasUserConsent: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      recordType: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      recordId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'DigitalRecords',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    },
    {
      tableName: 'DGME_FiliationForms',
      spanishName: 'Filiación',
    }
  )

  FiliationForm.associate = models => {
    FiliationForm.belongsTo(models.DGMEGender, {
      foreignKey: 'genderId',
      as: 'Gender',
    })
    FiliationForm.belongsTo(models.DGMECivilStatus, {
      foreignKey: 'civilStatusId',
      as: 'CivilStatus',
    })
    FiliationForm.belongsTo(models.DGMECountry, {
      foreignKey: 'nationalityId',
      as: 'Nationality',
    })
    FiliationForm.belongsTo(models.DGMEProfession, {
      foreignKey: 'professionId',
      as: 'Profession',
    })
    FiliationForm.belongsTo(models.DGMEAcademicLevel, {
      foreignKey: 'academicLevelId',
      as: 'AcademicLevel',
    })
    FiliationForm.belongsTo(models.DGMECountry, {
      foreignKey: 'birthPlaceId',
      as: 'BirthPlace',
    })
    FiliationForm.belongsTo(models.IdentificationType, {
      foreignKey: 'otherIdentificationTypeId',
      as: 'OtherIdentificationType',
    })
    FiliationForm.belongsTo(models.DGMECountry, {
      foreignKey: 'partnerNationalityId',
      as: 'PartnerNationality',
    })
    FiliationForm.belongsTo(models.Procedure, {
      foreignKey: 'procedureId',
    })
    FiliationForm.belongsTo(models.DigitalRecord, {
      as: 'DigitalRecord',
      foreignKey: 'digitalRecordId',
    })
    FiliationForm.belongsTo(models.Location, {
      foreignKey: 'headquarterId',
      as: 'Headquarter',
    })
    FiliationForm.belongsTo(models.DGMEState, {
      as: 'State',
      foreignKey: 'stateId',
    })
    FiliationForm.belongsTo(models.DGMECity, {
      as: 'City',
      foreignKey: 'cityId',
    })
    FiliationForm.belongsTo(models.DGMEDistrict, {
      as: 'District',
      foreignKey: 'districtId',
    })
    FiliationForm.belongsTo(models.DigitalRecord, {
      as: 'RequesterDigitalRecord',
      foreignKey: 'recordId',
    })
    FiliationForm.hasMany(models.FiliationFormNationality, {
      foreignKey: 'filiationFormId',
      as: 'OtherNationalities',
    })
  }

  // Lifecycle Callbacks
  FiliationForm.afterFind(result => {
    const tempResult = result
    if (tempResult && !tempResult.secondLastName) {
      tempResult.secondLastName = ''
    }
    return tempResult
  })

  FiliationForm.afterUpdate(result => {
    const tempResult = result
    if (tempResult && !tempResult.secondLastName) {
      tempResult.secondLastName = ''
    }
    return tempResult
  })

  return FiliationForm
}
