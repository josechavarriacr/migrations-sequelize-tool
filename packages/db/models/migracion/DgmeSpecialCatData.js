module.exports = (sequelize, DataTypes) => {
  const SpecialCategoryData = sequelize.define(
    'SpecialCategoryData',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      institutionName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      years: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      months: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      days: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      identificationTypeId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'IdentificationTypes',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      identification: {
        type: DataTypes.STRING(50),
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
      telephone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fax: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
        trim: true,
      },
      description: {
        type: DataTypes.STRING,
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
      academicLevel: {
        type: DataTypes.STRING,
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
      volunteerType: {
        type: DataTypes.STRING,
        allowNull: true,
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
      recommendationNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: 'DGME_SpecialCatDatas',
    }
  )

  SpecialCategoryData.associate = models => {
    SpecialCategoryData.belongsTo(models.Procedure, {
      foreignKey: 'procedureId',
    })
    SpecialCategoryData.belongsTo(models.DGMEAcademicLevel, {
      foreignKey: 'academicLevelId',
      as: 'AcademicLevel',
    })
    SpecialCategoryData.belongsTo(models.IdentificationType, {
      foreignKey: 'identificationTypeId',
      as: 'IdentificationType',
    })
    SpecialCategoryData.belongsTo(models.DGMEState, {
      as: 'State',
      foreignKey: 'stateId',
    })
    SpecialCategoryData.belongsTo(models.DGMECity, {
      as: 'City',
      foreignKey: 'cityId',
    })
    SpecialCategoryData.belongsTo(models.DGMEDistrict, {
      as: 'District',
      foreignKey: 'districtId',
    })
  }

  // Lifecycle Callbacks
  SpecialCategoryData.afterFind(result => {
    const tempResult = result
    if (tempResult && !tempResult.secondLastName) {
      tempResult.secondLastName = ''
    }
    return tempResult
  })

  SpecialCategoryData.afterUpdate(result => {
    const tempResult = result
    if (tempResult && !tempResult.secondLastName) {
      tempResult.secondLastName = ''
    }
    return tempResult
  })

  return SpecialCategoryData
}
