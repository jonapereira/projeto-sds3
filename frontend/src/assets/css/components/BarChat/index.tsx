import Chart from "react-apexcharts";
import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "utils/requests";
import { SaleSucess } from "types/sale";
import { round } from "utils/format";

type SeriesData = {
    name: string;
    data: number[];
}


type ChartData = {

    labels: {
        categories: string[];
    };
    series: SeriesData[];


}

const BarChat = () => {

    const [chartData, setChartData] = useState<ChartData>({
        labels: {
            categories: []
        },
        series: [
            {
                name: "",
                data: []
            }
        ]
    });
 
    useEffect(() => {
        //forma errada para mostrar necessidade dos hucks
        //let chartData : ChartData = {labels:[], series:[]};
        axios.get(`${BASE_URL}/sucess`)
            .then(response => {
                const data = response.data as SaleSucess[];
                const mylabels = data.map(x => x.sellerName);
                const myseries = data.map(x => round((x.deals / x.visited) * 100, 1));
                //chartData={labels:mylabels,series: myseries};
                setChartData({
                    labels: {
                        categories: mylabels
                    },
                    series: [
                        {
                            name: "% Sucess",
                            data: myseries
                        }
                    ]
                });
                //   console.log(chartData); se quiser ver os dados

            });
    }, [])


    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };
    //
    //    const mockData = {
    //        labels: {
    //            categories: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    //        },
    //        series: [
    //            {
    //                name: "% Sucesso",
    //                data: [43.6, 67.1, 67.7, 45.6, 71.1]
    //            }
    //        ]
    //    };
    return (
        <Chart options={{ ...options, xaxis: chartData.labels }}
            series={chartData.series}
            type="bar"
            height="240"
        />

    );
}

export default BarChat;