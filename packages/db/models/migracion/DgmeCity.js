module.exports = (sequelize, DataTypes) => {
  const DGMECity = sequelize.define(
    'DGMECity',
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
      stateId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'DGMEState',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
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
      tableName: 'DGME_Cities',
      spanishName: 'Cantones',
      comment: 'Description Cities',
    }
  )
  DGMECity.associate = models => {
    DGMECity.hasMany(models.DGMEDistrict, {
      foreignKey: 'cityId',
    })
    DGMECity.belongsTo(models.DGMEState, {
      foreignKey: 'stateId',
    })
    DGMECity.belongsTo(models.User, {
      foreignKey: 'registeredBy',
      as: 'registered',
    })
    DGMECity.belongsTo(models.User, {
      foreignKey: 'updatedBy',
      as: 'updated',
    })
  }

  return DGMECity
}
