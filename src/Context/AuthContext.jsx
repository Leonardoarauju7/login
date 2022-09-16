import { useState, useEffect, createContext } from "react"
import { useNavigate } from "react-router-dom"

import { api, createSession } from "../services/api"

export const AuthContext = createContext()
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true) // carrega o loading enquanto o usuario espera

  useEffect(() => {
    const recuperarUser = localStorage.getItem("user")
    const token = localStorage.getItem("token")
    if (recuperarUser) {
      setUser(JSON.parse(recuperarUser))
    }

    setLoading(false) //para de carregar o loading depois que é finalizado o carregamento.
  }, [])

  const login = async (email, password) => {
    const response = await createSession(email, password)
    console.log("login", response.data)
    const loggedUser = response.data.user
    const token = response.data.token

    //armazenar em local
    //const loggedUser = { id: "123", email } //moock pra simular os dados da api no lugar da linha 36

    localStorage.setItem("user", JSON.stringify(loggedUser)) // guardando no local storage
    localStorage.setItem("token", token)

    api.defaults.headers.Authorization = `Bearer ${token}` //seta a api e faz com que ela envie sempre o bearer token quando é feita uma requisição.

    //if (password === "secret") {}  não preciso mais desse if pq a api ja ta setando e fazendo a validação.
    setUser({ loggedUser })
    navigate("/")
  }

  const logout = () => {
    console.log("logout")
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    api.defaults.headers.Authorization = null
    setUser(null)
    navigate("/login")
  }
  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}
