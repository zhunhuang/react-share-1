import React from 'react'

class ProductRow extends React.Component {


    render(){
        var name= '';
        var price= '';
        return(<tr>
            <td>{name}</td>
            <td>{price}</td>
        </tr>)
    }
}

export default ProductRow;
