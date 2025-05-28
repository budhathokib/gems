const API = "https://your-backend-api.com"; // Define your API base URL

export const register = (username, email, password) => {
    return fetch(`${API}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, email, password })
    })
    .then(response => {
        if (!response.ok) throw new Error("Failed to register");
        return response.json();
    })
    .catch(error => console.error("Register error:", error));
};

export const verifyEmail = (token) => {
    return fetch(`${API}/verifyEmail/${token}`)
    .then(response => {
        if (!response.ok) throw new Error("Failed to verify email");
        return response.json();
    })
    .catch(error => console.error("Verify email error:", error));
};

export const login = (email, password) => {
    return fetch(`${API}/signin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password }) // Fixed incorrect variable
    })
    .then(response => {
        if (!response.ok) throw new Error("Failed to login");
        return response.json();
    })
    .catch(error => console.error("Login error:", error));
};

export const authenticate = (data) => {
    if (data) {
        localStorage.setItem('jwt', JSON.stringify(data));
    }
};

export const isAuthenticated = () => {
    const jwt = localStorage.getItem('jwt');
    return jwt ? JSON.parse(jwt) : false; // Simplified logic
};
