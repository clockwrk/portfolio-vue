<template>
    <section id="Social">
		<div class="hero-body container">
			<div class="container has-text-centered">
				<h2 class="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Connect with me</h2>

			<a href="https://www.codewars.com/users/clockwrk/" target="_blank" class="icon-button code-wars"><i class="icon-code-wars fa fa-fw fa-code fa-lg"></i><span></span></a>
			<a href="mailto:JoseRenteria.SF@outlook.com"  class="icon-button mail"><i class="icon-mail fa fa-fw fa-envelope fa-lg"></i><span></span></a>
			<a href="tel:+15104998014" class="icon-button phone"><i class="icon-phone fa fa-fw fa-phone fa-lg"></i><span></span></a>
			<a href="/resume" download="Jose-Renteria-Resume.pdf" class="icon-button resume" ><i class="icon-resume fa fa-fw fa-file fa-lg"></i><span></span></a>
			<a href="https://www.linkedin.com/in/JoseRenteriaSF/" target="_blank" class="icon-button linkedin"><i class="icon-linkedin fa fa-fw fa-linkedin-square fa-lg"></i><span></span></a>
			<a href="https://github.com/clockwrk/" target="_blank" class="icon-button github"><i class="icon-github fa fa-fw fa-github fa-lg"></i><span></span></a>


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
	border-radius: 4.6rem;
	cursor: pointer;
	display: inline-block;
	font-size: 2.0rem;
	height: 4.6rem;
	line-height: 4.6rem;
	margin: 0 .6em;
	position: relative;
	text-align: center;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	width: 4.6rem;
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
	width: 4.6rem;
	height: 4.6rem;
	border-radius: 4.6rem;
	margin: -2.3rem;
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
	height: 4.6rem;
	left: 0;
	line-height: 4.6rem;
	position: absolute;
	top: 0;
	-webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
	-o-transition: all 0.3s;
	transition: all 0.3s;
	width: 4.6rem;
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
	/* margin-top: 10em; */
}

@media only screen and (max-width: 600px) {
  .icon-button {
      margin: 1em auto;
      display: block;
      /* min-height: 12vh */
    }
}

</style>
