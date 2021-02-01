module.exports = (sequelize, DataTypes) => {
  const CapitalDetail = sequelize.define(
    'CapitalDetail',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      typeCode: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      currency: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      currencyCode: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      feeValue: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      actionClass: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      actionClassCode: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      capitalId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Capitals',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    },
    {
      tableName: 'CapitalDetails',
    }
  )

  CapitalDetail.associate = models => {
    CapitalDetail.belongsTo(models.Capital, {
      foreignKey: 'capitalId',
    })
  }

  return CapitalDetail
}
