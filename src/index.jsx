import React from 'react';
import { render } from 'react-dom';
import './style.css';

const content = () => {
<>  
      <h1>Stánek s ovocem</h1>              
      <div className="fruitstand"></div>  
        <div class="apples">
		     <img class="fruit__image" src="https://github.com/Czechitas-React-podklady/React-lekce-03/raw/main/cviceni-02/jablko.jpg" />
		    <h2 class="fruit__name">{apples.name}</h2>
		    <p class="fruit__text">{apples.text}</p>
    	</div>
</>
};


            // jedná se o dvě značky, takže abychom mohli obsah proměnné poslat do funkce "render" musíme je zabalit buď do značky, nebo do fragmentu
            // v Reactu (jsx) se místo class píše className 

const apples = {
  name: "Jablka",
  image: "https://github.com/Czechitas-React-podklady/React-lekce-03/raw/main/cviceni-02/jablko.jpg",
  text: "Výborná jablíčka, lepší na trhu nenajdete. Máme je červená i zelená"
};

const pears = {
  name: "Hrušky",
  image: "https://github.com/Czechitas-React-podklady/React-lekce-03/raw/main/cviceni-02/hruska.jpg",
  text: "Někdy jsi říkám, že hrušky jsou podzimní kolegyně jablek. My říkáme, že jsou to královny podzimu"
};



const App = () => {
  return [
  <div className="container">
    <header>
    <div className="fruitstand"></div> 
      <h1>Stánek s ovocem</h1>
    </header>
    <main>
      <div className = "fruits">
        <div class="apples">
		     <img class="fruit__apples" src={apples.image} />
		    <h2 class="fruit__name">{apples.name}</h2>
		    <p class="fruit__text">{apples.text}</p>
    	  </div>
        <div class="pears">
		     <img class="fruit__pears" src={pears.image} />
		    <h2 class="fruit__name">{pears.name}</h2>
		    <p class="fruit__text">{pears.text}</p>
    	  </div>
      </div>
    </main>
  </div>
  ]
};

render(<App />, document.querySelector('#app'));


// ukázka z kodim.cz

// import React from 'react';
// import { render } from 'react-dom';

// const ShoppingItem = (props) => {
//   return (
//     <div className="item">
//       <span className="item__name">{props.name}</span>
//       <span className="item__amount">{props.amount}</span>
//     </div>
//   );
// };

// render(
//   <>
//     <header>
//       <h1>Shopping List</h1>
//     </header>
//     <main className="shopping-list">
//       <ShoppingItem name="Jablka" amount="1 kg" />
//       <ShoppingItem name="Skořice" amount="1 balení" />
//       <ShoppingItem name="Máslo" amount="250 g" />
//       <ShoppingItem name="Mouka" amount="500 g" />
//     </main>
//     <footer>Martin Podloucký</footer>
//   </>,
//   document.getElementById('app')
// );



// lepší je psát to takto, do renderu by se toho totiž nemělo psát tolik

// import React from 'react';
// import { render } from 'react-dom';

// const ShoppingItem = (props) => {
//   return (
//     <div className="item">
//       <span className="item__name">{props.name}</span>
//       <span className="item__amount">{props.amount}</span>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <>
//       <header>
//         <h1>Shopping List</h1>
//       </header>
//       <main className="shopping-list">
//         <ShoppingItem name="Jablka" amount="1 kg" />
//         <ShoppingItem name="Skořice" amount="1 balení" />
//         <ShoppingItem name="Máslo" amount="250 g" />
//         <ShoppingItem name="Mouka" amount="500 g" />
//       </main>
//       <footer>Martin Podloucký</footer>
//     </>
//   );
// };

// render(<App />, document.getElementById('app'));



