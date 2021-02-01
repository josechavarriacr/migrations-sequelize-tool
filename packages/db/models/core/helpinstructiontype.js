module.exports = (sequelize, DataTypes) => {
  const HelpInstructionType = sequelize.define(
    'HelpInstructionType',
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
      code: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false,
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      documentDefinitionId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'DocumentDefinitions',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    },
    {
      tableName: 'HelpInstructionTypes',
    }
  )

  HelpInstructionType.associate = models => {
    HelpInstructionType.belongsTo(models.DocumentDefinition, {
      foreignKey: 'documentDefinitionId',
    })
  }

  return HelpInstructionType
}
