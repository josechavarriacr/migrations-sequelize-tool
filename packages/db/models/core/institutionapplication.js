module.exports = (sequelize, DataTypes) => {
  const InstitutionApplication = sequelize.define(
    'InstitutionApplication',
    {
      id: {
        allownull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
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
        allowNull: false,
      },
    },
    {
      tableName: 'InstitutionApplications',
    }
  )
  InstitutionApplication.associate = models => {
    InstitutionApplication.belongsTo(models.Institution, {
      foreignKey: 'institutionId',
    })
    InstitutionApplication.belongsTo(models.Application, {
      foreignKey: 'applicationId',
    })
  }

  return InstitutionApplication
}
