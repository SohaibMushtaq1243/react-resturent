import React from 'react';
import './App.css';

const foodItems = [
  {
    id: 1,
    name: "Pizza Margherita",
    imageUrl: "https://media.istockphoto.com/id/686957124/photo/pizza-margherita.jpg?s=612x612&w=0&k=20&c=STQALvMIjcgXPIvpXXUXItAl05QtbmEUQ_PfwSato48=",
    borough: "Available in Hounslow",
  },
  {
    id: 2,
    name: "Chicken Curry",
    imageUrl: "https://thumbs.dreamstime.com/b/butter-chicken-curry-bowl-delicious-indian-naan-bread-basmati-rice-cilantro-garnish-104019037.jpg",
    borough: "Available in Harrow",
  },
  {
    id: 3,
    name: "Rice",
    imageUrl: "https://img.freepik.com/premium-photo/special-cooked-rice-plate_1025753-612.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1699833600&semt=ais",
    borough: "Available in Barking",
  },
  {
    id: 4,
    name: "Pasta",
    imageUrl: "https://img.freepik.com/premium-photo/penne-pasta-cream-cheese_1025864-1788.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699833600&semt=ais",
    borough: "Available in Hillingdon",
  },
  {
    id: 4,
    name: "Tacos",
    imageUrl: "https://i0.wp.com/www.onceuponachef.com/images/2023/08/Beef-Tacos.jpg?resize=760%2C570&ssl=1",
    borough: "Available in Hillingdon",
  },
  {
    id: 4,
    name: "Burger",
    imageUrl: "https://img.freepik.com/premium-photo/chicken-burger-deep-fired-chicken-fillet-with-tomato-cheese_1025753-738.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699142400&semt=ais",
    borough: "Available in Hillingdon",
  },
  {
    id: 4,
    name: "Sandwich",
    imageUrl: "https://transform.nws.ai/https%3A//cdn.thenewsroom.io/platform/story_media/1288818876/146967997.jpg/w_1200,c_limit/",
    borough: "Available in Hillingdon",
  },
];

const App = () => {
  return (
    <div className="container">
      <h1 className="app-name">Community Plate</h1>
      <div className="food-items">
        {foodItems.map((foodItem) => (
          <div className="food-item" key={foodItem.id}>
            <img src={foodItem.imageUrl} alt={foodItem.name} />
            <div className="food-item-content">
              <h2 className="food-item-name">{foodItem.name}</h2>
              <p className="food-item-description">{foodItem.borough}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
