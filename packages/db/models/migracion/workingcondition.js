module.exports = (sequelize, DataTypes) => {
  const WorkingCondition = sequelize.define(
    'WorkingCondition',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      code: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(),
        allowNull: false,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        enum: (-1, 0, 1),
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: '1',
      },
      localesKey: {
        type: DataTypes.STRING(),
        allowNull: true,
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
      tableName: 'DGME_WorkingConditions',
      spanishName: 'Condiciones Laborales',
      comment: 'Description WorkingConditions  ',
    }
  )

  WorkingCondition.associate = models => {
    WorkingCondition.belongsTo(models.User, {
      foreignKey: 'registeredBy',
      as: 'registered',
    })
    WorkingCondition.belongsTo(models.User, {
      foreignKey: 'updatedBy',
      as: 'updated',
    })
  }

  return WorkingCondition
}
