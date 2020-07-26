$(document).ready(function () {
const  token = localStorage.getItem("tpAuth");
// decoding JWT
        const payload = decode(token)
            function decode (token){
                try {
                return JSON.parse(atob(token.split('.')[1]));
                } catch (e) {
                return null;
                }
            };
            console.log(payload.userRole)
// end decoding

// Api call  ** Get all Admins
 async function getAlladmins() {
    try {
      const response = await axios.get('https://api.lancers.app/v1/super-admin');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

// End Get all admins
})