<template>
<Radar :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId" :dataset-id-key="datasetIdKey" :plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="width" :height="height" />
</template>

<script>
import {
    Radar
} from 'vue-chartjs/legacy'

import {
    Chart as ChartJS,
    PointElement,
    LineElement,
    RadialLinearScale
} from 'chart.js'

ChartJS.register(
    PointElement,
    RadialLinearScale,
    LineElement
)

export default {
    name: 'RadarChart',

    components: {
        Radar
    },

    props: {
        chartId: {
            type: String,
            default: 'radar-chart'
        },
        datasetIdKey: {
            type: String,
            default: 'label'
        },
        width: {
            type: Number,
            default: 200
        },
        height: {
            type: Number,
            default: 200
        },
        cssClasses: {
            default: '',
            type: String
        },
        styles: {
            type: Object,
            default: () => {}
        },
        plugins: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            chartData: {
                labels: [
                    'Eating',
                    'Drinking',
                    'Sleeping',
                    'Designing',
                    'Coding',
                    'Cycling',
                    'Running'
                ],
                datasets: [{
                    borderColor: '#fff',
                    pointBackgroundColor: '#fff',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: '#fff',
                    data: [65, 59, 90, 81, 56, 55, 40]
                }]
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false
            }
        }
    }
}
</script>
