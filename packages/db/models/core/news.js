module.exports = (sequelize, DataTypes) => {
  const News = sequelize.define(
    'News',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      detail: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: true,
        enum: (-1, 0, 1),
      },
      code: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(128),
        allowNull: false,
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      localesKey: {
        type: DataTypes.STRING(),
        allowNull: true,
      },
      institutionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Institutions',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
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
      tableName: 'News',
    }
  )

  News.associate = models => {
    News.belongsTo(models.Institution, {
      foreignKey: 'institutionId',
    })
    News.belongsTo(models.User, {
      foreignKey: 'registeredBy',
      as: 'registered',
    })
    News.belongsTo(models.User, {
      foreignKey: 'updatedBy',
      as: 'updated',
    })
  }

  return News
}
