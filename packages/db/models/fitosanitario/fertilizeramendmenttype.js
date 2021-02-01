module.exports = (sequelize, DataTypes) => {
  const FertilizerAmendmentType = sequelize.define(
    'FertilizerAmendmentType',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      description: {
        type: DataTypes.STRING(),
        allowNull: false,
      },
      reference: {
        type: DataTypes.INTEGER,
        allowNull: false,
        enum: (1, 2),
      },
      parentId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'FertilizersAmendmentCategories',
          key: 'id',
        },
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
      tableName: 'FertilizersAmendmentsTypes',
      spanishName: 'Tipos de Enmiendas de Fertilizantes',
      comment: 'Description FertilizersAmendmentsTypes',
    }
  )

  FertilizerAmendmentType.associate = models => {
    FertilizerAmendmentType.belongsTo(models.FertilizerAmendmentCategory, {
      foreignKey: 'parentId',
    })
    FertilizerAmendmentType.belongsTo(models.User, {
      foreignKey: 'userId',
    })
  }
  return FertilizerAmendmentType
}
