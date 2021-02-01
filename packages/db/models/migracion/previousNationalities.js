module.exports = (sequelize, DataTypes) => {
  const PreviousNationality = sequelize.define(
    'PreviousNationality',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      applicantResidencyDataId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'DGME_ApplicantResidencyData',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      countryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'DGME_Countries',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    },
    {
      tableName: 'PreviousNationalities',
    }
  )

  PreviousNationality.associate = models => {
    PreviousNationality.belongsTo(models.ApplicantResidencyData, {
      foreignKey: 'applicantResidencyDataId',
    })
    PreviousNationality.belongsTo(models.DGMECountry, {
      foreignKey: 'countryId',
      as: 'Country',
    })
  }

  return PreviousNationality
}
