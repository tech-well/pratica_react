import './style.css'

export default function Card(src, alt ,title ,description) {
    return (
        <div class='card'>

            <img src={src}
            alt={alt}/>

            <h1>{title}</h1>  

            <p>{description}</p>

        </div>
    )
}