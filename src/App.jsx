import './App.css'
import Weather from './weather'
import { Hello } from './hello'
import Likecount from './likecount'
import ToDo from './todo'


function App() {
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a + b)

  return (
    <>
      <div className="text-center">
        <h1> Hello Sluts! It is now {now.toString()}</h1>
        <Weather />
        <Hello name="cunt" age="23" />
        <Hello name="twat" age="33" />
        <Likecount />
        <ToDo />
      </div>
    </>
  )
}

export default App
