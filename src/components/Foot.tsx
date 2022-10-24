import { IonFooter, IonToolbar } from "@ionic/react";
import './Menu.css';
const Foot:React.FC=()=>{
    return(
        <IonFooter className='ion-padding '  color="primary">
        <IonToolbar>
       <div className='ion-text-center'> By D.Liwonde</div>
        </IonToolbar>
      </IonFooter>
    )
}
export default Foot;