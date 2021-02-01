module.exports = (sequelize, DataTypes) => {
  const RNReference = sequelize.define(
    'RNReference',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      tome: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      seat: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
      tableName: 'RNReferences',
    }
  )

  RNReference.associate = models => {
    RNReference.belongsTo(models.Procedure, {
      foreignKey: 'procedureId',
    })
  }

  return RNReference
}
