<script setup>
  import { ref, onMounted, onBeforeUnmount } from "vue";

  const animate = ref(null);
  const animate1 = ref(null);
  const animate2 = ref(null);
  const section1Visible = ref(false);
const section2Visible = ref(false);
const section3Visible = ref(false);

const options = {
  threshold: 0 // Adjust threshold as needed
};

  

  const callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.target === animate.value && entry.isIntersecting) {
      section1Visible.value = true;
    } else if (entry.target === animate1.value && entry.isIntersecting) {
      section2Visible.value = true;
    } else if (entry.target === animate2.value && entry.isIntersecting) {
      section3Visible.value = true;
    }
    // Add more conditions for other sections if needed
  });
};
const observer = new IntersectionObserver(callback, options);

  onMounted(() => {
    observer.observe(animate.value);
  observer.observe(animate1.value);
  observer.observe(animate2.value);
  })

</script>

<template>
  <section class="max-w-6xl z-50 gap-[2rem] pb-[3rem] lg:pb-0 lg:gap-0   px-[0.8rem] xs:px-[1rem] sm:px-[2rem] xl:px-[0] mx-auto">
    <h1 class="text-[2.5rem] md:text-[3.5rem] text-center">About</h1>
    <section  class="flex mt-[2rem] lg:flex-row flex-col">
        <div class="lg:w-[45%] relative">
            <img src="../../assets/Images/about-removebg.png" class="right-0 left-0 mx-auto lg:my-auto lg:top-0 lg:bottom-0 absolute" alt="">
        </div> 
        <div class="lg:w-[55%]">
            <section ref="animate" :class="{ 'visible': section1Visible }" class="section sm:w-[90%] animate-gone-up translateY(10.75rem) md:w-[70%] sm:mr-auto crypto py-[1.3rem] px-[1rem]">
            <h1 class="uppercase  text-[1.5rem] text-center mx-auto">Vision</h1>  
            <p class="text-center w-[95%] font-mono mx-auto">To be at the forefront of new era of technology and innovations which serves next generation of human life, so they can live with more freedom and less fear.</p>
            </section>
            <section ref="animate1" :class="{ 'visible': section2Visible }" class="section sm:w-[90%] md:w-[70%] my-[1.5rem] crypto py-[1.3rem] px-[1rem] sm:mx-auto">
            <h1 class="uppercase  text-[1.5rem] text-center mx-auto">Mission</h1>  
            <p class="text-center w-[95%] font-mono mx-auto">Is to give best products and services to users by exploring all possible frontiers in new technology and innovations, and also being socially responsible to our planet and our societies.</p>
            </section>
            <section ref="animate2" :class="{ 'visible': section3Visible }" class="section sm:w-[90%] md:w-[70%] sm:ml-auto crypto py-[1.3rem] px-[1rem]">
            <h1 class="uppercase  text-[1.5rem] text-center mx-auto">Solution</h1>  
            <p class="text-center w-[95%] font-mono mx-auto">We have planned an ecosystem of new solutions which will help users to save their assets as well as trade and use them for different services in the coming years. Also we will keep on researching on how we can reinvent the wheel in a way that blockchain can be used in most of the areas of day to day life and how it can be used for betterment of humankind and users of the technology.</p>
            </section>
        </div>
    </section>
 
   
  </section>
</template>

<style scoped>
      .crypto{
  -webkit-clip-path: polygon(0% 0, 90% 0, 100% 35%, 100% 100%, 10% 100%, 0 70%);
  clip-path: polygon(0% 0, 90% 0, 100% 35%, 100% 100%, 10% 100%, 0 70%);
  background: rgba(255, 255, 255, 0.10);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(7.8px);
-webkit-backdrop-filter: blur(7.8px);
border: 3px solid #bd8f31;
}

.section {
  transform: translateY(100%);
  transition: transform 0.5s ease;
}

.section.visible {
  transform: translateY(0);
}
</style>