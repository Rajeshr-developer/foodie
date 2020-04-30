//
// API from https://www.thecocktaildb.com/api.php 
//

import axios from 'axios';

const init = () => {
    axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
        .then((jsonObj) => {
            console.log('jsonObj = ', jsonObj);
        })
        .catch((err) => {
            console.error(err);
        })
}

export default init