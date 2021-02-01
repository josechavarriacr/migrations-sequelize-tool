module.exports = (sequelize, DataTypes) => {
  const AssociatedApplication = sequelize.define(
    'AssociatedApplication',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING(),
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(),
        allowNull: true,
      },
      code: {
        type: DataTypes.STRING(),
        allowNull: false,
      },
      route: {
        type: DataTypes.STRING(),
        allowNull: false,
      },
      token: {
        type: DataTypes.STRING(),
        allowNull: false,
      },
      loginSignature: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      loginUserPassword: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      isSubscribed: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        enum: (-1, 0, 1),
        defaultValue: 1,
      },
      order: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      localesKey: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      registeredBy: {
        type: DataTypes.INTEGER,
        allowNull: true,
        // references: {
        //   model: 'User',
        //   key: 'id',
        // },
        // onUpdate: 'CASCADE',
        // onDelete: 'SET NULL',
      },
      updatedBy: {
        type: DataTypes.INTEGER,
        allowNull: true,
        // references: {
        //   model: 'User',
        //   key: 'id',
        // },
        // onUpdate: 'CASCADE',
        // onDelete: 'SET NULL',
      },
    },
    {
      tableName: 'AssociatedApplications',
      spanishName: 'Aplicaciones Asociadas',
    }
  )

  // AssociatedApplication.associate = models => {
  //   AssociatedApplication.belongsTo(models.User, {
  //     foreignKey: 'registeredBy',
  //     as: 'registered',
  //   })
  //   AssociatedApplication.belongsTo(models.User, {
  //     foreignKey: 'updateBy',
  //     as: 'updated',
  //   })
  // }

  return AssociatedApplication
}
