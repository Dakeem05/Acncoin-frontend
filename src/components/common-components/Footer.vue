<script setup>
import { ref, watch, onMounted, onBeforeUnmount} from "vue";
    import Telegram from '../Icons/Telegram.vue';
    import instagram from '../Icons/Instagram.vue';
    import X from '../Icons/X.vue';
    import Up from '../Icons/Up.vue';
    import Phone from '../Icons/Phone.vue';
    import Mail from '../Icons/Mail.vue';
 import RightIcon from "../Icons/ArrowRight.vue";
    import DownIcon from "../Icons/ArrowDown.vue"

    let scrolled = ref(false);
let scroll = ref(0);


    let drop1 = ref(false);
    let drop2 = ref(false);
    let drop3 = ref(false);

      function drop1Handler () {
        drop1.value = !drop1.value;
        drop2.value = false;
        drop3.value = false;
    }
    function drop2Handler () {
        drop1.value = false;
        drop2.value = !drop2.value;
        drop3.value = false;
    }
    function drop3Handler () {
        drop1.value = false;
        drop2.value = false;
        drop3.value = !drop3.value;
    }

  const scrollHandler = () => {
    scroll.value = window.scrollY
     if(scroll.value !== 0 ){
      // alert('scrolled')
        scrolled.value = true;
      } else if (scroll.value != 0) {
        scrolled.value = true;
      }
      else {
      scrolled.value = false;
      }
  }
  onMounted(()=>{
    window.addEventListener('scroll', scrollHandler)
  })
  onBeforeUnmount(()=> {
    window.removeEventListener('scroll', scrollHandler)
  })
   const toTopHandler = () => {
     const scrollStep = window.scrollY / 40; // Change this value to adjust the speed
  const scrollWindow = () => {
    if (window.scrollY !== 0) {
      window.scrollBy(0, -scrollStep);
      requestAnimationFrame(scrollWindow);
    }
  };
  scrollWindow();
   }
</script>

