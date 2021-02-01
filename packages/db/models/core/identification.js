module.exports = (sequelize, DataTypes) => {
  const Identification = sequelize.define(
    'Identification',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      type: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'IdentificationTypes',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      value: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        // 0: Inactivo, 1: Activo
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
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
    },
    {
      tableName: 'Identifications',
    }
  )
  Identification.associate = models => {
    Identification.belongsTo(models.IdentificationType, { foreignKey: 'type' })
    Identification.belongsTo(models.DigitalRecord, {
      foreignKey: 'digitalRecordId',
    })
  }

  return Identification
}
