module.exports = (sequelize, DataTypes) => {
  const ProcedureStatusApplication = sequelize.define(
    'ProcedureStatusApplication',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      applicationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Applications',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      procedureStatusId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'ProcedureStatuses',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      alias: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      sendMail: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      emailMessage: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
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
    },
    {
      tableName: 'ProcedureStatusApplications',
    }
  )

  ProcedureStatusApplication.associate = models => {
    ProcedureStatusApplication.belongsTo(models.Application, {
      foreignKey: 'applicationId',
    })
    ProcedureStatusApplication.belongsTo(models.ProcedureStatus, {
      foreignKey: 'procedureStatusId',
    })
    ProcedureStatusApplication.hasMany(
      models.ProcedureStatusApplicationDefinition,
      {
        foreignKey: 'procedureStatusApplicationId',
      }
    )
  }

  return ProcedureStatusApplication
}
