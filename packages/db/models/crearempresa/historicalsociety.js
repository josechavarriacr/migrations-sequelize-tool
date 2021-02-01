module.exports = (sequelize, DataTypes) => {
  const HistoricalSociety = sequelize.define(
    'HistoricalSociety',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      identification: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      inscriptionDate: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      notary: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      writingNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      seat: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      authorizationNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      detailJson: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      detailXML: {
        type: DataTypes.TEXT,
        allowNull: true,
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
    },
    {
      tableName: 'HistoricalSocietys',
    }
  )

  HistoricalSociety.associate = models => {
    HistoricalSociety.belongsTo(models.Procedure, {
      foreignKey: 'procedureId',
    })
  }

  return HistoricalSociety
}
