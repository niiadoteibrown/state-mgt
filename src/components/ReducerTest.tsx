import React, { useReducer } from "react";

const ReducerTest = () => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case "SET_NAME":
                return { ...state, name: action.payload };
            case "ADD_NAME":
                return {
                    ...state,
                    names: [...state.names, action.payload],
                    name: ""
                };
        }
    }, {
        names: [],
        name: ""
    });
};