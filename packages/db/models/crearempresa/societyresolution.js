module.exports = (sequelize, DataTypes) => {
  const SocietyResolution = sequelize.define(
    'SocietyResolution',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      tome: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      seat: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      edicto: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      identification: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING(240),
        allowNull: true,
      },
      inscriptionDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      authorizationNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      authorizationDate: {
        type: DataTypes.DATE,
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
      tableName: 'SocietyResolutions',
    }
  )

  SocietyResolution.associate = models => {
    SocietyResolution.belongsTo(models.Procedure, {
      foreignKey: 'procedureId',
    })
  }

  return SocietyResolution
}
