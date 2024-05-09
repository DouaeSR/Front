import Aside from "../../components/aside";
import { useState, useEffect } from "react";
import CurrentApp from "../../components/Patients/CurrentApp";
import HistoryApp from "../../components/Patients/HistoryApp";
import {useLocation} from 'react-router-dom';

function Appointment() {
  let location = useLocation();
  const [page,setPage] = useState("Current Appointment")
  useEffect(()=> {
    setPage(location.state ? location.state.page :"Current Appointment")

  },[location])
 
  return (
    <main>
      <Aside />
      {page==="Current Appointment" && <CurrentApp />}
      {page==="Appointment History" && <HistoryApp />}
      
  
    </main>
  );
}

export default Appointment;
