import {
  IonAlert,
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonText,
  IonTitle,
} from "@ionic/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { confirmUser, registerUser } from "../../api/api";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [done, setDone] = useState(false);
  const [user, setUser] = useState("");
  const [cofirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);

  const sendRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
      const { confirmationToken } = await registerUser({
        email: email,
        password: password,
        confirmPassword: cofirmPassword,
      });

      const status = await confirmUser({
        email: email,
        confirmationToken: confirmationToken,
      });
      console.log(confirmationToken)

    if (confirmationToken) {
     window.location.href = "/";
         
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonItem color="primary">
          <IonTitle className="ion-text-center">Register</IonTitle>
        </IonItem>
      </IonHeader>
      <IonContent>
        <form className="ion-padding" onSubmit={(e) => sendRegister(e)}>
          <IonItem>
            <IonLabel position="floating">Username</IonLabel>
            <IonInput onIonChange={(e) => setEmail(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput
              type="password"
              onIonChange={(e) => setPassword(e.detail.value!)}
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Repeat password</IonLabel>
            <IonInput
              type="password"
              onIonChange={(e) => setConfirmPassword(e.detail.value!)}
            />
          </IonItem>
          <IonButton className="ion-margin-top" type="submit" expand="block">
            Submit
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Register;
