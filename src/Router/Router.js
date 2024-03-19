import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import NavBar from '../components/tools/navbar';

import Main from '../components/main';
import Invitaciones from '../components/Invitacion/invitaciones';
import MiEvento from '../components/Administrar/miEvento';
import Invitados from '../components/Administrar/components/invitados/invitados';


const Router = () => {

    return(
        <BrowserRouter>
        
            <NavBar />
            
            <Routes>                
                <Route exact path='/' element={<Main />} />
                <Route exact path='/evento/:eventoId/invitado/:invitadoId' element={<Invitaciones />} />
                <Route exact path='/mi-evento' element={<MiEvento />} />
                <Route exact path='/invitados/:eventoId' element={<Invitados />} />
            </Routes>

        </BrowserRouter>
    );
};

export default Router;