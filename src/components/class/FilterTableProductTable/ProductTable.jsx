import React from "react";

function ProductRow(props={
    products:[{
        name:'',
        price:'',
        stocked:true
    }]
}) {
    return (
        props.products.map((product,index)=>(
            <tr className={product.stocked?'stocked-true':'stocked-false'} key={index}>
                <td>
                    {product.name}
                </td>
                <td>
                    {product.price}
                </td>
            </tr>
        ))
    );
}

function ProductCategoryRow(props={
    category:''
}) {
    return (
        <tr key={props.category}>
            <th colSpan='2'>
                {props.category}
            </th>
        </tr>
    );
}

function ProductCategory(props={
    category:'',
    products:[]
}) {
    return (
        <>
            <ProductCategoryRow category={props.category} />
            <ProductRow products={props.products} />
        </>
    );
}

function ProductTable(props={
    list:[{
        category:'',
        price:'',
        name:'',
        stocked:true
    }]
}) {
    let list = {};

    props.list.forEach(products=>{
        if(list[products.category] instanceof Array){
            list[products.category].push({
                name:products.name,
                price:products.price,
                stocked:products.stocked
            });
        }else{
            list[products.category]=[{
                name:products.name,
                price:products.price,
                stocked:products.stocked
            }];
        }
    });
    
    let send=[];
    for(let category in list){
        send.push(<ProductCategory category={category} products={list[category]} key={category} />);
    }

    return send.map(item=>item);
}

export default ProductTable;