import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";

import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

const App = () => {
    return (
        <conteiner>
            <Header />
            <Content />
            <Footer />
        </conteiner>
    );
};

export default App;
