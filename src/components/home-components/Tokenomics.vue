<script setup>
    import Copy from "../Icons/Copy.vue";
    import Tokenomics from "../charts/Tokenomics.vue";
    import { ref, onMounted, onBeforeUnmount } from "vue";

  const animate = ref(null);
  // const animate2 = ref(null);
  const section1Visible = ref(false);
// const section3Visible = ref(false);

const options = {
  threshold: 0 // Adjust threshold as needed
};
      const isPresaleCopied = ref(false);
    const contractAddress = ref(null);
    const presaleAddress = ref(null);
    const contractButton = ref(null);
    const isContractCopied = ref(false);
    const counter = ref(0);
    const audience = ref(0);

    const copyPresaleAddress = async () => {
    // console.log(address.value.innerHTML)
    try {
      await navigator.clipboard.writeText(presaleAddress.value.innerHTML);
      // console.log('Content copied to clipboard');
        isPresaleCopied.value = true;
        // presaleButton.value.innerHTML = cpied
      setInterval(() => {
        isPresaleCopied.value = false;
        
      }, 5000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

    const copyContractAddress = async () => {
    // console.log(address.value.innerHTML)
    try {
      await navigator.clipboard.writeText(contractAddress.value.innerHTML);
      // console.log('Content copied to clipboard');
        isContractCopied.value = true;
        // presaleButton.value.innerHTML = cpied
      setInterval(() => {
        isContractCopied.value = false;
        
      }, 5000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }


    const callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.target === animate.value && entry.isIntersecting) {
      section1Visible.value = true;
    }
    // Add more conditions for other sections if needed
  });
};
const observer = new IntersectionObserver(callback, options);

  onMounted(() => {
    observer.observe(animate.value);
  //observer.observe(animate2.value);
  })
</script>

<template>
  <section class="max-w-6xl z-50 gap-[2rem] pb-[3rem] lg:pb-0 lg:gap-0   px-[0.8rem] xs:px-[1rem] sm:px-[2rem] xl:px-[0] mx-auto">
    <h1  class="text-[2.5rem] md:text-[3.5rem] capitalize text-center">tokenomics</h1>
    <section ref="animate" class="flex mt-[2rem] lg:flex-row flex-col">
        <div  :class="{ 'visible': section1Visible }" class="section lg:w-[45%] relative bg  px-[2rem] py-[1.5rem]">
            <h1 class="text-3xl sm:text-[2.4rem]"> <span class="font-Oversa text-[#bd8f31]">Acncoin</span> Token metrics</h1>
            <div class="grid grid-cols-2">
                <h1 class="mt-[1rem] text-lg sm:text-[1.4rem]">Token name:</h1>
                <h1 class="mt-[1rem] text-lg sm:text-[1.4rem] ml-[10%]">ACNCOIN</h1>
                <h1 class="mt-[1rem] text-lg sm:text-[1.4rem]">Ticker symbol:</h1>
                <h1 class="mt-[1rem] text-lg sm:text-[1.4rem] ml-[10%]">ACN</h1>
                <h1 class="mt-[1rem] text-lg sm:text-[1.4rem]">Starting price pre-ICO:</h1>
                <h1 class="mt-[1rem] text-lg sm:text-[1.4rem] ml-[10%]">ACN for $0.5</h1>
                <h1 class="mt-[1rem] text-lg sm:text-[1.4rem]">Total supply:</h1>
                <h1 class="mt-[1rem] text-lg sm:text-[1.4rem] ml-[10%]">200 million ACN</h1>
                <h1 class="mt-[1rem] text-lg sm:text-[1.4rem]">Fund raising Goal:</h1>
                <h1 class="mt-[1rem] text-lg sm:text-[1.4rem] ml-[10%]">$50 million</h1>
                <h1 class="mt-[1rem] text-lg sm:text-[1.4rem]">Contract address:</h1>
                <span class="hidden" ref="contractAddress">0xab87c0179c186C803cB50A92221EfEB23e4b83E9</span>
                <h1 class="mt-[1rem] text-lg sm:text-[1.4rem] ml-[10%] flex gap-1"><span>0xab...83E9</span><button @click="copyContractAddress" class="pt-[1.8px]" :class="{'text-[#bd8f31]' : isContractCopied}"><copy/></button></h1>
                <h1 class="mt-[1rem] text-lg sm:text-[1.4rem]">Presale Contract:</h1>
                <span class="hidden" ref="presaleAddress">0x29367a6d16F1c0f8320A466D2f24e1971045757B</span>
                <h1 class="mt-[1rem] text-lg sm:text-[1.4rem] ml-[10%] flex gap-1"><span>0x29...757B</span><button @click="copyPresaleAddress" class="pt-[1.8px]" :class="{'text-[#bd8f31]' : isPresaleCopied}"><copy/></button></h1>
            </div>
       
        </div> 
        <div :class="{ 'visible': section1Visible }" class="section1 mt-[3rem] lg:mt-0 lg:w-[55%]">
            <tokenomics/>
        </div>
    </section>
   
   
  </section>
</template>

<style scoped>
  .bg{
    background: rgba(255, 255, 255, 0.16);
border-radius: 8px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(7.7px);
-webkit-backdrop-filter: blur(7.7px);
  }

  @keyframes up {
      from {
            transform: "translateY(10.75rem)";
            opacity: '0'
          }
          to {
            transform: "translateY(0rem)";
            opacity: '1'
          }
}
@-webkit-keyframes up {
  from {
            transform: "translateY(10.75rem)";
            opacity: '0'
          }
          to {
            transform: "translateY(0rem)";
            opacity: '1'
          }
}
@-moz-keyframes up {
     from {
            transform: "translateY(10.75rem)";
            opacity: '0'
          }
          to {
            transform: "translateY(0rem)";
            opacity: '1'
          }
}
@-ms-keyframes up {
    from {
            transform: "translateY(10.75rem)";
            opacity: '0'
          }
          to {
            transform: "translateY(0rem)";
            opacity: '1'
          }
}

.section {
  transform: translateY(100%);
  transition: transform 0.5s ease;
}
.section1 {
  transform: translateY(100%);
  transition: transform 0.8s ease;
}

.visible {
  transform: translateY(0);
}

</style>