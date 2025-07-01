import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./Routes";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
