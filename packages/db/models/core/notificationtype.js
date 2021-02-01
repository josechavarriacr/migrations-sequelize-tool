module.exports = (sequelize, DataTypes) => {
  const NotificationType = sequelize.define(
    'NotificationType',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      status: {
        // 0: Inactivo, 1: Activo
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      code: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false,
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
    },
    {
      tableName: 'NotificationTypes',
    }
  )
  return NotificationType
}
