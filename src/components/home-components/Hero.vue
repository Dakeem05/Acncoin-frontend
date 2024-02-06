<script setup>
    import {onMounted, ref} from 'vue';

    const presaleAddress = ref(null);
    const presaleButton = ref(null);
    const isPresaleCopied = ref(false);
    const contractAddress = ref(null);
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

  onMounted(() => {
  const targetNumber = 33.521; // Set your target number
  const duration = 2000; // Set the duration of the animation in milliseconds
  const interval = 20; // Set the interval for each step in milliseconds
  const targetNumber_audience = 50; // Set your target number
  const duration_audience = 2000; // Set the duration of the animation in milliseconds
  const interval_audience = 30; // Set the interval for each step in milliseconds

  const steps = duration / interval;
  const increment = targetNumber / steps;

  let currentStep = 0;

  const counterInterval = setInterval(() => {
    if (currentStep < steps) {
      counter.value += increment;
      currentStep++;
    } else {
      counter.value = targetNumber; // Ensure the counter reaches the exact target
      clearInterval(counterInterval);
    }
  }, interval);

  const steps_audience = duration_audience / interval_audience;
  const increment_audience = targetNumber_audience / steps_audience;

  let currentStep_audience = 0;

  const counterInterval_audience = setInterval(() => {
    if (currentStep_audience < steps_audience) {
      audience.value += increment;
      currentStep_audience++;
    } else {
      audience.value = targetNumber_audience; // Ensure the counter reaches the exact target
      clearInterval(counterInterval_audience);
    }
  }, interval);
});
</script>

<template>
    <section class="max-w-6xl z-50 flex lg:flex-row gap-[2rem] pt-[4rem] lg:pt-0 pb-[3rem] lg:pb-0 lg:gap-0 flex-col px-[0.5rem] xs:px-[1rem] sm:px-[2rem] xl:px-[0] mx-auto">
        <div class="lg:w-[50%] ">
            <span class=" text-[#bd8f31] text-[4rem] md:text-[4.5rem]  font-Oversa">
                ACNcoin
            </span>
            <h1 class="text-[2.5rem] md:text-[3rem] md:-mt-[1.4rem]">Blockchain platform</h1>
            <div class="font-mono mt-[1rem]">
                We are strategizing the development of an expansive web3 ecosystem designed to empower users in safeguarding, trading, and leveraging their assets across diverse services. Our ongoing research aims to revolutionize conventional paradigms, exploring how blockchain technology can seamlessly integrate into various aspects of daily life, fostering positive advancements for humanity and technology users alike.
            </div>
            <div class="mt-[1.5rem] flex mx-auto w-fit lg:w-full gap-4">
                <span class="hidden" ref="presaleAddress">0x29367a6d16F1c0f8320A466D2f24e1971045757B</span>
                <span class="hidden" ref="contractAddress">0xab87c0179c186C803cB50A92221EfEB23e4b83E9</span>
                <button ref="presaleButton" class="crypto-button" :class="{'bg-white text-[#bd8f31]' : isPresaleCopied === true}" @click="copyPresaleAddress">
                    <p v-if="!isPresaleCopied">Copy presale address</p>
                    <p v-else>Copied!</p>
                </button>
                <button class="contract-button border-[1px] border-solid px-3 border-[rgba(255,255,255,0.75)]" @click="copyContractAddress" :class="{'bg-white text-[#bd8f31]' : isContractCopied === true}">
                    <p v-if="!isContractCopied">Copy contract address</p>
                    <p v-else>Copied!</p>
                </button>
            </div>
            <div class="mt-[2rem] flex mx-auto w-fit lg:w-full">
                <!-- <span class="border-r-[1px] border-[#9D999A] pr-[1rem]">
                    <p class="text-[3rem]">{{ counter }}</p>
                    <p class="text-[#9D999A] text-lg -mt-[0.7rem]">BNB raised</p>
                </span> -->
                <span class="pl-[1rem]">
                    <p class="text-[3rem]">{{ audience }}K+</p>
                    <p class="text-[#9D999A] text-lg -mt-[0.7rem]">Community</p>
                </span>
            </div>
        </div>   
         <div class="pseudo-3d-image lg:w-[50%]">
        <img src="../../assets/Images/Icon.png" alt="Pseudo-3D Image">
    </div>
        <!-- <div class="spin-container w-[50%]">
        <img src="../../assets/Images/Icon.png" alt="3D Rotating Image" class="rotate-image ml-auto">
    </div>    -->
    </section>
</template>

<style scoped>
          @keyframes rotate {
               0% {
                transform: rotateY(0deg) ;
            }
            50% {
                transform: rotateY(360deg);
            }
            100%{
                transform: rotateY(0deg);

            }
        }

        .pseudo-3d-image {
            /* width: 50%;  */
            perspective: 10000px; /* Set the perspective */
            transform-style: preserve-3d;
            animation: rotate 15s linear infinite;
        }

        .pseudo-3d-image img {
            width: 90%;
            transform: translateZ(50px); /* Adjust the depth */
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /* Add a subtle shadow */
            border-radius: 100%;
            margin-left: auto;
        }

        .crypto-button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border: 2px solid #ffffff;
  -webkit-clip-path: polygon(0% 0, 90% 0, 100% 35%, 100% 100%, 10% 100%, 0 70%);
  clip-path: polygon(0% 0, 90% 0, 100% 35%, 100% 100%, 10% 100%, 0 70%);
  background-color: #bd8f31;
  color: #ffffff;
  transition: background-color 0.3s, color 0.3s;
}

.crypto-button:hover {
  background-color: #ffffff;
  color: #bd8f31;
}
.contract-button:hover {
  background-color: #ffffff;
  color: #bd8f31;
}


</style>