module.exports = (sequelize, DataTypes) => {
  const Observation = sequelize.define(
    'Observation',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING(75),
        allowNull: false,
      },
      code: {
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: false,
      },
      observation: {
        type: DataTypes.STRING(500),
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
      localesKey: {
        type: DataTypes.STRING(),
        allowNull: true,
      },
      relatedAction: {
        type: DataTypes.STRING(),
        allowNull: false,
      },
      institutionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Institutions',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      registeredBy: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      updatedBy: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      notEditable: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      tableName: 'Observations',
      spanishName: 'Observaciones',
    }
  )

  Observation.associate = models => {
    Observation.belongsTo(models.User, {
      foreignKey: 'registeredBy',
      as: 'registered',
    })
    Observation.belongsTo(models.User, {
      foreignKey: 'updatedBy',
      as: 'updated',
    })
    Observation.belongsTo(models.Institution, {
      foreignKey: 'institutionId',
    })
  }

  return Observation
}
