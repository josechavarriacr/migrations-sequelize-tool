module.exports = (sequelize, DataTypes) => {
  const MeasurementUnit = sequelize.define(
    'MeasurementUnit',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      abbreviation: {
        type: DataTypes.STRING(),
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(128),
        allowNull: false,
      },
      status: {
        type: DataTypes.INTEGER,
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
      tableName: 'MeasurementUnits',
      spanishName: 'Unidad de Medida',
      comment: 'Description MeasurementUnits',
    }
  )
  MeasurementUnit.associate = models => {
    MeasurementUnit.belongsTo(models.User, {
      foreignKey: 'userId',
    })
  }
  return MeasurementUnit
}
