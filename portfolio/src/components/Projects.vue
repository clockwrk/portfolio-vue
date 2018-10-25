<template>
  <section id="Projects">Projects!!
    <div class='carousel carousel-animated carousel-animate-slide' data-autoplay="true">
      <div class='carousel-container'>
        <div v-for="(project,index) in projects" :key="index"
          :class="{'is-active' : index === 0 }"
          class='carousel-item has-background'>
          <img @click="projectModalActive(index)" class="is-background" :src="project.imageURL" alt="" width="640" height="310"/>
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
        <b-modal :active.sync="isProjectModalActive" :width="640" scroll="keep">
          <div class="card">
              <div class="card-image">
                  <figure class="image is-4by3">
                      <img :src="currentProject.imageURL" alt="Image">
                  </figure>
              </div>
              <div class="card-content">
                  <div class="media">
                      <!-- <div class="media-left">
                          <figure class="image is-48x48">
                              <img src="/static/img/placeholder-1280x960.png" alt="Image">
                          </figure>
                      </div> -->
                      <div class="media-content">
                          <p class="title is-4">{{currentProject.title}}</p>
                      </div>
                  </div>

                  <div class="content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                      <a>#css</a> <a>#responsive</a>
                      <br>
                      <small>11:09 PM - 1 Jan 2016</small>
                  </div>
              </div>
          </div>
      </b-modal>
  </section>
</template>

 <script>
 
export default {
    name: "Projects",
    data () {
      let projects =  [
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

      return {
        projects: projects,
        currentProject: {
            title: 'Original Gift: Offer a song with',
            imageURL: 'https://wikiki.github.io/images/singer.jpg',
            isActive: true
          },
        isProjectModalActive: false
      }
    },
    methods: {
      projectModalActive(index){
        this.currentProject = this.projects[index];
        this.isProjectModalActive = true;
      }
    }
}
</script>

<style scoped>


</style>

