import { Link } from "react-router-dom"
import placeholder from "../assets/thumbnail_placeholder.png"

export default function Thumbnail({ logement }) {
    return (
            <Link
                to={`logement-${logement.id}`}
                key={logement.id}
            >
                <div className="thumbnail">
                    <img className="thumbnail__image" src={placeholder} alt="" />
                    <p className="thumbnail__title">{logement.title}</p>
                </div>
            </Link>
    )
}