import CostItem from './components/CostItem'

function App() {
  
  const сosts = [
    {
      date: new Date(2021, 2, 12),
      description: 'Холодильник',
      amount: 999.99
    },
    {
      date: new Date(2022, 5, 12),
      description: 'Телевизор',
      amount: 499.99
    },
    {
      date: new Date(2022, 5, 12),
      description: 'Ковер',
      amount: 99.99
    }
  ]
  
  return (
    <div>
      <h1>Приложение на REACT</h1>
      <p>You know I feel that this cource is really greate</p>
      <CostItem date = {сosts[0].date} description = {сosts[0].description} amount = {сosts[0].amount}></CostItem>
      <CostItem date = {сosts[1].date} description = {сosts[1].description} amount = {сosts[1].amount}></CostItem>
      <CostItem date = {сosts[2].date} description = {сosts[2].description} amount = {сosts[2].amount}></CostItem>
    
    </div>
  );
}

export default App;
