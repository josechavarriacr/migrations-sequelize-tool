module.exports = (sequelize, DataTypes) => {
  const DGMECountry = sequelize.define(
    'DGMECountry',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      code: {
        type: DataTypes.STRING(5),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      group: {
        type: DataTypes.STRING(3),
        allowNull: true,
      },
      localesKey: {
        type: DataTypes.STRING(),
        allowNull: true,
      },
      registeredBy: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      updatedBy: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      notEditable: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      tableName: 'DGME_Countries',
      spanishName: 'Países',
    }
  )

  DGMECountry.associate = models => {
    DGMECountry.hasMany(models.DGMEState, {
      foreignKey: 'countryId',
    })
    DGMECountry.belongsTo(models.User, {
      foreignKey: 'registeredBy',
      as: 'registered',
    })
    DGMECountry.belongsTo(models.User, {
      foreignKey: 'updatedBy',
      as: 'updated',
    })
  }

  return DGMECountry
}
