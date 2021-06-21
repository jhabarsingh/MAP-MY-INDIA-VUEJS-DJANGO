<template>
  <div>
        <div id="map"
            :width=width
            :height=height
        ></div>
  </div>
  
</template>

<script>
export default {
  props: {
      center: {
        type: Array,
        default: () => [18.5314, 73.8446]
      },
      zoomControl: {
          type: Boolean,
          default: true
      },
      location: {
          type: Boolean,
          default: true
      },
      height: {
          type: String,
          default: '500px'
      },
      width: {
          type: String,
          default: '100%'
      },
      zoom: {
          type: Number,
          default: 15
      },
      hybrid: {
          type: Boolean,
          default: true
      },
      search: {
          type: Boolean,
          default: true
      },
      onResize: {
          type: Function,
          default: ()=> {
              console.log("onResize")
          }
      },
      onZoom: {
          type: Function,
          default: ()=> {
              console.log("onZoom")
          }
      },
      onMove: {
          type: Function,
          default: ()=> {
              console.log("onMove")
          }
      },
      onClick: {
          type: Function,
          default: ()=> {
              console.log("onClick")
          }
      },
      onDblclick: {
          type: Function,
          default: ()=> {
              console.log("onDblclick")
          }
      },
      onMousedown: {
          type: Function,
          default: ()=> {
              console.log("onMousedown")
          }
      },
      onMouseup: {
          type: Function,
          default: ()=> {
              console.log("onMouseup")
          }
      },
      onMouseover: {
          type: Function,
          default: ()=> {
              console.log("onMouseover")
          }
      },
      onMouseout: {
          type: Function,
          default: ()=> {
              console.log("onMouseout")
          }
      },
      onKeypress: {
          type: Function,
          default: ()=> {
              console.log("onKeypress")
          }
      },
      onMapLoad: {
          type: Function,
          default: ()=> {
              console.log("onMapLoad")
          }
      },
      markers: {
          type: Array,
          default: () => []
      },    

  },
  data() {
      return {
          marker: [],
          map: [],
          mapNode: []
      }
  },
  mounted() { 
    let tried = 0;
    const timer = setInterval(() => {
        try {
             console.log(1);              
             if (MapmyIndia && MapmyIndia.Map) {
               clearInterval(timer);

                this.mapNode = document.querySelector("#map");
               this.map = new MapmyIndia.Map(this.mapNode, () => {
                    this.center,
                    this.zoomControl,
                    this.location,
                    this.zoom,
                    this.hybrid,
                    this.search
                });
                console.log(this.map)
                this.renderMarkers();


                // Events Are Attached
                this.onResize && this.map.addEventListener("resize", this.onResize);
                this.onZoom && this.map.addEventListener("zoom", this.onZoom);
                this.onClick && this.map.addEventListener("click", this.onClick);
                this.onDblclick && this.map.addEventListener("dblclick", this.onDblclick);
                this.onKeypress && this.map.addEventListener("keypress", this.onKeypress);
                this.onMousedown && this.map.addEventListener("mousedown", this.onMousedown);
                this.onMouseout && this.map.addEventListener("resize", this.onMouseout);
                this.onMouseover && this.map.addEventListener("mouseover", this.onMouseover);
                this.onMove && this.map.addEventListener("move", this.onMove);
                this.onMouseup && this.map.addEventListener("mouseup", this.onMouseup);
                this.onMapLoad && this.onMapLoad(this.map)
            }
            else {
                tried++;
                tried === 1500 && clearInterval(timer);
            }
        }
        catch (err) {
            console.log(1);
        }
        
    }, 100)    
  },

  methods: {
       removeMarkers () {
            this.marker.map(mk => this.map.removeLayer(mk));
            this.marker = [];
        },

        renderMarkers () {
            const marker = this.markers;
            if (!this.map) {
                return;
            }
            marker.map(m => {
                if (m.position && Array.isArray(m.position)) {
                    const { position, draggable, title, icon, onClick, onDragend } = m;
                    let mk = new L.Marker(position, { draggable, title });

                    title && mk.bindPopup(title);

                    onDragend && mk.on("dragend", onDragend);
                    onClick && mk.on("click", onClick);
                    this.map.addLayer(mk);

                    this.markers.push(mk);
                    this.map.setView(mk.getLatLng());
                }
            });
        }
  }
}
</script>


<style scoped>
  
</style>