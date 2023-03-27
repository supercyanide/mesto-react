import React from "react";
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({})

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }
  function handleCardClick(name, link) {
    setSelectedCard({ name, link, isOpen: true })
  }
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({ ...selectedCard, isOpen: false });
  }

  return (
    <>
      <Header/>
      <Main 
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onEditAvatar={handleEditAvatarClick}
      onCardClick={handleCardClick}
      />
      <Footer/>
      <PopupWithForm
        isOpened={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        name={'edit'}
        title={'Редактировать профиль'}
        text={'Сохранить'}
        >
        <label className="popup__label">
          <input 
            className="popup__input"
            id="input-name"
            type="text"
            name="name"
            placeholder="Имя"
            minLength={2}
            maxLength={40}
            required/>
          <span className="popup__error popup__input-error input-name-error" id="input-name-error"></span>
        </label>
        <label className="popup__label">
          <input 
            className="popup__input"
            id="input-about"
            type="text"
            name="about"
            placeholder="О себе"
            minLength={2}
            maxLength={200}
            required/>
          <span className="popup__error popup__input-error input-about-error" id="input-about-error"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm
        isOpened={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        name={'add'}
        title={'Новое место'}
        text={'Создать'}
        >
        <label className="popup__label">
          <input 
          type="text" 
          name="title" 
          id="input-title" 
          className="popup__input" 
          placeholder="Название" 
          minLength={2} 
          maxLength={30} 
          required/>
          <span className="popup__error popup__input-error input-title-error" id="input-title-error"></span>
        </label>
        <label className="popup__label">
          <input 
          type="url" 
          name="link" 
          id="input-link" 
          className="popup__input" 
          placeholder="Ссылка на картинку" 
          required/>
          <span className="popup__error popup__input-error input-link-error" id="input-link-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm
        isOpened={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        name={'avatar'}
        title={'Обновить аватар'}
        text={'Сохранить'}>
          <input 
          className="popup__input" 
          type="url" 
          id="input-avatar-link" 
          name="avatar" 
          placeholder="Ссылка на картинку" 
          required/>
          <span className="popup__error popup__input-error input-avatar-link-error"></span>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      <PopupWithForm
        isOpened={''}
        name={'confirm'}
        title={'Вы уверены?'}
        text={'Да'}
        />
    </>
  );
}

export default App;
