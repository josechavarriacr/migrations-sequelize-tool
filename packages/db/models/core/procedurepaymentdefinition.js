module.exports = (sequelize, DataTypes) => {
  const ProcedurePaymentDefinition = sequelize.define(
    'ProcedurePaymentDefinition',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      transactionCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      predefinedParameters: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      referenceCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      paymentMethod: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
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
      order: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      code: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false,
      },
      paymentCurrency: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      displayCurrency: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      paymentCurrencySymbol: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      displayCurrencySymbol: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      sendEBill: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
        // 0: N/A, 1: Send Electronic Bill
      },
    },
    {
      tableName: 'ProcedurePaymentDefinitions',
    }
  )

  ProcedurePaymentDefinition.associate = models => {
    ProcedurePaymentDefinition.belongsTo(models.ProcedureDefinition, {
      foreignKey: 'procedureDefinitionId',
    })
  }

  return ProcedurePaymentDefinition
}
