import React from 'react'
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

class ProductTable extends React.Component {


    render() {
        var rows = [<ProductCategoryRow/>,<ProductRow/>];
        return (<table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>)
    }
}

export default ProductTable;
