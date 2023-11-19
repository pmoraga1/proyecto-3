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
                label: 'Score',
                data: datos,
                backgroundColor: [
                  '#0d253f',
                  '#01b4e4',
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
                  
                  borderWidth: 1,
                }]
              },
              options: {
                scales: {
                  y: {
                    beginAtZero: true
                  }
                  
                }
              }
            });
      
      }