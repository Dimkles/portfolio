import Contacts from "../pages/contacts/Contacts";
import Home from "../pages/home/Home";
import Projects from "../pages/projects/Projects";

export const PublickRoutes = [
    { path: '/', element: Home },
    { path: '/projects', element: Projects },
    { path: '/contacts', element: Contacts },
]