module.exports = (sequelize, DataTypes) => {
  const PhysicalState = sequelize.define(
    'PhysicalState',
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
      tableName: 'PhysicalStates',
      spanishName: 'Estados Físicos',
      comment: 'Catálogo con los estados físicos registrados en plataforma.',
    }
  )
  PhysicalState.associate = models => {
    PhysicalState.belongsTo(models.User, {
      foreignKey: 'userId',
    })
  }
  return PhysicalState
}
