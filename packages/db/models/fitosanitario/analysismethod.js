module.exports = (sequelize, DataTypes) => {
  const AnalysisMethod = sequelize.define(
    'AnalysisMethod',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      code: {
        type: DataTypes.STRING(16),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(128),
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
      tableName: 'AnalysisMethods',
      spanishName: 'Métodos de Análisis',
      comment: 'Description AnalysisMethods',
    }
  )
  AnalysisMethod.associate = models => {
    AnalysisMethod.belongsTo(models.User, {
      foreignKey: 'userId',
    })
  }
  return AnalysisMethod
}
