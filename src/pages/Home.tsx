import { IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonModal, IonPage, IonRow, IonText, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import { closeCircle, information, informationCircle, key, keypadOutline, lockOpen, personCircle, personCircleOutline, timeOutline } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import Foot from '../components/Foot';
import Header from '../components/Header';
import storeLocal from '../hooks/storage';
import './Home.css';
import Menu from '../components/Menu';
const Home: React.FC = () => {
  const [access, setAccess] = useState({
    examNo: "",
    regNo: ""
  })
  const { examNo, regNo } = access
  let d;
  let checkExamNo = localStorage.getItem("examNo");
  let checkRegNo = localStorage.getItem("regNo");
  if (checkExamNo === null || checkRegNo === null)
    d = true; else d = false
  const [isOpen, setIsOpen] = useState(true);
  const handleChange = (e: any) => {
    setAccess({ ...access, [e.target.name]: e.target.value })
  }
  const doStorage = () => {
    storeLocal(regNo, examNo);
    //setIsOpen(false)
    //console.log(access)

  }
  const [status, setStatus] = useState();
  const [recordz, setRecordz] = useState([]);
  const handleAccess = async (e: any) => {
    e.preventDefault();
    await axios.post("https://sims.biu-edu.com/mobile/login.php", access).then(response => {
      //setStatus(response.data.status);
      setRecordz(response.data);
      //console.log(response.data)
      console.log(response.data)
      setStatus(response.data.status)
      if(recordz.length>0)
      setIsOpen(false);
      else
      setIsOpen(true);
    }).catch((e) => {
      alert("Error occoured " + e);
    })

  }
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen className='ion-padding'>
        <IonCard>
          <IonCardContent>
            
            <div className="alert alert-success"> <IonIcon icon={timeOutline} slot="start">
            </IonIcon> &nbsp;Current Results </div>
            <IonRow>
              <IonCol size='1'>No</IonCol>
              <IonCol size='4'>Course name</IonCol>
              <IonCol size='1'>CW1</IonCol>
              <IonCol size='1'>CW2</IonCol>
              <IonCol size='1'>Exam</IonCol>
              <IonCol size='1'>Final</IonCol>
              <IonCol size='1'>Grade</IonCol>
            </IonRow>
            { recordz.length>0 && recordz.map((recordz:any,index) => (
              <IonRow>
                <IonCol size='1' key={index}> {index}</IonCol>
                <IonCol size='4'>{recordz.subject_title}</IonCol>
                <IonCol size='1'>{recordz.assign_1}</IonCol>
                <IonCol size='1'>{recordz.assign_2}</IonCol>
                <IonCol size='1'>{recordz.EOS}</IonCol>
                <IonCol size='1'>{recordz.fgrade}</IonCol>
                <IonCol size='1'>{recordz.comment}</IonCol>
              </IonRow>
            )
            )

            }
          </IonCardContent>
        </IonCard>
      </IonContent >
      <IonModal isOpen={isOpen} >
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle><IonIcon icon={personCircleOutline} size="large" ></IonIcon>Self Identity</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => setIsOpen(false)}>Close</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonCard>
            <IonCardContent>
              <form onSubmit={handleAccess}>
                <div className="alert alert-warning"><IonText><h2>Please Enter Access Details</h2></IonText></div>
               { status &&<div className='alert alert-danger'>{status}</div>}
                <IonItem>
                  <IonLabel position='floating' color="primary">Reg Number:</IonLabel>
                  <IonInput required name="regNo" type="text" value={regNo} onIonChange={e => handleChange(e)} clearInput></IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel position='floating' color="primary">Exam Number:</IonLabel>
                  <IonInput required name="examNo" type="text" value={examNo} onIonChange={e => handleChange(e)} clearInput></IonInput>
                </IonItem>
                <IonButton expand='block' onClick={doStorage} type="submit" color="primary" shape='round'><IonIcon icon={lockOpen} slot="start"></IonIcon>Access</IonButton>
              </form>

            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonModal>
      <IonToast icon={informationCircle} message="" isOpen={false} duration={4000}></IonToast>
      <Foot />
    </IonPage >
  );
};

export default Home;
