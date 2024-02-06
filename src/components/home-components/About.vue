<script setup>
  import { ref, onMounted, onBeforeUnmount } from "vue";

  const animate = ref(null);
  const animate1 = ref(null);
  const animate2 = ref(null);

  const onIntersection = (entries, observer) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      // The target element is now visible in the viewport
      // Add your animation or CSS class changes here
      // alert('intersecting')
      animate.value.classList.add('animate-gone-up'); // Example: Apply a CSS class 'fade-in'
      observer.unobserve(entry.target)
    } else {
      // alert('not')
      // The target element is no longer visible in the viewport
      // Add your animation or CSS class changes here
      animate.value.classList.remove('animate-gone-up'); // Example: Remove the CSS class 'fade-in'
    }
  };
  const onIntersection1 = (entries, observer) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      animate1.value.classList.add('animate-gone-up'); // Example: Apply a CSS class 'fade-in'
      observer.unobserve(entry.target)
    } else {
      animate1.value.classList.remove('animate-gone-up'); // Example: Remove the CSS class 'fade-in'
    }
  };
  const onIntersection2 = (entries, observer) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      animate2.value.classList.add('animate-gone-up'); // Example: Apply a CSS class 'fade-in'
      observer.unobserve(entry.target)
    } else {
      animate2.value.classList.remove('animate-gone-up'); // Example: Remove the CSS class 'fade-in'
    }
  };

  onMounted(() => {
       const observer = new IntersectionObserver(onIntersection, { threshold: 0,   once: true, }); // You can adjust the threshold value as needed
    const observer1 = new IntersectionObserver(onIntersection1, { threshold: 0,   once: true, }); // You can adjust the threshold value as needed
    const observer2 = new IntersectionObserver(onIntersection2, { threshold: 0,   once: true, }); // You can adjust the threshold value as needed
     if (animate.value) {
      observer.observe(animate.value);
    }
    if (animate1.value) {
      observer1.observe(animate1.value);
    }
    if (animate2.value) {
      observer2.observe(animate2.value);
    }
  })

  onBeforeUnmount(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <section class="max-w-6xl z-50 gap-[2rem] pb-[3rem] lg:pb-0 lg:gap-0   px-[0.5rem] xs:px-[1rem] sm:px-[2rem] xl:px-[0] mx-auto">
    <h1 class=" text-[2.5rem] md:text-[3.5rem] text-center">About</h1>
    <section class="flex mt-[2rem] lg:flex-row flex-col">
        <div class="lg:w-[45%] relative">
            <img src="../../assets/Images/about-removebg.png" class="right-0 left-0 mx-auto lg:my-auto lg:top-0 lg:bottom-0 absolute" alt="">
        </div> 
        <div class="lg:w-[55%]">
            <section ref="animate" class="sm:w-[90%] animate-gone-up translateY(10.75rem) md:w-[70%] sm:mr-auto crypto py-[1.3rem] px-[1rem]">
            <h1 class="uppercase  text-[1.5rem] text-center mx-auto">Vision</h1>  
            <p class="text-center w-[95%] font-mono mx-auto">To be at the forefront of new era of technology and innovations which serves next generation of human life, so they can live with more freedom and less fear.</p>
            </section>
            <section ref="animate1" class="sm:w-[90%] md:w-[70%] my-[1.5rem] crypto py-[1.3rem] px-[1rem] sm:mx-auto">
            <h1 class="uppercase  text-[1.5rem] text-center mx-auto">Mission</h1>  
            <p class="text-center w-[95%] font-mono mx-auto">Is to give best products and services to users by exploring all possible frontiers in new technology and innovations, and also being socially responsible to our planet and our societies.</p>
            </section>
            <section ref="animate2" class="sm:w-[90%] md:w-[70%] sm:ml-auto crypto py-[1.3rem] px-[1rem]">
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
</style>