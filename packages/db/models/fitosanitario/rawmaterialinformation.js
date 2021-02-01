module.exports = (sequelize, DataTypes) => {
  const RawMaterialInformation = sequelize.define(
    'RawMaterialInformation',
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
      rawMaterialId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Procedures',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      rawMaterialFormulated: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        enum: (0, 1),
      },
      elavoration: {
        type: DataTypes.STRING(550),
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING(550),
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
      tableName: 'RawMaterialsInformation',
      spanishName: 'Información de Materias Primas',
      comment: 'Description RawMaterialsInformation',
    }
  )

  RawMaterialInformation.associate = models => {
    RawMaterialInformation.belongsTo(models.DigitalRecord, {
      foreignKey: 'digitalRecordId',
    })
    RawMaterialInformation.belongsTo(models.Procedure, {
      foreignKey: 'procedureId',
    })
    RawMaterialInformation.belongsTo(models.RawMaterial, {
      foreignKey: 'rawMaterialId',
    })
    RawMaterialInformation.belongsTo(models.User, {
      foreignKey: 'userId',
    })
  }

  return RawMaterialInformation
}
