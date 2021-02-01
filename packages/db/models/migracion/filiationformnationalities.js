module.exports = (sequelize, DataTypes) => {
  const FiliationFormNationality = sequelize.define(
    'FiliationFormNationality',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
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
      filiationFormId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'DGME_FiliationForms',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    },
    {
      tableName: 'DGME_FiliationFormNationalities',
    }
  )
  FiliationFormNationality.associate = models => {
    FiliationFormNationality.belongsTo(models.FiliationForm, {
      foreignKey: 'filiationFormId',
    })
    FiliationFormNationality.belongsTo(models.DGMECountry, {
      foreignKey: 'countryId',
      as: 'Country',
    })
  }
  return FiliationFormNationality
}
