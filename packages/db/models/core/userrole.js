module.exports = (sequelize, DataTypes) => {
  const UserRole = sequelize.define(
    'UserRole',
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
      roleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Roles',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      digitalRecordId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'DigitalRecords',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      status: {
        // 0: Inactive, 1: Active, 2: Pending Approval
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      validTo: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      validFrom: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
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
      institutionId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Institutions',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      acceptTermsAndConditions: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      dateTermsAndConditions: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      tableName: 'UserRoles',
    }
  )
  UserRole.associate = models => {
    UserRole.belongsTo(models.Role, { foreignKey: 'roleId' })
    UserRole.belongsTo(models.User, { foreignKey: 'userId' })
    UserRole.belongsTo(models.DigitalRecord, { foreignKey: 'digitalRecordId' })
    UserRole.belongsTo(models.Application, { foreignKey: 'applicationId' })
    UserRole.belongsTo(models.Institution, { foreignKey: 'institutionId' })
    UserRole.hasMany(models.UserRolesLocation, { foreignKey: 'userRoleId' })
  }

  return UserRole
}
