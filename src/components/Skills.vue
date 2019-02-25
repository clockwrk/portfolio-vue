<template>
    <section id="Skills">

        <div class="container is-narrow">
        <div class="box">
          <div class="content" >
        <h2 class="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile" id="Skills">Tech Skills</h2>

            <div class="columns is-centered">
              <div class="column">
                <!-- <figure class="image"><img class="is-skill-icon" src="img/icon-designer.svg"></figure> -->
                <font-awesome-icon icon="clipboard-list" size="5x" />
                <h1 class="title is-size-4 is-spaced">QA Tools</h1>
                <!-- <p>I'm curious how things work.</p> -->

                <!-- <p class="list-title has-text-primary has-text-weight-normal is-centered">QA Tools</p> -->
                <ul>
                  <li><a target="_blank" rel="noopener noreferrer" href="https://charlesproxy.com">Charles Proxy</a></li>
                  <li><a target="_blank" rel="noopener noreferrer" href="https://newrelic.com">New Relic</a></li>
                  <li><a target="_blank" rel="noopener noreferrer" href="https://testlio.com">Testlio</a></li>
                  <li><a target="_blank" rel="noopener noreferrer" href="https://www.gurock.com/testrail">TestRail</a></li>
                </ul>
              </div>
              <div class="column">
                <font-awesome-icon icon="code" size="5x" />
                <h1 class="title is-size-4 is-spaced">Developer toolbox</h1>
                <!-- <p>I tend to code things from scratch, and enjoy bringing ideas to life in the browser.</p> -->
                <p class="list-title has-text-primary has-text-weight-normal">Front-end frameworks I've used</p>
                <p>Vue, React, AngularJS</p>
                <p class="list-title has-text-primary has-text-weight-normal">Languages I speak:</p>
                <p>JavaScript, C++, Java</p>
                <!-- <p class="list-title has-text-primary has-text-weight-normal">Dev Tools:</p>
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
                </ul> -->
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
.section {
    padding-bottom: 13rem;
}

.content ul {
    margin-left: 0px;
}

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
    /* margin-top: -17rem; */
    padding-bottom: 1rem;
}

section {
    padding: 5rem 1.5rem;
}

</style>
>


