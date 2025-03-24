import {
  IonButton,
  IonContent,
  IonHeader,
  IonModal,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import { useEffect, useRef, useState } from "react";
import {
  ScreenOrientation,
  ScreenOrientationResult,
} from "@capacitor/screen-orientation";

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const pageRef = useRef(null);
  const [screenOrientation, setScreenOrientation] = useState<string>();

  ScreenOrientation.addListener(
    "screenOrientationChange",
    (orientation: ScreenOrientationResult) => {
      setScreenOrientation(orientation.type);
    }
  );

  const [presentingElement, setPresentingElement] =
    useState<HTMLElement | null>(null);

  function openModal() {
    setShowModal(true);
  }

  useEffect(() => {
    console.log(presentingElement);
    console.log("in the useEffect");
    if (screenOrientation === "portrait-primary") {
      console.log("in the if");
      setPresentingElement(pageRef.current);
    } else {
      console.log("in the else");
      setPresentingElement(null);
    }
  }, [screenOrientation, presentingElement]);

  return (
    <IonPage ref={pageRef}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={() => openModal()}>OPEN MODAL</IonButton>
        <IonModal
          presentingElement={presentingElement ? presentingElement : undefined}
          isOpen={showModal}
        >
          <IonContent>
            <IonText>
              <p>This is a modal!!</p>
            </IonText>
            <IonButton onClick={() => setShowModal(false)}>
              CLOSE MODAL
            </IonButton>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Home;
