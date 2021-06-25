import axios from "axios";
import { NewTask, Task } from "../models";

const API_URL = "https://localhost:44335/api";

export const getTasksForProject = async () => {
  const { data } = await axios.get(`${API_URL}/Tasks`);
  return data;
};

export const getTaskById = async (id: string) => {
  const { data } = await axios.get(`${API_URL}/Tasks/${id}`);
  return data;
};

export const deleteTask = async (id: string) => {
  const { data } = await axios.delete(`${API_URL}/Tasks/${id}`);
  return data;
};

export const postTask = async (task: NewTask) => {
  await axios.post(`${API_URL}/Tasks`, task);
  return;
};

export const editTask = async (id: string, task: Task) => {
  await axios.put(`${API_URL}/Tasks/${id}`, task);
  return;
};

export const login = async (loginRequest: any) => {
  const { data } = await axios.post(
    `${API_URL}/Authentication/login`,
    loginRequest
  );
  return data;
};

export const registerUser = async (user: any) => {
  const { data } = await axios.post(`${API_URL}/Authentication/register`, user);
  return data;
};

export const confirmUser = async (userToConfirm: any) => {
	const { status } = await axios.post(`${API_URL}/Authentication/confirm`, userToConfirm);
	console.log("🚀 ~ file: api.ts ~ line 42 ~ registerUser ~ data", status)
	return status;
}
