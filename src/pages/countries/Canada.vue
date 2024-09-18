<script setup>
import Header from '../../components/HeaderLayout.vue';
import Footer from '../../components/FooterLayout.vue';
import Promo from '../../components/blocks/PromoLayout.vue';
import CatalogLayout from '../../components/blocks/CatalogLayout.vue';
import ScrollToTop from '../../components/ScrollToTop.vue';


const hotelsData = [
    {
        "imgUrl": "/countries/canada/abbie-s-garden-bed-breakfast.jpg",
        "hotelName": "Abbie's Garden Bed & Breakfast",
        "starsCount": 4,
        "hotelDescr": "Our suites are located in buildings outside the MAIN HOUSE, offering you ultimate guest privacy. THE LOFT (2) suites, OCEAN side and GARDEN view - entering into a shared space, equipped with fridge, microwave, washer & dryer and 24/7 coffee and tea - each room has private door off the shared space and another door in the room leading to a semi-private sun deck. THE COTTAGE (3) bedrooms - the entire front is our GRANDE SUITE and a half (two bedrooms, three beds) with a kitchen area in the middle, equipped with fridge, microwave, washer & dryer and 24/7 coffee and tea - around the back (private entrance) is our PETITE room (small but cozy) coffee/tea in the room.",
        "hotelLink": "https://abbiesgarden.ca/"
    },
    {
        "imgUrl": "/countries/canada/waterfront-resort.jpg",
        "hotelName": "Summerland Waterfront Resort & Spa",
        "starsCount": 4,
        "hotelDescr": "Put rest and rejuvenation on your to-do list with a relaxing stay at the Summerland Waterfront Resort & Spa, set on the shores of Okanagan Lake. Wellness and relaxation are by design with spacious suites overlooking the lake, a boardwalk along Okanagan Lake wetlands, outdoor hot tubs and sauna, full-service iKhaya Day Spa, on-site Bistro, boat & SUP rentals, and fitness centre with lakefront views. The main attraction is the outdoor pool and relaxing pool deck and with extras like complimentary cruiser bikes, you can be as busy or reclined as you like. Stay amidst the tranquil lakefront setting while also enjoying the charm of small-town Summerland and area wineries.",
        "hotelLink": "https://summerlandresorthotel.com/"
    },
    {
        "imgUrl": "/countries/canada/tucked-inn-the-harbour.jpg",
        "hotelName": "Tucked Inn the Harbour B&B",
        "starsCount": 4,
        "hotelDescr": "We speak German and French. Two beautiful, well appointed rooms with private en-suites. We also offer a hot tub, camp fires, and a lounge area. We are a 100 Yards/Metres from water access for swimming, kayaking, canoeing. We are nestled in the quiet, friendly and picturesque village of Victoria Harbour, Ontario - close to all amenities and major attractions. Our goal is to make your stay as memorable and enjoyable as possible.",
        "hotelLink": "https://www.tuckedinntheharbour.com/"
    },
    {
        "imgUrl": "/countries/canada/hampton.jpg",
        "hotelName": "Hampton Inn by Hilton Edmonton",
        "starsCount": 4,
        "hotelDescr": "Enjoy a pleasant stay at the new Hampton Inn by Hilton Edmonton/Sherwood Park hotel. Each of our 120 inviting guest rooms features a microwave, mini-refrigerator and 40-inch HDTV to make you feel at home. Stay connected with family and colleagues with free WiFi access, and get a good night's sleep in the clean and fresh Hampton bed™. Select a suite for a sitting area with sofa bed, beautiful lake views and a whirlpool bathtub. Accessible rooms are also available. Start the day right with Hampton's free hot breakfast. If you're in a hurry, grab a free On the Run™ Breakfast Bag.",
        "hotelLink": "https://www.hilton.com/en/book/reservation/rooms/"
    },
    {
        "imgUrl": "/countries/canada/kindred-spirits.jpg",
        "hotelName": "Kindred Spirits Inn & Cottages",
        "starsCount": 4,
        "hotelDescr": "Kindred Spirits is a four-star, family owned and operated country resort. Located beside Anne of Green Gables House and only 800-m from the beach, we are in the heart of Cavendish. We offer many amenities, such as a heated-salt water pool, hot tub, games room, playground, fitness room and more! With our quaint inn, beautiful gatehouse and well-appointed cottages, we have something to suit all needs. We would love to have you come and visit us!",
        "hotelLink": "https://www.kindredspirits.ca/"
    },
    {
        "imgUrl": "/countries/canada/otl.jpg",
        "hotelName": "OTL Gouverneur Sherbrooke",
        "starsCount": 4,
        "hotelDescr": "OTL Gouverneur Sherbrooke est un hôtel moderne et haut de gamme, qui fusionne âme et confort afin de vous offrir une expérience Incomparable dans les Cantons-de-l'Est. Nos chambres chaleureuses et lumineuses intègrent une technologie dernier cri avec une tablette électronique, un téléviseur 50 pouces, une climatisation centrale silencieuse et une machine à café Nespresso. Petit-déjeuner complet personnalisé inclus, distributeur à vin, gym professionnel, piscine intérieure surdimensionnée et Internet haute vitesse gratuit. Adjacent à l’hôtel et inspiré de New York et d’Athènes, le restaurant Boefish propose une cuisine haut de gamme dans une ambiance branchée.",
        "hotelLink": "https://www.otlhotelsherbrooke.ca/"
    },
]

</script>

<template>
    <ScrollToTop />
    <Header />

    <Promo
        imgUrl="/countries/usa.jpg"
        title="Canada HOTELS"
        text="Home > Canada"
    />

    <CatalogLayout 
        title="Top Hotels in Canada"
        subtitle="Uncover the Country’s Beauty and Renowned Hospitality with Our Top Picks."
        :elementsData="hotelsData"
    />

    <Footer />

</template>

<style scoped></style>