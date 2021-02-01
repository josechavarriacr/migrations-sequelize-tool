module.exports = (sequelize, DataTypes) => {
  const RawMaterial = sequelize.define(
    'RawMaterial',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING(),
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
      tableName: 'RawMaterials',
      spanishName: 'Materias Primas',
      comment: 'Description RawMaterials',
    }
  )
  RawMaterial.associate = models => {
    RawMaterial.belongsTo(models.User, {
      foreignKey: 'userId',
    })
  }
  return RawMaterial
}
