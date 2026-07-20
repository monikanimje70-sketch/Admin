import { Link } from "react-router-dom";

function Sidebar(){
    return(
        <aside
  className="admin-sidebar"
  id="adminSidebar"
  aria-label="Main navigation"
>
  <div className="sidebar-header">
    <a className="brand-mark" href="index.html" aria-label="adminHMD dashboard">
      <span className="brand-icon">
        <i className="bi bi-grid-1x2-fill" aria-hidden="true" />
      </span>
      <span className="brand-copy">
        <span className="brand-title">adminHMD</span>
        <span className="brand-subtitle">Admin Template</span>
      </span>
    </a>
  </div>
  <nav className="sidebar-nav">
    <Link className="nav-link active" to="/" aria-current="page">
      <span className="nav-icon">
        <i className="bi bi-speedometer2" aria-hidden="true" />
      </span>
      <span className="nav-text">Dashboard</span>
    </Link>
    <Link className="nav-link" to="/users">
      <span className="nav-icon">
        <i className="bi bi-people" aria-hidden="true" />
      </span>
      <span className="nav-text">Users</span>
    </Link>
    <Link className="nav-link" to="/addusers">
      <span className="nav-icon">
        <i className="bi bi-person-plus" aria-hidden="true" />
      </span>
      <span className="nav-text">Add User</span>
    </Link>
    <Link className="nav-link" to="/tables">
      <span className="nav-icon">
        <i className="bi bi-table" aria-hidden="true" />
      </span>
      <span className="nav-text">Tables</span>
    </Link>
    <Link className="nav-link" to="/forms">
      <span className="nav-icon">
        <i className="bi bi-ui-checks-grid" aria-hidden="true" />
      </span>
      <span className="nav-text">Forms</span>
    </Link>
    
    
  </nav>
  
  
</aside>

    )
}
export default Sidebar;