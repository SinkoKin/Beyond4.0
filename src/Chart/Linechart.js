import {Line} from 'vue-chartjs'
//const { reactiveProp } = mixins

export default {
    extends: Line,
    mounted() {
      this.renderChart(
        {
          labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July'
          ],
          datasets: [
            {
              label: 'Stream',
              backgroundColor: 'blue',
              data: [40, 39, 10, 40, 39, 80, 40]
            }
          ]
        },
        { responsive: true, maintainAspectRatio: false }
      )
    }
}