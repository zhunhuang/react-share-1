import React from 'react'

class ProductCategoryRow extends React.Component {


    render(){
        var category = '';
        return(<div>
            <tr><th colSpan="2">{category}</th></tr>
        </div>)
    }
}

export default ProductCategoryRow;
