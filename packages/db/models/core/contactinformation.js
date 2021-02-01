module.exports = (sequelize, DataTypes) => {
  const ContactInformation = sequelize.define(
    'ContactInformation',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      state: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      district: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      otherSigns: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fax: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      telephone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      specialProxy: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        trim: true,
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
      status: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      procedureId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
        references: {
          model: 'Procedures',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    },
    {
      tableName: 'ContactInformations',
    }
  )

  ContactInformation.associate = models => {
    ContactInformation.belongsTo(models.DigitalRecord, {
      foreignKey: 'digitalRecordId',
    })
    ContactInformation.belongsTo(models.Procedure, {
      foreignKey: 'procedureId',
    })
  }

  return ContactInformation
}
