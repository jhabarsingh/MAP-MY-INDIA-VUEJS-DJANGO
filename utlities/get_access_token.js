let ID = "33OkryzDZsIMAHdl4_Wg1WBJJpoAhBf7IyF93jPqLN3Z5i0J7d2uHa53hYJiPTVXaIzLY80QSJZ05UKSRTZGCjDa1SN1aie80Ku7khSNIWMnb95tkkkjAA=="
let SECRET = "lrFxI-iSEg_m_e1-KR0zgKXnnWMOP7Y8VOk5TqWbqQNjOAp1IPiNbG21EMMUy69l-tOfEYIERJ5LCfKxD9siE6wkf0MhZwjmcHLNH-PH2huMf9Vj7kbeCWYjt-1SwqIa"

let URL = `https://outpost.mapmyindia.com/api/security/oauth/token?grant_type=client_credentials&client_id=${ID}&client_secret=${SECRET}`

let options = {
        method: 'POST',
	headers: {
    		'Content-Type': 'application/json',
  	},
	mode: 'no-cors',
	credentials: 'same-origin'

}


fetch(URL, options).then(res => res.json())

.then(res => {
        console.log(res);
});
