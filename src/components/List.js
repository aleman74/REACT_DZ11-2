import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

import {serviceList_selector} from "../store/reducers/serviceList";
import {loadList, deleteServices, loadList_thunk, deleteServices_thunk} from "../store/actions/actionList";


export default function List(props) {

    const {items, loading, error, operation} = useSelector(serviceList_selector);
    const dispatch = useDispatch();


    useEffect(() => {

//        loadList(dispatch);
        dispatch(loadList_thunk());

    }, [dispatch]);

    const handleRemove = (id) => {

//        deleteServices(dispatch, Number(id));
        dispatch(deleteServices_thunk(Number(id)));
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

    // Если данных нет, то ничего не отображаем
    if (items.length == 0)
        return null;

    // Есть данные и не загрузка
    return (
        <table id="list">
            {items.map((item) =>
                <tr key={item.id}>
                    <td>{item.name + ': ' + item.price + ' руб.'}</td>
                    <td>
                        <div className="button">
                            <Link to={'/services/' + item.id}>
                                <span className="material-icons">edit</span>
                            </Link>
                        </div>
                    </td>
                    <td>
                        <div className="button"><span className="material-icons" onClick={(evt) => handleRemove(item.id)}>
                            close</span>
                        </div>
                    </td>
                </tr>
            )}
        </table>
    );

}