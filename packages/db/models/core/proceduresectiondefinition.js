module.exports = (sequelize, DataTypes) => {
  const ProcedureSectionDefinition = sequelize.define(
    'ProcedureSectionDefinition',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      componentReadOnlyPath: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      componentFormPath: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      componentReviewPath: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      stepName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'ProcedureSectionDefinitionTypes',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      isDisplayOnReview: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      isDisplayOnSummary: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      isDisplayOnUser: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      isDisplayOnOperator: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      tableName: 'ProcedureSectionDefinitions',
    }
  )
  ProcedureSectionDefinition.associate = models => {
    ProcedureSectionDefinition.belongsTo(
      models.ProcedureSectionDefinitionType,
      {
        foreignKey: 'type',
      }
    )
    ProcedureSectionDefinition.hasOne(models.ProcedureDefinitionForm, {
      foreignKey: 'procedureSectionDefinitionId',
    })
  }
  return ProcedureSectionDefinition
}
