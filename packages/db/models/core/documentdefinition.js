module.exports = (sequelize, DataTypes) => {
  const DocumentDefinition = sequelize.define(
    'DocumentDefinition',
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
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      code: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      table: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
        enum: ('personal', 'requirrements', 'others', 'resolution'),
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
        enum: ('doc', 'table', 'picture'),
      },
      defaultName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      isReusable: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      defaultValidDate: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      validations: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      showDetail: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      showInList: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      metadata: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      resolution: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      attachableByUser: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      iconRelativePath: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      cdnUri: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      notEditable: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      localesKey: {
        type: DataTypes.STRING(),
        allowNull: true,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      registeredBy: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      updatedBy: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      tableName: 'DocumentDefinitions',
    }
  )
  DocumentDefinition.associate = models => {
    DocumentDefinition.belongsTo(models.User, {
      foreignKey: 'registeredBy',
      as: 'registered',
    })
    DocumentDefinition.belongsTo(models.User, {
      foreignKey: 'updatedBy',
      as: 'updated',
    })
  }
  return DocumentDefinition
}
