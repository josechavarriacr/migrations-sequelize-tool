module.exports = (sequelize, DataTypes) => {
  const RoleApplication = sequelize.define(
    'RoleApplication',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
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
      order: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      maxPendingReviewProcedures: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 10,
      },
    },
    {
      tableName: 'RoleApplications',
    }
  )
  RoleApplication.associate = models => {
    RoleApplication.belongsTo(models.Role, {
      foreignKey: 'roleId',
    })
    RoleApplication.belongsTo(models.Application, {
      foreignKey: 'applicationId',
    })
  }
  return RoleApplication
}
