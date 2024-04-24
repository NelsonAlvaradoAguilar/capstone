import "./ArticlesNewsDetails,scss";

const ArticlesNewsDetails = (params) => {
  return (
    <section>
      <h1 className="details__title">{singleClass?.title}</h1>
      <img className="details__img" src={singleClass?.images}></img>
      <div className="details__contentContainer">
        <p className="details__description">{singleClass?.description}</p>
        <div className="details__content">
          <h3>Date:</h3>
          <p>{singleClass?.date}</p>
        </div>
        <div className="details__content">
          <h3>Location:</h3>
          <p>{singleClass?.location}</p>
        </div>
        <div className="details__content">
          <h3>Instructor:</h3>
          <p>{singleClass?.instructor}</p>
        </div>
      </div>

      <button className="details__buttonR">Resgister</button>
    </section>
  );
};
