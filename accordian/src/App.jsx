
import Accordian from './Accordian'
import './App.css'


function App() {
  const items =[
    {
   title:"Javascript Basics",
    content:"Learn Variable,Promise,Asynchronous JS "
   },
   {
    title:"React Basics",
    content:"Learn Props,State,Hooks,Router"
   },
   {
    title:"FullStack",
    content:"Lean FrontEnd,Backend alsoDeployment"
   },
   {
   title:"AWS",
    content:"Learn About S3 ,EC2 and many more"
   }
   ]


  return (
    <>
   <Accordian items={items}/>
    </>
  )
}

export default App
