module.exports = (sequelize, DataTypes) => {
  const BotanicPesticidesExtract = sequelize.define(
    'BotanicPesticidesExtract',
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
      registryNumber: {
        type: DataTypes.STRING(),
        allowNull: true,
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
      tableName: 'BotanicPesticidesExtract',
      spanishName: 'Extracto de Pesticidas Botánicos',
      comment: 'Description BotanicPesticidesExtract',
    }
  )
  BotanicPesticidesExtract.associate = models => {
    BotanicPesticidesExtract.belongsTo(models.User, {
      foreignKey: 'userId',
    })
  }
  return BotanicPesticidesExtract
}
