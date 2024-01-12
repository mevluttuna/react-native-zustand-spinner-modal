import { create } from 'zustand'

type SpinnerModalProps = {
    show: boolean,
    showSpinner: () => void,
    hideSpinner: () => void,
}

const useSpinnerStore = create<SpinnerModalProps>((set) => ({
    show: false,
    showSpinner: () => set({ show: true }),
    hideSpinner: () => set({ show: false }),
}))

export default useSpinnerStore