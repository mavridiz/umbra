
export function Comparativa(){
    return(
        <div align="center">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Feature</th>
                        <th scope="col"><b>Sin suscripción</b></th>
                        <th scope="col"><b>Soft</b></th>
                        <th scope="col"><b>Empresarial</b></th>
                        <th scope="col"><b>X</b></th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="table-light">
                        <th scope="row">Fotos</th>
                        <td>5 por mes</td>
                        <td>Ilimitadas</td>
                        <td>$100 por cada 200</td>
                        <td>$200 por cada 500</td>
                    </tr>
                    <tr>
                        <th scope="row">Documentos</th>
                        <td>1 de prueba</td>
                        <td>X</td>
                        <td>150 pesos por cada 100 páginas</td>
                        <td>50 pesos por cada 100 páginas</td>
                    </tr>
                    <tr class="table-light">
                        <th scope="row">Soporte técnico</th>
                        <td>Fila de espera</td>
                        <td>Sí</td>
                        <td>Sí</td>
                        <td>Personalizado</td>
                    </tr>
                    <tr>
                        <th scope="row">Indemnización en caso de daños</th>
                        <td>No</td>
                        <td>No</td>
                        <td>Sí</td>
                        <td>Sí</td>
                    </tr>
                    <tr class="table-light">
                        <th scope="row">Seguridad en el manejo de fotos y documentos delicados</th>
                        <td>No</td>
                        <td>Baja</td>
                        <td>Alta</td>
                        <td>Muy Alta</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}