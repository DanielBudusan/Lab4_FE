import React, { useState } from "react";
import {
  IonButton,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
} from "@ionic/react";
import { login } from "../../api/api";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [done, setDone] = useState(false);
  const [user, setUser] = useState("")

  const sendLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const { token } = await login({
      email: email,
      password: password,
    });
    
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("user", JSON.stringify(email) )
    console.log(token);

    if (token) {
      window.location.href = "/tasks";
      setUser(email)
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonItem color="primary">
          <IonTitle className="ion-text-center">Login</IonTitle>
        </IonItem>
      </IonHeader>
      <IonContent>
        <form className="ion-padding" onSubmit={(e) => sendLogin(e)}>
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
          <IonButton className="ion-margin-top" type="submit" expand="block">
            Login
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Login;
