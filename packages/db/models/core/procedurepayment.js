module.exports = (sequelize, DataTypes) => {
  const ProcedurePayment = sequelize.define(
    'ProcedurePayment',
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
      procedureId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Procedures',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      definitionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'ProcedurePaymentDefinitions',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      procedureCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cardType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cardPerson: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cardNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      amount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      paymentAuthorization: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      response: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      paymentState: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      breakdown: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      sendEBillStatus: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: -1,
        // -2: Error (In Queue), -1: N/A, 0: Pending (In Queue), 1: Sent, 2: Processing
      },
      sendEBillErrors: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      retries: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      tableName: 'ProcedurePayments',
    }
  )

  ProcedurePayment.associate = models => {
    ProcedurePayment.belongsTo(models.Procedure, {
      foreignKey: 'procedureId',
    })
    ProcedurePayment.belongsTo(models.ProcedurePaymentDefinition, {
      foreignKey: 'definitionId',
    })
  }

  return ProcedurePayment
}
