import Aside from "../../components/aside";
import '../../css/NewApp.css';
function NewApp() {
    return (
      <main>
        <Aside />
        <div className="container">
            <div className="appointment-section">
                <h2>New Appointment</h2>
                <div className="select-speciality">
                    <label for="speciality">Select a Speciality:</label>
                    <div className="dropdown">
                        <button className="dropbtn">Specialities <span>&#9660;</span></button>
                        <div className="dropdown-content">
                            <a href="#">Speciality 1</a>
                            <a href="#">Speciality 2</a>
                            <a href="#">Speciality 3</a>
                            {/* <!-- Add more specialities as needed --> */}
                        </div>
                    </div>
                </div>
                <form className="choose-doctor">
                    <label for="doctor">Choose Doctor:</label>
                    <input type="text" id="doctor" name="doctor" placeholder="Enter doctor's name"/>
                </form>
                <button className="book-btn">Book</button>
            </div>
        </div>
      </main>
     
    );
  }
  
  export default NewApp;
  