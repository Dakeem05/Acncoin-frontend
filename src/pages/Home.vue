<script setup>
import { ref, onMounted } from "vue";
import NavBar from '../components/common-components/NavBar.vue';
import About from "../components/home-components/About.vue";
import Hero from "../components/home-components/Hero.vue";
import Tokenomics from "../components/home-components/Tokenomics.vue";
import Roadmap from "../components/home-components/Roadmap.vue";
import Info from "../components/home-components/Info.vue";

const isContact = ref(false);
const about = ref(null);
const tokenomics = ref(null);
const roadmap = ref(null);
const info = ref(null);
const hero = ref(null);
const activeRoute = ref('hero');

const contactHandler = () => {
    isContact.value = !isContact.value;
}

const isopen = ref(false);
const isclose = ref(false);

const isNavBarOpen = (value) => {
    isopen.value = value;
    isclose.value = false;
}

const isNavBarClose = (value) => {
    isclose.value = value;
    isopen.value = false;
}
const routeHandler = (route) => {
    // alert(route)
    //   const section = route.value;
    activeRoute.value = route
  const section = document.getElementById(route);
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth'
    });
  }
}


onMounted(() => {
    const sections = [about.value, hero.value, tokenomics.value, roadmap.value, info.value];

    const options = {
        threshold: 0.5,
    };

    const callback = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                console.log(`Section ${sectionId} is in view.`);
                activeRoute.value = sectionId
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach((section) => {
        if (section) {
            observer.observe(section);
        }
    });
});

</script>

<template>
  <section>
    <header class="bg overflow-y-hidden"> 
<!-- <a href="#about">About</a> -->
    <div>
        <nav-bar @openBar="isNavBarOpen" :activeRoute='activeRoute' @route='routeHandler' @closeBar='isNavBarClose'/>
    </div>
       <section :class="[{'backdrop-filter backdrop-blur-[12.2px] lg:opacity-100' : isopen === true, 'opacity-100' : isclose === false }]">
            <div v-if="isopen === true" class="h-[100%] w-[100vw] lg:hidden fixed backdrop-filter backdrop-blur-[12.2px] z-[80]"></div>
            <div class="mt-[4rem]" id="hero" ref="hero">
                <hero/>
            </div>
         </section>
    </header>
    <div  id="about" ref="about" class="py-[3.5rem] relative gradient">
        <!-- <div class="stars"></div>
        <div class="twinkling"></div> -->
        <about class="z-[50] relative"/>
    </div>
    <div  id="tokenomics" ref="tokenomics" class="py-[3rem] relative ">
        <div class="stars"></div>
        <div class="twinkling"></div>
        <tokenomics class="z-[50] relative"/>
    </div>
    <div  id="roadmap" ref="roadmap" class="py-[3rem] relative ">
        <roadmap class="z-[50] relative"/>
    </div>
    <div  id="info" ref="info" class="py-[3rem] relative ">
        <info class="z-[50] relative"/>
    </div>
     <!-- <div class="fixed max-w-4xl  mx-auto flex flex-col  bottom-[1.5rem] gap-[1.5rem] z-[70] right-[1.5rem]">
        <div v-if="isContact" class="ml-[1rem] mt-[3rem] xs:w-[20rem] md:w-[25rem] rounded-lg shadow-lg  text-black">
            <div class="bg-[#075E54] text-white rounded-t-lg w-[full] py-[1rem] px-[2rem]">

                <h1 class="text-2xl font-semibold flex mx-auto gap-2">Reach us via <p class="pt-1"><Chat/></p></h1>
            </div> 
            <div class=" p-[2rem] bg-[#ece5dd] rounded-b-lg">
                <p class="text-sm text-gray-400 -mt-[1rem]">The team typically give you a reply in few seconds</p>
                <a href="https://wa.me/+2347042220527" target="_blank" class="mt-[0.5rem] xs:mt-[2rem] flex bg-[#075E54] text-white py-[0.5rem] place-content-center rounded-lg gap-2">Fabricspa <p class="pt-1"><Chat/></p></a>
                <p class="text-lg text-center my-[1rem]">Or mail</p>
                <a href="mailto:support@fabricspa.com.ng" class=" flex bg-[#41aef1] text-white py-[0.5rem] place-content-center rounded-lg gap-2">	support@fabricspa.com.ng</a>
            </div>
          
        </div>
        <button @click="contactHandler" v-if="!isContact" class="text-[white]  place-self-end p-2 w-fit rounded-full bg-[#25D366] text-4xl md:text-5xl">          
          <Chat/>
          </button>
        <button @click="contactHandler" v-else class="text-[white]  place-self-end p-2 w-fit rounded-full bg-[#25D366] text-4xl md:text-5xl">          
          <close-icon/>
          </button>

      </div> -->
  </section>
</template>

<style scoped>
 .bg{
    background-image: url(../assets/Images/ancoinbg.webp);
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-blend-mode: soft-light;
    background-color: rgba(0, 0, 0, 0.849);
 }
 #roadmap{
    background-image: url(../assets/Images/roadmap.jpg);
    /* height: 100vh; */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-blend-mode: soft-light;
    background-color: rgba(0, 0, 0, 0.788);
 }
 #info{
    background-image: url(../assets/Images/info.webp);
    /* height: 100vh; */
    background-repeat: no-repeat;
    background-size: cover;
    /* background-position: center; */
    background-blend-mode: soft-light;
    background-color: rgba(0, 0, 0, 0.932);
 }

  .gradient{
    background: #36280927;
    background: radial-gradient(circle, #36280927 0%, #2b1f0369 18%, #18110131 100%);
  }


@keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
}
@-webkit-keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
}
@-moz-keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
}
@-ms-keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
}
.stars, .twinkling{
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  width:100%;
  height:100%;
  display:block;
}
.stars {
  background:#000 url(../assets/Images/stars.png) repeat top center;
  
  z-index:0;
}
.twinkling{
  background:transparent url(../assets/Images/twinkling.png) repeat top center;
  z-index:1;
  -moz-animation:move-twink-back 200s linear infinite;
  -ms-animation:move-twink-back 200s linear infinite;
  -o-animation:move-twink-back 200s linear infinite;
  -webkit-animation:move-twink-back 200s linear infinite;
  animation:move-twink-back 200s linear infinite;
}

@media only screen and (max-width:1024px){
    .bg{
        height: fit-content;
    }
}
</style>