module.exports = (sequelize, DataTypes) => {
  const WebService = sequelize.define(
    'WebService',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      systemName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      externalURI: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      apiUri: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      applicationId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      queueable: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      maxAttempts: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
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
        defaultValue: true,
      },
    },
    {
      tableName: 'WebService',
      spanishName: 'Servicio Web',
      comment: 'Servicios web para integrarnos con otros sistemas',
    }
  )

  WebService.associate = models => {
    WebService.belongsTo(models.User, {
      foreignKey: 'registeredBy',
      as: 'Registered',
    })
    WebService.belongsTo(models.User, {
      foreignKey: 'updatedBy',
      as: 'Updated',
    })
    WebService.belongsTo(models.Application, {
      foreignKey: 'applicationId',
    })
  }

  return WebService
}
