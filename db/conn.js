const mongoose = require('mongoose');

async function main() {
  await mongoose.connect('mongodb://0.0.0.0:27017/testemongodb');
  console.log('Conectou ao MongoDB com Mongoose!');
}

main().catch(err => console.log(err));

module.exports = mongoose;
