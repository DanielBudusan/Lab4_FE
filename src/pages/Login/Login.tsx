import React from "react";
import {
  IonButton,
  IonCheckbox,
  IonInput,
  IonItem,
  IonLabel,
} from "@ionic/react";

const Login: React.FC = () => {
  return (
    <form className="ion-padding">
      <IonItem>
        <IonLabel position="floating">Username</IonLabel>
        <IonInput />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Password</IonLabel>
        <IonInput type="password" />
      </IonItem>
      <IonButton className="ion-margin-top" type="submit" expand="block">
        Login
      </IonButton>
    </form>
  );
};

export default Login;
