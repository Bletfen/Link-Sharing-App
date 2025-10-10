import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Link {
  id: string;
  platform: string;
  url: string;
  img: string;
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
  currentUser: User | null;
}

const savedUsers = JSON.parse(localStorage.getItem("users") || "[]");
const savedCurrentUser = JSON.parse(
  localStorage.getItem("currentUser") || "{}"
);

const initialState: AuthState = {
  users: savedUsers,
  currentUser: savedCurrentUser,
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
        const { email, password } = action.payload;
        const user = state.users.find(
          (u) => u.email === email && u.password === password
        );
        if (!user) return;
        state.currentUser = user;
        localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
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
        const { email, password } = action.payload;
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
      state.currentUser = null;
      localStorage.removeItem("currentUser");
    },
    updateLinkData: {
      prepare(link: ILinkData[]) {
        return { payload: link };
      },
      reducer(state, action: PayloadAction<ILinkData[]>) {
        if (!state.currentUser) return;
        const link = action.payload;
        state.currentUser.links = link;
        localStorage.setItem("users", JSON.stringify(state.users));
        localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
      },
    },
    updateImg(state, action) {
      if (!state.currentUser) return;
      const img = action.payload;
      state.currentUser.avatar = img;
      const userIndex = state.users.findIndex(
        (user) => user.id === state.currentUser?.id
      );
      if (userIndex !== -1) {
        state.users[userIndex] = {
          ...state.users[userIndex],
          avatar: img,
        };
      }
      localStorage.setItem("users", JSON.stringify(state.users));
      localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
    },
  },
});

export const { login, createUser, logout, updateLinkData, updateImg } =
  loginSlice.actions;

export default loginSlice.reducer;
