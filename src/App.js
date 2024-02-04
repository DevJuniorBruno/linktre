import './App.css';
import FotoPerfil from '../src/img/elon.jpg';

function App() {
  return (
    <div className="App">

      <div className='container'>
        <header className='header' >
          <div className='Foto_perfil' >
          <img src={FotoPerfil} alt="FotoPerfil"/>
          </div>

          <div>
            <h1>Vida Rica</h1>
          </div>
          <div>
            <p>Ganhe dinheiro através da internet $$</p>
          </div>
        </header>

        <div className='buttons' >

          <button>
            Fale conosco pelo whatsapp
          </button>

          <button>
            Curso como ficar rico em 24Hrs
          </button>

        </div>

      </div>
    </div>
  );
}

export default App;
