import React, { useState } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap'; 
import { useNavigate } from 'react-router-dom'; 
const products = [
  { id: 1, name: 'Fruit Apple', price: '$80', category: 'Fruit', image: 'https://plantskingdom.in/cdn/shop/products/rose-apple.jpg?v=1657427378&width=1445' },
  { id: 2, name: 'guava', price: '$100', category: 'Fruit', image: 'https://cdn.shopify.com/s/files/1/0082/6150/0991/files/Whole-and-cut-pink-guava-fruits_0c07bc86-c3b7-4eec-8e4e-a0d3abc3b846.jpg?v=1690451848' },
  { id: 3, name: 'PineApple', price: '$100', category: 'Fruit', image: 'https://st.depositphotos.com/3260227/4722/i/450/depositphotos_47222555-stock-photo-ripe-pineapple.jpg' },
  { id: 4, name: 'Banana', price: '$30', category: 'Fruit', image: 'https://image.tuasaude.com/media/article/kh/ej/dieta-da-banana_55714_l.jpg' },
  { id: 5, name: 'Cheeku', price: '$40', category: 'Fruit', image: 'https://www.shutterstock.com/image-photo/fruit-ellipsoid-berry-manilkara-zapota-600nw-1772959055.jpg' },
  { id: 6, name: 'Pomegranate', price: '$100', category: 'Fruit', image: 'https://media.istockphoto.com/id/1142801159/photo/ripe-pomegranate-fruit-on-a-old-black-wooden-vintage-background-selective-focus.jpg?s=612x612&w=0&k=20&c=oRiVWO60Ec3_EvlRuJcSCOlR1wVateBLz6henWi3zYI=' },
  { id: 7, name: 'Orange', price: '$50', category: 'Fruit', image: 'https://images.pexels.com/photos/207085/pexels-photo-207085.jpeg?cs=srgb&dl=pexels-pixabay-207085.jpg&fm=jpg' },
  { id: 8, name: 'Papaya', price: '$60', category: 'Fruit', image: 'https://irp.cdn-website.com/7a5d8045/dms3rep/multi/papaya+fruit.jpg' },
  { id: 9, name: 'Lichi', price: '$90', category: 'Fruit', image: 'https://www.bhg.com/thmb/mz7rrwTfaN0DJAaKAsxL3trqX7M=/1824x0/filters:no_upscale():strip_icc()/lychee-on-table-sliced-open-736aa3fbe6c34d54ac20a0c833c29b3f.jpg' },
  { id: 9, name: 'coconut', price: '$30', category: 'Fruit', image: 'https://thumbs.dreamstime.com/b/fresh-green-coconut-straw-ready-to-drinking-isolated-white-background-fresh-green-coconut-ready-to-drinking-133460229.jpg' },
  { id: 10, name: 'Grapes', price: '$40', category: 'Fruit', image: 'https://meridianfarmmarket.ca/cdn/shop/products/green-seedless-grapes-2lb_460x@2x.jpg?v=1657578209' },
  { id: 11, name: 'Mango', price: '$90', category: 'Fruit', image: 'https://alphonsomango.in/cdn/shop/files/Devgad-Hapus-mango.jpg?v=1733422121&width=460' },
  { id: 12, name: 'Cherry', price: '$120', category: 'Fruit', image: 'https://image.shutterstock.com/image-photo/many-fresh-cherries-bright-vibrant-260nw-2504675847.jpg' },
  { id: 13, name: 'Kivi', price: '$140', category: 'Fruit', image: 'https://img.freepik.com/premium-photo/kiwi-fruit-white-background_62856-1519.jpg' },
  { id: 14, name: 'watermelon', price: '$130', category: 'Fruit', image: 'https://static.vecteezy.com/system/resources/thumbnails/011/730/709/small_2x/sliced-pieces-of-ripe-sweet-watermelon-lie-on-a-gray-ceramic-plate-photo.jpg' },
];

const Home = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate(); 

  
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4"> Fruit </h1>
      <Row xs={1} sm={2} md={3} lg={8} className="g-4">
        {products.map((product) => (
          <Col key={product.id}>
            <Card className="shadow-sm">
              
              <Card.Img 
                variant="top" 
                src={product.image} 
                alt={product.name} 
                style={{ width: '100%', height: '300px', objectFit: 'cover' }} 
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  <strong>{product.price}</strong>
                </Card.Text>
                <Card.Text className="text-muted">{product.category}</Card.Text>
                <div className="d-flex justify-content-between">
                  <Button 
                    variant="outline-primary" 
                    size="sm" 
                    onClick={() => addToCart(product)} 
                  >
                    
                  </Button>
                  <Button variant="success" size="sm">
                    
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Button 
        variant="info" 
        onClick={() => navigate('/cart', { state: { cart } })} 
        className="mt-5"
      >
        View Fruit Card ({cart.length})
      </Button>
    </div>
    
  );
 
};

export default Home;
