import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonText,
  IonGrid,
  IonList,
  IonListHeader,
  IonIcon,
  IonButton,
} from "@ionic/react";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { getTasksForProject } from "../../api/api";
import { Task } from "../../models";
import { arrowForward, addCircleOutline } from "ionicons/icons";

const ListTasks: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTasksForProject();
      setTasks(data);
    };
    fetchData();
  }, []);

  console.log(tasks);

  return (
    <IonContent className="ion-padding">
      <IonHeader>
        <IonItem color="primary">
          <IonTitle>Task List for project ...</IonTitle>
        </IonItem>
      </IonHeader>

      <IonGrid>
        <IonRow>
          <IonCol size="5">
            <IonItem color="secondary">
              <IonLabel class="ion-text-left">Task name</IonLabel>
            </IonItem>
          </IonCol>
          <IonCol size="5">
            <IonItem color="secondary">
              <IonLabel class="ion-text-left">Status</IonLabel>
            </IonItem>
          </IonCol>
          <IonCol size="2">
            <IonItem>
              <Link to={"/tasks/create"}>
                <IonIcon icon={addCircleOutline}></IonIcon>
              </Link>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol></IonCol>
        </IonRow>
        {tasks.map((task) => (
          <IonRow key={task.id}>
            <IonCol size="5">
              <IonItem>
                <IonLabel>{task.title}</IonLabel>
              </IonItem>
            </IonCol>

            <IonCol size="5">
              <IonItem>
                <IonText color="tertiary">{task.status}</IonText>
              </IonItem>
            </IonCol>

            <IonCol size="2">
              <IonItem>
                <Link to={`/tasks/${task.id}`}>
                  <IonIcon slot="end" icon={arrowForward}></IonIcon>
                </Link>
              </IonItem>
            </IonCol>
          </IonRow>
        ))}
      </IonGrid>
    </IonContent>
  );
};

export default ListTasks;
