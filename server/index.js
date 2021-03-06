import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import postRoutes from './routes/Posts.js'


// intitiliaze the app
const app = express();

app.use('/posts', postRoutes)
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors())

const CONNECTION_URL ='mongodb+srv://Malik:Memoryapp1!@cluster0.6k5df.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true , useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`server started on port ${PORT}`)))
.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false)