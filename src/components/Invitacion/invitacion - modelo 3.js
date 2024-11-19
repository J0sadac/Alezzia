import React, { useEffect, lazy, Suspense } from 'react';
import Mensaje3 from './components/modelo 3/mensaje3';
import Sobre from './components/modelo 3/sobre';

const Portada = lazy(() => import("./components/modelo 3/portada"));
const Mensaje = lazy(() => import("./components/modelo 3/mensaje"));
const Invitacion = lazy(() => import("./components/modelo 3/invitacion"));
const Pase = lazy(() => import("./components/modelo 3/pase"));
const Padres = lazy(() => import("./components/modelo 3/padres"));
const Padrinos = lazy(() => import("./components/modelo 3/padrinos"));
const MensajeDos = lazy(() => import("./components/modelo 3/mensaje2"));
const Galeria = lazy(() => import("./components/modelo 3/galeria"));
const Ubicacion = lazy(() => import("./components/modelo 3/ubicacion"));
const Itinerario = lazy(() => import("./components/modelo 3/itinerario"));
const Mesa = lazy(() => import("./components/modelo 3/mesa"));
const Vestimenta = lazy(() => import("./components/modelo 3/vestimenta"));
const Cancion = lazy(() => import('./components/modelo 2/cancion'));
const Confirmacion = lazy(() => import("./components/modelo 3/confirmacion"));
const Desplazar = lazy(() => import("../tools/desplazar"));
const Frases = lazy(() => import('./components/modelo 3/frase'));
const Collage = lazy(() => import("./components/modelo 3/collage"));
const Condiciones = lazy(() => import('./components/modelo 3/condiciones'));

