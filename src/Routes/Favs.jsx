import React from "react";
import Card from "../Components/Card";
import {useContextGlobal} from '../Components/utils/global.context.jsx'


const Favs = () => {
  const {state: {favs}} = useContextGlobal()
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favs.map((dentist) => <Card key={dentist.id} dentist={dentist} />)}
      </div>
    </>
  );
};

export default Favs;
