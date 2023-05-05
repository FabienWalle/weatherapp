import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header>
                <div>
                    <ul className="bg-indigo-500 text-indigo-50 flex row">
                        <li className="p-2">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="p-2">
                            <Link to="/weather">Weather</Link>
                        </li>
                        <li className="p-2">
                            <Link to="/tide">Tide</Link>
                        </li>
                        <li className="p-2">
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header