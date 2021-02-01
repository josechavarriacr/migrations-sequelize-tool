module.exports = (sequelize, DataTypes) => {
  const Testimony = sequelize.define(
    'Testimony',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      numConsecutivo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      numVersion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fecha: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      hora: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tomo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      asiento: {
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
    },
    {
      tableName: 'Testimonies',
    }
  )

  Testimony.associate = models => {
    Testimony.belongsTo(models.Procedure, {
      foreignKey: 'procedureId',
    })
  }

  return Testimony
}
