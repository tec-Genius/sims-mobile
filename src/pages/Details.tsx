import { IonPage, IonContent, IonCard, IonCardContent, IonLabel, IonList, IonItem } from "@ionic/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { setCacheNameDetails } from "workbox-core";
import Foot from "../components/Foot";
import Header from "../components/Header";


const Details: React.FC = () => {
  const[studentDetails,setStudentDetails]=useState([])
  useEffect(()=>{
    loadData()
  },[]);
  const loadData= async()=>{
    const id = localStorage.getItem("regNo");
   const result=await axios.get("https://sims.biu-edu.com/mobile/studentDetails.php?id="+id)
   studentDetails(result.data)
  }
    return (
      <IonPage>
        <Header/>
        <IonContent fullscreen className='ion-padding'>
          <IonCard>
            <IonCardContent>
              <IonList>
            <div className=" alert alert-primary">Student details</div>
            {
              studentDetails.map((detail:any, index)=>(
               <IonItem key={index}>

                <IonLabel>Firstname:{detail.firstname} Lastname: {detail.lastname}</IonLabel>
                <IonItem>
                <IonLabel>RegNo:{detail.student_id} Phone:{detail.stud_pnone}</IonLabel>
                </IonItem>
                <IonItem>
                <IonLabel>Gender: {detail.gender} Nationality:{detail.nation} </IonLabel>
                </IonItem>
                <IonItem>
                <IonLabel>Current Year: {detail.stud_current_year} Current Semester:{detail.current_sem}</IonLabel>
                </IonItem>
                <IonItem>
                <IonLabel>Program: {detail.cys}: Admission Year{detail.addm_year}</IonLabel>
                </IonItem>
                <IonItem>
                <IonLabel>Email: {detail.stud_email}Address: {detail.stud_address}</IonLabel>
                </IonItem>
               </IonItem>
              )
              )
            }
            </IonList>
            </IonCardContent>
          </IonCard>
        </IonContent>
        <Foot />
      </IonPage>
    );
  };
  export default Details;