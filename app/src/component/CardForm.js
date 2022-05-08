import React, {useContext, useState} from 'react';
import { Context } from '..';

const CardsForm = () => {
    const {store} = useContext(Context)
    const [id, setId] = useState('')
    const getCards = () => store.getCard('GET')

    return (
        <div>
            <button onClick={getCards}>Получить карточки</button>
            <input
                onChange={event => setId(event.target.value)}
                value={id}
                type="text"
                placeholder='ID for Card'
            />
            <button onClick={() => store.getCardID('GET', id)}>Получить карточки по ID</button>
            <button onClick={() => store.getCardID('DELETE', id)}>Удалить карточку по ID</button>
            <button onClick={() => store.getCardID('POST', id)}>Создание карточку</button>
            <button onClick={() => store.getCardID('PUT', id)}>Изменение карточку по ID</button>
        </div>
    );
};

export default CardsForm;
