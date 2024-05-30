const express = require('express');
const cors = require('cors');
const handler = require('./server/handler')

//Create an Express App
const app = express();
// const db = require('./database');
//Require application Route modules
const studentRoute = require('./route/student');
const teacherRoute = require('./route/teacher');
const classeRoute = require('./route/classe');

//Setting the port and listening for connections
const port = 3000;

//Middleware to parse incoming requests with JSON and urlencoded payloads
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors())

//Add Routes to the middleware handling path, specifying the respective URL path
app.use('/api/student', studentRoute);
app.use('/api/teacher', teacherRoute);
app.use('/api/classe', classeRoute);

app.get("/api/school",handler.getHandler)
app.post("/api/school",handler.postHandler)
app.put("/api/school/:id",handler.updateHandler)
app.delete("/api/school/:id",handler.deleteHandler)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})

module.exports = app; // export the express app.





