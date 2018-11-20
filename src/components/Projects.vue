<template>
  <section id="Projects" class="hero is-info is-fullheight">
    <!-- <div class="hero is-info"> -->

    <div class="hero-body container">
      <div class="container has-text-centered">
        <h2 class="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Projects</h2>

      <p data-v-6cb1b4f6="" class="content">Lorem ipsum dolor amet affogato taiyaki skateboard lomo schlitz four loko street art cornhole vaporware activated charcoal kinfolk post-ironic yuccie. Hoodie put a bird on it aesthetic live-edge subway tile celiac health goth food truck. Hot chicken health goth biodiesel art party authentic, palo santo activated charcoal jianbing sriracha. Cold-pressed mustache asymmetrical health goth. Scenester hexagon tofu try-hard activated charcoal 3 wolf moon church-key trust fund gochujang pok pok selvage chicharrones marfa 8-bit vinyl.

Deep v leggings truffaut vape cold-pressed schlitz normcore craft beer pok pok readymade. Vaporware retro green juice echo park, hella chia everyday carry health goth 8-bit migas occupy woke salvia mumblecore. Biodiesel VHS listicle messenger bag, heirloom coloring book polaroid hexagon green juice meditation. Sriracha put a bird on it thundercats lyft iceland kombucha. +1 authentic unicorn small batch flexitarian. Roof party adaptogen selfies bitters brunch listicle chicharrones jean shorts taiyaki food truck hashtag aesthetic heirloom actually cardigan.

Readymade messenger bag photo booth plaid cred flannel. Taxidermy hoodie authentic iPhone microdosing glossier cred yr palo santo austin meditation. Pug jianbing raw denim letterpress selvage. Af brooklyn yuccie small batch narwhal 90's. Kombucha sustainable 8-bit, yuccie before they sold out readymade iceland brooklyn lomo pabst scenester. Messenger bag VHS aesthetic master cleanse pok pok sriracha occupy, ethical bushwick chartreuse banjo waistcoat live-edge everyday carry tote bag. Beard flannel subway tile, fixie live-edge keytar helvetica sustainable pok pok waistcoat normcore stumptown put a bird on it 90's.</p>
</div>
</div>
  <div class="container is-narrow">
        <div class="box">
        <div class="content">
          <div class="columns is-centered">
            <div class="column">
              <!-- <div class="container is-narrow"> -->
                <!-- <h2 class="title is-spaced is-size-3-desktop is-size-4-mobile">Projects</h2> -->
                <!-- <h2 class="subtitle is-size-5-desktop text-is-black">Some examples of what I can do</h2> -->
                  <div class='carousel carousel-animated carousel-animate-slide ' data-autoplay="true">
                    <div  class='carousel-container'>
                      <div v-for="(project,index) in projects" :key="index"
                        :class="{'is-active' : index === 0 }"
                        class='carousel-item has-background'>
                        <div class="content-overlay has-text-centered">{{project.title}}</div>
                        <img @click="projectModalActive(index)" class="carousel-img is-background" :src="project.imageURL" alt="" width="640" height="310"/>
                      </div>
                    </div>
                    <div v-show="!isProjectModalActive" class="carousel-navigation is-overlay">
                      <div class="carousel-nav-left">
                        <i class="fa fa-chevron-left" aria-hidden="true"></i>
                      </div>
                      <div class="carousel-nav-right">
                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                      </div>
                    </div>
                </div>
              </div>
              <b-modal :active.sync="isProjectModalActive" :width="640" scroll="keep"  >
                <div class="card">
                  <div class="hero is-medium card-image">
                    <img :src="currentProject.imageURL" alt="Image">
                  </div>
                  <div class="card-content">
                    <div class="media">
                      <div class="media-content">
                      <p class="title is-4 has-text-centered">{{currentProject.title}}</p>
                      </div>
                    </div>
                    <div class="content">{{currentProject.description}}</div>
                    <strong class="has-text-centered"><a :href="currentProject.liveSite"  target="_blank">Live Site</a></strong>
                  </div>
                </div>
              </b-modal>
            </div>
          </div>
        </div>
        </div>
      <!-- </div> -->
    <!-- </div> -->
    <!-- </div> -->
  </section>
</template>

 <script>
 
export default {
    name: "Projects",
    data () {
      let projects =  [
          {
            title: 'Bumble and Bumble Meme generator',
            imageURL: require('@/assets/meme-generator-hero-image.jpg'),
            isActive: false,
            client: 'Bumble and Bumble an Estee Lauder Company',
            description: 'A meme generator application that can combine user uploaded images with brand approved text. The user created content can then be download, emailed or shared through social media platforms such as Facebook, Pinterest, and Twitter.',
            liveSite: 'https://www.bumbleandbumble.com/_efb/meme/'
          },{
            title: 'William Sonoma Products Page example',
            imageURL: require('@/assets/willsono.png'),
            isActive: false,
            client: 'William Sonoma',
            description: 'Created as a coding challenge. Consumed a json object provided by william sonoma and created a responsively designed product page.',
            liveSite: 'https://agile-river-35869.herokuapp.com/'
          },{
            title: 'Color-Shapes-Canvas',
            imageURL: require('@/assets/colors-shapes.jpeg'),
            client: 'Personal Project',
            description: 'Wanted to create something interactive and fun. Using react and canvas I created an animation loop that creates different floating shapes ontouch.',
            liveSite: 'https://damp-reef-32568.herokuapp.com/'
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
section {
  height: 100vh;

}

.carousel-img {
  max-width: 80vw;
  max-height: 50vh;

}
.carousel-img:hover {
  opacity: .5;
}

.carousel-img .is-background {
  height: 50vh;
}

.card-image {
  margin: 0 auto;
  width:  70%; /*or 70%, or what you want*/
  max-height: 20%; /*or 70%, or what you want*/
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.modal {
  z-index: 10;
}

.hero.is-info .title{
  color:blue;
}

.container {
    margin-top: -14rem;
    padding-bottom: 1rem;
}

.hero-body.container {
  margin-top: 13em;
  padding-bottom: 2em;

}

</style>

