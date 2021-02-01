module.exports = (sequelize, DataTypes) => {
  const DGMEAcademicLevel = sequelize.define(
    'DGMEAcademicLevel',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      code: {
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
      },
      description: {
        type: DataTypes.STRING(),
        allowNull: true,
      },
      localesKey: {
        type: DataTypes.STRING(),
        allowNull: true,
      },
      registeredBy: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      updatedBy: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      notEditable: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      tableName: 'DGME_AcademicLevels',
      spanishName: 'Niveles Académicos',
      comment: 'Description AcademicLevels  ',
    }
  )

  DGMEAcademicLevel.associate = models => {
    DGMEAcademicLevel.belongsTo(models.User, {
      foreignKey: 'registeredBy',
      as: 'registered',
    })
    DGMEAcademicLevel.belongsTo(models.User, {
      foreignKey: 'updatedBy',
      as: 'updated',
    })
  }

  return DGMEAcademicLevel
}
