<template>
    <section id="Skills">
        <div class="container is-narrow">
        <div class="box">
          <div class="content">
            <div class="columns is-centered">
              <div class="column">
                <!-- <figure class="image"><img class="is-skill-icon" src="img/icon-designer.svg"></figure> -->
                <font-awesome-icon icon="clipboard-list" size="5x" />
                <h1 class="title is-size-4 is-spaced">Designer</h1>
                <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                <p class="list-title has-text-primary has-text-weight-normal">Things I enjoy designing:</p>
                <p>UX, UI, Web, Mobile, Apps, Logos</p>
                <p class="list-title has-text-primary has-text-weight-normal">Design Tools:</p>
                <ul>
                  <li>Balsamiq Mockups</li>
                  <li>Figma</li>
                  <li>Invision</li>
                  <li>Marvel</li>
                  <li>Pen &amp; Paper</li>
                  <li>Sketch</li>
                  <li>Webflow</li>
                  <li>Zeplin</li>
                </ul>
              </div>
              <div class="column">
                <font-awesome-icon icon="code" size="5x" />
                <h1 class="title is-size-4 is-spaced">Front-end Developer</h1>
                <p>I tend to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                <p class="list-title has-text-primary has-text-weight-normal">Languages I speak:</p>
                <p>HTML, Pug, Slim, CSS, Sass, Less</p>
                <p class="list-title has-text-primary has-text-weight-normal">Dev Tools:</p>
                <ul>
                  <li>Atom</li>
                  <li>Bitbucket</li>
                  <li>Bootstrap</li>
                  <li>Bulma</li>
                  <li>Codekit</li>
                  <li>Codepen</li>
                  <li>Github</li>
                  <li>Gitlab</li>
                  <li>Terminal</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
    name: "SKills"
}
</script>

<style scoped>

    li {
        list-style-type: none;
    }

    #box {
        text-align: center;
    }

    .column {
    display: block;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
    padding: .75rem;
}
.container {
    margin-top: -14rem;
    padding-bottom: 1rem;
}

section {
    padding: 5rem 1.5rem;
}

</style>
>


