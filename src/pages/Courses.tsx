import { IonPage, IonContent, IonCard, IonCardContent, IonLabel } from "@ionic/react";
import Foot from "../components/Foot";
import Header from "../components/Header";

const Courses: React.FC = () => {
    return (
      <IonPage>
        <Header/>
        <IonContent fullscreen className='ion-padding'>
          <IonCard>
            <IonCardContent>
            <div className="alert alert-primary">Courses</div>
            </IonCardContent>
          </IonCard>
        </IonContent>
        <Foot />
      </IonPage>
    );
  };
  export default Courses;