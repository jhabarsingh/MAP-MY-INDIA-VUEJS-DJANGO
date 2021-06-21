<template>
    <Test
              :position=position
              :draggable=draggable
              :title=title
      />
</template>

<script>
  import Test from '../components/Test'

  export default {
    name: 'Home',
    data() {
      return { 
        position: [18.5314, 73.845],
        draggable: true,
        title: "Marker title"
      }
    },
    components: {
      Test,
    },
  }
</script>
