import apiClient from "./apiClient";

export interface SignUpRequest {
  username: string;
  password: string;
  email: string;
  phoneNumber: string;
}

interface EditEmailRequest {
  newEmail: string;
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

  editEmail(request: EditEmailRequest) {
    return apiClient
      .post("/users/me/email", request)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.email;
      });
  }
}

export default new UserService();
