module.exports = (sequelize, DataTypes) => {
  const TestConditions = sequelize.define(
    'TestConditions',
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
      tableName: 'TestConditions',
      spanishName: 'Condiciones de Ensayo',
      comment: 'Description TestConditions',
    }
  )
  TestConditions.associate = models => {
    TestConditions.belongsTo(models.User, {
      foreignKey: 'userId',
    })
  }
  return TestConditions
}
