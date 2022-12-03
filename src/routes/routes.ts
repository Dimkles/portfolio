import AdminPanel from "../pages/adminPanel/AdminPanel";
import Contacts from "../pages/contacts/Contacts";
import Home from "../pages/home/Home";
import Projects from "../pages/projects/Projects";

export const PublickRoutes = [
    { path: '/', element: Home },
    { path: '/projects', element: Projects },
    { path: '/contacts', element: Contacts },
    { path: '*', element: Home },
]

export const PrivateRoutes = [
    { path: '/', element: Home },
    { path: '/projects', element: Projects },
    { path: '/contacts', element: Contacts },
    { path: '/adminPanel', element: AdminPanel },
    { path: '*', element: Home },
]

export const AdminRoutes = [
    { path: '/', element: Home },
    { path: '/projects', element: Projects },
    { path: '/contacts', element: Contacts },
    { path: '/adminPanel', element: AdminPanel },
    { path: '*', element: Home },
]