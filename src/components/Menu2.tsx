import {
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonNote,
    IonTitle,
    IonToolbar,
  } from '@ionic/react';
  import { useLocation } from 'react-router-dom';
  import { archiveOutline, archiveSharp, book, bookmarkOutline, bookSharp, createOutline, folderOpen, folderOpenOutline, heartOutline, heartSharp, home, homeSharp, list, listSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, person, personSharp, refresh, refreshCircle, refreshCircleSharp, refreshSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
  import './Menu.css';
  import { register } from '../serviceWorkerRegistration';
  import { create } from 'domain';
  const Menu2: React.FC = () => {
    const location = useLocation();
    return (
      <IonMenu contentId="main" type="overlay">
        <IonHeader>
        <IonToolbar>
            <IonTitle color="primary">MENU</IonTitle>
          </IonToolbar>
          </IonHeader>
        <IonContent>
          
          <IonList id="inbox-list">
                <IonMenuToggle>
                  <IonItem className={location.pathname === '/home' ? 'selected' : ''}  routerLink='/home'  routerDirection="none" lines="none" detail={false}>
                    <IonIcon  slot="start" ios={home} md={homeSharp}  color="primary"     />
                    <IonLabel >Home</IonLabel>
                  </IonItem>
                </IonMenuToggle>
                <IonMenuToggle>
                  <IonItem className={location.pathname === '/previous' ? 'selected' : ''}  routerLink='/previous' routerDirection="none" lines="none" detail={false}>
                    <IonIcon slot="start" ios={folderOpen} md={folderOpenOutline}  color="primary" />
                    <IonLabel>Previous Results</IonLabel>
                  </IonItem>
                </IonMenuToggle>
                <IonMenuToggle>
                  <IonItem className={location.pathname === '/register' ? 'selected' : ''}  routerLink='/register' routerDirection="none" lines="none" detail={false}>
                    <IonIcon slot="start" ios={createOutline} md={createOutline}  color="primary"/>
                    <IonLabel>Register Courses</IonLabel>
                  </IonItem>
                </IonMenuToggle>
                <IonMenuToggle>
                  <IonItem className={location.pathname === '/my-carryovers' ? 'selected' : ''} routerLink='/my-carryovers' routerDirection="none" lines="none" detail={false}>
                    <IonIcon slot="start" ios={refresh} md={refreshSharp}  color="primary" />
                    <IonLabel>Carryovers</IonLabel>
                  </IonItem>
                </IonMenuToggle>
                <IonMenuToggle>
                  <IonItem routerLink='/courses' className={location.pathname === '/courses' ? 'selected' : ''} routerDirection="none" lines="none" detail={false}>
                    <IonIcon slot="start" ios={list} md={listSharp}   color="primary"/>
                    <IonLabel>My Courses</IonLabel>
                  </IonItem>
                </IonMenuToggle>
                <IonMenuToggle>
                  <IonItem  routerLink='/my-details' className={location.pathname === '/my-details' ? 'selected' : ''}  routerDirection="none" lines="none" detail={false}>
                    <IonIcon slot="start" ios={person} md={personSharp}   color="primary"/>
                    <IonLabel>My Details</IonLabel>
                  </IonItem>
                </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
    );
  };
  
  export default Menu2;
  