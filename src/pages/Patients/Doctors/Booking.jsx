import React from 'react';
import '../../../css/Booking.css';
import Docprofile from '../../../images/téléchargement.png'

function DoctorAppointment() {
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
        <section className="appointment-section">
          <nav className="navigation-bar">
            <ul>
              <li><a href="doctorspage.html" className="active">book</a></li>
              <li><a href="doctorprfl.html">profile</a></li>
            </ul>
          </nav>
          <div className="part part2">
            <h1>Select Your Date</h1>
            <div className="calendar">
              <div className="month">
                <div className="title">
                  <button className="prev">&#10094;</button>
                  <div className="spacer"></div>
                  <h2>February 2024</h2>
                  <div className="spacer"></div>
                  <button className="next">&#10095;</button>
                </div>
                <div className="date">
                  <table>
                    <thead>
                      <tr>
                        <th>Sun</th>
                        <th>Mon</th>
                        <th>Tue</th>
                        <th>Wed</th>
                        <th>Thu</th>
                        <th>Fri</th>
                        <th>Sat</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Calendar dates here */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="availability">
              <div className="indicator available"></div>
              <span>Available</span>
            </div>
            <div className="availability">
              <div className="indicator not-available"></div>
              <span>Not Available</span>
            </div>
          </div>
          <div className="part part3">
            <button className="book-now-button">Book Now</button>
          </div>
        </section>
      </div>
    </main>
  );
}

export default DoctorAppointment;