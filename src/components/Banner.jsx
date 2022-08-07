export default function Banner({ location, image, text }) {
  return (
    <div className={`banner banner--${location}`}>
      <img className="banner__image" src={image} alt="" />
      <div className="banner__text-overlay">
        <span>{text}</span>
      </div>
    </div>
  );
}
