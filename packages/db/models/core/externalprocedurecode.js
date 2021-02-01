module.exports = (sequelize, DataTypes) => {
  const ExternalProcedureCode = sequelize.define(
    'ExternalProcedureCode',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      procedureCode: {
        type: DataTypes.STRING(255),
        unique: true,
        allowNull: false,
      },
      externalCode: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        enum: (-1, 0, 1),
      },
      externalProcedureCodeTypeId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      codeCreateAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      tableName: 'ExternalProcedureCodes',
      spanishName: 'Código de Trámite Externo',
      comment: 'Código de Trámite Externo',
    }
  )

  ExternalProcedureCode.associate = models => {
    ExternalProcedureCode.belongsTo(models.ExternalProcedureCodeType, {
      foreignKey: 'externalProcedureCodeTypeId',
    })
  }

  return ExternalProcedureCode
}
