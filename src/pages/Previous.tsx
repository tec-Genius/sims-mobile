import { IonPage, IonContent, IonCard, IonCardContent, IonLabel, IonSelect, IonItemOption, IonItem, IonList, IonSelectOption, IonRow, IonCol, IonButton, IonIcon } from "@ionic/react";
import axios from "axios";
import { fileTray, list } from "ionicons/icons";
import { useEffect, useState } from "react";
import Foot from "../components/Foot";
import Header from "../components/Header";
const id = localStorage.getItem("regNo");
const Previous: React.FC = () => {
  const [year, setYears] = useState([]);
  const [feedback, setFeedback] = useState();
  const [pastResults, setPastResults] = useState([]);
  const [input, setInput] = useState(
    {
      years: "",
      sems: "",
      id
    }

  )
  const { years, sems } = input
  const handleChange = (e: any) => {
    setInput({ ...input, [e.target.name]: e.detail.value! })
  }
  useEffect(() => {
    loadYears();
  }, []
  )
  useEffect(() => {
    getResults();
  }, []
  )

  const getResults = async () => {
    const result = await axios.get("http://sims.biu-edu.com/mobile/prevResults.php?sem=" + sems + "&year=" + years + "&id=" + id)
    setPastResults(result.data)
    setFeedback(result.data.feedback)
    console.log(result.data)
  }

  const loadYears = async () => {
    await axios.get("http://sims.biu-edu.com/mobile/fetchyear.php?id=" + id).then(response => {
      setYears(response.data)
    }
    ).catch((e) => {
      alert("error" + e)
    })
  }
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen className='ion-padding'>
        <IonCard>
          <IonCardContent>
            <div className=" alert alert-primary">Previous Results</div>
            {feedback && <div className="alert alert-warning">{feedback}</div>}

            <IonRow>
              <IonCol>
                <IonItem>

                  <IonSelect
                    onIonChange={e => handleChange(e)}
                    placeholder="Select academic" interface="popover"
                    name="years"
                  >
                    {year.map((item: any, index: number) => (
                      <IonSelectOption key={index} value={item.year}>{item.year}</IonSelectOption>
                    ))
                    }
                  </IonSelect>
                </IonItem>
              </IonCol>
              <IonCol>
                <IonItem>
                  <IonSelect
                    onIonChange={e => {handleChange(e);getResults()}}
                    placeholder="Select Semester" interface="popover"
                    name="sems" >
                    <IonSelectOption value="1">Jan-June</IonSelectOption>
                    <IonSelectOption value="2">July-Dec</IonSelectOption>
                  </IonSelect>
                </IonItem>
              </IonCol>
            </IonRow>
            { pastResults &&
            <IonRow>
            <IonCol size='1'>No</IonCol>
              <IonCol size='4'>Course name</IonCol>
              <IonCol size='1'>CW1</IonCol>
              <IonCol size='1'>CW2</IonCol>
              <IonCol size='1'>Exam</IonCol>
              <IonCol size='1'>Final</IonCol>
              <IonCol size='1'>Grade</IonCol>
            </IonRow>
}   
            { pastResults.length>0 && pastResults.map((p:any , key:any)=>(
              <IonRow  key={key}>
              <IonCol size='1'> {key+1}</IonCol>
              <IonCol size='4'>{p.subject_title}</IonCol>
              <IonCol size='1'>{p.assign_1}</IonCol>
              <IonCol size='1'>{p.assign_2}</IonCol>
              <IonCol size='1'>{p.EOS}</IonCol>
              <IonCol size='1'>{p.fgrade}</IonCol>
              <IonCol size='1'>{p.comment}</IonCol>
            </IonRow>
               )
              )
            }
          </IonCardContent>
        </IonCard>
      </IonContent>
      <Foot />
    </IonPage>
  );
};
export default Previous;