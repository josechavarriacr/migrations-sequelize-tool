module.exports = (sequelize, DataTypes) => {
  const PersonalInformation = sequelize.define(
    'PersonalInformation',
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
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      secondlastname: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      knownAs: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: true,
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
        allowNull: true,
      },
      birthPlace: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      civilStatus: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      academicLevel: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fatherName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      motherName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      photo: {
        type: DataTypes.STRING,
        allowNull: true,
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
        allowNull: true,
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
      tableName: 'PersonalInformations',
    }
  )

  PersonalInformation.associate = models => {
    PersonalInformation.belongsTo(models.DigitalRecord, {
      foreignKey: 'digitalRecordId',
    })
    PersonalInformation.belongsTo(models.PersonalInformation, {
      foreignKey: 'procedureId',
    })
    PersonalInformation.belongsTo(models.Country, {
      foreignKey: 'countryId',
    })
  }

  // Lifecycle Callbacks
  PersonalInformation.afterFind(result => {
    const tempResult = result
    if (tempResult && !tempResult.secondlastname) {
      tempResult.secondlastname = ''
    }
    return tempResult
  })

  PersonalInformation.afterUpdate(result => {
    const tempResult = result
    if (tempResult && !tempResult.secondlastname) {
      tempResult.secondlastname = ''
    }
    return tempResult
  })

  return PersonalInformation
}
