import { useState } from "react";
import backgroundImage from "../../../public/pizzaNostra.png";
import p1 from "../../../public/p1.png";
import remove from "../../../public/remove.png";

export default function MeusPedidos() {
  const [order, setOrder] = useState([
    {
      id: 1,
      price: 30,
      img: p1,
      name: "Calabresa",
    },
    {
      id: 2,
      price: 34.5,
      img: p1,
      name: "Quatro Queijos",
    },
    {
      id: 3,
      price: 56.9,
      img: p1,
      name: "Moda",
    },
    {
      id: 5,
      price: 64,
      img: p1,
      name: "Pizza Vegana",
    },
  ]);

  const handleRemove = (id) => {
    const copyOrder = [...order];
    const pizzaIndex = copyOrder.findIndex((item) => item.id === id);
    copyOrder.splice(pizzaIndex, 1);
    setOrder(copyOrder);
  };
  const totalPrice = order.reduce((accumulator, item) => {
    return accumulator + item.price;
  }, 0);

  return (
    <div>
      <div
        className="bg-image w-full  h-96 bg-left cover flex items-center justify-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <h1 className="text-white font-semibold text-7xl">Nostra Pizza</h1>
      </div>
      <div className="flex flex-col items-center justify-center h-auto pb-20">
        <div className="p-10 flex items-center justify-center w-full border-b border-gray-500">
          <h3 className="text-3xl font-bold">Meus Pedidos</h3>
        </div>
        <div className="w-1/2 bg-amber-100">
          {order.map((item) => (
            <div
              key={item.id}
              className="flex w-full items-center justify-between p-4"
            >
              <div className="flex items-center gap-4">
                <button onClick={() => handleRemove(item.id)}>
                  <img src={remove} className="w-6" alt="" />
                </button>
                <img src={item.img} alt="Pizza" />
                <p>{item.name}</p>
              </div>
              <div>
                <p>R$ {item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-1/2 bg-red-600 p-4 flex items-center justify-between">
          <p>TOTAL</p>
          <p>R$ {totalPrice}</p>
        </div>
        <div className="pt-12">
          <a href="/cardapio" className="rounded-xl bg-red-600 p-4 text-white">VOLTAR AO CARDÁPIO</a>
        </div>
      </div>
    </div>
  );
}
