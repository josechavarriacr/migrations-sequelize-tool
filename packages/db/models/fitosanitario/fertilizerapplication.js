module.exports = (sequelize, DataTypes) => {
  const FertilizerApplication = sequelize.define(
    'FertilizerApplication',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
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
      procedureId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Procedures',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      cropId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Crops',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      dose: {
        type: DataTypes.STRING(550),
        allowNull: true,
      },
      numberFrequency: {
        type: DataTypes.STRING(550),
        allowNull: true,
      },
      scope: {
        type: DataTypes.STRING(550),
        allowNull: true,
      },
      aplicationShape: {
        type: DataTypes.STRING(),
        allowNull: true,
      },
      applicationMethod: {
        type: DataTypes.STRING(550),
        allowNull: true,
      },
      mixVolumen: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      conditionsApplied: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      compatibility: {
        type: DataTypes.STRING(),
        allowNull: true,
        enum: (0, 1),
      },
      compatibilityDetail: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      phytotoxicity: {
        type: DataTypes.SMALLINT,
        allowNull: true,
        enum: (0, 1),
      },
      phytotoxicityDetail: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      instruction: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      status: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        enum: (-1, 0, 1),
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    },
    {
      tableName: 'FertilizersApplications',
      spanishName: 'Aplicaciones de fertilizantes',
      comment: 'Description FertilizersApplication',
    }
  )

  FertilizerApplication.associate = models => {
    FertilizerApplication.belongsTo(models.DigitalRecord, {
      foreignKey: 'digitalRecordId',
    })
    FertilizerApplication.belongsTo(models.Procedure, {
      foreignKey: 'procedureId',
    })
    FertilizerApplication.belongsTo(models.Crop, {
      foreignKey: 'cropId',
    })
    FertilizerApplication.belongsTo(models.User, {
      foreignKey: 'userId',
    })
  }

  return FertilizerApplication
}
