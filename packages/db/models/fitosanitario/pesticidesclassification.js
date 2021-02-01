module.exports = (sequelize, DataTypes) => {
  const PesticidesClassification = sequelize.define(
    'PesticidesClassification',
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
      tableName: 'PesticidesClassification',
      spanishName: 'Clasificación de Plaguicidas',
      comment: 'Catálogo con las clasificaciones de plaguicidas.',
    }
  )
  PesticidesClassification.associate = models => {
    PesticidesClassification.belongsTo(models.User, {
      foreignKey: 'userId',
    })
  }
  return PesticidesClassification
}
