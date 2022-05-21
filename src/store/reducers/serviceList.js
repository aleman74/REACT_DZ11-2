// Загрузка списка
export const LIST_LOAD_START   = 'LIST_LOAD_START';
export const LIST_LOAD_SUCCESS = 'LIST_LOAD_SUCCESS';
export const LIST_LOAD_FAILURE = 'LIST_LOAD_FAILURE';

// Добавление элемента
export const LIST_ADD_START   = 'LIST_ADD_START';
export const LIST_ADD_SUCCESS = 'LIST_ADD_SUCCESS';
export const LIST_ADD_FAILURE = 'LIST_ADD_FAILURE';

// Обновление элемента
export const LIST_UPDATE_START   = 'LIST_UPDATE_START';
export const LIST_UPDATE_SUCCESS = 'LIST_UPDATE_SUCCESS';
export const LIST_UPDATE_FAILURE = 'LIST_UPDATE_FAILURE';

// Удаление элемента
export const LIST_DELETE_START   = 'LIST_DELETE_START';
export const LIST_DELETE_SUCCESS = 'LIST_DELETE_SUCCESS';
export const LIST_DELETE_FAILURE = 'LIST_DELETE_FAILURE';


const initialState = {
    items: [],
    loading: false,
    error: null,
    operation: null
};

export default function serviceList(data = initialState, param) {

    switch (param.type) {

        // ---------------------------------------------
        //  Загрузка списка
        // ---------------------------------------------
        case LIST_LOAD_START:
            return {...data, loading: true, error: null, operation: LIST_LOAD_START};

        case LIST_LOAD_SUCCESS:
            const items = param.payload;

            return {...data, items, loading: false, error: null, operation: LIST_LOAD_SUCCESS};

        case LIST_LOAD_FAILURE: {
            const error = param.payload;

            return {...data, loading: false, error, operation: LIST_LOAD_FAILURE};
        }

        // ---------------------------------------------
        // Добавление элемента
        // ---------------------------------------------
        case LIST_ADD_START:
            return {...data, loading: true, error: null, operation: LIST_ADD_START};

        case LIST_ADD_SUCCESS:
            return {...data, loading: false, error: null, operation: LIST_ADD_SUCCESS};

        case LIST_ADD_FAILURE: {
            const error = param.payload;

            return {...data, loading: false, error, operation: LIST_ADD_FAILURE};
        }

        // ---------------------------------------------
        // Обновление элемента
        // ---------------------------------------------
        case LIST_UPDATE_START:
            return {...data, loading: true, error: null, operation: LIST_UPDATE_START};

        case LIST_UPDATE_SUCCESS:
            return {...data, loading: false, error: null, operation: LIST_UPDATE_SUCCESS};

        case LIST_UPDATE_FAILURE: {
            const error = param.payload;

            return {...data, loading: false, error, operation: LIST_UPDATE_FAILURE};
        }

        // ---------------------------------------------
        // Удаление элемента
        // ---------------------------------------------
        case LIST_DELETE_START:
            return {...data, loading: true, error: null, operation: LIST_DELETE_START};

        case LIST_DELETE_SUCCESS:
            return {...data, loading: false, error: null, operation: LIST_DELETE_SUCCESS};

        case LIST_DELETE_FAILURE: {
            const error = param.payload;

            return {...data, loading: false, error, operation: LIST_DELETE_FAILURE};
        }

        // ---------------------------------------------
        default:
            return data;
        // ---------------------------------------------
    }
}

// --------------------------------------------
// Функции формирующие параметры вызова serviceList
// --------------------------------------------
export const param_serviceList_START = (type) => (
    {type: type, payload: null}
);

export const param_serviceList_SUCCESS = (type) => (
    {type: type, payload: null}
);

export const param_serviceList_SUCCESS_DATA = (type, items) => (
    {type: type, payload: items}
);

export const param_serviceList_FAILURE = (type, message) => (
    {type: type, payload: message}
);

// --------------------------------------------
// Selector
// --------------------------------------------
export const serviceList_selector = (store) => store.serviceList;
