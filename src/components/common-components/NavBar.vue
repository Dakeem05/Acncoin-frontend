<script setup>
import Icon from "../Icons/RightArrow.vue";
import { ref, watch, onMounted, onBeforeUnmount} from "vue";
import MenuIcon from '../Icons/Menu.vue'
  import CloseIcon from  "../Icons/CloseIcon.vue";
  const emit = defineEmits(['openBar', 'closeBar'])
  const props = defineProps(['activeRoute'])
import axiosInstance from "../../axios";

// alert(props.activeRoute)
   let scrolled = ref(false);
  let scroll = ref(0)
  let platform = ref(false);
  let solutions = ref(false);
  let activeRoute = ref('hero')
  let resources = ref(false);
  let isDashModal = ref(false);
  let isDash = ref(false);
  let userAbbrev = ref(false);
  let isDashShowButton = ref(false);
  let show = ref(false)
  let token = sessionStorage.getItem('FabricSpa_token')
    let ul = ref(null);
       let open = ref(false);
    let both = ref(false)
    let close = ref(false);
    const side = ref(null)
    let isSide = ref(false);
    let downP = ref(false);
        const scrollHandler = () => {
          scroll.value = window.scrollY
           if(scroll.value !== 0 ){
               scrolled.value = true;
            //    alert(scrolled.value)
            if (!isSide.value){
        
                // scrolled.value = true;
                // alert(scrolled.value)
    }
            } 
            else {
                scrolled.value = false;
                // alert(scrolled.value )
                 if (!isSide.value){
        
    }
            }
        }

watch(() => props.activeRoute, (newValue, oldValue) => {
  // Handle the updated value
    activeRoute.value = newValue
//   alert(newValue);
});
     
  onMounted( async ()=>{
    window.addEventListener('scroll', scrollHandler)
    let token = sessionStorage.getItem('fabricspa_token')
     try {
         const res = await axiosInstance.get("V1/auth/getUser")
                isDashShowButton.value = true
               
            } catch (err) {
                // console.error(err.response.data.message)
                if (err.response.data.message == 'Unauthenticated.'){
                    isDashShowButton.value = false

                }
            }
                let status = sessionStorage.getItem('status')
  })
  onBeforeUnmount(()=> {
    window.removeEventListener('scroll', scrollHandler)
  })
  const dashModalHandler = () => {
    show.value = false
      platform.value = false;
    solutions.value = false;
    resources.value = false;
   isDashModal.value = !isDashModal.value
  }
  const isDashModalRemove = () => {
   isDashModal.value = !isDashModal.value
  }

//   if (scrolled.value == true) {
//     alert('true')
//   } else {
//       alert('false')
      
//   }

  const logoutHandler = async () => {
    let token = sessionStorage.getItem('FabricSpa_token')
    try {
    const res = await axios.get('https://api-control.tusksite.com/api/V1/auth/logout', {
             headers:{
                 Authorization: `Bearer ${token}`,
                    }
                });
                // console.log(res) 
                sessionStorage.removeItem('FabricSpa_token')
                sessionStorage.removeItem('status')
                sessionStorage.removeItem('isVerified')
                isDashShowButton.value = false
    } catch (err) {
        console.error(err)
    }
  }
  
  
   function sideBarOpen (){
    isSide.value = true; 
     side.value.classList.remove('-translate-x-[105%]');
     emit('openBar', isSide.value)
  }
  function sideBarClose (){
      isSide.value = false;
      side.value.classList.add('-translate-x-[105%]');
      emit('closeBar', isSide.value)
  }

  function routeHandler (route) {
     isSide.value = false;
      side.value.classList.add('-translate-x-[105%]');
      emit('closeBar', isSide.value)
      emit('route', route)
    activeRoute.value = route
  }
</script>

