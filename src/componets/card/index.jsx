// import './style.css'


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

    <div class='card'>
      <h1>olá, mundo </h1>
      <Filho texto="digimon"
      descrption='descrição'
      img='https://img-c.udemycdn.com/course/750x422/1221442_4630.jpg'
      />

      
    </div>

  )


}