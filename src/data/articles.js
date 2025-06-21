
const articles = [
  {
    id: 1,
    title: "The Future of Electric Vehicles: Trends to Watch in 2025",
    slug: "future-electric-vehicles-trends-2025",
    excerpt: "From solid-state batteries to advanced autonomous driving, here are the key developments to watch in the EV market this year.",
    content: `<p>As we move into 2025, the electric vehicle (EV) market is poised for significant growth and innovation. Here are the key trends that will shape the industry:</p>

<h2>1. Solid-State Battery Technology</h2>
<p>Leading manufacturers are making strides in solid-state battery technology, promising longer ranges and faster charging times. This breakthrough could revolutionize EV adoption rates.</p>

<h2>2. Advanced Autonomous Driving</h2>
<p>Level 3 and Level 4 autonomous driving capabilities are becoming more common, with several manufacturers rolling out features that allow hands-off driving in specific conditions.</p>

<h2>3. Charging Infrastructure Expansion</h2>
<p>Government initiatives and private investments are rapidly expanding charging networks, making EV ownership more convenient for consumers.</p>

<h2>4. Vehicle-to-Grid (V2G) Technology</h2>
<p>EVs are increasingly being used as energy storage solutions, allowing owners to sell excess power back to the grid during peak demand periods.</p>

<p>These developments indicate a promising future for electric vehicles, with 2025 shaping up to be a pivotal year in the industry's evolution.</p>`,
    image: "https://cdn.prod.website-files.com/671ae2a9bc5485dc9b4c9a70/67377dfce92bc28f4253162a_car-show-p-800.jpg",
    date: "May 15, 2025",
    author: "Alex Morgan",
    category: "electric"
  },
  {
    id: 2,
    title: "SUV Showdown: Top 5 Luxury Models Compared",
    slug: "suv-showdown-top-luxury-models",
    excerpt: "We put the latest luxury SUVs to the test to help you decide which premium model delivers the best value and performance.",
    content: `<p>In the competitive luxury SUV market, manufacturers are pushing boundaries with innovative features and advanced technology. Here's our comparison of the top 5 luxury SUVs:</p>

<h2>1. Luxury SUV Model A</h2>
<p>Features: Premium leather upholstery, advanced infotainment system, 4-wheel drive</p>

<h2>2. Luxury SUV Model B</h2>
<p>Standout: Advanced safety features and superior fuel efficiency</p>

<h2>3. Luxury SUV Model C</h2>
<p>Highlight: Exceptional off-road capabilities and spacious interior</p>

<h2>4. Luxury SUV Model D</h2>
<p>Key Feature: State-of-the-art autonomous driving capabilities</p>

<h2>5. Luxury SUV Model E</h2>
<p>Unique Selling Point: Premium audio system and advanced climate control</p>

<p>Each model offers unique advantages, but the choice ultimately depends on your specific needs and preferences.</p>`,
    image: "https://cdn.prod.website-files.com/671ae2a9bc5485dc9b4c9a70/67377e5e5c7d650ff0ee0a92_sport-car-p-800.jpg",
    date: "May 10, 2025",
    author: "Jessica Chen",
    category: "suv"
  },
  {
    id: 3,
    title: "First Drive: The All-New 2025 Sedan Revolution",
    slug: "first-drive-2025-sedan-revolution",
    excerpt: "Our comprehensive review of the redesigned 2025 Sedan Revolution reveals why this model is changing the game.",
    content: `<p>The 2025 Sedan Revolution marks a significant departure from its predecessors, boasting a sleek new design and cutting-edge technology. Here's what we found during our first drive:</p>

<h2>Design</h2>
<p>The new model features a more aerodynamic profile and modern LED lighting system, giving it a distinctive look that sets it apart from competitors.</p>

<h2>Performance</h2>
<p>With improved handling and a more responsive engine, the Sedan Revolution delivers a smooth and engaging driving experience.</p>

<h2>Technology</h2>
<p>The latest infotainment system and advanced driver assistance features make this sedan a standout choice for tech-savvy consumers.</p>

<p>Overall, the 2025 Sedan Revolution represents a significant step forward in the sedan market, offering a compelling combination of style, performance, and technology.</p>`,
    image: "https://cdn.prod.website-files.com/671ae2a9bc5485dc9b4c9a70/67377ea29cad4df797d4bd24_car-interior.jpg",
    date: "May 5, 2025",
    author: "Michael Johnson",
    category: "sedan"
  },
  {
    id: 4,
    title: "Hybrid vs Electric: Which is Right for Your Lifestyle?",
    slug: "hybrid-vs-electric-comparison",
    excerpt: "A detailed comparison of hybrid and fully electric vehicles to help you make the right choice for your needs and driving habits.",
    content: `<p>Choosing between a hybrid and electric vehicle can be challenging. Here's a comprehensive comparison to help you decide:</p>

<h2>Hybrid Vehicles</h2>
<ul>
  <li>Pros: No range anxiety, convenient refueling, good fuel efficiency</li>
  <li>Cons: Higher maintenance costs, less environmentally friendly than EVs</li>
  <li>Ideal for: Long-distance drivers, those with limited charging infrastructure</li>
</ul>

<h2>Electric Vehicles</h2>
<ul>
  <li>Pros: Zero emissions, lower operating costs, instant torque</li>
  <li>Cons: Range limitations, longer charging times, higher upfront cost</li>
  <li>Ideal for: City drivers, those with home charging options</li>
</ul>

<p>The choice ultimately depends on your driving habits and lifestyle. Consider your daily commute distance, access to charging infrastructure, and budget before making a decision.</p>`,
    image: "https://cdn.prod.website-files.com/671ae2a9bc5485dc9b4c9a70/67377ee0a798a7422bb3fa06_auto-expo-p-800.jpg",
    date: "April 28, 2025",
    author: "Samantha Lee",
    category: "hybrid"
  },
  {
    id: 5,
    title: "Maintenance Tips: Extending Your Vehicle's Life",
    slug: "maintenance-tips-vehicle-life-extension",
    excerpt: "Expert advice on simple maintenance routines that can significantly extend your vehicle's lifespan and performance.",
    content: `<p>Proper vehicle maintenance is crucial for extending its lifespan and maintaining optimal performance. Here are our top maintenance tips:</p>

<h2>Regular Oil Changes</h2>
<p>Follow your manufacturer's recommended schedule for oil changes to keep your engine running smoothly.</p>

<h2>Tire Maintenance</h2>
<p>Regularly check tire pressure and rotate tires every 5,000-7,000 miles to ensure even wear.</p>

<h2>Fluid Checks</h2>
<p>Regularly check and top up essential fluids like coolant, brake fluid, and transmission fluid.</p>

<h2>Battery Care</h2>
<p>Keep your battery terminals clean and check the battery condition annually.</p>

<h2>Air Filter Replacement</h2>
<p>Replace your air filter every 12,000-15,000 miles to maintain engine efficiency.</p>

<p>By following these simple maintenance tips, you can significantly extend the life of your vehicle and avoid costly repairs.</p>`,
    image: "https://cdn.prod.website-files.com/671ae2a9bc5485dc9b4c9a70/67377f2b043effdd46763e78_engine-p-800.jpg",
    date: "April 22, 2025",
    author: "David Wilson",
    category: "maintenance"
  },
  {
    id: 6,
    title: "Luxury Car Review: Mercedes-Benz S-Class",
    slug: "luxury-car-review-mercedes-benz-s-class",
    excerpt: "Our in-depth review of the latest Mercedes-Benz S-Class reveals why it remains the benchmark for luxury sedans.",
    content: `<p>The Mercedes-Benz S-Class has long been the standard-bearer for luxury sedans, and the latest model continues this proud tradition with remarkable innovations and refinements.</p>

<h2>Exterior Design</h2>
<p>The new S-Class features a sleek, understated elegance with perfect proportions and attention to detail that exudes sophistication and presence.</p>

<h2>Interior Luxury</h2>
<p>Inside, the S-Class offers an unparalleled cabin experience with premium materials, ambient lighting, and massage seats that transform every journey into a spa-like experience.</p>

<h2>Technology Suite</h2>
<p>The MBUX infotainment system with augmented reality navigation and a 12.8-inch OLED touchscreen represents the pinnacle of automotive technology integration.</p>

<h2>Performance</h2>
<p>Whether equipped with the smooth inline-six or the powerful V8 engine, the S-Class delivers effortless acceleration combined with remarkable ride comfort.</p>

<p>The Mercedes-Benz S-Class remains the ultimate expression of automotive luxury, technology, and engineering excellence, justifying its position as the flagship of the brand.</p>`,
    image: "https://cdn.prod.website-files.com/671ae2a9bc5485dc9b4c9a70/67377e5e5c7d650ff0ee0a92_sport-car-p-800.jpg",
    date: "May 5, 2025",
    author: "Jonathan Price",
    category: "sedan"
  }
];

export const getArticles = () => {
  // Sort articles by date (newest first)
  return [...articles].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};

export const getArticleBySlug = (slug) => {
  return articles.find(article => article.slug === slug);
};

export const getArticlesByCategory = (category) => {
  return articles.filter(article => 
    article.category.toLowerCase() === category.toLowerCase()
  );
};
