import {
  IonButton,
  IonCol,
  IonGrid,
  IonInput,
  IonItem,
  IonLabel,
  IonRow,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { postTask } from "../../api/api";

const CreateTask: React.FC = () => {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dateAdded, setDateAdded] = useState("");
  const [deadline, setDeadline] = useState("");
  const [closedAt, setClosedAt] = useState("");
  const [importance, setImportance] = useState("");
  const [status, setStatus] = useState("");
  const [projectId, setProjectId] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const task = {
      title,
      description,
      dateAdded,
      deadline,
      closedAt,
      importance,
      status,
      projectId,
    };
    await postTask(task).then(() => {
        history.push("/tasks");
      });
  };

  return (
    <form onSubmit={handleSubmit} className="ion-padding">
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonItem color="primary">
              <IonLabel>Enter new task</IonLabel>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel position="floating">Task Title</IonLabel>
              <IonInput
                value={title}
                onIonChange={(e) => setTitle(e.detail.value!)}
                type="text"
              ></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel position="floating">Description</IonLabel>
              <IonInput
                value={description}
                onIonChange={(e) => setDescription(e.detail.value!)}
                type="text"
              ></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel>Date Added</IonLabel>
              <IonInput
                value={dateAdded}
                onIonChange={(e) => setDateAdded(e.detail.value!)}
                type="datetime-local"
              ></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel>Deadline</IonLabel>
              <IonInput
                value={deadline}
                onIonChange={(e) => setDeadline(e.detail.value!)}
                type="datetime-local"
              ></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel>Closed At</IonLabel>
              <IonInput
                value={closedAt}
                onIonChange={(e) => setClosedAt(e.detail.value!)}
                type="datetime-local"
              ></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel>Importance</IonLabel>
              <IonSelect
                value={importance}
                onIonChange={(e) => setImportance(e.detail.value)}
              >
                <IonSelectOption value="low">Low</IonSelectOption>
                <IonSelectOption value="medium">Medium</IonSelectOption>
                <IonSelectOption value="high">High</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel>Status</IonLabel>
              <IonSelect
                value={status}
                onIonChange={(e) => setStatus(e.detail.value)}
              >
                <IonSelectOption value="open">Open</IonSelectOption>
                <IonSelectOption value="Inprogres">In progres</IonSelectOption>
                <IonSelectOption value="closed">Closed</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel>Project ID</IonLabel>
              <IonInput
                value={projectId}
                onIonChange={(e) => setProjectId(e.detail.value!)}
                type="text"
              ></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonButton type="submit" expand="full">
              Submit
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </form>
  );
};

export default CreateTask;
