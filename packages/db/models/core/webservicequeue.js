module.exports = (sequelize, DataTypes) => {
  const WebServiceQueue = sequelize.define(
    'WebServiceQueue',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      webServiceId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'WebService',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      requestHeaders: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      requestParams: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      attempt: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      lastAttemptAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: new Date(),
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        enum: (-1, 0, 1),
        defaultValue: 1,
      },
    },
    {
      tableName: 'WebServiceQueues',
    }
  )
  WebServiceQueue.associate = models => {
    WebServiceQueue.belongsTo(models.WebService, {
      foreignKey: 'webServiceId',
    })
  }

  return WebServiceQueue
}
