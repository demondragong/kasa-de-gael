import { useParams } from "react-router-dom"


export default function Logement() {
    let params = useParams();
    return (
        <h1>Je suis logement {params.logementId}</h1>
    )
}