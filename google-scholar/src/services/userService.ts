import apiClient from "./apiClient";

export interface SignUpRequest {
  username: string;
  password: string;
  email: string;
  phoneNumber: string;
}

class UserService {
  signUp(request: SignUpRequest) {
    return apiClient
      .post("/users", request)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data;
      });
  }
}

export default new UserService();
