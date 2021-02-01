module.exports = (sequelize, DataTypes) => {
  const GeneralInformation = sequelize.define(
    'GeneralInformation',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      writingNumber: {
        type: DataTypes.STRING(10), // TODO: pass from 10 to 5
        allowNull: true,
      },
      tome: {
        type: DataTypes.STRING(10), // TODO: pass from 10 to 5
        allowNull: true,
      },
      folio: {
        type: DataTypes.STRING(10), // TODO: pass from 10 to 5
        allowNull: true,
      },
      edicto: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      place: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      date: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      time: {
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
      organizationId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Organizations',
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
      tableName: 'GeneralInformations',
    }
  )

  GeneralInformation.associate = models => {
    GeneralInformation.belongsTo(models.Procedure, {
      foreignKey: 'procedureId',
    })
    GeneralInformation.belongsTo(models.DigitalRecord, {
      foreignKey: 'digitalRecordId',
    })
    GeneralInformation.belongsTo(models.Organization, {
      foreignKey: 'organizationId',
    })
  }

  return GeneralInformation
}
