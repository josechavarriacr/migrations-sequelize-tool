module.exports = (sequelize, DataTypes) => {
  const Conotary = sequelize.define(
    'Conotary',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      identification: {
        type: DataTypes.STRING(9),
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
      tableName: 'Conotaries',
    }
  )

  Conotary.associate = models => {
    Conotary.belongsTo(models.Procedure, {
      foreignKey: 'procedureId',
    })
    Conotary.belongsTo(models.DigitalRecord, {
      foreignKey: 'digitalRecordId',
    })
    Conotary.belongsTo(models.Organization, {
      foreignKey: 'organizationId',
    })
  }

  return Conotary
}
