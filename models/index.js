var Sequelize = require('sequelize');

var db = new Sequelize('postgres://localhost:5432/tripplanner', { 
    logging: false 
});

const Place = db.define( 'place', {
    address: Sequelize.STRING,
    city: Sequelize.STRING,
    state: Sequelize.STRING,
    phone: Sequelize.STRING,
    location: Sequelize.ARRAY(Sequelize.DataTypes.FLOAT)
})

const Hotel = db.define( 'hotel', {
    name: Sequelize.STRING,
    num_stars: {
        type: Sequelize.FLOAT,
        validate: { min: 1, max: 5}
    },
    ameneties: Sequelize.STRING

});

const Activity = db.define( 'activity', {
    name: Sequelize.STRING,
    age_range: Sequelize.STRING
})

const Restaurant = db.define( 'restaurant', {
    name: Sequelize.STRING,
    cuisine: Sequelize.STRING,
    price: {
        type: Sequelize.INTEGER,
        validate: { min: 1, max: 5}
    },
})

Hotel.belongsTo(Place);
Activity.belongsTo(Place);
Restaurant.belongsTo(Place);

module.exports = { Place, Hotel, Activity, Restaurant, db};
