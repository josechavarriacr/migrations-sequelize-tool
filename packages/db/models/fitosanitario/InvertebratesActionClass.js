module.exports = (sequelize, DataTypes) => {
  const InvertabratesActionClass = sequelize.define(
    'InvertabratesActionClass',
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
      tableName: 'InvertabratesActionClass',
      spanishName: 'Clase de Acción de Invertebrados',
      comment: 'Description InvertabratesActionClass',
    }
  )
  InvertabratesActionClass.associate = models => {
    InvertabratesActionClass.belongsTo(models.User, {
      foreignKey: 'userId',
    })
  }
  return InvertabratesActionClass
}
