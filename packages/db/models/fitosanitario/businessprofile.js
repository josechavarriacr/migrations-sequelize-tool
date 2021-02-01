module.exports = (sequelize, DataTypes) => {
  const BusinessProfile = sequelize.define(
    'BusinessProfile',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      identification: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      telephoneOne: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      telephoneTwo: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      direction: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      digitalRecordId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'DigitalRecords',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      procedureId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Procedures',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    },
    {
      tableName: 'BusinesssesProfiles',
      spanishName: 'Perfiles de Empresas',
      comment: 'Description BusinesssesProfiles',
    }
  )

  BusinessProfile.associate = models => {
    BusinessProfile.belongsTo(models.Procedure, {
      foreignKey: 'procedureId',
    })
    BusinessProfile.belongsTo(models.DigitalRecord, {
      foreignKey: 'digitalRecordId',
    })
    BusinessProfile.hasMany(models.BusinessActivity, {
      foreignKey: 'businessProfileId',
    })
  }
  return BusinessProfile
}
