<template>
    <section id="Social"> SOCIAL
		<div class="hero-body container">
			<div class="container has-text-centered">
				<h2 class="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Projects</h2>
			<a href="https://www.codewars.com/users/clockwrk/" target="_blank" class="icon-button code-wars"><i class="icon-code-wars fa fa-fw fa-code"></i><span></span></a>
			<a href="mailto:JoseRenteria.SF@outlook.com"  class="icon-button mail"><i class="icon-mail fa fa-fw fa-envelope"></i><span></span></a>
			<a href="tel:+15104998014" class="icon-button phone"><i class="icon-phone fa fa-fw fa-phone"></i><span></span></a>
			<a href="/resume" class="icon-button resume" v-on:click.prevent><i class="icon-resume fa fa-fw fa-file"></i><span></span></a>
			<a href="https://www.linkedin.com/in/JoseRenteriaSF/" target="_blank" class="icon-button linkedin"><i class="icon-linkedin fa fa-fw fa-linkedin-square "></i><span></span></a>
			<a href="https://github.com/clockwrk/" target="_blank" class="icon-button github"><i class="icon-github fa fa-fw fa-github"></i><span></span></a>

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


ul li {
    float: right;
}
html {
	font-size: 20px;
}
body {
	background-color: #ccc;
	padding: 50px;
	text-align: center;
}

/* Wrapper */
.icon-button {
	background-color: white;
	border-radius: 3.6rem;
	cursor: pointer;
	display: inline-block;
	font-size: 2.0rem;
	height: 3.6rem;
	line-height: 3.6rem;
	margin: 0 5px;
	position: relative;
	text-align: center;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	width: 3.6rem;
}

/* Circle */
.icon-button span {
	border-radius: 0;
	display: block;
	height: 0;
	left: 50%;
	margin: 0;
	position: absolute;
	top: 50%;
	-webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
	-o-transition: all 0.3s;
	transition: all 0.3s;
	width: 0;
}
.icon-button:hover span {
	width: 3.6rem;
	height: 3.6rem;
	border-radius: 3.6rem;
	margin: -1.8rem;
}

.github span {
	background-color: indigo;
}
.linkedin span {
	background-color: #3B5998;
}
.code-wars span {
	background-color: red;
}
.mail span {
	background-color: #db5a3c;
}
.phone span {
	background-color: yellow;
}
.resume span {
	background-color: green;
}


/* Icons */
.icon-button i {
	background: none;
	color: white;
	height: 3.6rem;
	left: 0;
	line-height: 3.6rem;
	position: absolute;
	top: 0;
	-webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
	-o-transition: all 0.3s;
	transition: all 0.3s;
	width: 3.6rem;
	z-index: 10;
}
.icon-button .icon-github {
	color: indigo;
}
.icon-button .icon-linkedin {
	color: #3B5998;
}
.icon-button .icon-code-wars {
	color: red;
}
.icon-button .icon-mail {
	color: #db5a3c;
}
.icon-button .icon-phone {
	color: yellow;
}
.icon-button .icon-resume {
	color: green;
}


.icon-button:hover .icon-github,
.icon-button:hover .icon-linkedin,
.icon-button:hover .icon-code-wars, 
.icon-button:hover .icon-mail,
.icon-button:hover .icon-resume, 
.icon-button:hover .icon-phone {
	color: white;
}
.hero-body {
	margin-top: 10em;
}

</style>
