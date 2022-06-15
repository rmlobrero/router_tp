import * as React from 'react';

import { useParams } from 'react-router-dom';
import { getBicicleta } from '../data';

export default function Bicicleta() {

    let params = useParams();
    let bicicleta = getBicicleta(parseInt(params.bicicletaId, 10));

    return (
        <main style={{ padding: '1rem' }}>
            <h1>
                {bicicleta.name}
            </h1>
            <h2>Total: {bicicleta.amount}</h2>
            <p>
                Codigo: {bicicleta.number}
            </p>
        </main>
    );
}
