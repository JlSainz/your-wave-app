import axios from "axios";

class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/api`,
      withCredentials: true
    });
  }

  signup = (username, lastname, email, password) => {
    return this.service
      .post("/auth/signup", { username, lastname, email, password })
      .then(response => response.data);
  };

  login = (email, password) => {
    return this.service
      .post("/auth/login", { email, password })
      .then(response => response.data);
  };

  loggedin = () => {
    return this.service
      .get("/auth/currentUser")
      .then(response => response.data);
  };

  logout = () => {
    return this.service.get("/auth/logout").then(response => response.data);
  };
}

export default AuthService;
