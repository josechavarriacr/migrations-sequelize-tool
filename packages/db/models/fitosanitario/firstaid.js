module.exports = (sequelize, DataTypes) => {
  const FirstAid = sequelize.define(
    'FirstAid',
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
      ingestionCase: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      inhalationCase: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      poisoningCase: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      cutaneous: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      eyeContact: {
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
      tableName: 'FirstAid',
      spanishName: 'Primeros auxilios',
      comment: 'Description FirstAid',
    }
  )

  FirstAid.associate = models => {
    FirstAid.belongsTo(models.DigitalRecord, {
      foreignKey: 'digitalRecordId',
    })
    FirstAid.belongsTo(models.Procedure, {
      foreignKey: 'procedureId',
    })
    FirstAid.belongsTo(models.User, {
      foreignKey: 'userId',
    })
  }

  return FirstAid
}
