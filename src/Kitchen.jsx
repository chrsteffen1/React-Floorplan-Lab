import Oven from "./Oven"
import Sink from "./Sink"

function Kitchen(props){
  return (
    <>
    <h1>Kitchen</h1>
    <div>
    <Oven />
    </div>
    <div>
    <Sink />
    </div>
    </>
  )
}

export default Kitchen