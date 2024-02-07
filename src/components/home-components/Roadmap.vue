<script setup>
    import { ref, onMounted, onBeforeUnmount } from "vue";
    import Copy from "../Icons/Copy.vue";

      const isPresaleCopied = ref(false);
    const contractAddress = ref(null);
    const presaleAddress = ref(null);
    const contractButton = ref(null);
    const isContractCopied = ref(false);
    const counter = ref(0);
    const audience = ref(0);
    const width = ref(0);

    width.value = window.innerWidth;

window.addEventListener('resize', function() {
  width.value = window.innerWidth;
});

  

  const animate = ref(null);
  // const animate1 = ref(null);
  // const animate2 = ref(null);
  const section1Visible = ref(false);
// const section2Visible = ref(false);
// const section3Visible = ref(false);

const options = {
  threshold: 0 // Adjust threshold as needed
};

  

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
  })




const items = ref([
        {
          date: 'July-August 2023',
          content: ['Ideation of ACNCoin', 'White paper, Future Goals and Road Map preparation', 'Contract Deployment', 'ICO Website Designing']
        },
        {
          date: 'September-January  2024',
          content: ['ICO website Launch', 'Pre-Sale of ACNCoins Stage-1', 'Promotion through Partnerships and Affiliates and initial', 'Buyers', 'Building Team for Future Projects']
        },
        {
          date: 'February-March 2024',
          content: ['Start ACNChain Development', 'Pre-Sale Stage 2', 'Influencer Promotion', 'Start MultiCurrency crypto wallet development', 'Pre-Sale Stage 3', 'Team Expansion']
        },
        {
          date: 'APRIL-JUNE  2024',
          content: ['ACNCoin Launch to general Public', 'dApp Wallet Launch', 'Major DEX Listing', 'DEX Platform Development Start']
        },
        {
          date: 'July-Sep 2024',
          content: ['DEX Platform Launch and Integration in dApp', 'P2P Exchange Development Start']
        },
        {
          date: 'October-December 2024',
          content: ['P2P Exchange launch', 'Defi platform launch', 'Launch of Mobile version of Wallet and Exchange', 'Marchant payment API Development Start']
        },
        {
          date: 'January-March 2025',
          content: ['Merchant API Payment wallet first version Launch', 'Gaming Platform development Start', 'Ecommerce Development start']
        },
        {
          date: 'April-July 2025 ',
          content: ['Gaming Platform first version launch', 'Ecommerce Platform first version Launch', 'Ecommerce Mobile App Development start', 'Continued']
        },
      ],)
  // Add more phases as needed
 
</script>

<template>
  <section class="max-w-6xl z-50 gap-[2rem] pb-[3rem] lg:pb-0 lg:gap-0   px-[0.8rem] xs:px-[1rem] sm:px-[2rem] xl:px-[0] mx-auto">
    <h1 ref="animate" class=" text-[2.5rem] md:text-[3.5rem] capitalize text-center">roadmap</h1>
    <section  :class="{ 'visible': section1Visible }" class="section lg:w-[80%] sm:mx-auto container mt-[2rem] py-[2rem] sm:p-[2rem]">
        
        <v-timeline align="start" 
      :side="width < 1024 ? 'end' : 'both'" :density="width < 1024 ? 'compact' : 'loose'" line-color="rgba(255, 255, 255, 0.36)"  truncate-line="both">
        <v-timeline-item 
          v-for="(item, i) in items"
          :key="i"
          dot-color="#BDBCBC"
          fill-dot
          size="0.9rem"
        >
          <v-card  class="bg -ml-[1.3rem] sm:ml-0">
            <v-card-title class="">
              <p class="text-[#bd8f31] text-[15px]">{{item.date}}</p>
            </v-card-title>
            <v-card-text class="text-[#BDBCBC] font-mono">
              <p v-for="(item, i) in item.content" :key="i">-{{item}}</p>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </section>
   
  </section>
</template>

<style scoped>
  .container{
    background: rgba(255, 255, 255, 0.02);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(8.1px);
-webkit-backdrop-filter: blur(8.1px);
border: 1px solid rgba(255, 255, 255, 0.56);
  }

  .bg{
    background: rgba(255, 255, 255, 0.04) !important;
border-radius: 16px !important;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1) !important;
backdrop-filter: blur(9.2px) !important;
-webkit-backdrop-filter: blur(9.2px) !important;
border: 1px solid rgba(255, 255, 255, 0.23) !important;
  }
  .section {
  transform: translateY(100%);
  transition: transform 0.5s ease;
}

.section.visible {
  transform: translateY(0);
}
</style>