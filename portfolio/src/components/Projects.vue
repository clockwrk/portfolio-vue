<template>
    <section id="Projects">Projects!!
<div class='carousel carousel-animated carousel-animate-slide' data-autoplay="true">
  <div class='carousel-container'>
    <div v-for="(project,index) in projects" :key="index"
      :class="{'is-active' : index === 0 }"
      class='carousel-item has-background'>
      <img class="is-background" :src="project.imageURL" alt="" width="640" height="310"/>
      <div class="title">{{project.title}}</div>
      
    </div>

  </div>
  <div class="carousel-navigation is-overlay">
    <div class="carousel-nav-left">
      <i class="fa fa-chevron-left" aria-hidden="true"></i>
    </div>
    <div class="carousel-nav-right">
      <i class="fa fa-chevron-right" aria-hidden="true"></i>
    </div>
  </div>
</div>
    </section>
</template>

 <script>
// import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min.js'

// (function(){
//     var carousels = bulmaCarousel.attach();
//     // eslint-disable-next-line
//     console.log(carousels);
//  }()); 
 
export default {
    name: "Projects",
    data () {
      return {
        projects: [
          {
            title: 'Original Gift: Offer a song with',
            imageURL: 'https://wikiki.github.io/images/singer.jpg',
            isActive: true
          },{
            title: 'Sushi Time',
            imageURL: 'https://wikiki.github.io/images/sushi.jpg',
            isActive: false
          },{
            title: 'Life',
            imageURL: 'https://wikiki.github.io/images/life.jpg',
            isActive: false
          }
        ]
      }
    }
    
}
</script>

<style scoped>


</style>

