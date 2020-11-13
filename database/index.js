const loginInfo = require('./mySQLpw.js');
const {Sequelize} = require('sequelize');
const orm = new Sequelize('review', loginInfo.u, loginInfo.p, {dialect: 'mysql'});

var Reviews = orm.define('reviews', {
  review_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  product_id: {
    type: Sequelize.INTEGER,
  },
  customer_id: {
    type: Sequelize.INTEGER,
  },
  star_rating: {
    type: Sequelize.STRING,
  },
  comfort: {
    type: Sequelize.STRING,
  },
  quality: {
    type: Sequelize.STRING,
  },
  create_date: {
    type: Sequelize.DATEONLY,
  },
  category: {
    type: Sequelize.STRING,
  },
  comment: {
    type: Sequelize.TEXT,
  }
});

var Products = orm.define('products', {
  product_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

var Customers = orm.define('customers', {
  customer_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
  }
});

Customers.hasMany(Reviews, {
  foreignKey: {
    name: 'customer_id',
    allowNull: false
  }
});
// Reviews.belongsTo(Customers, {foreignKey: 'customer_id'});

Products.sync();
Customers.sync();
Reviews.sync();

module.exports.Reviews = Reviews;
module.exports.Products = Products;
module.exports.Customers = Customers;