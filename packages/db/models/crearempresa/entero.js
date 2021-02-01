module.exports = (sequelize, DataTypes) => {
  const Entero = sequelize.define(
    'Entero',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      number: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      amount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      tome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      seat: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      agency: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      agencyCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      marked: {
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
      historical: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      tableName: 'Enteros',
    }
  )

  Entero.associate = models => {
    Entero.belongsTo(models.Procedure, {
      foreignKey: 'procedureId',
    })
  }

  return Entero
}
