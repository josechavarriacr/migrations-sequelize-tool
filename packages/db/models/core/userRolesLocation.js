module.exports = (sequelize, DataTypes) => {
  const UserRolesLocation = sequelize.define(
    'UserRolesLocation',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        enum: (-1, 0, 1),
      },
      userRoleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'UserRoles',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      locationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Locations',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    },
    {
      tableName: 'UserRolesLocations',
    }
  )
  UserRolesLocation.associate = models => {
    UserRolesLocation.belongsTo(models.UserRole, {
      foreignKey: 'userRoleId',
    })
    UserRolesLocation.belongsTo(models.Location, {
      foreignKey: 'locationId',
    })
  }
  return UserRolesLocation
}
