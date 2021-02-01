module.exports = (sequelize, DataTypes) => {
  const DGMEState = sequelize.define(
    'DGMEState',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      code: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(128),
        allowNull: false,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        enum: (-1, 0, 1),
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      countryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'DGMECountry',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
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
      tableName: 'DGME_States',
      spanishName: 'Provincias',
      comment: 'Description States  ',
    }
  )

  DGMEState.associate = models => {
    DGMEState.hasMany(models.DGMECity, {
      foreignKey: 'stateId',
    })
    DGMEState.belongsTo(models.DGMECountry, {
      foreignKey: 'countryId',
    })
    DGMEState.belongsTo(models.User, {
      foreignKey: 'registeredBy',
      as: 'registered',
    })
    DGMEState.belongsTo(models.User, {
      foreignKey: 'updatedBy',
      as: 'updated',
    })
  }

  return DGMEState
}
