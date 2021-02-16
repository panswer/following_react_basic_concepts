import React from "react";

function SearchBar(props) {

    return (
        <form>
            <label>
                <input 
                    type="text" 
                    placeholder='Search'
                    value={props.search}
                    onChange={props.onHandleChangeSearch}
                />
            </label>
            <label>
                <input 
                    type="checkbox"
                    className='m-l-0'
                    checked={props.onlyStock}
                    onChange={props.onHandleChangeSearch}
                />
                Only show product in stock
            </label>
        </form>
    );
    
}

export default SearchBar;