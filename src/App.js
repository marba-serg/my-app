import Costs from "./components/Costs";

function App() {
  const costs = [
    {
      date: new Date(2021, 2, 12),
      description: "Холодильник",
      amount: 999.99,
    },
    {
      date: new Date(2022, 5, 12),
      description: "Телевизор",
      amount: 499.99,
    },
    {
      date: new Date(2022, 5, 12),
      description: "Ковер",
      amount: 99.99,
    },
  ];

  return (
    <div>
      <h1>Приложение на REACT</h1>
      <p>You know I feel that this cource is really greate</p>
      <Costs costs={costs}></Costs>
    </div>
  );
}

export default App;
