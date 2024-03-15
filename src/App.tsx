import "./App.css";
import Footer from "./component/footer/Footer";
import NavBar from "./component/navbar/NavBar";
import Home from "./pages/collections";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;
