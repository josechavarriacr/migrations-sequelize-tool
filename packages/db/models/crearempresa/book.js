module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    'Book',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      identification: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      authorization: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      authorizationDate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      authorizationHour: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      procedureId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Procedures',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      digitalRecordId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'DigitalRecords',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      organizationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Organizations',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    },
    {
      tableName: 'Books',
    }
  )

  Book.associate = models => {
    Book.belongsTo(models.Procedure, {
      foreignKey: 'procedureId',
    })
    Book.belongsTo(models.DigitalRecord, {
      foreignKey: 'digitalRecordId',
    })
    Book.belongsTo(models.Organization, {
      foreignKey: 'organizationId',
    })
  }

  return Book
}
