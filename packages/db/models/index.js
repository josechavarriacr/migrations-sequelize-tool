/* eslint-disable import/no-dynamic-require */
const fs = require('fs')
const path = require('path')
const pg = require('pg')

delete pg.native
const Sequelize = require('sequelize')

const { env, dbs } = require('@migratory/vars')

const { currentDB } = dbs
const currentfolders = dbs.currentFolders

const currentConection = dbs[currentDB]

const basename = path.basename(__filename)
const db = { currentConection }
// eslint-disable-next-line no-console
const logging = env !== 'test' ? console.log : null

const sequelize = new Sequelize(
  currentConection.database,
  currentConection.username,
  currentConection.password,
  {
    host: currentConection.host,
    port: currentConection.port,
    dialect: currentConection.dialect,
    pool: {
      max: currentConection.max_connections,
      min: currentConection.min_connections,
      idle: currentConection.idle_timeout,
      acquire: currentConection.aquire_timeout,
    },
    dialectOptions: { ssl: false }, // TODO: Pass variable to true
    logging,
  }
)
// Redefine el define para cargar modelos dinamicamente
const { define: pdefine } = sequelize
sequelize.define = function newDefine(...params) {
  const m = pdefine.apply(this, params)
  const { belongsTo, belongsToMany, hasOne, hasMany } = m
  m.belongsTo = function safeBelongsTo(...args) {
    if (args[0]) {
      belongsTo.apply(this, args)
    }
  }
  m.belongsToMany = function safeBelongsToMany(...args) {
    if (args[0]) {
      belongsToMany.apply(this, args)
    }
  }
  m.hasOne = function safeHasOne(...args) {
    if (args[0]) {
      hasOne.apply(this, args)
    }
  }
  m.hasMany = function safeHasMany(...args) {
    if (args[0]) {
      hasMany.apply(this, args)
    }
  }
  return m
}

// sequelize.sync()
// sequelize.sync({ force: true })

db.sequelize = sequelize
db.Sequelize = Sequelize

currentfolders.forEach(folder => {
  const curPath = path.join(__dirname, folder)
  if (fs.existsSync(curPath)) {
    fs.readdirSync(curPath)
      .filter(file => {
        return (
          file.indexOf('.') !== 0 &&
          file !== basename &&
          file.slice(-3) === '.js'
        )
      })
      .forEach(file => {
        const model = sequelize.import(path.join(__dirname, folder, file))
        db[model.name] = model
      })
  }
})

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

async function authenticate() {
  try {
    await sequelize.authenticate()

    return { dbInitialized: true }
  } catch (error) {
    return { dbInitialized: false, error }
  }
}

module.exports = { ...db, authenticate }
