import { useParams } from "react-router-dom"
import { Navigate } from "react-router-dom";
import { getLogement } from "../logements";


export default function Logement() {
    let params = useParams();
    let logement = getLogement(params.logementId);
    
    // generate logement page if it was found in the data, otherwise navigate to error page 
    if(logement) {
        return (
            <div>
                <img src={logement.cover} alt="lobby of the apartment"/>
                <h1>{logement.title}</h1>
                <p>{logement.description}</p>
            </div>
        )
    } else {
        return (
            <Navigate to="/error" replace={true} />
        )
    }
    
    
}
