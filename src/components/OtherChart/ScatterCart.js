import Chart from "chart.js/auto"
import { useEffect, useRef } from "react"

function ScatterChart(props) {
    const { busBasePassenger: bp } = props
    const canvasDom = useRef(null)
    useEffect(() => {
        const ctx = canvasDom.current.getContext('2d')
        const scatterChart = new Chart(ctx, {
            type: 'scatter',
            data: {
                datasets: [
                    {
                        data: bp.reduce((acc, cur) => {
                            cur['data'].forEach((summary) => {
                                console.log(summary);
                                acc.push({
                                    x: summary.getIn,
                                    y: summary.getOff
                                })
                            });
                            return acc
                        }, []),
                        backgroundColor: 'rgba(255, 0, 0, 0.6)'
                    },
                ]
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                // scales: {
                //     type: 'linear'
                // }
            }
        })
        return () => {
            scatterChart.destroy()
        }
    }, [bp])

    return (
        <div>
            <canvas ref={canvasDom} />
        </div>
    )
}

export default ScatterChart