import { useNavigate } from "react-router-dom";

export function Planes(){

    const navigate = useNavigate();

    const handleClick  = (par) => {
        navigate(`/Comprar/${par}`);
    }

    return (
            <div className="grid grid-cols-3 gap-3">
                <div className="card bg-secondary mb-3" align="center">
                    <div className="card-header">Soft</div>
                    <div className="card-body">
                        <h4 className="card-title">$99.99<small class="text-muted">/mes</small></h4>
                        <p className="card-text">
                            Orientado para uso personal. <br/>
                            Coloque marcas de agua a las fotos que usted desee. <br/>
                            Soporte técnico.
                        </p>
                        <button type="button" class="btn btn-outline-primary" onClick={() => handleClick(1) }>Comience ahora</button>
                    </div>
                </div>
                <div className="card border-primary mb-3" align="center">
                    <div className="card-header">Empresarial</div>
                    <div className="card-body">
                        <h4 className="card-title"> $499.99<small class="text-muted">/mes</small> </h4>
                        <p className="card-text"> 
                            Orientado para empresas pequeñas. <br/>
                            Coloque marcas de agua a las fotos y documentos que usted desee. <br/>
                            Soporte técnico.
                        </p>
                        <button type="button" class="btn btn-outline-secondary" onClick={() => handleClick(2) }>Comience ahora</button>
                    </div>
                </div>
                <div className="card border-warning mb-3" align="center">
                    <div className="card-header">X</div>
                    <div className="card-body">
                        <h4 className="card-title">$999.99<small class="text-muted">/mes</small></h4>
                        <p className="card-text">
                            Orientado para grandes empresas. <br/>
                            Coloque marcas de agua a las fotos y documentos que usted desee. <br/>
                            Soporte técnico personalizado.
                        </p>
                        <button type="button" class="btn btn-outline-warning" onClick={() => handleClick(3) }>Comience ahora</button>
                    </div>
                </div>
            </div>
    );
}