module.exports = (sequelize, DataTypes) => {
  const ProceduresDefinitionPersonalRelation = sequelize.define(
    'ProceduresDefinitionPersonalRelation',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      type: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: null,
        references: {
          model: 'PersonalRelationsTypes',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      procedureDefinitionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: null,
        references: {
          model: 'ProcedureDefinitions',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        enum: (-1, 1),
      },
    },
    {
      tableName: 'DGME_ProceduresDefinitionsPersonalRelations',
      spanishName: 'Relación de Vínculos con tipo de trámite',
    }
  )

  ProceduresDefinitionPersonalRelation.associate = models => {
    ProceduresDefinitionPersonalRelation.belongsTo(models.ProcedureDefinition, {
      foreignKey: 'procedureDefinitionId',
    })
    ProceduresDefinitionPersonalRelation.belongsTo(
      models.PersonalRelationsType,
      {
        foreignKey: 'type',
      }
    )
  }

  return ProceduresDefinitionPersonalRelation
}
