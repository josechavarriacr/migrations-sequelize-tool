module.exports = (sequelize, DataTypes) => {
  const LegalMemberType = sequelize.define(
    'LegalMemberType',
    {
      Code: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
        field: 'code',
      },
      Description: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'description',
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
    },
    {
      tableName: 'LegalMemberTypes',
    }
  )
  LegalMemberType.associate = models => {
    LegalMemberType.hasOne(models.SocietyMemberType, {
      foreignKey: 'memberTypeCode',
    })
  }
  return LegalMemberType
}
