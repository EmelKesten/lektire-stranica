import headerImage from "./assets/images/image.png"
import { lektire, lektire2, lektire3, lektire4 } from "./lektire";
import './App.css';


function App() {
  return (
    <div className="container">

      <div className="header">
        <div className="left-side">
          <h1 className="header-title">Lektire</h1>
        </div>
        <div className="header-image-container">
          <img className="hader-image" src={headerImage} alt="hello" />
        </div>

      </div>
      <div className="lektire">
        <h1 className="lektire-title">Lektire za 1. razred</h1>
        {lektire.map((lektira, index) => {
          const isEven = index % 2 === 0;
          return (
            <div className="each-lektira" key={index}>
              {isEven ? (
                <>
                  <img className="lektira-img spacingL" src={lektira.logo} alt={lektira.ime} />
                  <div className="text-lektira">
                    <h2>{lektira.ime}</h2>
                    <p className="lektira-description">{lektira.opis}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-lektira spacingR">
                    <h2 className="textToRight">{lektira.ime}</h2>
                    <p className="lektira-description textToRight">{lektira.opis}</p>
                  </div>
                  <img className="lektira-img" src={lektira.logo} alt={lektira.ime} />
                </>
              )}
            </div>
          );
        })}
         <h1 className="lektire-title">Lektire za 2. razred</h1>
        {lektire2.map((lektira, index) => {
          const isEven = index % 2 === 0;
          return (
            <div className="each-lektira" key={index}>
              {isEven ? (
                <>
                  <img className="lektira-img spacingL" src={lektira.logo} alt={lektira.ime} />
                  <div className="text-lektira">
                    <h2>{lektira.ime}</h2>
                    <p className="lektira-description">{lektira.opis}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-lektira spacingR">
                    <h2 className="textToRight">{lektira.ime}</h2>
                    <p className="lektira-description textToRight">{lektira.opis}</p>
                  </div>
                  <img className="lektira-img" src={lektira.logo} alt={lektira.ime} />
                </>
              )}
            </div>
          );
        }
        )}
        <h1 className="lektire-title">Lektire za 3. razred</h1>
        {lektire3.map((lektira, index) => {
          const isEven = index % 2 === 0;
          return (
            <div className="each-lektira" key={index}>
              {isEven ? (
                <>
                  <img className="lektira-img spacingL" src={lektira.logo} alt={lektira.ime} />
                  <div className="text-lektira">
                    <h2>{lektira.ime}</h2>
                    <p className="lektira-description">{lektira.opis}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-lektira spacingR">
                    <h2 className="textToRight">{lektira.ime}</h2>
                    <p className="lektira-description textToRight">{lektira.opis}</p>
                  </div>
                  <img className="lektira-img" src={lektira.logo} alt={lektira.ime} />
                </>
              )}
            </div>
          );
        }
        )}
        <h1 className="lektire-title">Lektire za 4. razred</h1>
        {lektire4.map((lektira, index) => {
          const isEven = index % 2 === 0;
          return (
            <div className="each-lektira" key={index}>
              {isEven ? (
                <>
                  <img className="lektira-img spacingL" src={lektira.logo} alt={lektira.ime} />
                  <div className="text-lektira">
                    <h2>{lektira.ime}</h2>
                    <p className="lektira-description">{lektira.opis}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-lektira spacingR">
                    <h2 className="textToRight">{lektira.ime}</h2>
                    <p className="lektira-description textToRight">{lektira.opis}</p>
                  </div>
                  <img className="lektira-img" src={lektira.logo} alt={lektira.ime} />
                </>
              )}
            </div>
          );
        }
        )}
      </div>
    </div>
  );
}

export default App;
