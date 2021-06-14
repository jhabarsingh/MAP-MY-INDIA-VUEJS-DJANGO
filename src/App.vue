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
    ID: null,
    SECRET: null,
  }),
  methods: {
  
  },
  async created() {
    let access = localStorage.getItem("mapmyindia_acces_token");

    if(access) {
      //
      console.log("Token Present");
    }
    else {
      let URL = "http://localhost:8000/apis/get-token/"

      try {
        let res = await axios.get(URL); 

        let data = res.data

        localStorage.setItem("mapmyindia_acces_token", data.access_token);

      }

      catch(err) {
        console.log(err);
      }

    }
  }
};
</script>
