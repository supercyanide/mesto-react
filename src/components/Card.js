function Card({ name, link, likesCount, onCardClick }) {

    function handleClick() {
      onCardClick(name, link)
    }
  
    return (
        <div className="element">
            <img className="element__image" src={link} alt={name} onClick={handleClick}/>
            <button aria-label="Удалить" type="button" className="element__bin-button"></button>
            <div className="element__place">
                <h2 className="element__title">{name}</h2>
                <div className="element__likes-group">
                    <button type="button" className="element__like-button" title="Нравится"></button>
                    <span className="element__likes">{likesCount.length}</span>
                </div>
            </div>
        </div>
    )
  }
  
  export default Card;