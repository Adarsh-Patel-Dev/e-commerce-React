// import "../LandingPage/landingpage.css";
import { NavLink } from "react-router-dom";
import "./errorPage.css";

function ErrorPage() {
  return (
    <div>
      <div className="body-section">
        <section className="error-section">
          <div className="error-text">
            <h1 className="error-heading">Error Page</h1>
            <h2 className="error-status">404</h2>
            <p className="error-details">
              We can’t find the page you’re looking for!
            </p>
            <NavLink to="/">
              <button className="btn-solid nav--link">Take me home </button>
            </NavLink>
          </div>
        </section>
      </div>
    </div>
  );
}

export { ErrorPage };
