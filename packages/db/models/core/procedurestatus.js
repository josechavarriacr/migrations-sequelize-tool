module.exports = (sequelize, DataTypes) => {
  const ProcedureStatus = sequelize.define(
    'ProcedureStatus',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      type: {
        // 1: Activo, 2: Finalizado
        type: DataTypes.INTEGER,
        allowNull: false,
        default: 1,
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
      edit: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      message: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      template: {
        type: DataTypes.STRING,
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
      isTypeError: {
        // 0: no, 1: si
        type: DataTypes.INTEGER,
        allowNull: false,
        default: 0,
      },
      canAccessToWizard: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      inOperatorRevision: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: null,
      },
      canReassign: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: null,
      },
      canPrioritize: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: null,
      },
      canReSchedule: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: null,
      },
      status: {
        // 0: Inactivo, 1: Activo
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      visibleOperator: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      visibleClient: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      forUser: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      tableName: 'ProcedureStatuses',
    }
  )

  ProcedureStatus.associate = models => {
    ProcedureStatus.hasMany(models.ProcedureStatusApplication, {
      foreignKey: 'procedureStatusId',
    })
  }

  return ProcedureStatus
}
