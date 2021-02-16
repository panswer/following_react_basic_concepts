import { Component } from "react";

import './styles/FilterTableProductTable.css';

import SearchBar from "./FilterTableProductTable/SearchBar";
import ProductTable from "./FilterTableProductTable/ProductTable";

import storage from "../../data/shoping/list.json";

class FilterTablePruductTable extends Component{
    constructor(props){
        super(props);

        this.state={
            search:'',
            onlyStock:false
        };

        this.handleChangeSearch=this.handleChangeSearch.bind(this);
    }
    handleChangeSearch(e){
        if(e.target.type==='checkbox'){
            this.setState(state=>{
                state.onlyStock=!state.onlyStock;
                return state;
            });
        }else if(e.target.type==='text'){
            this.setState({
                search:e.target.value
            });
        }
    }

    render (){
        const newList=storage
                        .filter(item=>{
                            if(this.state.onlyStock){
                                return item.stocked;
                            }else{
                                return true;
                            }
                        })
                        .filter(item=>new RegExp(this.state.search,'i').test(item.name));
        return(
            <div className="FilterTableProductTable">
                <SearchBar 
                    onHandleChangeSearch={this.handleChangeSearch} 
                    search={this.state.search}
                    onlyStock={this.state.onlyStock}
                />
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ProductTable list={newList} />
                    </tbody>
                </table>
            </div>
        );
    }
}

export default FilterTablePruductTable;