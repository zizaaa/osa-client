import { createBrowserRouter } from "react-router-dom";
import { About, Accreditation, AccreditationForm, Actions, Activities, ApprovalApplication, Dashboard, Home, Organizations, OsaServices, ReAccreditationForm, Requirements, RootLayout } from "../hooks/imports" 

export const router = createBrowserRouter([
    {
        path:'/',
        element:<RootLayout/>,
        children:[
            {
                path:'/',
                element:<Home/>,
            },
            {
                path:'/activities',
                element:<Activities/>,
            },
            {
                path:'/organizations',
                element:<Organizations/>,
            },
            {
                path:'/accreditation',
                element:<Accreditation/>,
                children:[
                    {
                        path:'/accreditation',
                        element:<Actions/>
                    },
                    {
                        path:'accreditation-form',
                        element:<AccreditationForm/>
                    },
                    {
                        path:'re-accreditation-form',
                        element:<ReAccreditationForm/>
                    }
                ]
            },
            {
                path:'/osa-services',
                element:<OsaServices/>,
            },
            {
                path:'/about',
                element:<About/>,
            },
            {
                path:'/dashboard',
                element:<Dashboard/>
            },
            {
                path:'/applications',
                element:<ApprovalApplication/>
            }
            // {
            //     path:'/RequirementsView',
            //     element:<RequirementsView/>
            // }
        ]
    }
]);