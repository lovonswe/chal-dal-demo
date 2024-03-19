import logo from './logo.svg';
import './App.css';
import RecipeReviewCard from './components/card/RecipeReviewCard';
import CardGpt from './components/card/CardGpt';
import ProductCard from './components/card/ProductCard';


function App() {
  const product = {
    name : "Nahid",
    description : "I am nahid Hasan Lovon",
    image: "https://dcblog.b-cdn.net/wp-content/uploads/2021/02/Full-form-of-URL-1-1024x824.jpg"
  }
  return (
    <div >
      {/* <RecipeReviewCard />
      <CardGpt product={product}/> */}
      <ProductCard />
    </div>
  );
}

export default App;
