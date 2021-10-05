const app = require('./app.js');
const sequelize = require('./db')
const PORT = process.env.PORT || 5000;

sequelize.sync()
  .then((...a) => {
    return sequelize.authenticate()
  })
  .then((...a) => {
    console.log("sequelize connected")
    app.listen(PORT, () => {
      console.log('Listening on port: ' + PORT);
    });
  })
  .catch(e => {
    sequelize.close()
    console.log(e)
  })
