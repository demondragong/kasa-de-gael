import { Link } from "react-router-dom";

export default function Thumbnail({ logement }) {
  return (
    <Link to={`logement-${logement.id}`} key={logement.id}>
      <div className="thumbnail">
        <img className="thumbnail__image" src={logement.cover} alt="" />
        <div className="thumbnail__title-overlay">
          <span>{logement.title}</span>
        </div>
      </div>
    </Link>
  );
}
