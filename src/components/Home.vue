<template>
    <section id="Home" class="hero is-white is-fullheight">
        <div class="hero-body">
            <div class="container  has-text-centered">
                <h1 class="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Front-end Developer and QA Analyst</h1>
                <h2 class="subtitle is-size-4-desktop is-size-5-tablet is-size-6-mobile"> Enthusiastic learner with an eye for quality solutions</h2> 
                <img src="@/assets/profile.jpg">
                <a href="/resume" class="button is-outlined is-rounded" @click="dowloadResume()">
                    <i class="fa fa-download"></i>Resume
                </a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style scoped>

img {
    margin: 2rem 0;
    width: 250px;
    border-radius: 40%;
}



</style>
