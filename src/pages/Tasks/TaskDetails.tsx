import React, { useEffect, useState } from "react";
import EditTask from "../../components/EditTask";
import { Task } from "../../models";
import { deleteTask, editTask, getTaskById, postTask } from "../../api/api";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonModal,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import { trashBinOutline } from "ionicons/icons";

const TaskDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [task, setTask] = useState<Task>();
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTaskById(id);
      setTask(data);
    };
    fetchData();
  }, []);

  console.log(task);

  const backToList = () => {
    history.push("/tasks");
  };

  const handleDelete = async () => {
    await deleteTask(id).then(() => {
      history.push("/tasks");
    });
  };

  return (

    <>
      <IonHeader>
        <IonToolbar>
          <IonButton onClick={backToList} slot="start">
            <IonIcon slot="start" icon={arrowBack}></IonIcon>
          </IonButton>
          <IonTitle>Task {task?.title} details</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel color="secondary">Title</IonLabel>
                <IonText>{task?.title}</IonText>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel color="secondary">Description</IonLabel>
                <IonText>{task?.description}</IonText>
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel color="secondary">Date added</IonLabel>
              <IonText>{task?.dateAdded}</IonText>
            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel color="secondary">Deadline</IonLabel>
              <IonText>{task?.deadline}</IonText>
            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel color="secondary">Importance</IonLabel>
              <IonText>{task?.importance}</IonText>
            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel color="secondary">Status</IonLabel>
              <IonText>{task?.status}</IonText>
            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel color="secondary">Closed At</IonLabel>
              <IonText>{task?.closedAt}</IonText>
            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol className="ion-text-left">
            <IonButton expand="full" onClick={handleDelete}>
              delete<IonIcon slot="end" icon={trashBinOutline}></IonIcon>
            </IonButton>
          </IonCol>
          <IonCol className="ion-text-right">
            <IonModal isOpen={showModal} cssClass="my-custom-class">
              <EditTask id={id} task={task!} />
              <IonButton onClick={() => setShowModal(false)}>
                Close Edit
              </IonButton>
            </IonModal>
            <IonButton expand="full" onClick={() => setShowModal(true)}>Edit Task</IonButton>
          </IonCol>
        </IonRow>
      </IonContent>
    </>
  );
};

export default TaskDetails;
