import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Link {
  id: string;
  type: string;
  url: string;
}

interface User {
  id: string;
  firstName: string;
  lastName: string;
  avatar: string;
  email: string;
  password: string;
  links: Link[];
}

interface AuthState {
  users: User[];
  currentUser: User | {};
  errorEmail: boolean;
  errorPassword: boolean;
  errorConfirmPassword: boolean;
}

const savedUsers = JSON.parse(localStorage.getItem("users") || "[]");
const savedCurrentUser = JSON.parse(
  localStorage.getItem("currentUser") || "{}"
);

const initialState: AuthState = {
  users: savedUsers,
  currentUser: savedCurrentUser,
  errorEmail: false,
  errorPassword: false,
  errorConfirmPassword: false,
};

export const loginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: {
      prepare(email, password) {
        return { payload: { email, password } };
      },
      reducer(
        state,
        action: PayloadAction<{ email: string; password: string }>
      ) {
        state.errorPassword = false;
        state.errorEmail = false;
        const { email, password } = action.payload;
        const user = state.users.find((u) => u.email === email);
        if (!user) {
          state.errorEmail = true;
          return;
        }
        if (user.password !== password) {
          state.errorPassword = true;
          return;
        }
        state.currentUser = user;
      },
    },
    createUser: {
      prepare(email, password, repeatPassword) {
        return { payload: { email, password, repeatPassword } };
      },

      reducer(
        state,
        action: PayloadAction<{
          email: string;
          password: string;
          repeatPassword: string;
        }>
      ) {
        state.errorEmail = false;
        state.errorConfirmPassword = false;
        const { email, password, repeatPassword } = action.payload;
        const exists = state.users.find((u) => u.email === email);
        if (password !== repeatPassword) {
          state.errorConfirmPassword = true;
          return;
        }
        if (exists) {
          state.errorEmail = true;
          return;
        }

        const newUser = {
          id: crypto.randomUUID(),
          firstName: "",
          lastName: "",
          avatar: "",
          email,
          password,
          links: [],
        };
        state.users.push(newUser);
        localStorage.setItem("users", JSON.stringify(state.users));
      },
    },
    logout(state) {
      state.currentUser = {};
      localStorage.removeItem("currentUser");
    },
  },
});

export const { login, createUser, logout } = loginSlice.actions;

export default loginSlice.reducer;
