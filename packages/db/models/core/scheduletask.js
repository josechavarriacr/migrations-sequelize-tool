module.exports = (sequelize, DataTypes) => {
  const ScheduleTask = sequelize.define(
    'ScheduleTask',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      code: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(128),
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING(128),
        allowNull: true,
      },
      interval: {
        type: DataTypes.STRING(55),
        allowNull: false,
      },
      lastRun: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      nextRun: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      webServiceId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        enum: (-1, 0, 1),
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
      tableName: 'ScheduleTasks',
      spanishName: 'Tareas programadas',
      comment: 'Tareas programadas',
    }
  )

  ScheduleTask.associate = models => {
    ScheduleTask.belongsTo(models.WebService, {
      foreignKey: 'webServiceId',
    })
    ScheduleTask.belongsTo(models.User, {
      foreignKey: 'registeredBy',
      as: 'Registered',
    })
    ScheduleTask.belongsTo(models.User, {
      foreignKey: 'updatedBy',
      as: 'Updated',
    })
  }
  return ScheduleTask
}
