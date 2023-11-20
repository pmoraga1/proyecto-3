
import './node_modules/chartjs-plugin-datalabels/dist/chartjs-plugin-datalabels.js';

const ctx = document.getElementById('myChart')
const ctxBar = document.getElementById('myBarChart')

let graficoDona;
let graficoBarra;

export const crearGraficoDona = (datos,etiquetas)=>{
    if (graficoDona){
        graficoDona.destroy()
    }
        graficoDona = new Chart(ctx,{
            type: 'doughnut',
            data: {
                labels: etiquetas, 
              datasets: [{
                data: datos,
                backgroundColor: [
                  'rgb(132, 216, 241)',
                  'rgba(132, 216, 241, 0.2)',
                ],
                borderColor: ['rgb(132, 216, 241)',
                'rgba(0,0,0,0)'],
                hoverOffset: 4
              }]
            }, 
            options: {
              plugins: {
                legend: {
                  display: false,
                },
                title: {
                  display: true,
                  text: 'Votación Promedio',
                  color: 'white'
                },
                tooltip:{
                  callbacks:{
                    label: (context) => {
                     if (context.dataIndex === 0) {

                      return `${context.chart.data.labels[context.dataIndex]}: ${context.chart.data.datasets[0].data[context.dataIndex]}`;
                    } else{
                      return '';
                    }
                  },
                },

                datalabels: {
                  color: '#fff',
                  anchor: 'center',
                  align: 'center',
                  offset: -10,
                  font: {
                    weight: 'bold',
                    size: 20},
                    formatter: (value, ctx) => {
                      return ctx.chart.data.labels[ctx.dataIndex];
                  },
                  color: '#fff'
            }
            
}}}})
    
    }

  export const crearGraficoBarra = (budget, revenue)=>{
      if (graficoBarra){
          graficoBarra.destroy()
      }
          graficoBarra = new Chart(ctxBar,{
              type: 'bar',
              data: {
                  labels: ["Budget", "Revenue"],
                datasets: [{
                  label: 'USD',
                  data: [budget, revenue],
                  backgroundColor: "#90cea1",
                  fontColor: '#ffffff',
                  borderWidth: 1,
                }]
              },
              options: {
                scales: {
                  y: {
                    beginAtZero: true,
                    ticks:{
                      color:'white',
                    }
                  },
                  x: {
                    ticks:{
                      color:'white',
                    }
                  }
                  
                },
                plugins: {
                  legend: {
                      title: {
                        display: true,
                        text: 'Presupuesto vs Ganancias',
                        color: 'white',
                      },
                      labels: {
                        color:'#ffffff',
                      }

                },
                tooltip:{
                  enabled:false,
                },
              },
              indexAxis: 'y',
              elements: {
                bar:{
                  borderWidth:2,
                }
              },
              responsive: true,
              
             
      
            }});
      
      }