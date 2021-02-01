module.exports = (sequelize, DataTypes) => {
  const ProcedureStatusApplicationDefinition = sequelize.define(
    'ProcedureStatusApplicationDefinition',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      procedureStatusApplicationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'ProcedureStatusApplications',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      procedureDefinitionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'ProcedureDefinitions',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      alias: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      template: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      emailMessage: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      subject: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      recipients: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      sendMail: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
    },
    {
      tableName: 'ProcedureStatusApplicationDefinitions',
    }
  )

  ProcedureStatusApplicationDefinition.associate = models => {
    ProcedureStatusApplicationDefinition.belongsTo(
      models.ProcedureStatusApplication,
      { foreignKey: 'procedureStatusApplicationId' }
    )
    ProcedureStatusApplicationDefinition.belongsTo(models.ProcedureDefinition, {
      foreignKey: 'procedureDefinitionId',
    })
  }

  return ProcedureStatusApplicationDefinition
}
