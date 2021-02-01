module.exports = (sequelize, DataTypes) => {
  const Device = sequelize.define(
    'Device',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      status: {
        // 0: Inactive, 1: Active, -1: Deleted
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      applicationId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Applications',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      os: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      token: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      model: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: 'Devices',
    }
  )
  Device.associate = models => {
    Device.belongsTo(models.User, { foreignKey: 'userId' })
    Device.belongsTo(models.Application, { foreignKey: 'applicationId' })
  }

  return Device
}
