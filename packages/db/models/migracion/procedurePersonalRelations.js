module.exports = (sequelize, DataTypes) => {
  const ProceduresPersonalRelation = sequelize.define(
    'ProceduresPersonalRelation',
    {
      id: {
        allowNull: true,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      kinshipId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'type',
        defaultValue: null,
        references: {
          model: 'DGME_ProceduresDefinitionsPersonalRelations',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      kinshipName: {
        type: DataTypes.STRING(255),
        allowNull: true,
        field: 'name',
      },
      kinshipLastName: {
        type: DataTypes.STRING(255),
        allowNull: true,
        field: 'lastname',
      },
      kinshipSecondLastName: {
        type: DataTypes.STRING(255),
        allowNull: true,
        field: 'secondlastname',
      },
      kinshipIdentification: {
        type: DataTypes.STRING(255),
        allowNull: true,
        field: 'identification',
      },
      identificationType: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
        references: {
          model: 'IdentificationTypes',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      procedureId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: null,
        references: {
          model: 'Procedures',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: true,
        enum: (-1, 1),
      },
      isValidated: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      tableName: 'DGME_ProceduresPersonalRelations',
      spanishName: 'Vínculos del trámite',
    }
  )

  ProceduresPersonalRelation.associate = models => {
    ProceduresPersonalRelation.belongsTo(models.Procedure, {
      foreignKey: 'procedureId',
    })
    ProceduresPersonalRelation.belongsTo(models.IdentificationType, {
      foreignKey: 'identificationType',
    })
    ProceduresPersonalRelation.belongsTo(
      models.ProceduresDefinitionPersonalRelation,
      {
        foreignKey: 'kinshipId',
      }
    )
    ProceduresPersonalRelation.belongsTo(models.PersonalRelationsType, {
      foreignKey: 'kinshipId',
    })
  }

  // Lifecycle Callbacks
  ProceduresPersonalRelation.afterFind(result => {
    const tempResult = result
    if (tempResult && !tempResult.kinshipSecondLastName) {
      tempResult.kinshipSecondLastName = ''
    }
    return tempResult
  })

  ProceduresPersonalRelation.afterUpdate(result => {
    const tempResult = result
    if (tempResult && !tempResult.kinshipSecondLastName) {
      tempResult.kinshipSecondLastName = ''
    }
    return tempResult
  })

  return ProceduresPersonalRelation
}
