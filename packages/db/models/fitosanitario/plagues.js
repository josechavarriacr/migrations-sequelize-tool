module.exports = (sequelize, DataTypes) => {
  const Plagues = sequelize.define(
    'Plagues',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      taxoFamilyId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'TaxoFamilies',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      plagueTypeId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'PlagueTypes',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      plagueClassId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'PlagueClasses',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      plagueCategoryId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'PlagueCategories',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      name: {
        type: DataTypes.STRING(),
        allowNull: false,
      },
      gender: {
        type: DataTypes.STRING(),
        allowNull: false,
      },
      species: {
        type: DataTypes.STRING(),
        allowNull: false,
      },
      fruitBug: {
        allowNull: true,
        type: DataTypes.BOOLEAN,
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
      tableName: 'Plagues',
      spanishName: 'Plagas',
      comment: 'Description Plagues',
    }
  )
  Plagues.associate = models => {
    Plagues.belongsTo(models.User, {
      foreignKey: 'userId',
    })
    Plagues.belongsTo(models.PlagueType, {
      foreignKey: 'plagueTypeId',
    })
    Plagues.belongsTo(models.TaxoFamily, {
      foreignKey: 'taxoFamilyId',
    })
    Plagues.belongsTo(models.PlagueClass, {
      foreignKey: 'plagueClassId',
    })
    Plagues.belongsTo(models.PlagueCategory, {
      foreignKey: 'plagueCategoryId',
    })
  }
  return Plagues
}
