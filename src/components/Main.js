import avatarPath from '../../src/images/profile-kusto.jpg'
import api from "../utils/Api.js";
import Card from "./Card.js";
import React from "react";

export default function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }){

  const [userName, setUserName] = React.useState(null);
  const [userDescription, setUserDescription] = React.useState(null);
  const [userAvatar, setUserAvatar] = React.useState(null);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([{ name, about, avatar }, cardsData]) => {
      setUserName(name);
      setUserDescription(about);
      setUserAvatar(avatar);
      setCards([...cards, ...cardsData])
    }).catch((err) => {
      console.log(err);
    });
}, [])

    return(
        <main className="content">
          <section className="profile">
            <div className="profile__personal-data">
              <div className="profile__avatar-block">
                <img onClick={onEditAvatar} alt="Аватар" className="profile__avatar" src={userAvatar}/>
              </div>
              <div className="profile__info">
                <div className="profile__group">
                  <h1 className="profile__name">{userName}</h1>
                  <p className="profile__description">{userDescription}</p>
                </div>
                <button type="button" onClick={onEditProfile} className="profile__edit-button" aria-label="Редактировать профиль"></button>
              </div>
            </div>
            <button type="button" onClick={onAddPlace} className="profile__add-button" aria-label="Добавить карточку"></button>
          </section>
          <section className="elements">{cards.map((card) => {
            return (
              <Card
                key={card._id}
                name={card.name}
                link={card.link}
                likesCount={card.likes}
                onCardClick={onCardClick}
              />
            )
            })}
          </section>
        </main>

    );
}