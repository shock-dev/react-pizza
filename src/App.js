import React from "react";
import { Header } from './components';
import { Home, Cart} from "./components/pages";
import { Route } from "react-router-dom";
import axios from "axios";

function App() {
    const [products, setProducts] = React.useState([])

    React.useEffect(() => {
        axios
            .get('http://localhost:3000/pizzas')
            .then(products => setProducts(products.data))
    }, [])

    return (
        <div className="wrapper">
            <Header/>

            <div className="content">
                <Route path='/' render={() => <Home items={products}/>} exact/>
                <Route path='/cart' component={Cart} exact/>
            </div>
        </div>
    );
}

export default App;
