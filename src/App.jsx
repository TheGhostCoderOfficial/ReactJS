import Header from './components/header/header'
import Body from './components/body/Body'
import Nav from './components/header/nav';
import Projects from './components/body/Projects';



const App = () => {
  return (
    <div className="min-h-screen bg-gray-700 flex flex-wrap gap-5 max-w-screen overflow-hidden justify-center">
      <Header />
      <Nav />

      <Body />

      <Projects />


    </div>
  )
}

export default App