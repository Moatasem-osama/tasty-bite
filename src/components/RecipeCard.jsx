export default function RecipeCard({id, name , img , rating , preparation , cooking , popular, difficulty , calories}) {
  function handleClick() {
  alert(`You selected ${name}\nPreparation Time : ${preparation} Min\nCooking time : ${cooking} Min\nDifficulty : ${difficulty}\nCalories Pre Serving : ${calories}
    `);
}
  return (<>
    <div className="card" key={id}>
    {popular && <span className="popular">&#128293; popular</span>}
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <span className="rate">Rating : {rating}⭐</span>
      <button className="view-recipe" onClick={handleClick}>View Recipe</button>
    </div>

  </>
  )
}
