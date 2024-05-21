import Aside from "../../components/aside";
import { useState, useEffect } from "react";
import CurrentApp from "../../components/Patients/CurrentApp";
import HistoryApp from "../../components/Patients/HistoryApp";
import { useLocation } from "react-router-dom";

import { getInfo } from "../../services/global";
import { getApointmentsPatient } from "../../services/appointment";

function Appointment() {
  let location = useLocation();
  const [page, setPage] = useState("Current Appointment");
  const [appointementsData, setAppointementsData] = useState([]);

  useEffect( () => {
    if (!getInfo() || getInfo().Type !== "Patient") {
      window.location.href = "/login";
    }

    const getData = async () =>{
      const data = await getApointmentsPatient();
      console.log(data)
      setAppointementsData(data)
    }

    getData();
    setPage(location.state ? location.state.page : "Current Appointment");
  }, [location]);

  return (
    getInfo()  && (
      <main>
        <Aside />
        {page === "Current Appointment" && <CurrentApp />}
        {page === "Appointment History" && <HistoryApp />}
      </main>
    )
  );
}

export default Appointment;