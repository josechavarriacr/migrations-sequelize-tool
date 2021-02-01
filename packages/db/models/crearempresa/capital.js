module.exports = (sequelize, DataTypes) => {
  const Capital = sequelize.define(
    'Capital',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      total: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      paymentBreakdown: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      totalColons: {
        type: DataTypes.DOUBLE,
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
      tableName: 'Capitals',
    }
  )

  Capital.associate = models => {
    Capital.belongsTo(models.Procedure, {
      foreignKey: 'procedureId',
    })
    Capital.belongsTo(models.DigitalRecord, {
      foreignKey: 'digitalRecordId',
    })
    Capital.belongsTo(models.Organization, {
      foreignKey: 'organizationId',
    })
  }

  return Capital
}
