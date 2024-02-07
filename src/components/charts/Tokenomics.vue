<template>
  <DoughnutChart :chartData="testData" :options="options" id="mychart"  class="rounded-2xl"/>
    <!-- <canvas id="my_Chart"></canvas> -->
</template>

<script lang="ts" setup>
import { defineComponent, ref, onMounted, watch } from 'vue';
import { DoughnutChart, PieChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";
import axiosInstance from '../../axios';
const deliveredOrders = ref<number>(0);
const unretrievedOrders = ref<number>(0);
const undelivered_orders = ref<number>(0);
        const data = ref<any>([]);
Chart.register(...registerables);
// document.getElementById('mychart').getElementsByClassName('chartjs-render-monitor')[0].classList.add('rounded-legend');
const options = ref({
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: 'right',
          labels:{
            font:{
                size:16,
                family:'mono',
            },
            color:'white',
        boxWidth: 20,
         borderRadius: 30,
          }
        },
        title: {
          display: true,
          text: 'Allocation of funds',
          align: 'center',
          padding: 20,
          color:'white',
          font: {
                size: 34,
                weight: 'bold',
                family: 'quantico',
                // color:'white'
            }
        },
        
      },
      elements:{
        point:{
            pointStyle:false,
            borderColor:'green'
        }
      },
         scales: {
            x: {
                  
                    display: false
                  },
            y: {
                display: false
            },
       }
    });
    // console.log(data.value)

    const testData = ref({
    labels: ['Founders and team', 'Reserved funding', 'Advisors', 'Community', 'Maketing campaign'],
    datasets: [{
        label: '',
        data: [25, 30, 20, 15, 10],
        // data: [deliveredOrders.value, unretrievedOrders.value, undelivered_orders.value],
        fill: false,
        backgroundColor:[
            '#710000',
           '#a63c06',
           '#c36f09',
           '#eeba0b',
           '#f4e409',
        ],
        // borderColor:[
        //     '#71C2F4',
        //     '#E5E5E5',
        //     '#cac8bf'
        // ],
        offset: 10,
        // spacing: 1,
        // xAxisID:false,
        // pointStyle:false,
        // borderColor: '',   
        borderWidth: 0.3,
    }]
    });

//     watch(() => data.value, (newValue, oldValue) => {
//   // Handle the updated value
//   console.log(newValue);

//   testData.value.datasets[0].data = [newValue.delivered, newValue.unretrieved_orders
// , newValue.undelivered_orders];
//   // testData.value.labels = newValue.map((element) => `Week ${element.weekNumber}`);

//   // console.log(testData.value.datasets[0].data);
// });

    
    // Define the onMounted lifecycle hook
    // onMounted(async () => {
    //   try {
    //     const res = await axiosInstance.get('/V1/admin/dashboard');
    //     data.value = res.data;
    //     undelivered_orders.value = ((res.data.undelivered_orders)/100) * (res.data.undelivered_orders + res.data.delivered + res.data.unretrieved);
    //     console.log(undelivered_orders.value)
    //     deliveredOrders.value = ((res.data.delivered)/100) * (res.data.delivered + res.data.unretrieved +res.data.undelivered_orders);
    //     unretrievedOrders.value = ((res.data.unretrieved)/100) * (res.data.delivered + res.data.unretrieved +res.data.undelivered_orders);
    //     // console.log(deliveredOrders.value);
    //     document.getElementById('mychart')?.getElementsByClassName('chartjs-render-monitor')[0]?.classList.add('rounded-legend');
    //   } catch (err) {
    //     console.error(err);
    //   }
    // });
</script>

<style scoped>
   #mychart .chartjs-render-monitor {
  border-radius: 10px !important; /* Adjust the value as needed */
}

</style>