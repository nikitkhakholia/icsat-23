import React from "react";

export default function Base({ children }) {
  return (
    <div className="">
      <div
        className="border-bottom border-dark"
        style={{
          fontFamily: "Nunito",
          position: "fixed",
          top: "0",
          width: "100%",
          zIndex:"1"
        }}
      >
        <nav className="navbar navbar-expand-lg bg-white">
          <div className="container-fluid">
            {/* <a className="navbar-brand p-4" href="/">
              <img
                src="https://christuniversity.in/images/logo.jpg"
                alt="Christ (Deemed to be) University Logo"
                width="200"
                className="d-inline-block align-text-top"
              />
            </a> */}

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="me-auto mb-2 mb-lg-0"></div>
              <ul className="navbar-nav d-flex px-4">
                <li className="nav-item px-2">
                  <a className="nav-link active" href="/icsat-23/build">
                    Home
                  </a>
                </li>
                <li className="nav-item px-2">
                  <a className="nav-link" href="/icsat-23/build/callForPapers">
                    Call for Papers
                  </a>
                </li>

                <li className="nav-item  px-2">
                  <a className="nav-link" href="/icsat-23/build/">
                    Registration
                  </a>
                </li>
                <li className="nav-item  px-2">
                  <a className="nav-link" href="/icsat-23/build/">
                    Committees
                  </a>
                </li>
                <li className="nav-item  px-2">
                  <a className="nav-link" href="/icsat-23/build#experts">
                    Experts
                  </a>
                </li>
                <li className="nav-item  px-2">
                  <a className="nav-link" href="/icsat-23/build#dates">
                    Dates
                  </a>
                </li>
                <li className="nav-item  px-2">
                  <a className="nav-link" href="/icsat-23/build/">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div style={{ minHeight: "100vh", fontFamily: "Playfair Display" , marginTop: "2rem"}}>
        {children}
      </div>
      <footer className="bg-christ">
        <div className="p-4 text-center">CHRIST (Deemed To Be University)</div>
      </footer>
    </div>
  );
}
