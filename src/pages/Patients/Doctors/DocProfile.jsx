import React from 'react';
import '../../../css/DocProfile.css';
import Docprofile from '../../../images/téléchargement.png'


function DoctorProfile() {
  return (
    <main>
      <div className="container">
        <div className="section">
          <div className="profile">
            <img src={Docprofile} alt="Doctor" />
            <h2>Dr. John Doe</h2>
            <p>Speciality: Cardiologist</p>
            <div className="rating">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9734;</span>
            </div>
            <p>Points: 1000</p>
          </div>

          <div className="access-info">
            <h2>Contact Information</h2>
            <p>Phone: +1234567890</p>
            <p>Email: doctor@example.com</p>
            <p>Address: 123 Main Street, City</p>
          </div>
        </div>
        <div className="section2">
          <nav className="navigation-bar">
            <ul>
              <li><a href="doctorspage.html">book</a></li>
              <li><a href="doctorprfl.html" className="active">profile</a></li>
            </ul>
          </nav>


          <div className="description">
            <h2>Doctor Description</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet sem et est consectetur, a sodales ex dignissim.</p>
          </div>
          <div className="details">
            <div className="question">
              <p>Speciality</p>
              <p>Education</p>
              <p>Experience</p>
            </div>
            <div className="answer">
              <p>therapist</p>
              <p>Harvard univercity</p>
              <p>10 years +</p>

            </div>
          </div>
          <div className="schedule">
            <h3>Appointment Schedule</h3>
            <div className="days">
              <p>Monday</p>
              <p>Tuesday</p>
              <p>Wednesday</p>
              <p>Thursday</p>
              <p>Friday</p>
              <button className="availability-button">Check Availability</button>
            </div>
            <div className="hours">
              <p>9 AM - 5 PM</p>
              <p>9 AM - 5 PM</p>
              <p>9 AM - 5 PM</p>
              <p>9 AM - 5 PM</p>
              <p>9 AM - 5 PM</p>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}

export default DoctorProfile;