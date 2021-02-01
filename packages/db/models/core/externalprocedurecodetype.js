module.exports = (sequelize, DataTypes) => {
  const ExternalProcedureCodeType = sequelize.define(
    'ExternalProcedureCodeType',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      code: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      format: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      delimiter: {
        type: DataTypes.STRING(3),
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
        enum: (-1, 0, 1),
      },
      localesKey: {
        type: DataTypes.STRING(),
        allowNull: true,
      },
      registeredBy: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      updatedBy: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      notEditable: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      tableName: 'ExternalProcedureCodeTypes',
      spanishName: 'Código de Trámite Externo',
      comment: 'Código de Trámite Externo',
    }
  )

  return ExternalProcedureCodeType
}
