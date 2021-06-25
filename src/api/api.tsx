import axios from "axios"
import { NewTask, Task } from "../models";

const API_URL = "https://localhost:44335/api"

export const getTasksForProject = async () => {
		const { data } = await axios.get(`${API_URL}/Tasks`)
		return data;
	
}

export const getTaskById = async (id: string) => {
	const {data} = await axios.get(`${API_URL}/Tasks/${id}`)
	return data;
}

export const deleteTask = async (id: string) => {
	const {data} = await axios.delete(`${API_URL}/Tasks/${id}`)
	return data;
}

export const postTask = async (task: NewTask) => {
	await axios.post(`${API_URL}/Tasks`, task)
	return
}

export const editTask = async (id: string, task: Task) => {
	await axios.put(`${API_URL}/Tasks/${id}`, task)
	return
}
