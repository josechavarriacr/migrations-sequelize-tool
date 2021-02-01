module.exports = (sequelize, DataTypes) => {
  const SocietyInformation = sequelize.define(
    'SocietyInformation',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      // 0 -> inscrito por nombre y 1 -> inscrito por numero
      inscriptionBy: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING(128),
        allowNull: true,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: true,
        references: {
          model: 'SocietyTypes',
          key: 'code',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      registerBrand: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      cityCode: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      startDate: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      dueDate: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      direction: {
        type: DataTypes.STRING(240),
        allowNull: true,
      },
      appointmentExtension: {
        type: DataTypes.STRING(28000),
        allowNull: true,
      },
      objective: {
        type: DataTypes.STRING(480),
        allowNull: true,
      },
      legalExtension: {
        type: DataTypes.STRING(240),
        allowNull: true,
      },
      representation: {
        type: DataTypes.STRING(28000),
        allowNull: true,
      },
      grantAuthority: {
        type: DataTypes.BOOLEAN,
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
      tableName: 'SocietyInformations',
    }
  )

  SocietyInformation.associate = models => {
    SocietyInformation.belongsTo(models.SocietyType, {
      foreignKey: 'type',
      targetKey: 'code',
    })
    SocietyInformation.belongsTo(models.Procedure, {
      foreignKey: 'procedureId',
    })
    SocietyInformation.belongsTo(models.DigitalRecord, {
      foreignKey: 'digitalRecordId',
    })
    SocietyInformation.belongsTo(models.Organization, {
      foreignKey: 'organizationId',
    })
  }

  return SocietyInformation
}
