module.exports = (sequelize, DataTypes) => {
  const SinexRecord = sequelize.define(
    'SinexRecord',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      procedureId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: null,
        references: {
          model: 'Procedures',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      visaRecord: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      residencyRecord: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      digitalRecordCode: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
    },
    {
      tableName: 'DGME_SinexRecords',
      spanishName: 'Expedientes Sinex',
    }
  )

  SinexRecord.associate = models => {
    SinexRecord.belongsTo(models.Procedure, {
      foreignKey: 'procedureId',
    })
  }

  return SinexRecord
}
