export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title">
            Fame Tracker
        </a>
        <ul>
            <li className='active'>
                <a href="/home">Home</a>
            </li>
            <li>
                <a href="/Login">Login</a>
            </li>
            <li>
                <a href="/user-homepage">User Homepage</a>
            </li>
            <li>
                <a href="/subscriptions">Subscriptions</a>
            </li>
        </ul>
    </nav>
}