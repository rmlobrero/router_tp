import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Bicicletas from "./routes/bicicletas";
import Bicicleta from "./routes/bicicleta"
import Invoices from "./routes/invoices";
import Invoice from "./routes/invoice";
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="bicicletas" element={<Bicicletas />}>
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select One</p>
              </main>
            }
          />
          <Route path=":bicicletaId" element={<Bicicleta />} />
        </Route>
        <Route path="invoices" element={<Invoices />}>
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select One</p>
              </main>
            }
          />
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>NO HAY NADA AQUI!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);