import { Provider } from './contexto';
import "@fontsource/roboto"
import "./index.css"
import { Caminhos } from './routes/routes';


function App() {

  return (
    <Provider>
      <Caminhos />
    </Provider>
  );
}

export default App;
