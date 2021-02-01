module.exports = (sequelize, DataTypes) => {
  const ProcedureAttachment = sequelize.define(
    'ProcedureAttachment',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      testimony: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      legalSign: {
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
      tableName: 'ProcedureAttachments',
    }
  )

  ProcedureAttachment.associate = models => {
    ProcedureAttachment.belongsTo(models.Procedure, {
      foreignKey: 'procedureId',
    })
  }

  return ProcedureAttachment
}
