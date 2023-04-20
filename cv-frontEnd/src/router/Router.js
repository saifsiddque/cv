import { createBrowserRouter } from  "react-router-dom" ;
import Form from "../components/Form";
import Home from "../components/Home";
import Main from "../components/Main";
import Cv from "../components/Cv";
 

export const router = createBrowserRouter([
{
    path: '/',
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>,
            loader:({params}) =>{
                return fetch('http://localhost:5000/cvInfos/01303394859')
            }
        },
        {
            path: '/form',
            element: <Form></Form>
        },
        {
            path: '/cvInfos/:number',
            element: <Cv></Cv>,
            loader:({params}) =>{
                return fetch(`http://localhost:5000/cvInfos/${params.number}`)
            }
        }

    ]
}    
]) 