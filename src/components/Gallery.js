import { Link } from "react-router-dom";
import { getLogements } from "../logements";
 

export default function Gallery() {
    let logements = getLogements();
    return (
        <div>
            {logements.map(logement => (
                <Link
                    to={`logement-${logement.id}`}
                    key={logement.id}
                >
                    {logement.title}
                </Link>
            ))}
        </div>
    )
}

