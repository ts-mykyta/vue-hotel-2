<script setup>
import Header from '../../components/HeaderLayout.vue';
import Footer from '../../components/FooterLayout.vue';
import Promo from '../../components/blocks/PromoLayout.vue';
import CatalogLayout from '../../components/blocks/CatalogLayout.vue';
import ScrollToTop from '../../components/ScrollToTop.vue';


const hotelsData = [
    {
        "imgUrl": "/countries/usa/refuge-inn.jpg",
        "hotelName": "Refuge Inn",
        "starsCount": 4,
        "hotelLink": "https://www.refugeinn.com/",
        "hotelDescr": "Exceed your expectations at this family owned inn where no detail is overlooked. The Refuge Inn is located within walking distance of the wildlife refuge and minutes from our beautiful undeveloped beach. Amenities include Continental Breakfast, Wireless Internet, Indoor/Outdoor Heated Pool, Hot Tub, Sauna, Fitness Room, Observation Decks, Bicycle & Beach Gear Rentals, Conference Room and Gift Shop. Rooms are continually updated and renovated. At the Refuge Inn, you arrive as guests and leave as friends, and are treated as part of the family. A Treasure of a place - Local Family Owned and Proudly Operated."
    },
    {
        "imgUrl": "/countries/usa/hotel-lucia.jpg",
        "hotelName": "Hotel Lucia",
        "starsCount": 4,
        "hotelLink": "https://www.hotellucia.com/",
        "hotelDescr": "Want to get to know the real Portland? The keeping weird, coffee-drinking, food-loving, creative, always-outdoors, never normal Portland? We're Hotel Lucia, and we know Portland. Because we are Portland. Centrally located in the heart of downtown close to dining, shopping, entertainment, public transit, and more, Hotel Lucia is the perfect starting point for your Portland adventures. Why? From our hotel artwork to the experts at our 24-hr front desk and concierge service, everything about us is local. We’ve been helping people discover and fall in love with this city since before Portland was trendy, and we’ll keep on doing it for everyone from leisure travelers to business travelers and everyone in between."
    },
    {
        "imgUrl": "/countries/usa/the-whittaker-inn.jpg",
        "hotelName": "The Whittaker Inn",
        "starsCount": 4,
        "hotelLink": "https://www.thewhittakerinn.com/",
        "hotelDescr": "Built from the ground up on 25 acres of secluded woodland, this Inn offers a refreshing escape from the ordinary. The Inn is located only five miles from Purdue University campus and 2.5 miles from the award-winning golf course at Coyote Crossing. Inspired by the Whittakers' passion for travel, each of The Whittaker's accommodations are custom-designed and equipped with modern amenities."
    },
    {
        "imgUrl": "/countries/usa/captain-david-kelley.jpg",
        "hotelName": "Captain David Kelley House",
        "starsCount": 4,
        "hotelLink": "https://www.captaindavidkelleyhouse.com/",
        "hotelDescr": "A warm welcome awaits you. The Captain David Kelley House is an upscale bed & breakfast set in a restored Greek Revival sea captain's home built in 1835 in the heart of Cape Cod. Architectural gem featuring hardwood floors, crown moldings, and wainscoting. Three covered porches overlook beautifully landscaped yard and gardens. Listed on National Register of Historic Places, the inn offers six beautiful guest rooms with private baths, A/C, flat panel TVs, WI-FI and hair dryers. Beautiful beaches are just a 1/2 mile walk down the street, Hyannis, Osterville and Barnstable are a 10 minute ride away. Breakfast is truly an event each morning, including our famous \"Scone Wars\", featured on TV!"
    },
    {
        "imgUrl": "/countries/usa/port-d-hiver.jpg",
        "hotelName": "Port D'hiver Bed And Breakfast",
        "starsCount": 4,
        "hotelLink": "https://www.portdhiver.com/",
        "hotelDescr": "Escape your everyday cares at our romantic boutique hotel in Melbourne Beach, a Select Registry Property. Our comfortable yet elegant Melbourne Beach inn is only 200 feet from the Atlantic Ocean and features luxurious rooms and suites with gorgeous ocean and pool views. Indulge in our array of amenities, including an onsite fitness center, an outdoor fire pit, and a serene spa pool surrounded by lush tropical greenery. Take advantage of our cruiser bikes and complimentary beach supplies to explore the nearby parks, restaurants, and beaches at your leisure."
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