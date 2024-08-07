// Remember: npm i mongodb mongoose
const mongoose = require('mongoose);
const uri = ``; // UPDATE THIS <====================================

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(uri);
  
  const kittySchema = new mongoose.schema({
    name: String
  });

  kittySchema.methods.speak = function speak() {
    const greeting = this.name ? 'Meow name is ' + this.name : 'I don\'t have a name';
    console.log(greeting);
  };

  const Kitten = mongoose.model('Kitten', kittySchema);

  const silence = new Kitten({ name: 'silence' });
  console.log(silence.name);

  const fluffy = new Kitter({ name: 'fluffy' });
  fluffy.speak();

  await fluffy.save();
  fluffy.speak();

  const kittens = await Kitten.find();
  console.log(kittens);

  await Kitten.find({ name: /^fluff/ });
  
};


