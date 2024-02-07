<script setup>
    import { ref } from "vue";
    import Speed from "../Icons/Speed.vue";
    import Simple from "../Icons/Simple.vue";
    import Transaction from "../Icons/Transaction.vue";
    import Trading from "../Icons/Trading.vue";
    import Security from "../Icons/Security.vue";
    import Cost from "../Icons/Cost.vue";
    import Footer from "../common-components/Footer.vue";
</script>

<template>
  <section class="max-w-6xl z-50 gap-[2rem] pb-[3rem] lg:pb-0 lg:gap-0   px-[0.8rem] xs:px-[1rem] sm:px-[2rem] xl:px-[0] mx-auto">
    <h1 class="text-[2.5rem] md:text-[3.5rem] capitalize text-center">Why buy <span class="font-Oversa text-[#bd8f31]">$Acn</span></h1>
    <section class="flex mt-[2rem] gap-[1rem] lg:flex-row flex-col">
        <div class="lg:w-[50%] relative  flex flex-col gap-[2rem]  py-[1.5rem]">
          <span class="flex flex-col sm:flex-row gap-6 py-[1rem]  relative">
            <div class="box my-auto">
              <p class=""><speed/></p>
            </div>
            <div class="sm:w-[80%] ml-auto">
              <h1 class="text-[1.4rem] uppercase">HIGH SPEED AND LOW COSTS</h1>
              <p class="font-mono">Funding can be obtained without the involvement of third parties, thanks to immediate funding Payments are automatically collected and released by smart contracts, operating autonomously.</p>
            </div>
          </span>
          <span class="flex flex-col sm:flex-row gap-6 py-[1rem]  relative">
            <div class="box my-auto">
              <p class=""><transaction/></p>
            </div>
            <div class="sm:w-[80%] ml-auto">
              <h1 class="text-[1.4rem] uppercase">REAL-TIME Transactions</h1>
              <p class="font-mono">Every Transaction and Updates are real time and directly pulled from Smart Contracts on the Blockchain.</p>
            </div>
          </span>
          <span class="flex flex-col sm:flex-row gap-6 py-[1rem]  relative">
            <div class="box my-auto">
              <p class=""><security/></p>
            </div>
            <div class="sm:w-[80%] ml-auto">
              <h1 class="text-[1.4rem] uppercase">PROTECTION FROM HACKING</h1>
              <p class="font-mono">By implementing robust protection measures individuals and businesses can have peace of mind while leveraging the potential of ACNCoin in a secure and reliable manner.</p>
            </div>
          </span>
        </div>
        <div class="lg:w-[50%] relative  flex flex-col gap-[2rem]  py-[1.5rem]">
          <span class="flex flex-col sm:flex-row gap-6 py-[1rem]  relative">
            <div class="box my-auto">
              <p class=""><simple/></p>
            </div>
            <div class="sm:w-[80%] ml-auto">
              <h1 class="text-[1.4rem] uppercase">Simple To Use</h1>
              <p class="font-mono">Our platform will be extremely simple to use, with only the necessary options for users and other stakeholders.</p>
            </div>
          </span>
          <span class="flex flex-col sm:flex-row gap-6 py-[1rem]  relative">
            <div class="box my-auto">
              <p class=""><trading/></p>
            </div>
            <div class="sm:w-[80%] ml-auto">
              <h1 class="text-[1.4rem] uppercase">GLOBAL P2P TRADE FINANCING</h1>
              <p class="font-mono">The peer-to-peer architecture of blockchain allows all cryptocurrencies to be transferred worldwide, without the need of any middle-man or intermediaries.</p>
            </div>
          </span>
          <span class="flex flex-col sm:flex-row gap-6 py-[1rem]  relative">
            <div class="box my-auto">
              <p class=""><cost/></p>
            </div>
            <div class="sm:w-[80%] ml-auto">
              <h1 class="text-[1.4rem] uppercase">COST EFFECTIVE</h1>
              <p class="font-mono">Scale economy through decentralization leading to significant decrease in transaction fees.</p>
            </div>
          </span>
        </div>
    </section>

   <div>
      <h1 class="text-[2.5rem] md:text-[3.5rem] mt-[3rem] capitalize text-center">HOW TO BUY <span class="font-Oversa text-[#bd8f31]">$Acn</span></h1>
      <section class="flex relative mt-[2rem] gap-[1rem] flex-row ">
          <div class="lg:w-[50%] z-10 container  relative  flex flex-col gap-[2rem]  py-[1.5rem]">
            <span class="flex gap-[6px] py-[1rem]  relative">
              <div class=" relative  ">
                <p class="text-[3rem] -mt-[2rem] h-fit text-[#BD8F31] text-center">.</p>
              </div>
              <div class="">
                <p class="font-mono text-lg">Download Metamask wallet from  <a id="link" target="__blank" href="https://metamask.io">https://metamask.io</a> and download Trust wallet from <a id="link" target="__blank" href="https://trustwallet.com">https://trustwallet.com</a></p>
              </div>
            </span>
            <span class="flex gap-[6px] py-[1rem]  relative">
              <div class=" relative  ">
                <p class="text-[3rem] -mt-[2rem] h-fit text-[#BD8F31] text-center">.</p>
              </div>
              <div class="">
                <p class="font-mono text-lg">Add BNB Chain to metamask / Trustwallet and Deposit BNB to your wallet. </p>
              </div>
            </span>
            <span class="flex gap-[6px] py-[1rem]  relative">
              <div class=" relative  ">
                <p class="text-[3rem] -mt-[2rem] h-fit text-[#BD8F31] text-center">.</p>
              </div>
              <div class="">
                <p class="font-mono text-lg">Connect your wallet to our website and buy ACN</p>
              </div>
            </span>
            <span class="flex gap-[6px] py-[1rem]  relative">
              <div class=" relative  ">
                <p class="text-[3rem] -mt-[2rem] h-fit text-[#BD8F31] text-center">.</p>
              </div>
              <div class="">
                <p class="font-mono text-lg">When you buy ACN, it will be held in the smart contract and you will be able to unlock when the sale is over. i.e unlock form will pop up when the sale ends</p>
              </div>
            </span>
            <span class="flex gap-[6px] py-[1rem]  relative">
              <div class=" relative  ">
                <p class="text-[3rem] -mt-[2rem] h-fit text-[#BD8F31] text-center">.</p>
              </div>
              <div class="">
                <p class="font-mono text-lg">Congratulations, you Have successfully purchased ACNCoin.</p>
              </div>
            </span>
          </div>
          <div class="absolute top-0 bottom-0 my-auto right-0 left-0 mx-auto w-fit h-fit lg:relative lg:w-[50%]   gap-[2rem]  py-[1.5rem]">
            <img src="../../assets/Images/end.png" class="rounded-lg" alt="">
          </div>
      </section>
    </div>

  </section>
    <div>
      <Footer/>
    </div>
