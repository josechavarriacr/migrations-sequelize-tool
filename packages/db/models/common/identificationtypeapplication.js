module.exports = (sequelize, DataTypes) => {
  const IdentificationTypeApplication = sequelize.define(
    'IdentificationTypeApplication',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      identificationTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'IdentificationTypes',
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
    },
    {
      tableName: 'IdentificationTypeApplications',
    }
  )
  IdentificationTypeApplication.associate = models => {
    IdentificationTypeApplication.belongsTo(models.IdentificationType, {
      foreignKey: 'identificationTypeId',
    })
    IdentificationTypeApplication.belongsTo(models.Application, {
      foreignKey: 'applicationId',
    })
  }
  return IdentificationTypeApplication
}
