function CurrentApp() {
    return (
        <section className="appointments">
        <h3>My current appointments</h3>
        <div className="appointment">
            <div className="info">Dr. Smith</div>
            <div className="info">Cardiologist</div>
            <div className="info">2024-02-15</div>
            <div className="info">10:00 AM</div>
            <button className="cancel-button">Cancel</button>
        </div>
        <div className="appointment">
            <div className="info">Dr. Johnson</div>
            <div className="info">Dermatologist</div>
            <div className="info">2024-02-18</div>
            <div className="info">02:30 PM</div>
            <button className="cancel-button">Cancel</button>
        </div>
        <div className="appointment">
            <div className="info">Dr. Brown</div>
            <div className="info">Orthopedic Surgeon</div>
            <div className="info">2024-02-20</div>
            <div className="info">09:15 AM</div>
            <button className="cancel-button">Cancel</button>
        </div>
        <div className="appointment">
            <div className="info">Dr. Lee</div>
            <div className="info">Psychiatrist</div>
            <div className="info">2024-02-22</div>
            <div className="info">11:45 AM</div>
            <button className="cancel-button">Cancel</button>
        </div>
    </section>
     
    );
  }
  
  export default CurrentApp;