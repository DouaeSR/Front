import { NavLink } from "react-router-dom";
const Aside = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        {/* <img src="ppictures/téléchargement.png" alt="Profile Picture" className="profile-pic"> */}
        <div className="profile-info">
          <div className="username">JohnDoe123</div>
          <div className="points">100% </div>
        </div>
      </div>
      <hr />
      <ul className="sidebar-menu">
      <li>
          <NavLink to="/patient/NewApp">
            <i className="fa-regular fa-plus-square"></i> Add appointment
          </NavLink>
        </li>
        <li>
        <NavLink
            to={"/patient/appointments"}
            state={{ page: "Current Appointment" }}
          >
            <i className="fa-regular fa-calendar-check"></i> Current
            Appointments
          </NavLink>
        </li>
        
        <li>
          <NavLink
            to={"/patient/appointments"}
              state= {{ page: "Appointment History" }}
            
          >
            <i className="fa-regular fa-book-medical"></i> hystory Appointments
          </NavLink>
        </li>
        <li>
          <NavLink to="/patient/profile">
            <i className="fa-regular fa-user"></i> profile
          </NavLink>
        </li>
      </ul>
      <p>2023</p>
    </div>
  );
};

export default Aside;
