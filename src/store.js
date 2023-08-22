import { create } from "zustand"

const useStore = create((set) => ({
  email: '',
  password: '',
  setEmail: (firstName) => set(() => ({ firstName: firstName })),
  setPassword: (lastName) => set(() => ({ lastName: lastName })),
}))


export default useStore