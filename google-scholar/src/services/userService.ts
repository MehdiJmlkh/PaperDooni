import apiClient from "./apiClient";

export interface SignUpRequest {
  username: string;
  password: string;
  email: string;
  phoneNumber: string;
}

export interface EditEmailRequest {
  newEmail: string;
}

interface EditPhoneNumberRequest {
  newPhoneNumber: string;
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

  editEmail(newEmail: string) {
    return apiClient
      .post("/users/me/email", { newEmail })
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.email;
      });
  }

  editPhoneNumber(request: EditPhoneNumberRequest) {
    return apiClient
      .post("/users/me/phone-number", request)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.phoneNumber;
      });
  }
}

export default new UserService();
