
import '../css/Home.css'
function Home() {
    return (
      <main>
      <div className="cover-container">
          <div className="cover-image"></div>
          <div className="content">
              <h1>Better health at your fingertips</h1>
              <p>With this website you get your own online booking system where patients can schedule appointments 24/7 with certified doctors.</p>
              <button className="btn"><a href="#">Make an appointment</a></button>
          </div>
      </div>

      <div className="container1">
          <div className="image">
          <img src={require('../images/dl.jpg')} alt="Image"/>
              
          </div>
          <div className="ctt">
              <h1>About us</h1>
              <p>Dats in an online doctor appointment booking website where the patients can book appointments with doctors. The patients can book appointments anytime, anywhere with their desired doctors according to their problems.</p>
              <p>After creating an account, the user can book a slot or they can even cancel an appointment. The user can be a patient or doctor, and both can receive emails from each other.</p>
              <div className="buttons">
                  <button><a href="#">Make an appointment</a></button>
                  <button><a href="#">Contact us</a></button>
              </div>
          </div>
      </div>

      <div className="sr">
          <h1>Our services</h1>
          
            <div className="box">
              <img src={require('../images/image1.png')} alt="Image 1"/>
              <h3>Search</h3>
              <p>You can search for any doctor you want or search the specialty according to your problem and then choose your doctor</p>
          </div>
          <div className="box">
              <img src={require('../images/image2.png')} alt="Image 2"/>
              <h3>Book</h3>
              <p>You can book an appointment with your desired doctors anytime everywhere</p>
          </div>
          <div className="box">
              <img src={require('../images/image3.png')} alt="Image 3"/>
              <h3>Manage</h3>
              <p>You can manage your appointments add, modify or cancel either you're a doctor or a patient</p>
          </div>
          
      </div>

      <div className="contai">
          <div className="imag">
          <img src={require('../images/hp.jpg')} alt="Image"/>
          </div>
          <div className="boxes">
              <div className="bx">
                  <i className="fas fa-stethoscope stethoscope-icon"></i>
                  <h3>Dermatology</h3>
                  <p>Related to skin, hair, and nails.</p>
              </div>
              <div class="bx">
                <i class="fas fa-stethoscope stethoscope-icon"></i>
                <h3>Anesthesiology</h3>
                <p>Put you in a deep sleep during surgery.</p>
            </div>
            <div class="bx">
                <i class="fas fa-stethoscope stethoscope-icon"></i>
                <h3>Cardiology</h3>
                <p>Identify heart diseases.</p>
            </div>

            <div class="bx">
                <i class="fas fa-stethoscope stethoscope-icon"></i>
                <h3>Neurology</h3>
                <p>Related to the brain,spinal cord and nerves.</p>
            </div>
            <div class="bx">
                <i class="fas fa-stethoscope stethoscope-icon"></i>
                <h3>Otolaryngology</h3>
                <p>Related to ear,nose,throat,head and neck disorders.</p>
            </div>
            <div class="bx">
                <i class="fas fa-stethoscope stethoscope-icon"></i>
                <h3>Obstetrics</h3>
                <p>Everything related to childbirth. </p>
            </div>
            <div class="bx">
                <i class="fas fa-stethoscope stethoscope-icon"></i>
                <h3>Pathology</h3>
                <p>Science that studies diseases.</p>
            </div>
            <div class="bx">
                <i class="fas fa-stethoscope stethoscope-icon"></i>
                <h3>Pediatrics</h3>
                <p>The care of children of all ages.</p>
            </div>
            <div class="bx">
                <i class="fas fa-stethoscope stethoscope-icon"></i>
                <h3>Psychiatry</h3>
                <p>Treat mental health disorders.</p>
            </div>
            <div class="bx">
                <i class="fas fa-stethoscope stethoscope-icon"></i>
                <h3>Radiology</h3>
                <p>Uses imaging techniques.</p>
            </div>
            <div class="bx">
                <i class="fas fa-stethoscope stethoscope-icon"></i>
                <h3>Rheumatology</h3>
                <p>Diseases affecting skeletal functions.</p>
            </div>
            <div class="bx">
                <i class="fas fa-stethoscope stethoscope-icon"></i>
                <h3>Urology</h3>
                <p>Diseases of the urinary tract.</p>
            </div>     
          </div>
      </div>  
  </main>
    );
  }
  
  export default Home;
  

