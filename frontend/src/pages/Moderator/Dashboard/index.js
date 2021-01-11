import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import api from '../../../services/api';

export default function ModDashboard() {

    return (
        <>
           <div className="container">
                <div className="row d-flex justify-content-between">
                    <div className="col-md-2 mb-2">
                        <Link to="/moderator/videos">Vídeos</Link>
                    </div>
                    <div className="col-md-2 mb-2">
                        <Link to="/moderator/users">Usuários</Link>
                    </div>
                </div>
           </div>
        </>
    );


}