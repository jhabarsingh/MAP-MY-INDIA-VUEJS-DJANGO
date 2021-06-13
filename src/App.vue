<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',

  data: () => ({
    ID: "33OkryzDZsIMAHdl4_Wg1WBJJpoAhBf7IyF93jPqLN3Z5i0J7d2uHa53hYJiPTVXaIzLY80QSJZ05UKSRTZGCjDa1SN1aie80Ku7khSNIWMnb95tkkkjAA==",
    SECRET: "lrFxI-iSEg_m_e1-KR0zgKXnnWMOP7Y8VOk5TqWbqQNjOAp1IPiNbG21EMMUy69l-tOfEYIERJ5LCfKxD9siE6wkf0MhZwjmcHLNH-PH2huMf9Vj7kbeCWYjt-1SwqIa"
  }),
  methods: {
  
  },
  async created() {
    let access = localStorage.getItem("access");

    if(access) {
      //
    }
    else {
      let PROXY = "http://localhost:8080/";
      let URL = PROXY + "api/security/oauth/token?grant_type=client_credentials"

      URL += `&client_id=${this.ID}`;
      URL += `&client_secret=${this.SECRET}`;

      try {
        let res = await axios.post(URL, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
        }); 

        console.log(res);
      }

      catch(err) {
        console.log(err);
      }

    }
  }
};
</script>
