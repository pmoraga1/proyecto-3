const ctx = document.getElementById('myChart')
let grafico;

export const crearGrafico = (datos,etiquetas)=>{
    if (grafico){
        grafico.destroy()
    }
        grafico = new Chart(ctx,{
            type: 'pie',
            data: {
                labels: etiquetas, 
              datasets: [{
                label: 'My First Dataset',
                data: datos,
                backgroundColor: [
                  'rgb(255, 99, 132)',
                  'rgb(54, 162, 235)',
                  'rgb(255, 205, 86)'
                ],
                hoverOffset: 4
              }]
            }
        })
    
    }