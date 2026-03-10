import axios from "axios";

const api = axios.create({
    baseURL: "https://ai-mood-player-4myt.onrender.com",
    withCredentials: true,
})

export async function getSong({mood}){
    const response = await api.get("/api/songs?mood=" + mood)
    return response.data
}