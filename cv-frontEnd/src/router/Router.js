import { createBrowserRouter } from  "react-router-dom" ;
import Form from "../components/Form";
import Home from "../components/Home";
import Main from "../components/Main";
import Cv from "../components/Cv";
import UpdateCv from "./UpdateCv";
 

export const router = createBrowserRouter([
{
    path: '/',
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>,
            loader:({params}) =>{
                return fetch('https://cv-back-end-saifsiddque.vercel.app/cvInfos/01303394859')
            }
        },
        {
            path: '/form',
            element: <Form></Form>
        },
        {
            path: '/updateCv',
            element: <UpdateCv></UpdateCv>,
            // loader:({params}) =>{
            //     return fetch(`https://cv-back-end-saifsiddque.vercel.app/cvInfos/${params.id}`)
            // }
        },
        {
            path: '/cvInfos/:number',
            element: <Cv></Cv>,
            loader:({params}) =>{
                return fetch(`https://cv-back-end-saifsiddque.vercel.app/cvInfos/${params.number}`)
            }
        }

    ]
}    
]) 