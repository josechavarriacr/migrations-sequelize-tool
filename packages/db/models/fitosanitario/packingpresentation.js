module.exports = (sequelize, DataTypes) => {
  const PackingPresentation = sequelize.define(
    'PackingPresentation',
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
      packingTypeId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'PackingTypes',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      rawMaterialId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'RawMaterials',
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
      bulk: {
        type: DataTypes.SMALLINT,
        allowNull: true,
        enum: (0, 1),
      },
      quantity: {
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
      tableName: 'PackingPresentations',
      spanishName: 'Presentaciones de Envase',
      comment: 'Description PackingPresentations',
    }
  )

  PackingPresentation.associate = models => {
    PackingPresentation.belongsTo(models.DigitalRecord, {
      foreignKey: 'digitalRecordId',
    })
    PackingPresentation.belongsTo(models.Procedure, {
      foreignKey: 'procedureId',
    })
    PackingPresentation.belongsTo(models.PackingType, {
      foreignKey: 'packingTypeId',
    })
    PackingPresentation.belongsTo(models.RawMaterial, {
      foreignKey: 'rawMaterialId',
    })
    PackingPresentation.belongsTo(models.MeasurementUnit, {
      foreignKey: 'measurementUnitId',
    })
    PackingPresentation.belongsTo(models.User, {
      foreignKey: 'userId',
    })
  }

  return PackingPresentation
}
