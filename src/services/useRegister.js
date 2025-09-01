import BASE_API_URL from "../config/baseAPI"

const useRegister = (data) => {
    const REGISTER_URL = `${BASE_API_URL}/users`
    fetch(REGISTER_URL,{
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({
            name: data.nameRegister,
            email: data.emailRegister,
            password: data.passwordRegister
        })
    })
}

export default useRegister