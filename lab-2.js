//1
db.people.insertOne({
    first_name:"Michael",
    last_name:"Scott",
    email:"michaelscottspapercompany@yahoo.com",
    gender:"Male",
    age:40,
    state:"Pennsylvania",
    children:[]
  })
//2
db.people.insertOne({
    first_name:"Jim",
    last_name:"Halpert",
    email:"jimmyhalpert@yahoo.com",
    gender:"Male",
    age:32,
    state:"Pennsylvania",
    children:["Cecelia Marie", "Philip"]
  })
//3
db.people.updateOne({first_name: "Clarence"},
{$set: {state: "South Dakota"}})
//4
db.people.updateOne({first_name: "Rebecca", last_name: "Hayes"},
{$unset: {email: 1}})
//5
db.people.updateMany({state:"Missouri"},
{$inc: {age: 1}})
//6
db.people.replaceOne({first_name:"Jerry", last_name:"Baker"}, 
  { first_name: "Jerry", 
  last_name: "Baker-Mendez", 
  email: "jerry@classic.ly", 
  gender:"Male", 
  age: 28, state: "Vermont", 
  "children": [{name: "Alan", age: 18}, {name: "Jenny", age: 3}] })
//7
db.people.deleteOne({first_name:"Wanda", last_name:"Bowman"})
//8
db.people.deleteMany({email: null})
//9
db.submissions.insertMany([
    {title: "The River Bend", upvotes: 10, downvotes: 2, artist: ObjectId("60ae8b60073b403dd5d5746a")},
    {title: "Nine Lives", upvotes: 7, downvotes: 0, artist: ObjectId("60ae8b60073b403dd5d57498")},
    {title: "Star Bright", upvotes: 19, downvotes: 3, artist: ObjectId("60ae8b60073b403dd5d5751b")},
    {title: "Why Like This?", upvotes: 1, downvotes: 5, artist: ObjectId("60ae8b60073b403dd5d574a1")},
    {title: "Non Sequitur", upvotes: 11, downvotes: 1, artist: ObjectId("60ae8b60073b403dd5d57468")}
    ])
//10
db.submissions.updateOne({title: "The River Bend"}, {$inc: {upvotes:2}})
//11
db.submissions.updateMany({upvotes: {$gte: 10}},
    {$set: {round2: true}})