import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Carrousel from "../components/Carrousel";
import Dropdown from "../components/Dropdown";
import HostProfile from "../components/HostProfile";
import StarRating from "../components/StarRating";
import Tag from "../components/Tag";
import { getLogement } from "../logements";

export default function Logement() {
  let params = useParams();
  let logement = getLogement(params.logementId);

  let equipmentList = [];

  if (logement) {
    equipmentList = (
      <ul>
        {logement.equipments.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
    );
  }
  // generate logement page if it was found in the data, otherwise navigate to error page
  return logement ? (
    <main className="main">
      <Carrousel pictures={logement.pictures} />
      <h1 className="logement-title">{logement.title}</h1>
      <p className="logement-location">{logement.location}</p>
      {logement.tags.map((tag, i) => (
        <Tag name={tag} key={i} />
      ))}
      <div className="logement-rating-host">
        <StarRating score={parseInt(logement.rating)} />
        <HostProfile
          name={logement.host.name}
          picture={logement.host.picture}
        />
      </div>
      <Dropdown title="Description" content={logement.description} />
      <Dropdown title="Équipements" content={equipmentList} />
    </main>
  ) : (
    <Navigate to="/error" replace={true} />
  );
}
