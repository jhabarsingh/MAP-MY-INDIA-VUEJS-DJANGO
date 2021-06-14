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
    let access = localStorage.getItem("access");

    if(access) {
      //
    }
    else {
      let URL = "http://localhost:8000/apis/get-token/"

      try {
        let res = await axios.get(URL); 

        console.log(res);
      }

      catch(err) {
        console.log(err);
      }

    }
  }
};
</script>