function Invitaciones({ evento }) {
    useEffect(() => {
        if (evento.estilos) {
            const styles = evento.estilos;
            const styleSheet = document.createElement('style');
            styleSheet.type = 'text/css';
            styleSheet.innerText = `
                :root {
                    --portada-titulo: ${styles.tituloPortada || 'linear-gradient(to left, rgb(180, 159, 105), rgb(211, 178, 95), rgb(185, 155, 80), rgb(137, 103, 16), rgb(150, 127, 70), rgb(211, 178, 95), rgb(180, 159, 105));'};
                    --portada-contenido: ${styles.contenidoPortada || 'linear-gradient(to left, rgb(180, 159, 105), rgb(211, 178, 95), rgb(185, 155, 80), rgb(137, 103, 16), rgb(150, 127, 70), rgb(211, 178, 95), rgb(180, 159, 105));'};
                    --alineamiento-mensaje: ${styles.alineamientoMensaje || 'center'};
                    --letras-mensaje: ${styles.letraMensaje || 'black'};
                    --letras-pase: ${styles.letraPase || 'white'};
                    --letras-ubicacion: ${styles.letraUbicacion || 'rgb(201, 147, 9)'};
                    --color-padit: ${styles.colorPadit || 'rgb(201, 147, 9)'};
                    --color-padres: ${styles.colorPadres || 'linear-gradient(to left, rgb(180, 159, 105), rgb(211, 178, 95), rgb(185, 155, 80), rgb(137, 103, 16), rgb(150, 127, 70), rgb(211, 178, 95), rgb(180, 159, 105));'};
                    --color-confirmar: ${styles.colorConfirmacion || 'white'};
                    --color-galeria: ${styles.estilosGaleria.color || 'rgb(201, 147, 9)'};
                    --color-invitacion: ${styles.estilosInvitacion.color || 'white'};
                    --color-mesa: ${styles.colorMesa || 'white'};
                    --contenido-padres: ${styles.contenidoPadres || 'white'};
                    --letras-vestimenta: ${styles.letrasVestimenta || 'black'};
                    --font-main: ${styles.fontMain || "'Tangerine', cursive"};
                    --font-main-size: ${styles.fontMainSize || "55px"};
                    --font-second: ${styles.fontSecond || "'Abel', sans-serif"};
                    --font-second-size: ${styles.fontSecondSize || "25px"};
                    --font-message: ${styles.fontMessage || "'Tangerine', cursive"};
                    --font-message-size: ${styles.fontMessageSize || "37px"};
                }
            `;
            document.head.appendChild(styleSheet);

            return () => {
                document.head.removeChild(styleSheet);
            };
        }
    }, [evento.estilos]);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="modelo3">
                <Portada 
                    evento={evento.evento}
                    festejado={evento.datos.festejado}
                    foto={evento.multimedia.portada[0]}
                />
                <Cancion 
                    url={evento.multimedia.cancion.url}
                />
                {evento.datos.festejado === 'Consuelo & Andrés' && (
                    <Sobre />
                )}
                <Desplazar />
                <div className="caja">
                    <MensajeDos 
                        evento={evento.evento}
                        fondo={evento.multimedia.fondos.tercero}
                        festejado={evento.datos.festejado}
                        frases={evento.frases}
                    />
                    <Padres 
                        evento={evento.evento}
                        datos={evento.datos}
                        festejado={evento.datos.festejado}
                        fondo={evento.multimedia.fondos.segundo}
                    />
                    <Invitacion 
                        fondo={evento.estilos.estilosInvitacion.fondo}
                        dia={evento.datos.dia}
                        lugar={evento.datos.lugar}
                        fecha={evento.datos.fecha}
                        evento={evento.evento}
                        festejado={evento.datos.festejado}
                    />
                    {evento.confirmaciones.frases === true && (
                        <Frases
                            evento={evento.evento}
                            fondo={evento.multimedia.fondos.primero}
                        />
                    )}
                    {evento.padrinos.length > 0 && (
                        <Padrinos 
                            padrinos={evento.padrinos}
                            fondo={evento.multimedia.fondos.segundo}
                            festejado={evento.datos.festejado}
                        />
                    )}

                    <Pase 
                        evento={evento.evento}
                        invitado={evento.invitados}
                        fondo={evento.multimedia.fondos.tercero}
                        festejado={evento.datos.festejado}
                    />
                    
                    {evento?.multimedia?.carousel && evento.multimedia.carousel.length > 1 && (
                        <Galeria 
                            carousel={evento.multimedia.carousel}
                            fondo={evento.estilos.estilosGaleria.fondo}
                            festejado={evento.datos.festejado}
                        />
                    )}
                    
                    <Vestimenta 
                        fondo={evento.multimedia.fondos.primero}
                        datos={evento.vestimenta}
                        modo={evento.estilos.estilosVestimenta.modo}
                        festejado={evento.datos.festejado}
                    />

                    <Itinerario 
                        protocolo={evento.itinerario}
                        fondo={evento.multimedia.fondos.segundo}
                        festejado={evento.datos.festejado}
                    />
                    {evento.confirmaciones.mensajeUno === true && (
                        <Mensaje 
                            evento={evento.evento}
                            fondo={evento.multimedia.fondos.tercero}
                            festejado={evento.datos.festejado}
                        />
                    )}
                    {evento.confirmaciones.condiciones === true && (
                        <Condiciones 
                            fondo={evento.multimedia.fondos.primero}
                        />
                    )}
                    <Ubicacion 
                        evento={evento.evento}
                        fondo={evento.multimedia.fondos.primero}
                        ubicacion={evento.ubicacion}
                    />

                    {evento?.frase3 && (
                        <Mensaje3
                            img={evento.frase3.img}
                            frase={evento.frase3.frase}
                        />
                    )}

                    {evento?.multimedia?.galeria && evento?.multimedia?.galeria.length > 1 && (
                        <Collage 
                            fondo={evento.multimedia.fondos.segundo}
                            galeria={evento.multimedia.galeria}
                        />
                    )}
                    
                    {evento?.mesaDeRegalos && evento.mesaDeRegalos.length > 0 && (
                        <Mesa 
                            fondo={evento.multimedia.fondos.primero} 
                            //regresar a segundo
                            mesa={evento.mesaDeRegalos[0]}
                            confirmacion={evento.confirmaciones}
                            festejado={evento.datos.festejado}
                        />   
                    )}
                    <Confirmacion 
                        invitadoId={evento.invitados._id}
                        eventoId={evento._id}
                        fondo={evento.multimedia.fondos.tercero}
                        contacto={evento.datos.contacto}
                    />
                </div>
            </div>
        </Suspense>
    );
}

export default Invitaciones;
