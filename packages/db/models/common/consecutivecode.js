const bigdecimal = require('bigdecimal')

module.exports = (sequelize, DataTypes) => {
  const ConsecutiveCode = sequelize.define(
    'ConsecutiveCode',
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
        // unique: true,
        // TODO: Unique for name-applicationId
      },
      number: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 1,
      },
      prefix: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      format: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      config: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      applicationId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Applications',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      timeZone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isAnnual: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      tableName: 'ConsecutiveCodes',
    }
  )

  ConsecutiveCode.prototype.getCode = function getCode() {
    if (this.config) {
      if (this.config.type === 'Edicto') {
        return `${this.prefix}${new bigdecimal.BigInteger(
          `${new Date().getFullYear()}`
        ).multiply(
          new bigdecimal.BigInteger(`${this.config.multiplier}`).add(
            new bigdecimal.BigInteger(this.number)
          )
        )}`
      }
    }
    return this.format
      .replace('{number}', this.number.toString().padStart(4, '0'))
      .replace('{prefix}', this.prefix)
      .replace('{year}', new Date().getFullYear())
  }

  ConsecutiveCode.associate = models => {
    ConsecutiveCode.belongsTo(models.Application, {
      foreignKey: 'applicationId',
    })
  }

  return ConsecutiveCode
}
