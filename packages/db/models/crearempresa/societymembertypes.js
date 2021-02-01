module.exports = (sequelize, DataTypes) => {
  const SocietyMemberType = sequelize.define(
    'SocietyMemberType',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      memberTypeCode: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: 'LegalMemberTypes',
          key: 'code',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      societyTypeCode: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: 'SocietyTypes',
          key: 'code',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    },
    {
      tableName: 'SocietyMemberTypes',
    }
  )

  SocietyMemberType.associate = models => {
    SocietyMemberType.belongsTo(models.LegalMemberType, {
      foreignKey: 'memberTypeCode',
    })
    SocietyMemberType.belongsTo(models.SocietyType, {
      foreignKey: 'societyTypeCode',
    })
  }

  return SocietyMemberType
}
