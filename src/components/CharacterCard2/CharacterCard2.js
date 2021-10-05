import React from "react";
import { Link } from "react-router-dom";

import "./CharacterCard2.scss";

import * as routes from "../../constants/routes";

function CharacterCard({
  id,
  name,
  image,
  species,
  status,
  origin,
  location,
  locationUrl,
}) {
  const splitLocation = locationUrl.split("/");
  const num = splitLocation[splitLocation.length - 1];
  // eslint-disable-next-line no-console
  console.log(num);
  return (
    <div className="col col-12 col-sm-6 col-xl-3 CharacterCard">
      <img className="CharacterCard__img" src={image} alt="" />
      <Link to={`${routes.CHARACTER}/${id}`}>
        <h3 className="CharacterCard__name h4">{name}</h3>
      </Link>
      <div className="CharacterCard__meta">
        <Link
          className="CharacterCard__meta-item"
          to={`${routes.LOCATION}/${num}`}
        >
          {location}
        </Link>
        <p className="CharacterCard__meta-item">|</p>
        <p className="CharacterCard__meta-item">{status}</p>
      </div>
    </div>
  );
}

export default CharacterCard;
