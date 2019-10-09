import axios from "axios";

class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL: "http://localhost:3010/api/auth",
      withCredentials: true
    });
  }

  signup = (username, lastname, email, password) => {
    return this.service
      .post("/signup", { username, lastname, email, password })
      .then(response => response.data);
  };

  login = (email, password) => {
    return this.service
      .post("/login", { email, password })
      .then(response => response.data);
  };

  loggedin = () => {
    return this.service.get("/currentUser").then(response => response.data);
  };

  logout = () => {
    return this.service.get("/logout").then(response => response.data);
  };
}

export default AuthService;
