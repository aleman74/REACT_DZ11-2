// Загрузка списка
export const ITEM_LOAD_START   = 'ITEM_LOAD_START';
export const ITEM_LOAD_SUCCESS = 'ITEM_LOAD_SUCCESS';
export const ITEM_LOAD_FAILURE = 'ITEM_LOAD_FAILURE';

// Добавление элемента
export const ITEM_ADD_START   = 'ITEM_ADD_START';
export const ITEM_ADD_SUCCESS = 'ITEM_ADD_SUCCESS';
export const ITEM_ADD_FAILURE = 'ITEM_ADD_FAILURE';

// Обновление элемента
export const ITEM_UPDATE_START   = 'ITEM_UPDATE_START';
export const ITEM_UPDATE_SUCCESS = 'ITEM_UPDATE_SUCCESS';
export const ITEM_UPDATE_FAILURE = 'ITEM_UPDATE_FAILURE';

// Удаление элемента
export const ITEM_DELETE_START   = 'ITEM_DELETE_START';
export const ITEM_DELETE_SUCCESS = 'ITEM_DELETE_SUCCESS';
export const ITEM_DELETE_FAILURE = 'ITEM_DELETE_FAILURE';


const initialState = {
    item: { id: '', name: '', price: '', desc: '' },
    loading: false,
    error: null,
    operation: null
};

export default function serviceItem(data = initialState, param) {

    switch (param.type) {

        // ---------------------------------------------
        //  Загрузка элемента
        // ---------------------------------------------
        case ITEM_LOAD_START:
            return {...data, loading: true, error: null, operation: ITEM_LOAD_START};

        case ITEM_LOAD_SUCCESS:
            const item = param.payload;

            return {...data, item, loading: false, error: null, operation: ITEM_LOAD_SUCCESS};

        case ITEM_LOAD_FAILURE: {
            const error = param.payload;

            return {...data, loading: false, error, operation: ITEM_LOAD_FAILURE};
        }

        // ---------------------------------------------
        // Добавление элемента
        // ---------------------------------------------
        case ITEM_ADD_START:
            return {...data, loading: true, error: null, operation: ITEM_ADD_START};

        case ITEM_ADD_SUCCESS:        // Очищаем поля после успешного добавления
            return {...initialState, loading: false, error: null, operation: ITEM_ADD_SUCCESS};

        case ITEM_ADD_FAILURE: {
            const error = param.payload;

            return {...data, loading: false, error, operation: ITEM_ADD_FAILURE};
        }

        // ---------------------------------------------
        // Обновление элемента
        // ---------------------------------------------
        case ITEM_UPDATE_START:
            return {...data, loading: true, error: null, operation: ITEM_UPDATE_START};

        case ITEM_UPDATE_SUCCESS:
            return {...initialState, loading: false, error: null, operation: ITEM_UPDATE_SUCCESS};

        case ITEM_UPDATE_FAILURE: {
            const error = param.payload;

            return {...data, loading: false, error, operation: ITEM_UPDATE_FAILURE};
        }

        // ---------------------------------------------
        // Удаление элемента
        // ---------------------------------------------
        case ITEM_DELETE_START:
            return {...data, loading: true, error: null, operation: ITEM_DELETE_START};

        case ITEM_DELETE_SUCCESS:
            return {...initialState, loading: false, error: null, operation: ITEM_DELETE_SUCCESS};

        case ITEM_DELETE_FAILURE: {
            const error = param.payload;

            return {...data, loading: false, error, operation: ITEM_DELETE_FAILURE};
        }

        // ---------------------------------------------
        default:
            return data;
        // ---------------------------------------------
    }
}

// --------------------------------------------
// Функции формирующие параметры вызова serviceItem
// --------------------------------------------
export const param_serviceItem_START = (type) => (
    {type: type, payload: null}
);

export const param_serviceItem_SUCCESS = (type) => (
    {type: type, payload: null}
);

export const param_serviceItem_SUCCESS_DATA = (type, item) => (
    {type: type, payload: item}
);

export const param_serviceItem_FAILURE = (type, message) => (
    {type: type, payload: message}
);

// --------------------------------------------
// Selector
// --------------------------------------------
export const serviceItem_selector = (store) => store.serviceItem;