</template>

<style scoped>



.box {
  border-image: url("data:image/svg+xml,%3Csvg width='316' height='55' viewBox='0 0 316 55' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M10.5667 0.961914C10.2336 0.961914 9.9142 1.09422 9.67869 1.32973L0.367819 10.6406C0.132309 10.8761 0 11.1955 0 11.5286V49.9387C0 52.7129 2.24899 54.9619 5.02326 54.9619H305.433C305.766 54.9619 306.086 54.8296 306.321 54.5941L315.632 45.2832C315.868 45.0477 316 44.7283 316 44.3952V5.98517C316 3.2109 313.751 0.961914 310.977 0.961914H10.5667ZM314.744 38.6363L299.674 53.7061H5.02326C2.94256 53.7061 1.25581 52.0194 1.25581 49.9387V17.2875L8.7907 9.75261L16.3256 2.21773C16.3256 2.21773 308.896 2.21773 310.977 2.21773C313.057 2.21773 314.744 3.90447 314.744 5.98517V38.6363Z' fill='%23bd8f31'/%3E%3Cpath d='M299.674 53.7061L314.744 38.6363V5.98517C314.744 3.90447 313.057 2.21773 310.977 2.21773H16.3256L8.7907 9.75261L1.25581 17.2875V49.9387C1.25581 52.0194 2.94256 53.7061 5.02326 53.7061H299.674Z' fill='rgba(189, 143, 49, 0.55)'/%3E%3C/svg%3E");
  border-style: solid;
  background-clip: padding-box;
  background-color: rgba(189, 143, 49, 0.55);
  border-width: 15px;
  border-image-slice: 16;
  position: absolute;
  content: "";
  top: 0;
  bottom: 0;
  left: 0;
  width: fit-content;
  height: fit-content;
  z-index: 0;
}
#link{
  text-decoration: underline;
  text-decoration-color:  ;
}
@media only screen and (max-width:536px) {
  .box{
    position: relative;
  }
}
@media only screen and (max-width:1024px) {
   .container{
    background: rgba(255, 255, 255, 0.02);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(8.1px);
-webkit-backdrop-filter: blur(8.1px);
border: 1px solid rgba(255, 255, 255, 0.56);
  }
}
</style>