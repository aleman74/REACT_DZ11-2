import {
    LIST_DELETE_FAILURE,
    LIST_DELETE_START, LIST_DELETE_SUCCESS,
    LIST_LOAD_FAILURE,
    LIST_LOAD_START,
    LIST_LOAD_SUCCESS,
    param_serviceList_FAILURE,
    param_serviceList_START,
    param_serviceList_SUCCESS,
    param_serviceList_SUCCESS_DATA
} from "../reducers/serviceList";


// -------------------------------------------
// Load
// -------------------------------------------

// export const loadList_thunk => (наши аргументы) => (dispatch, getState) => {... наш код...}
export const loadList_thunk = () =>
     (dispatch, getStore) => {

        const store = getStore();
        console.log({store});

        loadList(dispatch);
    }


export const loadList = async (dispatch) => {

    dispatch(
        param_serviceList_START(LIST_LOAD_START)
    );

    try {
        const response = await fetch(
            process.env.REACT_APP_API_URL,
            {
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            }
        );

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const data = await response.json();
//        console.log(data);

        dispatch(
            param_serviceList_SUCCESS_DATA(LIST_LOAD_SUCCESS ,data)
        );

    } catch (ex) {
//        console.log('ERROR', ex.message);
        dispatch(
            param_serviceList_FAILURE(LIST_LOAD_FAILURE, ex.message)
        );
    }
}

// -------------------------------------------
// Delete
// -------------------------------------------
export const deleteServices_thunk = (id) => {
    return(dispatch, getStore) => {

        const store = getStore();
        console.log({store});

        deleteServices(dispatch, id);
    }
}


export const deleteServices = async (dispatch, id) => {

    dispatch(
        param_serviceList_START(LIST_DELETE_START)
    );

    try {

        const response = await fetch(
            process.env.REACT_APP_API_URL + '/' + id,
            {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'}
            }
        );

        if (!response.ok) {
//            console.log('Error delete: ' + response.statusText);
            throw new Error(response.statusText);
        }

        dispatch(
            param_serviceList_SUCCESS(LIST_DELETE_SUCCESS)
        );

        loadList(dispatch);

    } catch (ex) {
//        console.log('ERROR', ex.message);
        dispatch(
            param_serviceList_FAILURE(LIST_DELETE_FAILURE, ex.message)
        );
    }
}


