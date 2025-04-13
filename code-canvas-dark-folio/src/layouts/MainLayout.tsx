import NavBar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <NavBar />
            <Outlet />
        </div>
    );
};

export default MainLayout;