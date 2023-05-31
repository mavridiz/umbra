import Layout from "../Layout";
import { Comparativa } from "../components/Comparativa";
import { Planes } from "../components/Planes";

import "bootswatch/dist/lux/bootstrap.min.css";

export function Licencias() {
    return (
        <Layout>
            <div className="p-5 h-full">
                <h1>Licencias</h1>
                <p class="text-primary">Adquiere una de los planes que ofrecemos para y comienza a disfrutar de ventajas únicas. <br />
                    Cada suscripción ofrece ventajas únicas que están pensadas para diferentes propósitos, conozca las ventajas que ofrecemos y elija la que más se ajuste a sus necesidades. <br />
                    Recuerde que al comprar una suscripción usted está contribuyendo al desarrollo de <i><b>Umbra</b></i> y al crecimiento de <i><b>Aurum</b></i>.</p>
                <br />
                <Planes />
                <br />
                <h3>Comparativa</h3>
                <Comparativa />
            </div>
        </Layout>
    );
}