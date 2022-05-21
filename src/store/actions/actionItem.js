import {
    ITEM_LOAD_FAILURE,
    ITEM_LOAD_START,
    ITEM_LOAD_SUCCESS,
    ITEM_DELETE_START,
    ITEM_DELETE_SUCCESS,
    ITEM_DELETE_FAILURE,
    param_serviceItem_FAILURE,
    param_serviceItem_START,
    param_serviceItem_SUCCESS_DATA,
    ITEM_UPDATE_START,
    ITEM_UPDATE_SUCCESS,
    ITEM_UPDATE_FAILURE,
    param_serviceItem_SUCCESS
} from "../reducers/serviceItem";



// -------------------------------------------
// Load
// -------------------------------------------
export const loadItem_thunk = (id) =>
    (dispatch, getStore) => {

        const store = getStore();
        console.log({store});

        loadItem(dispatch, id);
    }

export const loadItem = async (dispatch, id) => {

    dispatch(
        param_serviceItem_START(ITEM_LOAD_START)
    );

    try {
        const response = await fetch(
            process.env.REACT_APP_API_URL + '/' + id,
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
            param_serviceItem_SUCCESS_DATA(ITEM_LOAD_SUCCESS, data)
        );

    } catch (ex) {
//        console.log('ERROR', ex.message);
        dispatch(
            param_serviceItem_FAILURE(ITEM_LOAD_FAILURE, ex.message)
        );
    }
}

// -------------------------------------------
// Edit
// -------------------------------------------
export const updateItem_thunk = (item) => {
    return (dispatch, getStore) => {

        const store = getStore();
        console.log({store});

        updateItem(dispatch, item);
    }
}

export const updateItem = async (dispatch, item) => {

    dispatch(
        param_serviceItem_START(ITEM_UPDATE_START)
    );

    try {

        const response = await fetch(
            process.env.REACT_APP_API_URL,
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(item)
            }
        );

        if (!response.ok) {
//            console.log('Error delete: ' + response.statusText);
            throw new Error(response.statusText);
        }

        dispatch(
            param_serviceItem_SUCCESS(ITEM_UPDATE_SUCCESS)
        );

//        loadList(dispatch);

    } catch (ex) {
//        console.log('ERROR', ex.message);
        dispatch(
            param_serviceItem_FAILURE(ITEM_UPDATE_FAILURE, ex.message)
        );
    }
}


