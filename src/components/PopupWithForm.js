import closeIcon from '../images/close-icon.svg';

function PopupWithForm({ isOpened, onClose, name, title, text, children }) {
    return (
        <div className={`popup popup-${name} ${isOpened ? 'popup_opened' : ''}`}>
            <div className='popup__container'>
                <button type="button" id={`${name}-close-btn`} onClick={onClose} className="popup__close-button" aria-label="Закрыть"></button>
                <div className={`popup__container-form-${name} popup__container-form`}>
                    <h3 className='popup__title'>{title}</h3>
                    <form className={`popup__form popup__form-${name}`} name={`${name}-form`}>
                        <fieldset className="popup__fieldset">
                            {children}
                        </fieldset>
                        <button type="submit" id={`${name}-submit-btn`} className="popup__submit-button">{text}</button>
                    </form>
                </div>
                
            </div>
        </div >
    )
}

export default PopupWithForm;