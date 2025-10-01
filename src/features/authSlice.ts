import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Link {
  id: string;
  platform: string;
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
    addLink: {
      prepare(platform: string, url: string) {
        return { payload: { id: crypto.randomUUID(), platform, url } };
      },
      reducer(state, action: PayloadAction<Link>) {
        const { id, platform, url } = action.payload;
        if (!state.currentUser) return;
        state.currentUser.links.push({
          id: id,
          platform,
          url,
        });
      },
    },
    removeLink(state, action) {
      if (!state.currentUser) return;
      const id = action.payload;
      state.currentUser.links = state.currentUser.links.filter(
        (link) => link.id !== id
      );
    },
  },
});

export const { login, createUser, logout, addLink, removeLink } =
  loginSlice.actions;

export default loginSlice.reducer;
