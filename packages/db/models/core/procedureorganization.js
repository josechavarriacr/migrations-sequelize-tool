module.exports = (sequelize, DataTypes) => {
  const ProcedureOrganization = sequelize.define(
    'ProcedureOrganization',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
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
      organizationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Organizations',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      status: {
        // 1:Activo, 2:Borrado
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
    },
    {
      tableName: 'ProcedureOrganizations',
    }
  )

  ProcedureOrganization.associate = models => {
    ProcedureOrganization.belongsTo(models.Procedure, {
      foreignKey: 'procedureId',
    })
    ProcedureOrganization.belongsTo(models.Organization, {
      foreignKey: 'organizationId',
    })
  }

  return ProcedureOrganization
}
