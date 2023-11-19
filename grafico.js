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
                label: 'Votación promedio',
                data: datos,
                backgroundColor: [
                  'rgb(132, 216, 241)',
                  '#0d253f',
                  'rgb(255, 205, 86)'
                ],
                hoverOffset: 4
              }]
            }
        })
    
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

                  borderWidth: 1,
                }]
              },
              options: {
                scales: {
                  y: {
                    beginAtZero: true
                  }
                  
                },
                plugins: {
                  legend: {
                      labels: {
                          // Cambiar el color del texto de la leyenda
                      }
                }
              },
              indexAxis: 'y',
            }});
      
      }