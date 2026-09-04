import cake from '../assets/hero-img.png'
export default function Hero() {
  return (
    <div id='home' className='hero-section'>
      <img src={cake} alt="cake" />
       <article>
        <h1>Discover Delicious Recipes</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo mollitia quae excepturi, aperiam atque ipsam nisi nihil suscipit rem dolorem. Beatae laudantium minus cum commodi placeat, vitae eos expedita sed!</p>
       </article>
    </div>
  )
}
