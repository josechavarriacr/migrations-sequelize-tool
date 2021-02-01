module.exports = (sequelize, DataTypes) => {
  const PaymentBreakdown = sequelize.define(
    'PaymentBreakdown',
    {
      id_rubro: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      cod_rubro: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      id_tipo_rubro: {
        type: DataTypes.INTEGER,
        allowNull: true,
        // references: {
        //   model: 'PaymentBreakdownCategory',
        //   key: 'id',
        // },
        // onUpdate: 'CASCADE',
        // onDelete: 'SET NULL',
      },
      descripcion: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
      estado: {
        type: DataTypes.SMALLINT,
        allowNull: true,
        defaultValue: 0,
      },
      autoasignable: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      prioridad: {
        type: DataTypes.SMALLINT,
        allowNull: true,
        defaultValue: 1,
      },
      id_moneda: {
        type: DataTypes.INTEGER,
        allowNull: true,
        // references: {
        //   model: 'PaymentCurrency',
        //   key: 'id',
        // },
        // onUpdate: 'CASCADE',
        // onDelete: 'SET NULL',
      },
      id_empresa: {
        type: DataTypes.INTEGER,
        allowNull: true,
        // references: {
        //   model: 'PaymentOrganization',
        //   key: 'id',
        // },
        // onUpdate: 'CASCADE',
        // onDelete: 'SET NULL',
      },
      usuario_creacion: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      usuario_modificacion: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      cuenta_cliente: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      identificacion_cc: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      beneficiario: {
        type: DataTypes.STRING(60),
        allowNull: true,
      },
      descripcion_cc: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      comision: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false,
        defaultValue: 0,
      },
      ecodigo: {
        type: DataTypes.DECIMAL(16, 0),
        allowNull: true,
      },
      descuento: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false,
        defaultValue: 0,
      },
      reintegro: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        defaultValue: 0,
      },
      idafiliado: {
        type: DataTypes.SMALLINT,
        allowNull: true,
        defaultValue: 1,
      },
      cod_trans_racsa: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      desc_trans_racsa: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      es_iva: {
        type: DataTypes.SMALLINT,
        allowNull: true,
        defaultValue: 0,
      },
    },
    {
      tableName: 'mp_trs_rubros',
      createdAt: 'fecha_creacion',
      updatedAt: 'fecha_modificacion',
    }
  )

  return PaymentBreakdown
}
