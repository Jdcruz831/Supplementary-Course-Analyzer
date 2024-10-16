import React, { useState } from "react";

const SearchPage = () => {

    return (
        <div>
           Filter 
            <div>
                <label for="profSearch">Select Professor Name</label>
                <select>
                    <option></option>
                    <option>Professor 1</option>
                    <option>Professor 2</option>
                    <option>Professor 3</option>
                </select>
            </div>
            <div>
                <label>Select the time</label>
            <input type="date"/>
            </div>
            <div>
            </div>
        </div>
    );
}

export default SearchPage;