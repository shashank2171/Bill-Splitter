import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home"
import Groups from "./Groups"
import SignIn from "./SignIn";
import LogIn from "./LogIn";
import AddGroups from "./AddGroups";
import Expense from "./Expense";
import AddExpense from "./AddExpense"


const App = () =>{
    return(
        <>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Groups" element={<Groups/>}/>
        <Route path="/Groups/AddGroups" element={<AddGroups/>}/>
        <Route path="/Groups/AddGroups/Expense" element={<Expense/>}/>
        <Route path="/Groups/AddGroups/Expense/AddExpense" element={<AddExpense/>}/>
        <Route path="/SignIn" element={<SignIn/>}/>
        <Route path="/LogIn" element={<LogIn/>}/>
        </Routes>
        </BrowserRouter>
       </>
    )
}

// const DB = 'mongodb+srv://harshtripathi:db007mongo@cluster0.9l2uegx.mongodb.net/mern1?retryWrites=true&w=majority';

// mongoose.connect(DB,{
//     useNewUrlParser : true,
//     useCreateIndex : true,
//     useUnifiedTopology : true,
//     useFindAndModify : false
// }).then(()=>{
//     console.log('connection successfull');
// }).catch((err)=>console.log('no connection'));

// require('./db/conn');

// app.use(express.json());
// // const User = require('./model/userSchema');
// app.use(require('./router/auth'));


// //Middleware (aomeone is visiting my aovut page and i want to make sure that he should login before visiting my page)
// const middleware =(req,res,next)=>{
//     console.log('Hello my middleware');
//     next();
// }

// // app.get(path,callback) : 
// app.get('/',(req,res)=>{
//     res.send('Hello World from the server');
// });

// app.get('/about',middleware, (req,res)=>{
//     res.send('Hello about world from the server');
// })

// app.get('/contact',(req,res)=>{
//     res.send('Hello contact world from the server');
// })

// app.listen(3000,()=>{
//     console.log('server is running at port 3000');
// })

// // mongodb+srv://harshtripathi:<password>@cluster0.9l2uegx.mongodb.net/?retryWrites=true&w=majority


export default App;