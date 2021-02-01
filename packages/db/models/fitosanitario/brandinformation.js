module.exports = (sequelize, DataTypes) => {
  const BrandInformation = sequelize.define(
    'BrandInformation',
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
      name: {
        type: DataTypes.STRING(300),
        allowNull: true,
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
      tableName: 'BrandInformation',
      spanishName: 'Actividades',
      comment: 'Description ApplicationsCope',
    }
  )

  BrandInformation.associate = models => {
    BrandInformation.belongsTo(models.DigitalRecord, {
      foreignKey: 'digitalRecordId',
    })
    BrandInformation.belongsTo(models.Procedure, {
      foreignKey: 'procedureId',
    })
    BrandInformation.belongsTo(models.User, {
      foreignKey: 'userId',
    })
  }

  return BrandInformation
}
