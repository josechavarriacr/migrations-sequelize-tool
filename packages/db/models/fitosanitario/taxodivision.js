module.exports = (sequelize, DataTypes) => {
  const TaxoDivision = sequelize.define(
    'TaxoDivision',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      taxoKingdomId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'TaxoKingdoms',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
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
      tableName: 'TaxoDivisions',
      spanishName: 'Divisiones Taxonómicos',
      comment: 'Catálogo con las divisiones taxonómicos de especies.',
    }
  )
  TaxoDivision.associate = models => {
    TaxoDivision.belongsTo(models.TaxoKingdom, {
      foreignKey: 'taxoKingdomId',
    })
    TaxoDivision.belongsTo(models.User, {
      foreignKey: 'userId',
    })
  }
  return TaxoDivision
}
