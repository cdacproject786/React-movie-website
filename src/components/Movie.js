

const Movie = (props) => {
  return (
    <div className = "movie">
      <img src={props.image} alt=""/>
      <p>{props.title}</p>
      <p>{props.year} </p>
      <p>{props.runtime}</p>
      <p>{props.genre}</p>
      <p>{props.released}</p>
    </div>
  )
}

export default Movie
