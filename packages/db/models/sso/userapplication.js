module.exports = (sequelize, DataTypes) => {
  const UserApplication = sequelize.define(
    'UserApplication',
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
      applicationUserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      associatedApplicationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'AssociatedApplications',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      digitalRecordId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      validatedDigitalRecordId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        enum: (-1, 0, 1),
        defaultValue: 1,
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      validTo: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      validFrom: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: 'UserApplications',
    }
  )

  UserApplication.associate = models => {
    UserApplication.belongsTo(models.AssociatedApplication, {
      foreignKey: 'associatedApplicationId',
    })
    UserApplication.belongsTo(models.User, {
      foreignKey: 'userId',
    })
  }

  return UserApplication
}
