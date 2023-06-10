

const LowStockWarn = ({ stock }) => {
    return (
        <p><strong>
            {
                stock === 1
                    ? `Queda solo 1 unidad!`
                    : `Quedan solo ${stock} unidades!`
            }
        </strong></p>
    )
}

export default LowStockWarn