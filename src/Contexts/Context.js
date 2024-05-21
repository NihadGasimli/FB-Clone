import { createContext, useReducer } from "react";

export const context = createContext();

const initialState = {
    selectedGif: "",
    posts: []
}

function reducer(state, action) {
    if (action.method === "gif") {
        return { ...state, selectedGif: action.payload }
    }
    else if (action.method === "post") {
        console.log("bb", action.payload)
        return { ...state, posts: [...state.posts, { text: action.payload, gif: state.selectedGif }] }
    }

}

export default function Context({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <context.Provider value={[state, dispatch]}>{children}</context.Provider>
        </>
    )
}

