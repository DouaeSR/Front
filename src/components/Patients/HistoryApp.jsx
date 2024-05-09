function HistoryApp() {
    return (
        <section className="appointments">
        <h2>Appointment hystory</h2>
        <div className="appointment">
            <div className="info">Dr. Smith</div>
            <div className="info">Cardiologist</div>
            <div className="info">2024-02-15</div>
            <div className="info">10:00 AM</div>
            <div className="status">Done</div>
        </div>
        <div className="appointment">
            <div className="info">Dr. Johnson</div>
            <div className="info">Dermatologist</div>
            <div className="info">2024-02-18</div>
            <div className="info">02:30 PM</div>
            <div className="status">Canceled</div>
        </div>
        <div className="appointment">
            <div className="info">Dr. Brown</div>
            <div className="info">Orthopedic Surgeon</div>
            <div className="info">2024-02-20</div>
            <div className="info">09:15 AM</div>
            <div className="status">Pending</div>
        </div>
        <div className="appointment">
            <div className="info">Dr. Lee</div>
            <div className="info">Psychiatrist</div>
            <div className="info">2024-02-22</div>
            <div className="info">11:45 AM</div>
            <div className="status">Done</div>
        </div>
        <div className="appointment">
            <div className="info">Dr. Patel</div>
            <div className="info">Ophthalmologist</div>
            <div className="info">2024-02-24</div>
            <div className="info">03:00 PM</div>
            <div className="status">Pending</div>
        </div>
        <div className="appointment">
            <div className="info">Dr. Garcia</div>
            <div className="info">Pediatrician</div>
            <div className="info">2024-02-27</div>
            <div className="info">01:30 PM</div>
            <div className="status">Done</div>
        </div>
    </section>
     
    );
  }
  
  export default HistoryApp;
  