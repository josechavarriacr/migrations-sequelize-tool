module.exports = (sequelize, DataTypes) => {
  const PersonalRelationsType = sequelize.define(
    'PersonalRelationsType',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      code: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      inputLabel: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        enum: (-1, 1),
      },
      order: {
        type: DataTypes.INTEGER,
      },
      identificationCode: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      kinshipLabel: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    },
    {
      tableName: 'DGME_PersonalRelationsTypes',
      spanishName: 'Tipos de Vínculos',
    }
  )

  return PersonalRelationsType
}
