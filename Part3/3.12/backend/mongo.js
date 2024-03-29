const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]
const url =
`mongodb+srv://elenabelousova:${password}@cluster0.ii50rup.mongodb.net/FullStackPhoneBook?retryWrites=true&w=majority`


mongoose.set('strictQuery',false)
mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

if (process.argv[3] && process.argv[4]){
    const name = process.argv[3]
    console.log("Given name", name)

    const number = process.argv[4]
    console.log("Given number", number)
 

    const person = new Person({
    name: name,
    number: number
    })

    person.save().then(result => {
    console.log('added ', person.name,' number ', person.number,' to phonebook')
    mongoose.connection.close()
    })
} else{
    Person.find({}).then(result => {
        console.log('phonebook:')
        result.forEach(person => {
        console.log(person.name, person.number)
        })
        mongoose.connection.close()
    })
}