// Importing the app
import app from "./src/app.js";

// Port on which app is running
const port = 9000;

// Adding listener to the port
app.listen(port, () => console.log('Pac-man app apis up and running on',port))