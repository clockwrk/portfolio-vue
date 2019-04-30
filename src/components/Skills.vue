<template>
    <section id="Skills">

        <div class="container is-narrow">
        <div class="box">
          <div class="content" >
        <h2 class="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile" id="Skills">Tech Skills</h2>

            <div class="columns is-centered">
              <div class="column">
                <!-- <figure class="image"><img class="is-skill-icon" src="img/icon-designer.svg"></figure> -->
                <font-awesome-icon icon="clipboard-list" size="4x" />
                <h1 class="title is-size-4 is-spaced">QA Testing </h1>
                <!-- <p>I'm curious how things work.</p> -->
                <p class="list-title has-text-primary has-text-weight-normal">Main tools</p>
                <!-- <p class="list-title has-text-primary has-text-weight-normal is-centered">QA Tools</p> -->
                <ul>
                  <li><a target="_blank" rel="noopener noreferrer" href="https://charlesproxy.com">Charles Proxy</a></li>
                  <li><a target="_blank" rel="noopener noreferrer" href="https://newrelic.com">New Relic</a></li>
                  <li><a target="_blank" rel="noopener noreferrer" href="https://testlio.com">Testlio</a></li>
                  <li><a target="_blank" rel="noopener noreferrer" href="https://www.gurock.com/testrail">TestRail</a></li>
                  <li><a target="_blank" rel="noopener noreferrer" href="https://searchmobilecomputing.techtarget.com/definition/Apple-Configurator">Apple Configurator</a></li>
                </ul>
                <p class="list-title has-text-primary has-text-weight-normal">Platforms I've tested on</p>
                <p>AppleTV, Android, iOS, Web</p>

              </div>
              <div class="column">
                <font-awesome-icon icon="code" size="4x" />
                <h1 class="title is-size-4 is-spaced">Developer Toolbox</h1>
                <!-- <p>I tend to code things from scratch, and enjoy bringing ideas to life in the browser.</p> -->
                <p class="list-title has-text-primary has-text-weight-normal">Front-end frameworks</p>

                <ul>
                  <li>Vue 2.0</li>
                  <li>React</li>
                  <li>AngularJS</li>
                </ul>
                <p class="list-title has-text-primary has-text-weight-normal">Familiar with</p>

                <p>JavaScript, C++, Java, CSS, HTML</p>

              </div>
              <div class="column">
                <font-awesome-icon icon="server" size="4x" />
                <h1 class="title is-size-4 is-spaced">Backend, Automated Testing & Depolyment </h1>
                                <p class="list-title has-text-primary has-text-weight-normal">Main Backend Stack</p>
                <!-- <p>I tend to code things from scratch, and enjoy bringing ideas to life in the browser.</p> -->
                <ul>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>PostgreSQL</li>
                </ul>
                <p class="list-title has-text-primary has-text-weight-normal">Testing & Deployment</p>
                <ul>
                  <li>Mocha, Chai, Gulp</li>
                  <li>Jenkins</li>
                  <li>Heroku</li>
                </ul>

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
    name: "Skills"
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
