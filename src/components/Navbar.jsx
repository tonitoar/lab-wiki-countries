import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <Link to="/">LAB - WikiCountries</Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
