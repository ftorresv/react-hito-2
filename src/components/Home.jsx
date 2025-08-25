import CardPizza from './CardPizza.jsx'
import Header from './Header.jsx'
function Home(){
    return (
        <>
        <div>
            <Header />
        </div>
        <div className="d-flex flex-wrap justify-content-center">
          <CardPizza
            name="Pizza Margherita"
            price={10990}
            ingredients={["Tomate", "Mozzarella", "Albahaca"]}
            img="src/assets/Pizza-1.jpg" alt="Pizza Margherita"
          />
          <CardPizza
            name="Pizza Pepperoni"
            price={12990}
            ingredients={["Tomate", "Mozzarella", "Pepperoni"]}
            img="src/assets/Pizza-2.jpg" alt="Pizza Pepperoni"
          />
          <CardPizza
            name="Pizza Vegetariana"
            price={13990}
            ingredients={["Tomate", "Mozzarella", "Pimientos", "Cebolla", "Olivas"]}
            img="src/assets/Pizza-3.jpg" alt="Pizza Vegetariana"
          />
        </div>
        </>
    )
}

export default Home;