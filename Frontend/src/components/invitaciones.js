//import { useParams } from 'react-router-dom';

//componentes
import Carousel from './inv component/carousel';
import Portada from './inv component/portada';
import Invitacion from './inv component/invitacion';
import Itinerario from './inv component/itinerario';
import Dresscode from './inv component/dresscode';
//import Confirmacion from './inv component/confirmacion';
import ReproductorDeCancion from './helpers/cancion';
import Padrinos from './inv component/padrinos';


function Invitaciones() {
  //const {id} = useParams();

  return (
    <div>
      <Carousel />

      <Portada />

      <Invitacion />

      <ReproductorDeCancion />

      <Itinerario />

      <Padrinos />
      
      <Dresscode />

      {/* <Confirmacion /> */}
    </div>
  );
}

export default Invitaciones;
