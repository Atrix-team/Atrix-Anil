import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
    return (
        <div>

            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}

export default AppLayout