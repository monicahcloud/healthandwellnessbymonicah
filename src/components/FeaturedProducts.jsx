import FeaturedProductCard from '../components/FeaturedProductCard'
import Title from './Title'

const FeaturedProducts = () => {
  return (
   <section className='pt-28 align-element' id='products'>

   <Title text="Featured Products"/>
   <FeaturedProductCard/>
   </section>
  )
}

export default FeaturedProducts