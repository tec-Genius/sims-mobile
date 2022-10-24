import { IonButton, IonButtons, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react"

const Header: React.FC = () => {
    return (
        <IonHeader>
          <IonToolbar color="primary">
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>SIMS</IonTitle>
          </IonToolbar>
        </IonHeader>
        )
    }
        export default Header;