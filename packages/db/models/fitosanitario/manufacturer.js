module.exports = (sequelize, DataTypes) => {
  const Manufacturer = sequelize.define(
    'Manufacturer',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      countryId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Countries',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      phone1: {
        type: DataTypes.STRING(16),
        allowNull: false,
      },
      phone2: {
        type: DataTypes.STRING(16),
        allowNull: true,
      },
      email1: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      email2: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      address: {
        type: DataTypes.STRING(512),
        allowNull: false,
      },
      isExtractor: {
        type: DataTypes.SMALLINT,
        allowNull: false,
      },
      isMaker: {
        type: DataTypes.SMALLINT,
        allowNull: false,
      },
      isImporter: {
        type: DataTypes.SMALLINT,
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
      tableName: 'Manufacturers',
      spanishName: 'Fabricantes',
      comment: 'Description Manufacturers',
    }
  )
  Manufacturer.associate = models => {
    Manufacturer.belongsTo(models.Country, {
      foreignKey: 'countryId',
    })
    Manufacturer.belongsTo(models.User, {
      foreignKey: 'userId',
    })
  }
  return Manufacturer
}
