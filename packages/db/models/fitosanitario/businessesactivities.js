module.exports = (sequelize, DataTypes) => {
  const BusinessActivity = sequelize.define(
    'BusinessActivity',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      businessProfileId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'BusinesssesProfiles',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      activityId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Activities',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    },
    {
      tableName: 'BusinessesActivities',
      spanishName: 'Actividades',
      comment: 'Description BusinessesActivities',
    }
  )

  BusinessActivity.associate = models => {
    BusinessActivity.belongsTo(models.BusinessProfile, {
      foreignKey: 'businessProfileId',
    })
    BusinessActivity.belongsTo(models.Activity, {
      foreignKey: 'activityId',
    })
  }

  return BusinessActivity
}
