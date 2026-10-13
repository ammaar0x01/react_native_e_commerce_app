// productsData.ts
// use int ids instead? 

export interface Product {
  id: string;
  name: string;
  desc: string;
  price: string;
  category: string;
  locations_available: string[];
  new_or_used: 'New' | 'Used';
}

export const DUMMY_PRODUCTS: Product[] = [
  // --- Jewellery ---
  { id: 'j1', name: '9ct Yellow Gold Diamond Ring', desc: 'Elegant diamond ring featuring 0.5ct total weight diamonds in 9ct yellow gold.', price: 'R 4,500', category: 'Jewellery', locations_available: ['Bellville', 'Parow'], new_or_used: 'Used' },
  { id: 'j2', name: 'Sterling Silver Curb Chain', desc: 'Heavy solid 925 sterling silver curb chain, 60cm length.', price: 'R 899', category: 'Jewellery', locations_available: ['Cape Town CBD'], new_or_used: 'New' },
  { id: 'j3', name: '18ct White Gold Sapphire Pendant', desc: 'Natural blue sapphire surrounded by halo cubic zirconia.', price: 'R 3,200', category: 'Jewellery', locations_available: ['Claremont', 'Bellville'], new_or_used: 'Used' },
  { id: 'j4', name: 'Tissot PRX Quartz Watch', desc: 'Swiss-made stainless steel watch with blue dial and sapphire crystal.', price: 'R 5,999', category: 'Jewellery', locations_available: ['Century City'], new_or_used: 'Used' },
  { id: 'j5', name: '9ct Rose Gold Hoop Earrings', desc: 'Classic polished lightweight rose gold hoop earrings.', price: 'R 1,250', category: 'Jewellery', locations_available: ['Parow'], new_or_used: 'New' },
  { id: 'j6', name: 'Seiko 5 Sports Automatic Watch', desc: 'Reliable automatic movement with black bezel and nylon strap.', price: 'R 3,499', category: 'Jewellery', locations_available: ['Bellville', 'Cape Town CBD'], new_or_used: 'Used' },
  { id: 'j7', name: 'Gold-Plated Tennis Bracelet', desc: 'Sparkling CZ stones set in durable yellow gold plating.', price: 'R 650', category: 'Jewellery', locations_available: ['Claremont'], new_or_used: 'New' },
  { id: 'j8', name: 'Vintage Pocket Watch', desc: 'Antique mechanical wind-up pocket watch with intricate engraved case.', price: 'R 1,800', category: 'Jewellery', locations_available: ['Bellville'], new_or_used: 'Used' },
  { id: 'j9', name: 'Pandora Charm Bracelet', desc: 'Silver snake chain bracelet with 4 signature charms included.', price: 'R 1,499', category: 'Jewellery', locations_available: ['Century City', 'Parow'], new_or_used: 'Used' },
  { id: 'j10', name: 'Titanium Men\'s Wedding Band', desc: 'Comfort fit matte finish titanium band, size 10.', price: 'R 750', category: 'Jewellery', locations_available: ['Cape Town CBD'], new_or_used: 'New' },

  // --- Computers ---
  { id: 'c1', name: 'Acer Aspire Gaming Laptop', desc: 'Intel Core i5, 16GB RAM, 512GB SSD, NVIDIA GTX 1650.', price: 'R 6,499', category: 'Computers', locations_available: ['Bellville', 'Claremont'], new_or_used: 'Used' },
  { id: 'c2', name: 'Dell Latitude 7490 Business Laptop', desc: 'Intel Core i7 8th Gen, 16GB RAM, 256GB SSD, Windows 11 Pro.', price: 'R 4,999', category: 'Computers', locations_available: ['Cape Town CBD'], new_or_used: 'Used' },
  { id: 'c3', name: 'Logitech Mechanical Keyboard', desc: 'Tactile switches with customizable RGB backlighting.', price: 'R 1,299', category: 'Computers', locations_available: ['Century City', 'Parow'], new_or_used: 'New' },
  { id: 'c4', name: 'Dell 27" 4K UHD Monitor', desc: 'IPS panel with ultra-thin bezels, HDMI and DisplayPort inputs.', price: 'R 4,500', category: 'Computers', locations_available: ['Bellville'], new_or_used: 'Used' },
  { id: 'c5', name: 'HP 22" Office Monitor', desc: 'Full HD LED backlit monitor with VGA and HDMI ports.', price: 'R 1,499', category: 'Computers', locations_available: ['Claremont'], new_or_used: 'Used' },
  { id: 'c6', name: 'Apple MacBook Air 13" (M1)', desc: 'Apple M1 chip, 8GB RAM, 256GB SSD storage, Space Grey.', price: 'R 11,999', category: 'Computers', locations_available: ['Century City', 'Cape Town CBD'], new_or_used: 'Used' },
  { id: 'c7', name: 'Razer DeathAdder V2 Mouse', desc: 'Ergonomic wired gaming mouse with optical switches.', price: 'R 599', category: 'Computers', locations_available: ['Parow'], new_or_used: 'New' },
  { id: 'c8', name: 'Kingston 1TB NVMe M.2 SSD', desc: 'High-speed internal solid state drive up to 3500MB/s read.', price: 'R 1,150', category: 'Computers', locations_available: ['Bellville'], new_or_used: 'New' },
  { id: 'c9', name: 'Anker USB-C Hub 7-in-1', desc: 'Multi-port adapter with 4K HDMI, USB 3.0 ports, and SD card reader.', price: 'R 699', category: 'Computers', locations_available: ['Claremont'], new_or_used: 'New' },
  { id: 'c10', name: 'Corsair 16GB DDR4 RAM Kit', desc: 'Vengeance LPX 3200MHz desktop memory modules.', price: 'R 899', category: 'Computers', locations_available: ['Cape Town CBD'], new_or_used: 'Used' },

  // --- Appliances ---
  { id: 'a1', name: 'Instant Vortex Air Fryer', desc: '5.7L digital basket air fryer with 4-in-1 functionality.', price: 'R 1,899', category: 'Appliances', locations_available: ['Bellville', 'Parow'], new_or_used: 'New' },
  { id: 'a2', name: 'DeLonghi Espresso Machine', desc: 'Manual pump espresso and cappuccino maker with milk frother.', price: 'R 3,299', category: 'Appliances', locations_available: ['Claremont', 'Century City'], new_or_used: 'Used' },
  { id: 'a3', name: 'Philips 2000 Series Air Purifier', desc: 'Removes 99.5% of airborne allergens with HEPA filter.', price: 'R 2,100', category: 'Appliances', locations_available: ['Cape Town CBD'], new_or_used: 'Used' },
  { id: 'a4', name: 'Russell Hobbs 1.7L Kettle', desc: 'Cordless rapid boil stainless steel kettle with water gauge.', price: 'R 399', category: 'Appliances', locations_available: ['Bellville'], new_or_used: 'New' },
  { id: 'a5', name: 'Defy 26L Microwave Oven', desc: 'Digital mirror finish microwave with 900W power output.', price: 'R 1,499', category: 'Appliances', locations_available: ['Parow'], new_or_used: 'Used' },
  { id: 'a6', name: 'Nesspresso Inissia Coffee Maker', desc: 'Compact capsule coffee machine with fast heat-up system.', price: 'R 1,250', category: 'Appliances', locations_available: ['Claremont'], new_or_used: 'Used' },
  { id: 'a7', name: 'NutriBullet 600W Blender', desc: 'High-speed blender and mixer system for smoothies and shakes.', price: 'R 999', category: 'Appliances', locations_available: ['Century City'], new_or_used: 'New' },
  { id: 'a8', name: 'Mellerware 2-Slice Toaster', desc: 'Variable browning control with defrost and reheat functions.', price: 'R 299', category: 'Appliances', locations_available: ['Cape Town CBD'], new_or_used: 'New' },
  { id: 'a9', name: 'Taurus Floor Standing Fan', desc: '16-inch 3-speed oscillating pedestal fan with adjustable height.', price: 'R 450', category: 'Appliances', locations_available: ['Bellville'], new_or_used: 'Used' },
  { id: 'a10', name: 'Smeg Hand Blender Set', desc: 'Multi-functional immersion blender with chopper and whisk accessories.', price: 'R 1,650', category: 'Appliances', locations_available: ['Claremont'], new_or_used: 'New' },

  // --- Gaming ---
  { id: 'g1', name: 'PlayStation 5 Console (Disc Edition)', desc: 'Next-gen gaming console with 825GB SSD and DualSense controller.', price: 'R 8,999', category: 'Gaming', locations_available: ['Bellville', 'Century City'], new_or_used: 'Used' },
  { id: 'g2', name: 'PlayStation 5 DualSense Controller', desc: 'Wireless controller with haptic feedback and adaptive triggers.', price: 'R 1,199', category: 'Gaming', locations_available: ['Parow', 'Claremont'], new_or_used: 'New' },
  { id: 'g3', name: 'Xbox Series X Console', desc: '1TB custom SSD console supporting 4K gaming at 120FPS.', price: 'R 8,499', category: 'Gaming', locations_available: ['Cape Town CBD'], new_or_used: 'Used' },
  { id: 'g4', name: 'Nintendo Switch OLED Model', desc: 'Handheld and TV gaming console with vibrant 7-inch OLED screen.', price: 'R 5,499', category: 'Gaming', locations_available: ['Bellville'], new_or_used: 'Used' },
  { id: 'g5', name: 'Sony WH-1000XM4 Wireless Headphones', desc: 'Industry-leading noise canceling over-ear gaming & music headset.', price: 'R 2,999', category: 'Gaming', locations_available: ['Century City'], new_or_used: 'Used' },
  { id: 'g6', name: 'Xbox Wireless Controller (Carbon Black)', desc: 'Textured grip hybrid D-pad controller compatible with PC and Xbox.', price: 'R 1,099', category: 'Gaming', locations_available: ['Claremont', 'Parow'], new_or_used: 'New' },
  { id: 'g7', name: 'Marvel\'s Spider-Man 2 (PS5 Disc)', desc: 'Action-adventure blockbuster game for PlayStation 5.', price: 'R 799', category: 'Gaming', locations_available: ['Cape Town CBD'], new_or_used: 'Used' },
  { id: 'g8', name: 'Elden Ring (Xbox Series X)', desc: 'Award-winning dark fantasy action RPG by FromSoftware.', price: 'R 650', category: 'Gaming', locations_available: ['Bellville'], new_or_used: 'Used' },
  { id: 'g9', name: 'HyperX Cloud II Gaming Headset', desc: '7.1 virtual surround sound with comfortable memory foam ear cushions.', price: 'R 1,399', category: 'Gaming', locations_available: ['Century City'], new_or_used: 'New' },
  { id: 'g10', name: 'Logitech G29 Driving Force Racing Wheel', desc: 'Realistic steering wheel and pedal force feedback system for PS4/PS5/PC.', price: 'R 4,200', category: 'Gaming', locations_available: ['Claremont'], new_or_used: 'Used' },

  // --- Hair ---
  { id: 'h1', name: 'Dyson Supersonic Hair Dryer', desc: 'Fast drying with no extreme heat and intelligent heat control.', price: 'R 5,500', category: 'Hair', locations_available: ['Century City', 'Claremont'], new_or_used: 'Used' },
  { id: 'h2', name: 'Ghd Original Professional Styler', desc: 'Ceramic hair straightening iron with optimum styling temperature.', price: 'R 1,899', category: 'Hair', locations_available: ['Bellville'], new_or_used: 'Used' },
  { id: 'h3', name: 'Remington Keratin Protect Curling Wand', desc: 'Conical ceramic barrel infused with keratin and almond oil.', price: 'R 650', category: 'Hair', locations_available: ['Parow'], new_or_used: 'New' },
  { id: 'h4', name: 'Wahl Cordless Senior Hair Clipper', desc: 'Professional metal residential & barbershop clipper with high precision.', price: 'R 1,799', category: 'Hair', locations_available: ['Cape Town CBD'], new_or_used: 'New' },
  { id: 'h5', name: 'Revlon One-Step Hair Dryer & Volumizer', desc: 'Hot air brush for drying and styling hair in one go.', price: 'R 850', category: 'Hair', locations_available: ['Bellville', 'Claremont'], new_or_used: 'Used' },
  { id: 'h6', name: 'Babyliss Pro Titanium Flat Iron', desc: 'Ultra-smooth titanium plates for fast straightening and sleek shine.', price: 'R 1,200', category: 'Hair', locations_available: ['Century City'], new_or_used: 'Used' },
  { id: 'h7', name: 'Panasonic Wet/Dry Hair Clipper', desc: 'Rechargeable waterproof hair and beard trimmer.', price: 'R 750', category: 'Hair', locations_available: ['Parow'], new_or_used: 'New' },
  { id: 'h8', name: 'Parlux 385 PowerLight Hair Dryer', desc: 'Professional lightweight salon dryer with ionic ceramic technology.', price: 'R 2,400', category: 'Hair', locations_available: ['Cape Town CBD'], new_or_used: 'Used' },
  { id: 'h9', name: 'Cloud Nine The Touch Iron', desc: 'Instant-heat ceramic straightener with variable temperature control.', price: 'R 2,100', category: 'Hair', locations_available: ['Claremont'], new_or_used: 'Used' },
  { id: 'h10', name: 'Conair Hot Rollers Set', desc: 'Jumbo ceramic flocked hair setters for smooth voluminous curls.', price: 'R 550', category: 'Hair', locations_available: ['Bellville'], new_or_used: 'New' },

  // --- Gold ---
  { id: 'go1', name: '1 oz Krugerrand Gold Coin (1982)', desc: 'Authentic South African 22-karat gold bullion coin.', price: 'R 42,500', category: 'Gold', locations_available: ['Cape Town CBD', 'Bellville'], new_or_used: 'Used' },
  { id: 'go2', name: '9ct Solid Gold Figaro Chain', desc: 'Classic 55cm long men\'s solid yellow gold figaro link chain.', price: 'R 6,800', category: 'Gold', locations_available: ['Claremont'], new_or_used: 'Used' },
  { id: 'go3', name: '18ct Gold Diamond Solitaire Ring', desc: 'Certified 0.75ct diamond solitaire set in 18ct yellow gold band.', price: 'R 14,999', category: 'Gold', locations_available: ['Century City'], new_or_used: 'Used' },
  { id: 'go4', name: '9ct Yellow Gold Mens Signet Ring', desc: 'Heavy polished blank face signet ring, size S.', price: 'R 3,500', category: 'Gold', locations_available: ['Parow', 'Bellville'], new_or_used: 'Used' },
  { id: 'go5', name: '14ct Gold Hoop Earrings', desc: 'Medium-sized twisted design yellow gold earrings.', price: 'R 2,499', category: 'Gold', locations_available: ['Cape Town CBD'], new_or_used: 'Used' },
  { id: 'go6', name: '9ct Gold Bangle Bracelet', desc: 'Traditional slip-on solid gold hinged bangle.', price: 'R 5,100', category: 'Gold', locations_available: ['Claremont'], new_or_used: 'Used' },
  { id: 'go7', name: '1/2 oz Krugerrand Gold Coin', desc: 'South African legal tender gold coin containing 0.5 troy oz pure gold.', price: 'R 21,800', category: 'Gold', locations_available: ['Bellville'], new_or_used: 'Used' },
  { id: 'go8', name: '9ct White Gold Cross Pendant', desc: 'Simple minimalist Christian cross pendant in polished white gold.', price: 'R 1,150', category: 'Gold', locations_available: ['Century City'], new_or_used: 'New' },
  { id: 'go9', name: '18ct Gold Wedding Band', desc: 'Classic 4mm comfort-fit yellow gold wedding ring.', price: 'R 4,200', category: 'Gold', locations_available: ['Parow'], new_or_used: 'Used' },
  { id: 'go10', name: '9ct Gold Rope Chain Necklace', desc: 'Intricately twisted 50cm solid gold rope chain.', price: 'R 4,900', category: 'Gold', locations_available: ['Cape Town CBD'], new_or_used: 'Used' },

  // --- Promotions ---
  { id: 'pr1', name: 'JBL Flip 6 Portable Bluetooth Speaker', desc: 'Waterproof wireless speaker with bold sound and deep bass.', price: 'R 1,599', category: 'Promotions', locations_available: ['Bellville', 'Parow'], new_or_used: 'New' },
  { id: 'pr2', name: 'Xiaomi Mi Smart Band 7', desc: 'Fitness tracker with AMOLED display and 120 sports modes.', price: 'R 699', category: 'Promotions', locations_available: ['Century City'], new_or_used: 'New' },
  { id: 'pr3', name: 'Sandisk 128GB MicroSD Card', desc: 'Class 10 UHS-I memory card with adapter for phones and cameras.', price: 'R 249', category: 'Promotions', locations_available: ['Claremont', 'Cape Town CBD'], new_or_used: 'New' },
  { id: 'pr4', name: 'Anker PowerCore 10000mAh Power Bank', desc: 'Ultra-compact portable charger with fast USB charging technology.', price: 'R 399', category: 'Promotions', locations_available: ['Bellville'], new_or_used: 'New' },
  { id: 'pr5', name: 'Remington Nose & Ear Trimmer', desc: 'Washable precision personal grooming trimmer with battery included.', price: 'R 199', category: 'Promotions', locations_available: ['Parow'], new_or_used: 'New' },
  { id: 'pr6', name: 'JVC 32" HD LED TV', desc: 'Compact television with multiple HDMI and USB media playback ports.', price: 'R 1,899', category: 'Promotions', locations_available: ['Century City', 'Bellville'], new_or_used: 'New' },
  { id: 'pr7', name: 'Havit RGB Gaming Mouse and Pad Combo', desc: 'Wired backlit gaming mouse with non-slip stitched edges mousepad.', price: 'R 350', category: 'Promotions', locations_available: ['Claremont'], new_or_used: 'New' },
  { id: 'pr8', name: 'Sinotec Bluetooth Soundbar', desc: '2.0 channel stereo soundbar for enhanced TV and movie audio.', price: 'R 899', category: 'Promotions', locations_available: ['Cape Town CBD'], new_or_used: 'New' },
  { id: 'pr9', name: 'Energizer LED Headlamp', desc: 'Hands-free adjustable weather-resistant head torch for outdoor use.', price: 'R 180', category: 'Promotions', locations_available: ['Bellville'], new_or_used: 'New' },
  { id: 'pr10', name: 'Baseus 65W Fast Wall Charger', desc: 'Multi-port USB-C GaN charger for laptops, tablets, and phones.', price: 'R 599', category: 'Promotions', locations_available: ['Claremont'], new_or_used: 'New' },

  // --- Best Prices ---
  { id: 'bp1', name: 'Hisense 43" Smart Full HD TV', desc: 'Smart LED television with Netflix, YouTube, and Wi-Fi built-in.', price: 'R 3,499', category: 'Best Prices', locations_available: ['Bellville', 'Parow'], new_or_used: 'New' },
  { id: 'bp2', name: 'TCL 40" Android TV', desc: 'Full HD smart TV with Google Assistant voice search.', price: 'R 2,999', category: 'Best Prices', locations_available: ['Cape Town CBD'], new_or_used: 'New' },
  { id: 'bp3', name: 'Lenovo Tab M10 (3rd Gen)', desc: '10.1-inch Android tablet with 4GB RAM and 64GB storage.', price: 'R 2,499', category: 'Best Prices', locations_available: ['Century City'], new_or_used: 'New' },
  { id: 'bp4', name: 'JBL Tune 510BT Wireless Headphones', desc: 'Pure bass sound with up to 40 hours of battery life.', price: 'R 799', category: 'Best Prices', locations_available: ['Claremont', 'Bellville'], new_or_used: 'New' },
  { id: 'bp5', name: 'Russell Hobbs 2-Slice Sandwich Press', desc: 'Non-stick grill plates for quick toasted sandwiches and paninis.', price: 'R 350', category: 'Best Prices', locations_available: ['Parow'], new_or_used: 'New' },
  { id: 'bp6', name: 'Defy 4-Slice Toaster', desc: 'Stainless steel toaster with high-lift facility and crumb tray.', price: 'R 499', category: 'Best Prices', locations_available: ['Cape Town CBD'], new_or_used: 'New' },
  { id: 'bp7', name: 'Logitech K120 USB Keyboard', desc: 'Durable spill-resistant wired keyboard with comfortable typing.', price: 'R 199', category: 'Best Prices', locations_available: ['Bellville'], new_or_used: 'New' },
  { id: 'bp8', name: 'TP-Link Wireless Wi-Fi Router', desc: '300Mbps Wi-Fi router with dual antennas for stable home coverage.', price: 'R 320', category: 'Best Prices', locations_available: ['Century City'], new_or_used: 'New' },
  { id: 'bp9', name: 'Cadac Portable Gas Stove', desc: 'Single burner stainless steel portable stove for camping and backup.', price: 'R 450', category: 'Best Prices', locations_available: ['Claremont'], new_or_used: 'New' },
  { id: 'bp10', name: 'Seagate 1TB Expansion Portable External HDD', desc: 'Plug-and-play USB 3.0 hard drive for PC and Mac backups.', price: 'R 899', category: 'Best Prices', locations_available: ['Bellville', 'Parow'], new_or_used: 'New' },

  // --- Phones ---
  { id: 'ph1', name: 'Apple iPhone 13 (128GB)', desc: 'Unlocked smartphone with dual-camera system and A15 Bionic chip.', price: 'R 8,999', category: 'Phones', locations_available: ['Bellville', 'Century City'], new_or_used: 'Used' },
  { id: 'ph2', name: 'Samsung Galaxy S22 5G (128GB)', desc: 'Dynamic AMOLED 2X display with professional grade nightography camera.', price: 'R 7,500', category: 'Phones', locations_available: ['Cape Town CBD', 'Claremont'], new_or_used: 'Used' },
  { id: 'ph3', name: 'Xiaomi Redmi Note 12', desc: '120Hz AMOLED display with 50MP AI triple camera and fast charging.', price: 'R 3,299', category: 'Phones', locations_available: ['Parow'], new_or_used: 'New' },
  { id: 'ph4', name: 'Apple iPhone 11 (64GB)', desc: 'Liquid Retina LCD display, dual 12MP ultra wide cameras, Black.', price: 'R 4,999', category: 'Phones', locations_available: ['Bellville'], new_or_used: 'Used' },
  { id: 'ph5', name: 'Samsung Galaxy A14 LTE', desc: '6.6-inch display with 5000mAh battery and expandable storage.', price: 'R 2,299', category: 'Phones', locations_available: ['Century City', 'Parow'], new_or_used: 'New' },
  { id: 'ph6', name: 'Huawei Nova Y70', desc: 'Large 6000mAh battery smartphone with 48MP triple AI camera.', price: 'R 2,499', category: 'Phones', locations_available: ['Cape Town CBD'], new_or_used: 'Used' },
  { id: 'ph7', name: 'Oppo A57s', desc: '33W SUPERVOOC flash charge with vibrant dual stereo speakers.', price: 'R 2,799', category: 'Phones', locations_available: ['Claremont'], new_or_used: 'New' },
  { id: 'ph8', name: 'Apple iPhone 14 Pro Max (256GB)', desc: 'Dynamic Island, 48MP Main camera, Always-On display, Deep Purple.', price: 'R 16,999', category: 'Phones', locations_available: ['Bellville', 'Century City'], new_or_used: 'Used' },
  { id: 'ph9', name: 'DOOGEE S58 Pro Rugged Phone', desc: 'Waterproof, dustproof, shockproof tactical smartphone with 5180mAh battery.', price: 'R 3,100', category: 'Phones', locations_available: ['Parow'], new_or_used: 'New' },
  { id: 'ph10', name: 'Nokia G21 Dual SIM', desc: '3-day battery life smartphone with 50MP triple camera.', price: 'R 1,999', category: 'Phones', locations_available: ['Cape Town CBD'], new_or_used: 'New' },

  // --- TVs ---
  { id: 'tv1', name: 'Samsung 55" Crystal UHD 4K Smart TV', desc: 'PurColor technology with Motion Xcelerator and HDR 10+ support.', price: 'R 6,999', category: 'TVs', locations_available: ['Bellville', 'Claremont'], new_or_used: 'Used' },
  { id: 'tv2', name: 'LG 50" 4K UHD Smart AI TV', desc: 'webOS platform with Magic Remote and FILMMAKER MODE.', price: 'R 5,999', category: 'TVs', locations_available: ['Century City'], new_or_used: 'Used' },
  { id: 'tv3', name: 'Sony Bravia 65" 4K Android TV', desc: 'Cognitive Processor XR with Dolby Vision and Dolby Atmos.', price: 'R 11,500', category: 'TVs', locations_available: ['Cape Town CBD'], new_or_used: 'Used' },
  { id: 'tv4', name: 'Hisense 55" ULED 4K Smart TV', desc: 'Quantum Dot Color technology with Full Array Local Dimming.', price: 'R 6,499', category: 'TVs', locations_available: ['Bellville', 'Parow'], new_or_used: 'New' },
  { id: 'tv5', name: 'Sinotec 40" Full HD LED TV', desc: 'Sleek bezel-less design with USB media player and 3 HDMI ports.', price: 'R 2,799', category: 'TVs', locations_available: ['Claremont'], new_or_used: 'New' },
  { id: 'tv6', name: 'Samsung 32" HD Smart LED TV', desc: 'Connect Share movie capability with vibrant LED picture quality.', price: 'R 2,499', category: 'TVs', locations_available: ['Century City'], new_or_used: 'Used' },
  { id: 'tv7', name: 'LG 43" 4K Smart TV', desc: 'Active HDR with Bluetooth surround readiness and webOS.', price: 'R 4,200', category: 'TVs', locations_available: ['Parow'], new_or_used: 'Used' },
  { id: 'tv8', name: 'TCL 75" 4K Google TV', desc: 'Extra-large immersive screen with Hands-Free Voice Control.', price: 'R 13,999', category: 'TVs', locations_available: ['Bellville'], new_or_used: 'New' },
  { id: 'tv9', name: 'Fujitsu 55" 4K UHD Smart TV', desc: 'Direct LED backlight with crisp resolution and optical audio output.', price: 'R 4,800', category: 'TVs', locations_available: ['Cape Town CBD'], new_or_used: 'Used' },
  { id: 'tv10', name: 'JVC 50" Smart 4K UHD TV', desc: 'Built-in streaming apps with ultra-thin profile and immersive sound.', price: 'R 4,499', category: 'TVs', locations_available: ['Claremont', 'Parow'], new_or_used: 'New' },
];

