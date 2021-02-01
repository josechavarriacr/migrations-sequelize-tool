module.exports = (sequelize, DataTypes) => {
  const Section = sequelize.define(
    'Section',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      procedureId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Procedures',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      procedureSectionId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'ProcedureSections',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'SectionStatuses',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    },
    {
      tableName: 'Sections',
    }
  )

  Section.associate = models => {
    Section.belongsTo(models.Procedure, {
      foreignKey: 'procedureId',
    })
    Section.belongsTo(models.ProcedureSection, {
      foreignKey: 'procedureSectionId',
    })
    Section.belongsTo(models.SectionStatus, {
      foreignKey: 'status',
    })
  }

  return Section
}
