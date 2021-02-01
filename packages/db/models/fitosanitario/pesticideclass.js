module.exports = (sequelize, DataTypes) => {
  const PesticideClass = sequelize.define(
    'PesticideClass',
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
      tableName: 'PesticideClass',
      spanishName: 'Clases de Plaguicidas',
      comment: 'Catálogo con las clases de plaguicidas.',
    }
  )
  PesticideClass.associate = models => {
    PesticideClass.belongsTo(models.User, {
      foreignKey: 'userId',
    })
  }
  return PesticideClass
}
