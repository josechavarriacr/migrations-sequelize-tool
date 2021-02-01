module.exports = (sequelize, DataTypes) => {
  const FormulationType = sequelize.define(
    'FormulationType',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      physicalStateId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'PhysicalStates',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      abbreviation: {
        type: DataTypes.STRING(),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(),
        allowNull: false,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        enum: (-1, 0, 1),
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    },
    {
      tableName: 'FormulationTypes',
      spanishName: 'Tipos de Formulación',
      comment: 'Description FormulationTypes',
    }
  )
  FormulationType.associate = models => {
    FormulationType.belongsTo(models.PhysicalState, {
      foreignKey: 'physicalStateId',
    })
    FormulationType.belongsTo(models.User, {
      foreignKey: 'userId',
    })
  }
  return FormulationType
}
