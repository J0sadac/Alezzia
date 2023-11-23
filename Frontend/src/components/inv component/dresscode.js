import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

const img = require.context('../../multimedia', true);

function Dresscode() {
  const { anfitrion, invitadoId } = useParams();
  const [evento, setEvento] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    async function fetchEvento() {
      try {
        const eventoResponse = await fetch(`https://invitandoodb.onrender.com/eventos?anfitrion=${anfitrion}&invitadoId=${invitadoId}`);
        const eventoData = await eventoResponse.json();
        setEvento(eventoData);
      } catch (error) {
        console.error('Error al recuperar datos del evento:', error);
      }
    }

    fetchEvento();
  }, [anfitrion, invitadoId]);

  const toggleExplanation = () => {
    setShowExplanation(!showExplanation);
  };


  return (
    
    <div className="container-dresscode_mesa shadow">
      
       {evento ? (
        <div className="dresscode shadow">
          <h3>Codigo de Vestimenta</h3>

      {/* <div className="img-dresscode">
            <img src={ImgDresscodeSemiformal} alt="..." />
          </div> */}

          <div>
            <div>
              <p className="titulo">
                Hombres y Mujeres
              </p>
              <p>
                {evento.codigoDeVestimenta.mujer}
              </p>
            </div>
          </div>

        </div>
       ) : (
        <p>Cargando...</p>
       )}

       {evento ? (
        <div className={`mesa shadow ${showExplanation ? 'flip' : ''}`}>

          <div className={`mesaDeRegalos ${showExplanation ? 'hidden' : ''}`}>
            <h3>Mesa de regalos</h3>

            <div className="codigoRegalo">
              <img src={img(evento.datos.mesaDeRegalos.img)} alt="..." className="imgLogo" />

              <p>{evento.datos.mesaDeRegalos.modalidad} {evento.datos.mesaDeRegalos.codigo}</p>
            </div>
          </div>

          <div className={`explicacion ${showExplanation ? 'visible' : ''}`}>
            <h3>{evento.datos.mesaDeRegalos.modalidad} {evento.datos.mesaDeRegalos.codigo}</h3>
            <p>
            {evento.datos.mesaDeRegalos.explicacion}
            </p>
          </div>

          <button className="explicacion-button" onClick={toggleExplanation}>
            {showExplanation ? '➜' : '¿Qué es?'}
          </button>

      </div>
       ) : (
        <p>Cargando...</p>
       )}

    </div> 
  );
}

export default Dresscode;
