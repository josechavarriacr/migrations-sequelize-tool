module.exports = (sequelize, DataTypes) => {
  const AssociatedApplicationAction = sequelize.define(
    'AssociatedApplicationAction',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      associatedApplicationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'AssociatedApplications',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      actionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // references: {
        //   model: 'ApplicationActions',
        //   key: 'id',
        // },
        // onUpdate: 'CASCADE',
        // onDelete: 'SET NULL',
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
    },
    {
      tableName: 'ProcedureDefinitionApplications',
    }
  )

  AssociatedApplicationAction.associate = models => {
    AssociatedApplicationAction.belongsTo(models.AssociatedApplication, {
      foreignKey: 'associatedApplicationId',
    })
    // AssociatedApplicationAction.belongsTo(models.ApplicationAction, {
    //   foreignKey: 'actionId',
    // })
  }

  return AssociatedApplicationAction
}
