import React, { useState } from "react";
import { editTask } from "../api/api";
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
import { useHistory, useParams } from "react-router";
import { Task } from "../models";

const EditTask: React.FC<{
  id: string;
  task: Task;
}> = ({ id, task }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [dateAdded, setDateAdded] = useState(task.dateAdded);
  const [deadline, setDeadline] = useState(task.deadline);
  const [closedAt, setClosedAt] = useState(task.closedAt);
  const [importance, setImportance] = useState(task.importance);
  const [status, setStatus] = useState(task.status);
  const [projectId, setProjectId] = useState(task.projectId);
  const history = useHistory();

  const handleEditTask = async (e: React.FormEvent) => {
    e.preventDefault();
    const task = {
      id,
      title,
      description,
      dateAdded,
      deadline,
      closedAt,
      importance,
      status,
      projectId,
    };
    await editTask(id, task).then(() => {
      window.location.href = `/tasks/${id}`
      // history.push(`/tasks/${id}`);
    });
  };

  return (
    <form onSubmit={handleEditTask} className="ion-padding">
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonItem color="primary">
              <IonLabel>Edit task {id}</IonLabel>
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

export default EditTask;
