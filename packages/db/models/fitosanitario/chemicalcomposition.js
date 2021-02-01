module.exports = (sequelize, DataTypes) => {
  const ChemicalComposition = sequelize.define(
    'ChemicalComposition',
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
      analysisMethodId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'AnalysisMethods',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      nutrient: {
        type: DataTypes.STRING(),
        allowNull: true,
      },
      componentsPercentage: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      elementShape: {
        type: DataTypes.STRING(),
        allowNull: true,
      },
      biuret: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      total: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      referenceCode: {
        type: DataTypes.STRING(),
        allowNull: true,
      },
      totalOrganicMatter: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      humidityPercentage: {
        type: DataTypes.INTEGER,
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
      tableName: 'ChemicalCompositions',
      spanishName: 'Composiciones Químicas',
      comment: 'Description ChemicalCompositions',
    }
  )

  ChemicalComposition.associate = models => {
    ChemicalComposition.belongsTo(models.DigitalRecord, {
      foreignKey: 'digitalRecordId',
    })
    ChemicalComposition.belongsTo(models.Procedure, {
      foreignKey: 'procedureId',
    })
    ChemicalComposition.belongsTo(models.AnalysisMethod, {
      foreignKey: 'analysisMethodId',
    })
    ChemicalComposition.belongsTo(models.MeasurementUnit, {
      foreignKey: 'measurementUnitId',
    })
    ChemicalComposition.belongsTo(models.User, {
      foreignKey: 'userId',
    })
  }

  return ChemicalComposition
}
