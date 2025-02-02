//mongodb
//password : dvbH95HkTmgtOyuN
//string : mongodb+srv://gangadhar:dvbH95HkTmgtOyuN@cluster0.a4jhg.mongodb.net/
//require("mongodb");

const { MongoClient, Collection } = require("mongodb");


const url = "mongodb+srv://gangadhar:dvbH95HkTmgtOyuN@cluster0.a4jhg.mongodb.net/";

const client = new MongoClient(url);

const dbName = "helloworld";

async function main() {
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection('User');

    //read from the database

    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);
    //this above will give our database document


    //insert a data
    // const data = {
    //     firstname : "Monkey D",
    //     lastname : "Luffy",
    //     age : '19',
    //     city : "Goa Kingdom",
    //     Country : "West Blue"
    // }
    // const insertData = await collection.insertMany([data]);
    // console.log("Insert documents =>", insertData);

    // const countResult = await collection.countDocuments({});
    // console.log("count Result in user collection => ", countResult);

    //find all documents with filter of firsname : 'Monkey D' , do it in toArray form
    const resultFirsName = await collection.find({firstname : "Monkey D"}).toArray(); //(gives in formate of method chaining)
    console.log("result = > ", resultFirsName)  ;

    return 'done';


    
}

main().then(console.log).catch(console.error).finally(()=>client.close());



//HW- create a connection and do CRUD operation
