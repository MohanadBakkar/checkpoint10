import products from "./products"
import Card from 'react-bootstrap/Card'
import Name from "./Name"
import Price from "./Price"
import Description from "./Description"
import Path from "./Path"

const App = () => {
  return (
    <div>
      {
        products.map((product) => {
          return(
            <Card style={{ backgroundColor: '#d7e8e6', width: '20rem', border: '10rem', height: '10rem' }}>
              <Name name={product['name']}></Name>
              <Price price={product['price']}></Price>
              <Description description={product['description']}></Description>
              <Path path={product['path']}></Path>
            </Card>
          );
        })
      }
    </div>
  );
}
export default App
