/**
 * Bunch of Reducers 
 */

type payloadInterface = {
    type:String;
    payload:any;
}

const initialState = {
    apiLoaded: false,
    jsonData:JSON,
    currentTab: 'Alcoholic'
}

const jsonRespAction = (_jsonData: JSON):payloadInterface => {
    return {
        type: "JSON_DATA",
        payload: _jsonData
    }
}

const asyncAction = () => {
    return fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic');
}

export const asyncReducer = () => {
    return (dispatch: any) => {
        asyncAction()
            .then(_data => _data.json())
            .then((_val) => {
                dispatch(jsonRespAction(_val))
            });
    }
}

export const rootReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "INIT":
            return {
                ...state,
                apiLoaded: true
             }
        case "JSON_DATA":
            return {
                ...state,
                jsonData: action.payload
             }
        default:
            return { ...state, ...initialState };
    }
}