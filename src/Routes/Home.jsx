import Card from '../Components/Card'
import {useContextGlobal} from '../Components/utils/global.context.jsx'


const Home = () => {
  const {state: {dentists}} = useContextGlobal()
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {dentists.map((dentist) => <Card key={dentist.id} dentist={dentist} />)}
      </div>
    </main>
  )
}

export default Home
