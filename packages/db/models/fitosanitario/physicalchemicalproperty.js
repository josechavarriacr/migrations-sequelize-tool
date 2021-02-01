module.exports = (sequelize, DataTypes) => {
  const PhysicalChemicalProperty = sequelize.define(
    'PhysicalChemicalProperty',
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
      measurementUnitId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'MeasurementUnits',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      physicalstateDescription: {
        type: DataTypes.STRING(),
        allowNull: true,
      },
      physicalstateCode: {
        type: DataTypes.STRING(),
        allowNull: true,
      },
      color: {
        type: DataTypes.STRING(),
        allowNull: true,
      },
      weight: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      waterSolubility: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      temperature: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      granulometry: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      classification: {
        type: DataTypes.STRING(),
        allowNull: true,
      },
      chelatedNutrients: {
        type: DataTypes.SMALLINT,
        allowNull: true,
        enum: (0, 1),
      },
      agentName: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      agentPercentage: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      deliberation: {
        type: DataTypes.SMALLINT,
        allowNull: true,
        enum: (0, 1),
      },
      chemicalComposition: {
        type: DataTypes.STRING(550),
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
      tableName: 'PhysicalChemicalProperties',
      spanishName: 'Propiedades Fisicoquímicas',
      comment: 'Description InvertabratesActionClass',
    }
  )

  PhysicalChemicalProperty.associate = models => {
    PhysicalChemicalProperty.belongsTo(models.DigitalRecord, {
      foreignKey: 'digitalRecordId',
    })
    PhysicalChemicalProperty.belongsTo(models.Procedure, {
      foreignKey: 'procedureId',
    })
    PhysicalChemicalProperty.belongsTo(models.MeasurementUnit, {
      foreignKey: 'measurementUnitId',
    })
    PhysicalChemicalProperty.belongsTo(models.User, {
      foreignKey: 'userId',
    })
  }

  return PhysicalChemicalProperty
}
