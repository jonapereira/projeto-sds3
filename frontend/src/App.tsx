import NavBar from "assets/css/components/navBar";
import Footer from "assets/css/components/Footer";
import DataTable from "assets/css/components/DataTable";
import BarChat from "assets/css/components/BarChat";
import DonutChart from "assets/css/components/DonutChart";


function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary"> Planilha de Vendas</h1>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de Sucesso</h5>
            <BarChat />
          </div>
        
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Todas as Vendas</h5>
            <DonutChart/>
          </div>
        </div>
        <div className="py-3">
          <h2 className="text-primary">Todas Vendas</h2>
        </div>
        

        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
