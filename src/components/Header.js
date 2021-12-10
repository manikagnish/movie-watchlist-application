import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/" className="logo">
              WatchList
            </Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/">Watch List</Link>
            </li>
            <li>
              <Link to="/watched">Watched</Link>
            </li>
            <li>
              <Link to="/add" className="btn btn-header">
                + Add
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
