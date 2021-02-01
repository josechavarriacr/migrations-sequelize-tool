module.exports = (sequelize, DataTypes) => {
  const PlagueType = sequelize.define(
    'PlagueType',
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
      tableName: 'PlagueTypes',
      spanishName: 'Tipos de Plagas',
      comment: 'Catálogo con los tipos de plagas registrados en plataforma',
    }
  )
  PlagueType.associate = models => {
    PlagueType.belongsTo(models.User, {
      foreignKey: 'userId',
    })
  }
  return PlagueType
}
