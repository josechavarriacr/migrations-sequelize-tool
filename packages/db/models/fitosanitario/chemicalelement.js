module.exports = (sequelize, DataTypes) => {
  const ChemicalElement = sequelize.define(
    'ChemicalElement',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING(128),
        allowNull: false,
      },
      chemicalSymbol: {
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
      tableName: 'ChemicalElements',
      spanishName: 'Elementos Químicos',
      comment: 'Description ChemicalElements',
    }
  )
  ChemicalElement.associate = models => {
    ChemicalElement.belongsTo(models.User, {
      foreignKey: 'userId',
    })
  }
  return ChemicalElement
}
