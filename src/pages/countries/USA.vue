<script setup>
import Header from '../../components/HeaderLayout.vue';
import Footer from '../../components/FooterLayout.vue';
import Promo from '../../components/blocks/PromoLayout.vue';
import CatalogLayout from '../../components/blocks/CatalogLayout.vue';
import ScrollToTop from '../../components/ScrollToTop.vue';


const hotelsData = [
    {
        "imgUrl": "/countries/usa/atlantis-casino.jpg",
        "hotelName": "Atlantis Casino Resort Spa",
        "starsCount": 4,
        "hotelLink": "https://atlantiscasino.com/",
        "hotelDescr": "Nestled at the base of the Sierra Nevada, Atlantis Casino Resort Spa is proud to be recognized as a AAA Four Diamond resort - a distinction held by only the most exceptional hotels in the world. Our luxury hotel rooms and suites feature floor-to-ceiling windows overlooking incredible views of the city or the Sierra Nevada Mountains. Whether you're looking for a fun casino getaway or planning a trip of a lifetime, Atlantis offers something to satisfy every guest."
    },
    {
        "imgUrl": "/countries/usa/silverton-casino-hotel.jpg",
        "hotelName": "Silverton Casino Lodge",
        "starsCount": 4,
        "hotelLink": "https://silvertoncasino.com",
        "hotelDescr": "Silverton Casino's newly renovated lodge features a boutique hotel experience. Step into our elegantly redesigned rooms, with a \"rustic luxe\" ambiance and a contemporary twist on the classic lodge theme. Located less than 5 miles from the Las Vegas Strip, Silverton features its own 90,000-square-foot casino and 117,000-gallon aquarium. Ten award-winning bars and restaurants include Twin Creeks Steakhouse, named the best casino restaurant by readers of Las Vegas Review-Journal. The lodge also includes a flagship Bass Pro Shops."
    },
    {
        "imgUrl": "/countries/usa/thunder-valley.jpg",
        "hotelName": "Thunder Valley Casino Resort",
        "starsCount": 4,
        "hotelLink": "https://thundervalleyresort.com/",
        "hotelDescr": "Thunder Valley is a AAA Four Diamond award-winning Casino Resort, neighboring the Roseville/Rocklin Area, Roseville Amtrak station, @theGrounds Events Venue, Topgolf Roseville, and Roseville Galleria Mall. The casino features a 250,000-square-foot Las Vegas-style casino, offering over 3,400 slot and video machines, 100 table games and a live Poker Room which accommodates more than 250 players. Thunder Valley includes a 17-story luxury hotel with 408 rooms, including 46 suites, a full amenity Spa, and Gift Shop. The resort features 14 restaurants and bars, as well as Pano Hall, a large banquet and entertainment center with a capacity of up to 900 guests."
    },
    {
        "imgUrl": "/countries/usa/captain-david-kelley.jpg",
        "hotelName": "Captain David Kelley House",
        "starsCount": 4,
        "hotelLink": "https://www.captaindavidkelleyhouse.com/",
        "hotelDescr": "A warm welcome awaits you. The Captain David Kelley House is an upscale bed & breakfast set in a restored Greek Revival sea captain's home built in 1835 in the heart of Cape Cod. Architectural gem featuring hardwood floors, crown moldings, and wainscoting. Three covered porches overlook beautifully landscaped yard and gardens. Listed on National Register of Historic Places, the inn offers six beautiful guest rooms with private baths, A/C, flat panel TVs, WI-FI and hair dryers. Beautiful beaches are just a 1/2 mile walk down the street, Hyannis, Osterville and Barnstable are a 10 minute ride away. Breakfast is truly an event each morning, including our famous \"Scone Wars\", featured on TV!"
    },
    {
        "imgUrl": "/countries/usa/live-casino-hotel-philadelphia.jpg",
        "hotelName": "Live Casino & Hotel Philadelphia",
        "starsCount": 4,
        "hotelLink": "https://philadelphia.livecasinohotel.com/hotel",
        "hotelDescr": "Live! Casino & Hotel Philadelphia is an unrivaled destination to enjoy world-class gaming, luxury hotel accommodations, memorable entertainment, and premier dining. Live! features more than 200 luxury hotel rooms awarded Tripadvisor Traveler’s Choice “Best of the Best” and are Sharecare Health Security VERIFIED™ with Forbes Travel Guide. Conveniently located only a short walk from Philadelphia’s stadiums & Xfinity Live! – as well in proximity to many Philadelphia historical monuments and attractions. Live! Casino & Hotel Philadelphia also features over 2,000 slot machines and electronic table games, FanDuel® Sportsbook, and 140 live action table games, including a dedicated poker room."
    },
    {
        "imgUrl": "/countries/usa/the-belmont-1857.jpg",
        "hotelName": "The Belmont 1857",
        "starsCount": 4,
        "hotelLink": "https://www.thebelmont1857.com/",
        "hotelDescr": "Located in the heart of the Mississippi Delta! The mansion consists of 9000 sq ft, 9 bedrooms, and 8.5 baths- we offer each room for rent individually. A stay includes your own private bedroom and bath as well as full access to the mansion's public rooms and grounds. Onsite, you will be hosted by owner Bradley Hauser, and given an historic tour."
    },
]

</script>

<template>
    <ScrollToTop />
    <Header />

    <Promo
        imgUrl="/countries/country_bg.jpg"
        title="USA HOTELS"
        text="Home > USA"
    />

    <CatalogLayout 
        title="Top Hotels in the USA"
        subtitle="Discover the Most Popular Destinations for Comfort and Luxury."
        :elementsData="hotelsData"
    />

    <Footer />

</template>

<style scoped></style>