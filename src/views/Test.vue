<template>
    <Test
        :markers=markers
    />
</template>

<script>
  import Test from '../components/Test'

  export default {
    name: 'Home',
    data() {
      return { 
        markers:  [{
            position: [18.5314, 73.845],
            draggable: true,
            title: "Marker title",
            onClick: () => {
                console.log("clicked ");
            },
            onDragend: () => {
                console.log("dragged");
            }
        }]
      }
    },
    components: {
      Test,
    },
  }
</script>
