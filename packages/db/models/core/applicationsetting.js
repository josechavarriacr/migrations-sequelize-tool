module.exports = (sequelize, DataTypes) => {
  const ApplicationSetting = sequelize.define(
    'ApplicationSetting',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      applicationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Applications',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        enum: (-1, 0, 1),
        defaultValue: 1,
      },
      localesKey: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      order: {
        type: DataTypes.INTEGER,
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
      telephone: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      tableName: 'ApplicationSettings',
    }
  )
  ApplicationSetting.associate = models => {
    ApplicationSetting.belongsTo(models.Application, {
      foreignKey: 'applicationId',
    })
  }

  return ApplicationSetting
}
