import React, {useState, useEffect, useRef} from 'react';
import {Navigate, useParams, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {ITEM_UPDATE_SUCCESS, serviceItem_selector} from "../store/reducers/serviceItem";
import {loadItem, loadItem_thunk, updateItem, updateItem_thunk} from "../store/actions/actionItem";
import {deleteServices_thunk} from "../store/actions/actionList";


export default function Item(props) {

    const [data, setData]      = useState({ id: '', name: '', price: '', desc: '' });

    // Определяем переданное ID
    const v = useParams();

    const {item, loading, error, operation} = useSelector(serviceItem_selector);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    // Считываем данные
    useEffect(() => {

//        loadItem(dispatch, v.id);
        dispatch(loadItem_thunk(v.id));

    }, []);

    useEffect(() => {

        setData(item);

    }, [item]);


    const handleChangeName = (evt) => {

        let new_value = evt.target.value;

        setData(prev => ({...prev,
            name: new_value
        }));
    }

    const handleChangePrice = (evt) => {

        let new_value = evt.target.value;

        setData(prev => ({...prev,
            price: new_value
        }));
    }

    const handleChangeDesc = (evt) => {

        let new_value = evt.target.value;

        setData(prev => ({...prev,
            desc: new_value
        }));
    }

    const goBack = (evt) =>
    {
        evt.preventDefault();

        if (window.history.state && window.history.state.idx > 0)
        {
            navigate(-1, { replace: false });
        }
        else
        {
            navigate('/services', { replace: false }); // the current entry in the history stack will be replaced with the new one with { replace: true }
        }
    }

    const updateHandler = (evt) =>
    {
        evt.preventDefault();

//        updateItem(dispatch, data);
        dispatch(updateItem_thunk(data));
    }


    // Ошибка
    if ((error != null) && (error != undefined))
        return (
            <>
                <div className="error">Произошла ошибка!</div>
                <div className="error">{error}</div>
            </>
        );

    // При загрузке отображаем loader
    if (loading)
        return (
            <div className="cssload-container">
                <div className="cssload-zenith"></div>
            </div>
        );

    // Если сохранение успешно прошло, то переходим к списку
    if (operation === ITEM_UPDATE_SUCCESS)
    {
        navigate('/services');
    }


    return (

        <form id="item">
            <div>Название</div>
            <input type="text" value={data.name} onChange={handleChangeName} />
            <div>Стоимость</div>
            <input type="number" value={data.price} onChange={handleChangePrice} />
            <div>Описание</div>
            <input type="text" value={data.desc} onChange={handleChangeDesc} />
            <div id="btn">
                <button onClick={goBack}>Отмена</button>
                <button onClick={updateHandler}>Сохранить</button>
            </div>
        </form>

    );

}