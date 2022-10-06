import { useState, createContext } from "react"
import { useNavigate } from "react-router-dom"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  //const [loading, setLoading] = useState(true) // carrega o loading enquanto o usuario espera

  /*useEffect(() => {
    const recuperarUser = localStorage.getItem("user")
    if (recuperarUser) {
      setUser(JSON.parse(recuperarUser))
    }

    setLoading(false) //para de carregar o loading depois que é finalizado o carregamento.
  }, [])*/

  const login = (email, password) => {
    console.log("login auth", { email, password })

    //api criar uma session

    const loggedUser = {
      id: "123",
      email,
    } //moock pra simular os dados da api
    localStorage.setItem("user", JSON.stringify(loggedUser)) // guardando no local storage

    if (password === "secret" && email === "user@teste.com") {
      setUser({ loggedUser })
      navigate("/")
    }
  }
  const HomePage = () => {
    console.log("")
    navigate("/")
  }
  const ListaRegistro = () => {
    console.log("")
    navigate("/ListaRegistro")
  }
  const logout = () => {
    console.log("logout")
    //localStorage.removeItem("user")
    setUser(null)
    navigate("/login")
  }

  return (
    <AuthContext.Provider
      value={{
        authenticated: !!user,
        user,
        HomePage,
        login,
        logout,
        ListaRegistro,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
