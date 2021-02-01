module.exports = (sequelize, DataTypes) => {
  const ExternalDigitalRecord = sequelize.define(
    'ExternalDigitalRecord',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
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
      code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      typeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'ExternalDigitalRecordTypes',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    },
    {
      tableName: 'ExternalDigitalRecords',
    }
  )
  ExternalDigitalRecord.associate = models => {
    ExternalDigitalRecord.belongsTo(models.DigitalRecord, {
      foreignKey: 'digitalRecordId',
    })
    ExternalDigitalRecord.belongsTo(models.ExternalDigitalRecordType, {
      foreignKey: 'typeId',
    })
  }

  return ExternalDigitalRecord
}