<template>
  <section class="bg-[rgba(2,3,7,0.5)]  pt-[3rem] pb-[2rem] mt-[6rem]">
    <div class="max-w-7xl mx-auto px-[0.5rem] gap-[3rem] lg:gap-[2rem] text-center lg:text-start xs:px-[1rem] sm:px-[2rem] xl:px-[0] flex lg:flex-row flex-col">
            <span  class="lg:w-[30%]">
                <router-link to="/" class="text-[3.2rem] text-black flex flex-col  font-surfer font-[400]">
                    <span class="w-[6.5rem] mx-auto">
                        <img src="../../assets/Images/Icon.png" alt="">
                    </span>
                    <span class=" text-[#bd8f31] -mt-4 font-Oversa">
                        ACNcoin
                    </span>
                </router-link>

                <!-- <router-link to="/career" class="text-white  xs:text-lg md:text-xl">Careers</router-link> -->
            </span>
         <aside class="flex lg:w-3/12 flex-col gap-2">
                    <h1 class="lg:text-2xl font-madeForDisplayBold font-bold relative">
                        <span class=" flex">
                           ACN: 0$
                            </span>
                         <button @click="drop2Handler"  v-if="drop2" class="block lg:hidden absolute right-4 top-0  pl-90"><right-icon/></button>
                               <button @click="drop2Handler" v-else class="block lg:hidden absolute right-4 top-0 pl-96"><down-icon/></button>
                    </h1>
                      <span class="text-left">
                        <p class="hidden lg:block">Total supply: 200 million</p>
                        <p class="hidden lg:block">Fundraising goal: $50 million</p>
                        <p class="hidden lg:block">Starting price: $0.5</p>
                                <transition
        enter-active-class="transform transition duration-500 ease-custom"
        enter-class="-translate-y-1/2 scale-y-0 opacity-0"
        enter-to-class="translate-y-0 scale-y-100 opacity-100"
        leave-active-class="transform transition duration-200 ease-custom"
        leave-class="translate-y-0 scale-y-100 opacity-100"
        leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
      >
                    <span v-show="drop2" class="flex flex-col gap-2 lg:hidden">
                  <p class="">Total supply: 200 million</p>
                        <p class="">Fundraising goal: $50 million</p>
                        <p class="">Starting price: $0.5</p>  </span>

      </transition>
                      </span>
       <hr class="mt-4 block lg:hidden "> 
            </aside>
            <aside class="flex lg:w-3/12 flex-col gap-2">
                    <h1 class="lg:text-2xl font-madeForDisplayBold font-bold relative">
                        <span class=" flex">
                            About us
                            </span>
                                <button @click="drop3Handler"  v-if="drop3" class="block lg:hidden absolute right-4 top-0 pl-90"><right-icon/></button>
                               <button @click="drop3Handler" v-else class="block lg:hidden absolute right-4 top-0 pl-96"><down-icon/></button>
                            </h1>
                            <span class="text-left">

                            <router-link to="/" class="hidden lg:block  lg:text-base text-sm hover:underline hover:text-[#bd8f31] transition-colors duration-200 ease-in-out">Docs</router-link>
                            <router-link to="/" class="hidden lg:block  lg:text-base text-sm hover:underline hover:text-[#bd8f31] transition-colors duration-200 ease-in-out">Github</router-link>
                            <router-link to="/" class="hidden lg:block  lg:text-base text-sm hover:underline hover:text-[#bd8f31] transition-colors duration-200 ease-in-out">Terms of Use</router-link>
                            <router-link to="/" class="hidden lg:block  lg:text-base text-sm hover:underline hover:text-[#bd8f31] transition-colors duration-200 ease-in-out">Privacy Policy</router-link>
                           <transition
        enter-active-class="transform transition duration-500 ease-custom"
        enter-class="-translate-y-1/2 scale-y-0 opacity-0"
        enter-to-class="translate-y-0 scale-y-100 opacity-100"
        leave-active-class="transform transition duration-200 ease-custom"
        leave-class="translate-y-0 scale-y-100 opacity-100"
        leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
      >
                    <span v-show="drop3" class="flex flex-col gap-2 lg:hidden">
                    <router-link to="/" class="lg:text-base text-sm hover:underline hover:text-[#bd8f31] transition-colors duration-200 ease-in-out">Docs</router-link>
                    <router-link to="/" class="  lg:text-base text-sm hover:underline hover:text-[#bd8f31] transition-colors duration-200 ease-in-out">Github</router-link>
                    <router-link to="/" class="lg:text-base text-sm hover:underline hover:text-[#bd8f31] transition-colors duration-200 ease-in-out">Terms of Use</router-link>
                    <router-link to="/" class=" lg:text-base text-sm hover:underline hover:text-[#bd8f31] transition-colors duration-200 ease-in-out">Privacy Policy</router-link>
                          </span>

      </transition>
                            </span>
       <hr class="mt-4 block lg:hidden"> 
            </aside>
            <aside>
              <h1 class="lg:text-2xl font-madeForDisplayBold font-bold relative">
                <span class=" flex">
                  Community
                </span>
              </h1>
              <div class="flex text-[1.5rem] gap-3 mt-4">
                <a href="https://twitter.com/acntoken?t=sL9JwqfjCd808qezdU5n6w&s=09" target="_blank" rel="noopener noreferrer"><x/></a>
                <a href="https://www.instagram.com/acncoin?igsh=MzRlODBiNWFlZA" target="_blank" rel="noopener noreferrer"><instagram/></a>
                <a href="https://t.me/acncoinofficial" target="_blank" rel="noopener noreferrer"><telegram/></a>
              </div>        
            </aside>
        </div>
        <hr class="hidden lg:block mt-9 mx-[2rem] bg-[rgba(255,255,255,0.36)] border-0 rounded h-[2px]">

    <div class="flex justify-center"> 
        <button @click='toTopHandler' class="mt-[2rem]  inline-flex px-[30px] py-[10px] items-center gap-[37px] rounded-[20px] bg-[rgba(34,34,34,0.2)]">
            <p class="text-[#FFF] text-[18px] not-italic font-normal leading-[normal]">Back to Top</p>
            <p><up/></p>
        </button>
    </div>
  </section>
</template>

<style>

</style>