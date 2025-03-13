import {Link} from "react-router-dom" 
const Header = () => (
    <>
    <ul>
        <Link to ="/">
            <li>Home</li>
        </Link>
        <Link to = "/add-notes">
            <li>Add Notes</li>
        </Link>
        <Link to = "/notes-list">
            <li>Notes List</li>
        </Link>
    </ul>
    </>
)

export default Header