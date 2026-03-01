import { useContext } from "react";
import { AuthContext } from "../auth.context";
import { register, login } from "../services/auth.api";

export const useAuth = () => {
    const context = useContext(AuthContext)

    const { user, setUser, loading, setLoading } = context

    const handleRegister = async (username, email, password) => {
        setLoading(true)
        const response = await register(username, email, password)
        setUser(response.data)
        setLoading(false)
    }

    const handleLogin = async (username, email, password) => {

        setLoading(true)

        const response = await login(username, email, password)

        setUser(response.user)

        setLoading(false)

    }

    return {
        user, loading, handleRegister, handleLogin
    }
}