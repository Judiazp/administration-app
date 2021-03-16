import './Form.css';

const Card = () => {
    return (
        <div className="operation">
            <div className="balance">
                <h2>Balance</h2>
                <h3>0.00 $</h3>
            </div>
            <form className="form">
                <h3 style={{ color: '#fff' }}>Nueva Operacion</h3>
                <select  name="Operacion" className="input" >
                    <option selected disabled>Operacion</option>
                    <option value="1">Ingreso</option>
                    <option value="2">Egreso</option>
                </select>
                <input type="text" name="Monto" placeholder="Ingrese Monto" className="input"/>
                <input type="text" name="Descripcion" placeholder="Descripcion" className="description"/>
                <button className="button" type="submit">Agregar</button>
            </form>
        </div>
    )
}

export default Card;