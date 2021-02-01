module.exports = (sequelize, DataTypes) => {
  const ProductInformation = sequelize.define(
    'ProductInformation',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      digitalRecordId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'DigitalRecords',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      procedureId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Procedures',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      type: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'FertilizersAmendmentsTypes',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      status: {
        type: DataTypes.SMALLINT,
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
      tableName: 'ProductsInformation',
      spanishName: 'Información de Productos',
      comment: 'Description InvertabratesActionClass',
    }
  )

  ProductInformation.associate = models => {
    ProductInformation.belongsTo(models.DigitalRecord, {
      foreignKey: 'digitalRecordId',
    })
    ProductInformation.belongsTo(models.Procedure, {
      foreignKey: 'procedureId',
    })
    ProductInformation.belongsTo(models.FertilizerAmendmentType, {
      foreignKey: 'type',
    })
    ProductInformation.belongsTo(models.User, {
      foreignKey: 'userId',
    })
  }

  return ProductInformation
}
