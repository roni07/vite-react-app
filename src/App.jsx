import './App.css'
import {Button} from "antd";

function App() {

    const baseUrl = import.meta.env.VITE_APP_BASE_URL;

    console.log("MY BASE URL", baseUrl);

    return (
        <>
            <h2>Vite App</h2>

            <Button type="primary">
                Antd Test
            </Button>

        </>
    )
}

export default App;
