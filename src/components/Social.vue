<template>
    <section id="Social"> SOCIAL
    <!-- <ul class="list-inline">
                        <li>
                            <a href="https://github.com/clockwrk/" class="btn-social btn-outline" target="”_blank”"><span class="sr-only">GitHub</span><i class="fa fa-fw fa-github"></i></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/JoseRenteriaSF/" class="btn-social btn-outline" target="”_blank”"><span class="sr-only">LinkedIn</span><i class="fa fa-fw fa-linkedin-square "></i></a>
                        </li>
                        <li>
                            <a href="https://www.codewars.com/users/clockwrk/" class="btn-social btn-outline" target="”_blank”"><span class="sr-only">Code Wars</span><i class="fa fa-fw fa-code"></i></a>
                        </li>
                        <li>
                            <a href="mailto:JoseRenteria.SF@outlook.com" class="btn-social btn-outline" target="”_blank”"><span class="sr-only">Mail</span><i class="fa fa-fw fa-envelope"></i></a>
                        </li>
                        <li>
                            <a href="tel:+15104998014" class="btn-social btn-outline" target="”_blank”"><span class="sr-only">Telephone</span><i class="fa fa-fw fa-phone"></i></a>
                        </li>
                    </ul> -->
<a href="https://github.com/clockwrk/" class="icon-button twitter"><i class="icon-twitter"></i><span></span></a>
<a href="https://facebook.com" class="icon-button facebook"><i class="icon-facebook"></i><span></span></a>
<a href="https://plus.google.com" class="icon-button google-plus"><i class="icon-google-plus"></i><span></span></a>

            </section>
</template>
<script>
export default {
    
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
.twitter span {
	background-color: #4099ff;
}
.facebook span {
	background-color: #3B5998;
}
.google-plus span {
	background-color: #db5a3c;
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
.icon-button .icon-twitter {
	color: #4099ff;
}
.icon-button .icon-facebook {
	color: #3B5998;
}
.icon-button .icon-google-plus {
	color: #db5a3c;
}
.icon-button:hover .icon-twitter,
.icon-button:hover .icon-facebook,
.icon-button:hover .icon-google-plus {
	color: white;
}

</style>
