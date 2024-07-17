const Cart = require("../models/cart");
const Category = require("../models/category");
const Product = require("../models/product ");
const Region = require("../models/region");

module.exports = async function initializeDatabase() {
  try {
    // Clear existing collections
    await Category.deleteMany({});
    await Region.deleteMany({});
    await Product.deleteMany({});
    await Cart.deleteMany({});

    // Insert data into Categories collection
    const categories = await Category.insertMany([
      { name: 'Electronics', image_path: 'electronics.png' },
      { name: 'Furniture', image_path: 'home.png' },
      { name: 'Vehicles', image_path: 'vehicles.png' },
      { name: 'Real Estate', image_path: 'real-estate.png' },
      { name: 'Jobs', image_path: 'jobseekers.png' },
      { name: 'Services', image_path: 'beauty.png' },
      { name: 'Pets', image_path: 'animals.png' },
      { name: 'Mobile Phones & Tablet', image_path: 'mobile.png' },
      { name: 'Health & Beauty', image_path: 'beauty.png' },
      { name: 'Fashion', image_path: 'fashion.png' },
      { name: 'Sport, Arts & Outdoors', image_path: 'hobbies.png' },
    ]);

    // Insert data into Regions collection
    const regions = await Region.insertMany([
      { name: 'Greater Accra' },
      { name: 'Ashanti' },
      { name: 'Bono' },
      { name: 'Ahafo' },
      { name: 'Volta' },
    ]);

    // Insert data into Products collection
    const products = await Product.insertMany([
      {
        name: 'Smartphone',
        description: 'A high-end smartphone with 128GB storage',
        price: 699.99,
        stock_quantity: 50,
        category_id: categories[0]._id,
        region_id: regions[0]._id,
        image: 'iphone14promax.jpg'
      },
      {
        name: 'HP Laptop',
        description: 'HP Laptop with 16GB RAM, 512GB SSD.',
        price: 300.00,
        stock_quantity: 30,
        category_id: categories[1]._id,
        region_id: regions[2]._id,
        image: 'https://i5.walmartimages.com/seo/Lenovo-IdeaPad-3i-14-Laptop-Intel-Core-i5-1235U-8GB-RAM-512GB-SSD-Windows-11-Home-Arctic-Grey-82RJ0007US_2636a308-dc1c-4235-a1f3-cc826ed59556.6790f1aa7755583035b970d4f8ea4526.jpeg'
      },
      {
        name: 'HP Laptop',
        description: 'HP Laptop with 16GB RAM, 512GB SSD.',
        price: 300.00,
        stock_quantity: 30,
        category_id: categories[1]._id,
        region_id: regions[3]._id,
        image: 'https://i5.walmartimages.com/seo/HP-Pavilion-13-3-FHD-Intel-Core-i3-8GB-RAM-128GB-SSD-Silver_906cf222-d138-430a-8146-d129b0cca3a2_2.f838f300a6e31f50074faf4091a1da7b.jpeg'
      },
      {
        name: 'Apple Monitor',
        description: 'Apple Monitor with 4K resolution.',
        price: 300.00,
        stock_quantity: 50,
        category_id: categories[0]._id,
        region_id: regions[0]._id,
        image: 'https://photographylife.com/wp-content/uploads/2018/05/Apple-iMac-Retina-Monitor.jpg'
      },
      {
        name: 'Smartphone',
        description: 'A high-end smartphone with 128GB storage',
        price: 699.99,
        stock_quantity: 50,
        category_id: categories[0]._id,
        region_id: regions[0]._id,
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone15pro-digitalmat-gallery-1-202309_GEO_US?wid=728&hei=666&fmt=png-alpha&.v=1693346851451'
      }
    ]);

    // Insert data into Cart collection
    await Cart.create({ product_id: products[0]._id, quantity: 2 });

    console.log('DATABASE INITIALIZED...');
  } catch (err) {
    console.error('DATABASE INITIALIZATION ERROR:', err);
  } finally {
    // mongoose.connection.close();
  }
}