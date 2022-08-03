/** 
 * Call the Laravel API here
*/

// Imports the Cafap API URL from the config.
import { CAFAP_CONFIG } from '../config.js';

export default {
    // GET /api/v1/cafes
    getCafes: function(){
        return axios.get(CAFAP_CONFIG.API_URL + '/cafes' );
    },

    // GET /api/v1/cafes/{cafeID}
    getCafe: function( cafeID ){
        return axios.get(CAFAP_CONFIG.API_URL + '/cafes/' + cafeID );
    },

    // POST /api/v1/cafes
    postAddNewCafe: function(name, city, area, address, postal){
        return axios.post(CAFAP_CONFIG.API_URL + '/cafes', {
                name: name,
                city: city,
                area: area,
                address: address,
                postal: postal
            }
        );
    }
 }