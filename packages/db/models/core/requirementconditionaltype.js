module.exports = (sequelize, DataTypes) => {
  const RequirementConditionalType = sequelize.define(
    'RequirementConditionalType',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      code: {
        type: DataTypes.STRING(),
        unique: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(),
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(),
        allowNull: true,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        enum: (-1, 0, 1),
        defaultValue: 1,
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      localesKey: {
        type: DataTypes.STRING(),
        allowNull: true,
      },
      registeredBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'User',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      updatedBy: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'User',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    },
    {
      tableName: 'RequirementConditionalTypes',
      spanishName: 'Tipos de requisitos condicionales',
      comment: 'Description RequirementCondicionalTypes',
    }
  )

  RequirementConditionalType.associate = models => {
    RequirementConditionalType.belongsTo(models.User, {
      foreignKey: 'registeredBy',
      as: 'registered',
    })
    RequirementConditionalType.belongsTo(models.User, {
      foreignKey: 'updatedBy',
      as: 'updated',
    })
  }

  return RequirementConditionalType
}
