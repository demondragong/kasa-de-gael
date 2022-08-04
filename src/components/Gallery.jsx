import { getLogements } from "../logements";
import Thumbnail from "./Thumbnail";
 

export default function Gallery() {
    let logements = getLogements();
    return (
        <div className="gallery">
            {logements.map(logement => (
                <Thumbnail 
                    logement={logement}
                    key={logement.id}
                    />
            ))}
        </div>
    )
}

