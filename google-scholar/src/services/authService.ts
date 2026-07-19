import apiClient from "./apiClient";

export interface LoginRequest {
  username: string;
  password: string;
}

class AuthService {
  login(request: LoginRequest) {
    return apiClient
      .post("/auth/login", request)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err.response.data);
      });
  }
}

export default new AuthService();