<template>
  <section>
        <section class="bg-[rgba(255,_255,_255,_0.14)]  [box-shadow:0_4px_30px_rgba(0,_0,_0,_0.1)] backdrop-filter backdrop-blur-[12.6px] border-b-[1px] border-b-[solid] border-b-[rgba(255,255,255,0.75)] lg:hidden  pt-[0.7rem] pb-[0.7rem] px-1rem xs:px-[2rem] sm:px-[3rem] z-[60] fixed top-0 left-0 flex right-0 w-full">
            <!-- <router-link class="hover:text-white text-white border-2 absolute  right-[1rem] xs:right-[2rem] sm:right-[3rem] top-[1.3rem] text-sm w-fit xs:text-lg border-white py-[0.2rem] px-[0.2rem] xxs:px-[0.5rem] xs:px-[1rem] sm:px-[2rem] rounded-md font-bold font-madeForDisplayBold" to="/dashboard">
                Dashboard
            </router-link> -->
            <div class="">
                <p  class="text-white absolute left-[0.5rem] text-[1rem] pl-[1rem]  mt-[1rem] w-full">
                    <button @click="sideBarOpen" v-if="!isSide"><menu-icon/></button>
                    <button @click="sideBarClose" class="text-[2rem]" v-else><close-icon/></button>
                </p>
            </div>
                <!-- <button @click="sideBarOpen" class="ml-auto absolute right-[1rem] xs:right-[2rem] sm:right-[3rem] text-black text-[1rem] mt-[1rem]">
                    <close-icon/>
                </button> -->
            <div class="flex mx-auto">
                 <router-link to="/" class="text-[2.2rem] text-black flex gap-2 font-surfer font-[400]">
                    <span class="w-[3.5rem]">
                        <img src="../../assets/Images/Icon.png" alt="">
                    </span>
                    <span class=" text-[#bd8f31] pt-0.5 font-Oversa">
                        ACNcoin
                    </span>
                </router-link>
            </div>

            <div>
        </div>
        </section>
    <div ref="side" class="bg-[rgba(0,0,0,0.849)] lg:hidden fixed w-[100vw]  -translate-x-[105%] transition-transform duration-500 overflow-y-auto overscroll-y-none h-screen z-[59] top-[3.3rem] pt-[4.5rem] px-[1rem] xs:px-[2rem] sm:px-[3rem]">
         <ul ref="ul" id="" :class="{'h' : !downP, ' pb-[65%] ' : downP}" class="lg:hidden ht relative flex flex-col gap-[2rem]  w-full top-0 font-bold font-madeForDisplayMedium">
          <li @click="routeHandler('hero')" :class="{'text-[#bd8f31] cursor-pointer border-b-[3px] border-b-[#bd8f31]' : activeRoute === 'hero'}" class="hover:text-[#bd8f31] hover:cursor-pointer hover:border-b-[3px] hover:border-b-[#bd8f31] w-fit">
                Home
            </li>
            <li @click="routeHandler('about')" :class="{'text-[#bd8f31] cursor-pointer border-b-[3px] border-b-[#bd8f31]' : activeRoute == 'about'}" class="hover:text-[#bd8f31] hover:cursor-pointer hover:border-b-[3px] hover:border-b-[#bd8f31] w-fit">
                About
            </li>
            <li @click="routeHandler('tokenomics')" :class="{'text-[#bd8f31] cursor-pointer border-b-[3px] border-b-[#bd8f31]' : activeRoute == 'tokenomics'}" class="hover:text-[#bd8f31] hover:cursor-pointer hover:border-b-[3px] capitalize hover:border-b-[#bd8f31] w-fit">
                tokenomics
            </li>
            <li @click="routeHandler('roadmap')" :class="{'text-[#bd8f31] cursor-pointer border-b-[3px] border-b-[#bd8f31]' : activeRoute == 'roadmap'}" class="hover:text-[#bd8f31] hover:cursor-pointer hover:border-b-[3px] capitalize hover:border-b-[#bd8f31] w-fit">
                roadmap
            </li>
            <li @click="routeHandler('info')" :class="{'text-[#bd8f31] cursor-pointer border-b-[3px] border-b-[#bd8f31]' : activeRoute == 'info'}" class="hover:text-[#bd8f31] hover:cursor-pointer hover:border-b-[3px] capitalize hover:border-b-[#bd8f31] w-fit">
                info
            </li>
        </ul>
    </div>
    <!-- {{'hbhghh' ?? scrolled == true}} -->
    <!-- <div :class="{'fixed top-0 bg-[red] w-[100%] left-0 right-0 z-20' : scrolled == true, '' : scrolled === false,}" class=""> -->
    <div :class="{'bg-[rgba(255,_255,_255,_0.44)]  [box-shadow:0_4px_30px_rgba(0,_0,_0,_0.1)] backdrop-filter backdrop-blur-[12.6px] border-[1px] border-[solid] border-[rgba(255,255,255,0.75)]  w-[100%] top-[0.6rem] xl:w-[1200px] px-[2.5rem] fixed  right-0 left-0 xl:mx-auto  rounded-[4rem] z-[60] dark:bg-transparent pt-[1rem] pb-[0.5rem] xl:pb-[1rem]' :scrolled === true, 'relative text-white border-b-[1px] backdrop-blur-[8.6px] border-b-[solid] border-b-[rgba(255,255,255,0.75)] xl:px-0 sm:px-[3rem] xs:px-[2rem] xxs:px-[1rem] px-[0.5rem] py-[0.7rem] flex' : scrolled === false, 'hidden lg:block' : isSide}" class=" px-0 z-20 top-0 hidden lg:block ">
        <!-- <div class=""> -->
        <div class="max-w-6xl mx-auto  flex block relative">
        <div >
            <span>
                <router-link to="/" class="text-[2.2rem] text-black flex gap-2 font-surfer font-[400]">
                    <span class="w-[3.5rem]">
                        <img src="../../assets/Images/Icon.png" alt="">
                    </span>
                    <span class=" text-[#bd8f31] pt-0.5 font-Oversa">
                        ACNcoin
                    </span>
                </router-link>
            </span>
        </div> 
        <ul :class="{'right-[4rem]' : scrolled}" class="flex absolute right-0  gap-[1rem]  text-lg top-4 font-bold font-madeForDisplayMedium ">
            <li @click="routeHandler('hero')" :class="{'text-[#bd8f31] cursor-pointer border-b-[3px] border-b-[#bd8f31]' : activeRoute === 'hero'}" class="hover:text-[#bd8f31] hover:cursor-pointer hover:border-b-[3px] hover:border-b-[#bd8f31]">
                Home
            </li>
            <li @click="routeHandler('about')" :class="{'text-[#bd8f31] cursor-pointer border-b-[3px] border-b-[#bd8f31]' : activeRoute == 'about'}" class="hover:text-[#bd8f31] hover:cursor-pointer hover:border-b-[3px] hover:border-b-[#bd8f31]">
                About
            </li>
            <li @click="routeHandler('tokenomics')" :class="{'text-[#bd8f31] cursor-pointer border-b-[3px] border-b-[#bd8f31]' : activeRoute == 'tokenomics'}" class="hover:text-[#bd8f31] hover:cursor-pointer hover:border-b-[3px] capitalize hover:border-b-[#bd8f31]">
                tokenomics
            </li>
            <li @click="routeHandler('roadmap')" :class="{'text-[#bd8f31] cursor-pointer border-b-[3px] border-b-[#bd8f31]' : activeRoute == 'roadmap'}" class="hover:text-[#bd8f31] hover:cursor-pointer hover:border-b-[3px] capitalize hover:border-b-[#bd8f31]">
                roadmap
            </li>
           <!-- <div v-if="isDashShowButton == false" class="flex gap-4 ">
                <li>
                    <router-link  class="text-[#41aef1] font-bold font-madeForDisplayBold  py-[15px] px-[20px]" to="/login">
                        Log in
                    </router-link>
                </li>
                <li>
                <router-link  class="rounded-[20px] text-white  bg-[#41aef1] py-[15px] px-[20px]  font-bold font-madeForDisplayBold" to="/register">
                    Sign up
                </router-link>
                </li>
           </div>
            <div v-else class="relative">
                  <li>
                    <router-link  class="rounded-[20px] text-white  bg-[#41aef1] py-[15px] px-[20px]  font-bold font-madeForDisplayBold" to="/dashboard">
                    Dashboard
                </router-link>
                </li>
            </div> -->
        </ul>
        
        </div>
    </div>
  </section>
</template>

<style scoped>
 .filter{
    -webkit-backdrop-filter: saturate(180%)blur(15px);
    backdrop-filter: saturate(180%)blur(15px);
    background-color: rgba(255,255,255,.72);
 }
 .h{
    height: calc(100% - 5rem);
 }
 .remove-scrolling { 
  height: 100%; 
  overflow: hidden; 
} 

        /* width */
    ::-webkit-scrollbar {
    width: 4px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: grey;
    border-radius: 4px;
    }

.f{
    /* justify-content: space-between; */
}
@media only screen and (max-height: 550px) {
    .ht{
        padding-bottom: 100%;
    }
}
</style>