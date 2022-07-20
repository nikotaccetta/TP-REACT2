import "./slider.css"

const Slider = () => {
    return (
            <section className="slider">
                <div className="slide">
                    <div className="content">
                        <h2>Recien Ingresados</h2>
                        <p className="text-center my-2">
                            Los ultimos productos ingresados directos de los proveedores oficiales
                        </p>
                    </div>
                </div>
                <div className="slide">
                    <div className="content">
                        <h2>Proximos Ingresos</h2>
                        <p className="text-center my-2">Ingresos de la proxima semana</p>
                    </div>
                </div>
                <div className="slide">
                    <div className="content">
                        <h2>Preventa</h2>
                        <p className="text-center my-2">Proximos productos a la venta en el exterior</p>
                    </div>
                </div>
            </section>
    )
}

export default Slider
