module.exports = (sequelize, DataTypes) => {
  const WebServiceExecutionLog = sequelize.define(
    'WebServiceExecutionLog',
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
      response: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        enum: (-1, 0, 1),
      },
      startAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      finishAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      tableName: 'WebServiceExecutionLogs',
    }
  )
  WebServiceExecutionLog.associate = models => {
    WebServiceExecutionLog.belongsTo(models.WebService, {
      foreignKey: 'webServiceId',
    })

    WebServiceExecutionLog.belongsTo(models.ExecutionStatus, {
      foreignKey: 'status',
    })
  }

  return WebServiceExecutionLog
}
