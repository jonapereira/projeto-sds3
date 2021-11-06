import axios from "axios";
import { useEffect, useState } from "react";
import { SalePage } from "types/sale";
import { formatLocalDate } from "utils/format";
import { BASE_URL } from "utils/requests";
import Pagination from "../Pagination";

const DataTable = () => {

    const [activePage, setActivePage] = useState(0);

    const [page, setPage] = useState<SalePage>({

        last: false, totalPages: 0,
        totalElements: 0, number: 0, first: true
    });

    useEffect(() => {
        //forma errada para mostrar necessidade dos hucks
        //let chartData : ChartData = {labels:[], series:[]};
        axios.get(`${BASE_URL}/sale?page=${activePage}&size=20`)
            .then(response => {
                setPage(response.data);
            });
    }, [activePage]);

    const changePage = (index: number) => {
        setActivePage(index);
    }
    return (
        <>
            <Pagination page={page} onPageChange={changePage} />

            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Vendedor</th>
                            <th>Clientes visitados</th>
                            <th>Negócios fechados</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {page.content?.map(y => (
                            <tr key={y.id}>
                                <td>{formatLocalDate(y.date, "dd/MM/yyyy")}</td>
                                <td>{y.seller.name}</td>
                                <td>{y.visited}</td>
                                <td>{y.deals}</td>
                                <td>{y.amount.toFixed(2)}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </>
    );
}

export default DataTable;