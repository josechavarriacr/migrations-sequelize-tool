module.exports = (sequelize, DataTypes) => {
  const SecurityInformation = sequelize.define(
    'SecurityInformation',
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
      protectiveEquipment: {
        type: DataTypes.STRING(550),
        allowNull: true,
      },
      cleaningProcedure: {
        type: DataTypes.STRING(550),
        allowNull: true,
      },
      storageCondition: {
        type: DataTypes.STRING(550),
        allowNull: true,
      },
      environmentEffects: {
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
      tableName: 'SecurityInformation',
      spanishName: 'Información de seguridad',
      comment: 'Description SecurityInformation',
    }
  )

  SecurityInformation.associate = models => {
    SecurityInformation.belongsTo(models.DigitalRecord, {
      foreignKey: 'digitalRecordId',
    })
    SecurityInformation.belongsTo(models.Procedure, {
      foreignKey: 'procedureId',
    })
    SecurityInformation.belongsTo(models.User, {
      foreignKey: 'userId',
    })
  }

  return SecurityInformation
}
