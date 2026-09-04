import recipes from '../data.js'
import RecipeCard from './RecipeCard.jsx'
export default function RecipeList() {
    return (
        <div id='recipes' className='recipes-section'>
        <h1>Recipes</h1>
        <div className="recipes-list">
            {recipes.map(recipe => (
                <RecipeCard
                    key={recipe.id}
                    name={recipe.name}
                    img={recipe.image}
                    rating={recipe.rating}
                    popular={recipe.isPopular}
                    preparation={recipe.prepTimeMinutes}
                    cooking={recipe.cookTimeMinutes}
                    difficulty={recipe.difficulty}
                    calories={recipe.caloriesPerServing}
                />
            ))}
        </div>
        </div>
    )
}
