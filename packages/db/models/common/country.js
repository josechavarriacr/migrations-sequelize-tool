module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define(
    'Country',
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
      code: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      state: {
        type: DataTypes.INTEGER,
        allowNull: false,
        enum: (-1, 0, 1),
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      ISO31661A2: {
        type: DataTypes.STRING(128),
        allowNull: true,
      },
      ISO31661A3: {
        type: DataTypes.STRING(128),
        allowNull: true,
      },
      ISO31661Num: {
        type: DataTypes.STRING(128),
        allowNull: true,
      },
      region: {
        type: DataTypes.STRING(128),
        allowNull: true,
      },
      europeanUnion: {
        type: DataTypes.SMALLINT,
        allowNull: true,
        enum: (0, 1),
      },
      migratoryGroup: {
        type: DataTypes.INTEGER,
        allowNull: true,
        enum: (1, 2, 3, 4),
      },
      nationality: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
    },
    {
      tableName: 'Countries',
    }
  )

  return Country
}
