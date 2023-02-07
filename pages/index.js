import Link from "next/link";

const HomePage = ({ forecast }) => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam adipisci recusandae consequuntur quo rerum, dignissimos vitae rem odio dicta temporibus, voluptates neque incidunt! Iusto atque saepe adipisci quas explicabo fuga accusantium, pariatur eum, dicta a laboriosam illum sunt repudiandae dolorem autem esse rem magni nostrum necessitatibus earum possimus quasi omnis. Quo iusto voluptate ut consequuntur numquam, a officia atque inventore deserunt molestias nostrum? Fuga, tempora praesentium. Expedita nulla modi quod alias ipsum eius veritatis recusandae non sit? Harum corporis soluta atque deleniti placeat repellat accusantium incidunt illo alias a unde minima, quod laboriosam nihil doloribus eligendi temporibus nostrum, ad laborum?</p>
      <Link href="/about">Go to AboutPage</Link>
      <p>Weather forcast: {forecast}</p>
    </div>
  )
}

export async function getServerSideProps() {
  const response = await fetch("https://api.weather.gov/gridpoints/MFL/109,49/forecast")
  const data = await response.json()

  return {
    props: {
      forecast: data.properties.periods[0].detailedForecast
    }
  }
}

export default HomePage;