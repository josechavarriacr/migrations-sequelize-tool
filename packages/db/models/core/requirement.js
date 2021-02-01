module.exports = (sequelize, DataTypes) => {
  const Requirement = sequelize.define(
    'Requirement',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'RequirementStatuses',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
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
      procedureRequirementId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'ProcedureRequirements',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      errorMessage: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      documentId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Documents',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    },
    {
      tableName: 'Requirements',
    }
  )

  Requirement.associate = models => {
    Requirement.belongsTo(models.Procedure, {
      foreignKey: 'procedureId',
    })
    Requirement.belongsTo(models.ProcedureRequirement, {
      foreignKey: 'procedureRequirementId',
    })
    Requirement.belongsTo(models.RequirementStatus, {
      foreignKey: 'status',
    })
    Requirement.belongsTo(models.Document, {
      foreignKey: 'documentId',
    })
  }

  return Requirement
}
