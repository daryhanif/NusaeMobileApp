import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
export interface AuthStoreType {
  isLogin: boolean;
  setIsLogin: (value: boolean) => void;
}
const AuthStore = create<AuthStoreType>()(
  persist(
    (set) => ({
      isLogin: false,
      setIsLogin: (value: boolean) => set({ isLogin: value }),
    }),
    {
      name: "AuthStatus",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
export { AuthStore };
