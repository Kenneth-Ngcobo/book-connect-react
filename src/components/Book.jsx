import { authors } from "../data";

function Book(props) {
  const { title, author, image } = props;

  const handleClick = () => {
    console.log(title);
  };

  return (
    <button className="preview" onClick={handleClick}>
      <div className="list__items" data-list-items>
        <img className="preview__image" src={image} />

        <div className="preview__info">
          <h3 className="preview__title">{title}</h3>
          <div className="preview__author">{authors[author]}</div>
        </div>
      </div>
    </button>
  );
}

export default Book;
