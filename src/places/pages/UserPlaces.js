import React from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";

const UserPlaces = () => {
  const USER_PLACES = [
    {
      id: "p1",
      title: "Empire state building",
      description:
        "Tallest building in the world! Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis.",
      address: "20 W 34th St, New York, NY 10001",
      image: "01.jpg",
      coordinates: { lat: 40.7484405, lng: -73.9856644 },
      user: "u1",
    },
    {
      id: "p2",
      title: "Empire state building",
      description:
        "Tallest building in the world! Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis.",
      address: "20 W 34th St, New York, NY 10001",
      image: "01.jpg",
      coordinates: { lat: 40.7484405, lng: -73.9856644 },
      user: "u2",
    },
    {
      id: "p3",
      title: "Empire state building",
      description:
        "Tallest building in the world! Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis.",
      address: "20 W 34th St, New York, NY 10001",
      image: "01.jpg",
      coordinates: { lat: 40.7484405, lng: -73.9856644 },
      user: "u2",
    },
  ];
  const userId = useParams().userId;
  const filterPLaceByUser = USER_PLACES.filter(
    (place) => place.user === userId
  );
  return (
    <div className="content-body">
      <div className="container-fluid">
        <div className="row">
          <PlaceList places={filterPLaceByUser} />
        </div>
      </div>
    </div>
  );
};

export default UserPlaces;
