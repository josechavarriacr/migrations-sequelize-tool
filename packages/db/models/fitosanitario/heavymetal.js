module.exports = (sequelize, DataTypes) => {
  const HeavyMetal = sequelize.define(
    'HeavyMetal',
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
      manufacturerId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Manufacturers',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      companyType: {
        type: DataTypes.STRING(),
        allowNull: true,
      },
      activityType: {
        type: DataTypes.STRING(),
        allowNull: true,
      },
      cadmium: {
        type: DataTypes.STRING(),
        allowNull: true,
      },
      chromium: {
        type: DataTypes.STRING(),
        allowNull: true,
      },
      arsenic: {
        type: DataTypes.STRING(),
        allowNull: true,
      },
      mercury: {
        type: DataTypes.STRING(),
        allowNull: true,
      },
      lead: {
        type: DataTypes.STRING(),
        allowNull: true,
      },
      path: {
        type: DataTypes.STRING(),
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
      tableName: 'HeavyMetals',
      spanishName: 'Metales Pesados',
      comment: 'Description HeavyMetals',
    }
  )

  HeavyMetal.associate = models => {
    HeavyMetal.belongsTo(models.DigitalRecord, {
      foreignKey: 'digitalRecordId',
    })
    HeavyMetal.belongsTo(models.Procedure, {
      foreignKey: 'procedureId',
    })
    HeavyMetal.belongsTo(models.Manufacturer, {
      foreignKey: 'manufacturerId',
    })
    HeavyMetal.belongsTo(models.User, {
      foreignKey: 'userId',
    })
  }

  return HeavyMetal
}
