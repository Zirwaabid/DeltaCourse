# mongosh commands'

# create dataBase 
use college
# insert one document in collection
 db.student.insertOne({name:"zirwa",age:20,marks:99})
# insert many document in collection
db.student.insertMany([{name:"donald",age:30,marks:45},{name:"defne",city:"multan",age:23}])
# to find document 
db.student.find()