import React from "react";
import { Link } from "react-router-dom";
import logements from "../../datas/logements.json";
import Card from "../card/Card";
import "../../styles/gallery.css"

const Gallery = () => {
  return (
    <div className="home_gallery">
      {logements.map((logement) => {
        return (
          <article key={logement.id}>
            <Link to={`/logement/${logement.id}`}>
              <Card image={logement.cover} title={logement.title} />
            </Link>
          </article>
        );
      })}
    </div>
  );
};

export default Gallery;