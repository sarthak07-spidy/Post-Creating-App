function Sidebar({ selectedTab, setSelectedTab }) {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
      style={{ width: "280px" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4">Sidebar</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li
          onClick={() => {
            setSelectedTab("Home");
          }}
          className="nav-item"
        >
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab == "Home" ? "active" : null
            }`}
            aria-current="page"
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              setSelectedTab("Create");
            }}
            href="#"
            className={`nav-link text-white ${
              selectedTab == "Create" ? "active" : null
            }`}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Create Card
          </a>
        </li>
      </ul>
      <hr />
    </div>
  );
}
export default Sidebar;
