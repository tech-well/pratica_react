
import './style.css'


function Filho({ texto, descrption, img }) {
  return (
    <div> 
      <img src={img}/>
      <p>{texto}</p>,
      <p>{descrption}</p>
    </div>
  );
}



export default function app() {
  return (

    <div>
      <h1>olá, mundo </h1>
      <Filho texto="óla"
      descrption='descrição'
      img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOir5UTfK-w3zox5og4fQwQR3CE_owbnGdNw&s'
      />

      
    </div>

  )


}