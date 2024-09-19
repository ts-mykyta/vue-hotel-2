<script setup>
import Header from '../../components/HeaderLayout.vue';
import Footer from '../../components/FooterLayout.vue';
import Promo from '../../components/blocks/PromoLayout.vue';
import CatalogLayout from '../../components/blocks/CatalogLayout.vue';
import ScrollToTop from '../../components/ScrollToTop.vue';


const hotelsData = [
    {
        "imgUrl": "/countries/new-zealand/bayview-valley-lodge.jpg",
        "hotelName": "Bayview Valley Lodge",
        "starsCount": 4,
        "hotelDescr": "Bayview Valley Lodge, Boutique, Boutique Bed & Breakfast, 5 Star Accommodation in Whitianga, and overlooking the Historic Wharekaho Valley and the Pacific Ocean. We offer a choice of two suites, the Tui Suite and the Kupe Suite, both contemporary in their character, whilst being stylish and well-appointed. Each suite offers full Valley and Ocean Views, is spacious in design and individual in character with fine toiletries and linens for total comfort. Our emphasis is on your privacy, comfort, and relaxation with the personal touch from your hosts, which truly makes a difference and ensures a memorable stay.",
        "hotelLink": "https://www.bayviewvalleylodge.co.nz/"
    },
    {
        "imgUrl": "/countries/new-zealand/lakestone-lodge-in-winter.jpg",
        "hotelName": "Lakestone Lodge",
        "starsCount": 4,
        "hotelDescr": "Lakestone Lodge is exclusively positioned on the southern shores of Lake Pukaki with some of the most spectacular scenery in the country. The off-grid eco lodge has been designed to maximise the panoramic views. Every room and bathroom share stunning views northward over Lake Pukaki to the Southern Alps. On calm days New Zealand's highest mountain, Aoraki/Mount Cook, can be seen reflected in the turquoise glacial waters of the lake. In contrast, mountain storms rolling in over the alps, can be viewed from the comfort and warmth of this luxurious lodge.",
        "hotelLink": "https://www.lakestonelodge.co.nz/"
    },
    {
        "imgUrl": "/countries/new-zealand/stoneridge-estate.jpg",
        "hotelName": "Stoneridge Estate",
        "starsCount": 4,
        "hotelDescr": "Experience the magic of Stoneridge Estate, a unique luxury lodge, wedding & event venue and boutique vineyard just fifteen minutes from Queenstown. Nestled on the shores of Lake Hayes amidst acres of sprawling gardens and vines, with panoramic views over the sparkling lake and majestic mountain peaks, Stoneridge Estate combines sublime scenery with five-star facilities and warm, personalised service.",
        "hotelLink": "https://stoneridge.co.nz/"
    },
    {
        "imgUrl": "/countries/new-zealand/cabot-lodge.jpg",
        "hotelName": "Cabot Lodge",
        "starsCount": 4,
        "hotelDescr": "Cabot Lodge is a luxury estate situated on a 2000 acre sheep farm overlooking the World Heritage Fiordland National Park in Te Anau. The Lodge accommodates a maximum of ten guests, offering private luxury and an authentic New Zealand escape. Cabot Lodge provides an all-inclusive retreat. Guests are welcomed with an arrival drink, followed by the opportunity to participate in on-farm activities, before enjoying an evening cocktail hour with canapes, and a set-menu evening meal showcasing authentic farm to plate cuisine. Guests are woken each morning with a hearty cooked breakfast, and are provided fresh fruit and baking in their suites daily.",
        "hotelLink": "https://www.cabotlodge.co.nz/"
    },
    {
        "imgUrl": "/countries/new-zealand/hopewell-lodge.jpg",
        "hotelName": "Hopewell Lodge",
        "starsCount": 4,
        "hotelDescr": "Welcome to Hopewell, an award winning self-catering lodge set in a superb, inspiring natural location on the water's edge of the magnificent Kenepuru Sound, Marlborough Sounds. Hopewell is a small and unique lodge that seems more like a luxury retreat. Choose from doubles, twins, triples, family rooms and cottages. All beds are made up with quality linen and duvets. Some have private bathrooms and most have sea views and a deck. There are rowboats and equipment for fishing, double and single kayaks, mountain bikes, SUP boards, swimming beaches, bush walks, sailing and boating trips available. ",
        "hotelLink": "https://www.hopewell.co.nz/"
    },
    {
        "imgUrl": "/countries/new-zealand/whangaparaoa-lodge.jpg",
        "hotelName": "Whangaparaoa Lodge",
        "starsCount": 4,
        "hotelDescr": "Welcome to Hopewell, an award winning self-catering lodge set in a superb, inspiring natural location on the water's edge of the magnificent Kenepuru Sound, Marlborough Sounds. Hopewell is a small and unique lodge that seems more like a luxury retreat. Choose from doubles, twins, triples, family rooms and cottages. All beds are made up with quality linen and duvets. Some have private bathrooms and most have sea views and a deck. There are rowboats and equipment for fishing, double and single kayaks, mountain bikes, SUP boards, swimming beaches, bush walks, sailing and boating trips available.",
        "hotelLink": "https://www.whangaparaoalodge.co.nz/"
    },
]

</script>

<template>
    <ScrollToTop />
    <Header />

    <Promo
        imgUrl="/countries/usa.jpg"
        title="New Zealand HOTELS"
        text="Home > New Zealand"
    />

    <CatalogLayout 
        title="Top Hotels in New Zealand"
        subtitle="Experience the Charm and Elegance of the Country’s Most Popular Stays."
        :elementsData="hotelsData"
    />

    <Footer />

</template>

<style scoped></style>