import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="Logo"
      src="https://lh3.googleusercontent.com/p/AF1QipMf9w4RomHXrUkQKvrxtPdjp3SLadP05HDzXlH2=w1080-h608-p-no-v0"
    />
  </a>
);

// Composing Componentss
const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav__items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const restaurentList = [
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '118745',
      name: "McDonald's",
      uuid: '518b6247-829b-4bfb-9c32-2b8ac699058c',
      city: '3',
      area: 'Abids & Koti',
      totalRatingsString: '',
      cloudinaryImageId: 'ee5f8e06b300efc07c9fe3f4df40dfc4',
      cuisines: ['Burgers', 'Beverages', 'Cafe', 'Desserts'],
      tags: [],
      costForTwo: 40000,
      costForTwoString: '₹400 FOR TWO',
      deliveryTime: 58,
      minDeliveryTime: 58,
      maxDeliveryTime: 58,
      slaString: '58 MINS',
      lastMileTravel: 0,
      slugs: {
        restaurant: 'mcdonalds-mpm-mall-nampally',
        city: 'Hyderabad',
      },
      cityState: '3',
      address: '',
      locality: 'ABITS MPM MALL',
      parentId: 630,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 3100,
            message: '',
          },
          {
            name: 'BASE_TIME',
            fee: 0,
            message: '',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
            fee: 1500,
            message: '',
          },
        ],
        totalFees: 4600,
        message: '',
        title: 'Delivery Charge',
        amount: '4600',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'HEAVY',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '1.2 kms',
      hasSurge: false,
      cta: {
        link: 'swiggy://menu?restaurant_id=118745&source=collection&query=Burger',
        type: 'DEEPLINK',
        text: 'RESTAURANT_MENU',
      },
      sla: {
        restaurantId: '',
        deliveryTime: 58,
        minDeliveryTime: 58,
        maxDeliveryTime: 58,
        lastMileTravel: 0,
        lastMileDistance: 1.2,
        serviceability: 'SERVICEABLE',
        rainMode: 'HEAVY',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '4.0',
      totalRatings: 0,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '624472',
      name: "Leon's - Burgers & Wings (Leon Grill)",
      uuid: 'abd90994-858e-455a-aaac-32d43469dcb7',
      city: '3',
      area: 'Himayat Nagar',
      totalRatingsString: '',
      cloudinaryImageId: 'jihaeqyqzda0eeno6viq',
      cuisines: ['American', 'Snacks', 'Turkish', 'Portuguese', 'Continental'],
      tags: [],
      costForTwo: 30000,
      costForTwoString: '₹300 FOR TWO',
      deliveryTime: 50,
      minDeliveryTime: 50,
      maxDeliveryTime: 50,
      slaString: '50 MINS',
      lastMileTravel: 0,
      slugs: {
        restaurant:
          "leon's---burgers-&-wings-(leon-grill)-himayath-nagar-himayath-nagar",
        city: 'Hyderabad',
      },
      cityState: '3',
      address: '',
      locality: 'old Mla Quarters Road',
      parentId: 371281,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 3100,
            message: '',
          },
          {
            name: 'BASE_TIME',
            fee: 0,
            message: '',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
            fee: 1500,
            message: '',
          },
        ],
        totalFees: 4600,
        message: '',
        title: 'Delivery Charge',
        amount: '4600',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'HEAVY',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '1.9 kms',
      hasSurge: false,
      cta: {
        link: 'swiggy://menu?restaurant_id=624472&source=collection&query=Burger',
        type: 'DEEPLINK',
        text: 'RESTAURANT_MENU',
      },
      sla: {
        restaurantId: '',
        deliveryTime: 50,
        minDeliveryTime: 50,
        maxDeliveryTime: 50,
        lastMileTravel: 0,
        lastMileDistance: 1.9,
        serviceability: 'SERVICEABLE',
        rainMode: 'HEAVY',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '4.0',
      totalRatings: 0,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '240756',
      name: 'Sauced Up',
      uuid: 'e6881ce3-bd4c-4aa5-b355-f91482b8cd7d',
      city: '3',
      area: 'Banjara Hills',
      totalRatingsString: '',
      cloudinaryImageId: 'ai6lejsspyomcua0echd',
      cuisines: ['American', 'Fast Food'],
      tags: [],
      costForTwo: 20000,
      costForTwoString: '₹200 FOR TWO',
      deliveryTime: 53,
      minDeliveryTime: 53,
      maxDeliveryTime: 53,
      slaString: '53 MINS',
      lastMileTravel: 0,
      slugs: {
        restaurant: 'sauced-up-mehdipatnam-mehdipatnam',
        city: 'Hyderabad',
      },
      cityState: '3',
      address: '',
      locality: 'Masab Tank',
      parentId: 19462,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfoV2: {
        header: '',
        shortDescriptionList: [],
        descriptionList: [],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 6400,
            message: '',
          },
          {
            name: 'BASE_TIME',
            fee: 0,
            message: '',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
            fee: 0,
            message: '',
          },
        ],
        totalFees: 6400,
        message: '',
        title: 'Delivery Charge',
        amount: '6400',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '5 kms',
      hasSurge: false,
      cta: {
        link: 'swiggy://menu?restaurant_id=240756&source=collection&query=Burger',
        type: 'DEEPLINK',
        text: 'RESTAURANT_MENU',
      },
      sla: {
        restaurantId: '',
        deliveryTime: 53,
        minDeliveryTime: 53,
        maxDeliveryTime: 53,
        lastMileTravel: 0,
        lastMileDistance: 5,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '4.4',
      totalRatings: 0,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '647349',
      name: 'Louis Burger',
      uuid: '9038da56-2124-458c-bcba-ab598599992e',
      city: '3',
      area: 'Banjara Hills',
      totalRatingsString: '',
      cloudinaryImageId: '19d3d352cc815b9d88b22617b41fa97b',
      cuisines: ['Burgers', 'American', 'Fast Food'],
      tags: [],
      costForTwo: 60000,
      costForTwoString: '₹600 FOR TWO',
      deliveryTime: 49,
      minDeliveryTime: 49,
      maxDeliveryTime: 49,
      slaString: '49 MINS',
      lastMileTravel: 0,
      slugs: {
        restaurant: 'louis-burger-anand-banjara-colony-banjara-hills',
        city: 'Hyderabad',
      },
      cityState: '3',
      address: '',
      locality: 'Anand Banjara Colony',
      parentId: 22485,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 7400,
            message: '',
          },
          {
            name: 'BASE_TIME',
            fee: 0,
            message: '',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
            fee: 0,
            message: '',
          },
        ],
        totalFees: 7400,
        message: '',
        title: 'Delivery Charge',
        amount: '7400',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [
          {
            imageId: 'newg.png',
            description: 'Gourmet',
          },
        ],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '6.9 kms',
      hasSurge: false,
      cta: {
        link: 'swiggy://menu?restaurant_id=647349&source=collection&query=Burger',
        type: 'DEEPLINK',
        text: 'RESTAURANT_MENU',
      },
      sla: {
        restaurantId: '',
        deliveryTime: 49,
        minDeliveryTime: 49,
        maxDeliveryTime: 49,
        lastMileTravel: 0,
        lastMileDistance: 6.9,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '4.2',
      totalRatings: 0,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '395346',
      name: "McDonald's Gourmet Burger Collection",
      uuid: '78b5ee5d-42e8-4ede-bb6f-049132223878',
      city: '3',
      area: 'Abids & Koti',
      totalRatingsString: '',
      cloudinaryImageId: 'br2llzwkfsdl8f0tfuez',
      cuisines: ['Burgers', 'Beverages', 'Cafe', 'Desserts'],
      tags: [],
      costForTwo: 60000,
      costForTwoString: '₹600 FOR TWO',
      deliveryTime: 57,
      minDeliveryTime: 57,
      maxDeliveryTime: 57,
      slaString: '57 MINS',
      lastMileTravel: 0,
      slugs: {
        restaurant:
          'mcdonalds-gourmet-burger-collection-abits-mpm-mall-abids-koti',
        city: 'Hyderabad',
      },
      cityState: '3',
      address: '',
      locality: 'MPM Mall',
      parentId: 10761,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 3100,
            message: '',
          },
          {
            name: 'BASE_TIME',
            fee: 0,
            message: '',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
            fee: 1500,
            message: '',
          },
        ],
        totalFees: 4600,
        message: '',
        title: 'Delivery Charge',
        amount: '4600',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'HEAVY',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '1.2 kms',
      hasSurge: false,
      cta: {
        link: 'swiggy://menu?restaurant_id=395346&source=collection&query=Burger',
        type: 'DEEPLINK',
        text: 'RESTAURANT_MENU',
      },
      sla: {
        restaurantId: '',
        deliveryTime: 57,
        minDeliveryTime: 57,
        maxDeliveryTime: 57,
        lastMileTravel: 0,
        lastMileDistance: 1.2,
        serviceability: 'SERVICEABLE',
        rainMode: 'HEAVY',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '4.1',
      totalRatings: 0,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '565287',
      name: "Wendy's Burgers",
      uuid: '95d9d747-8825-45bf-bbab-4a7afe535e5e',
      city: '3',
      area: 'Abids',
      totalRatingsString: '',
      cloudinaryImageId: '537944eb7977193d7166fbe5484b2cad',
      cuisines: [
        'Fast Food',
        'Snacks',
        'American',
        'Burgers',
        'Desserts',
        'Beverages',
      ],
      tags: [],
      costForTwo: 20000,
      costForTwoString: '₹200 FOR TWO',
      deliveryTime: 48,
      minDeliveryTime: 48,
      maxDeliveryTime: 48,
      slaString: '48 MINS',
      lastMileTravel: 0,
      slugs: {
        restaurant: 'wendys-abids-masab-tank',
        city: 'Hyderabad',
      },
      cityState: '3',
      address: '',
      locality: 'Mahesh Nagar',
      parentId: 972,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 3100,
            message: '',
          },
          {
            name: 'BASE_TIME',
            fee: 0,
            message: '',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
            fee: 0,
            message: '',
          },
        ],
        totalFees: 3100,
        message: '',
        title: 'Delivery Charge',
        amount: '3100',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '2.4 kms',
      hasSurge: false,
      cta: {
        link: 'swiggy://menu?restaurant_id=565287&source=collection&query=Burger',
        type: 'DEEPLINK',
        text: 'RESTAURANT_MENU',
      },
      sla: {
        restaurantId: '',
        deliveryTime: 48,
        minDeliveryTime: 48,
        maxDeliveryTime: 48,
        lastMileTravel: 0,
        lastMileDistance: 2.4,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '4.0',
      totalRatings: 0,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '572095',
      name: 'Fryeo',
      uuid: 'b1e1b56e-1445-4993-bc58-63827dce39db',
      city: '3',
      area: 'Himayath Nagar',
      totalRatingsString: '',
      cloudinaryImageId: 'ng3qmlxwdu1giyfhsq5s',
      cuisines: ['Pizzas', 'Fast Food', 'Indian'],
      tags: [],
      costForTwo: 35000,
      costForTwoString: '₹350 FOR TWO',
      deliveryTime: 54,
      minDeliveryTime: 54,
      maxDeliveryTime: 54,
      slaString: '54 MINS',
      lastMileTravel: 0,
      slugs: {
        restaurant: 'abids-fryeo-himayath-nagar-himayath-nagar',
        city: 'Hyderabad',
      },
      cityState: '3',
      address: '',
      locality: 'J N Roads',
      parentId: 84929,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfoV2: {
        header: '',
        shortDescriptionList: [],
        descriptionList: [],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 3100,
            message: '',
          },
          {
            name: 'BASE_TIME',
            fee: 0,
            message: '',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
            fee: 1500,
            message: '',
          },
        ],
        totalFees: 4600,
        message: '',
        title: 'Delivery Charge',
        amount: '4600',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'HEAVY',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '1.6 kms',
      hasSurge: false,
      cta: {
        link: 'swiggy://menu?restaurant_id=572095&source=collection&query=Burger',
        type: 'DEEPLINK',
        text: 'RESTAURANT_MENU',
      },
      sla: {
        restaurantId: '',
        deliveryTime: 54,
        minDeliveryTime: 54,
        maxDeliveryTime: 54,
        lastMileTravel: 0,
        lastMileDistance: 1.6,
        serviceability: 'SERVICEABLE',
        rainMode: 'HEAVY',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '--',
      totalRatings: 0,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '37103',
      name: 'KFC',
      uuid: '5bd88204-bfc5-4703-834e-cd09e1ba659c',
      city: '3',
      area: 'Basheer Bagh',
      totalRatingsString: '',
      cloudinaryImageId: '56c9ab92bd79745fd152a30fa2525426',
      cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
      tags: [],
      costForTwo: 40000,
      costForTwoString: '₹400 FOR TWO',
      deliveryTime: 51,
      minDeliveryTime: 51,
      maxDeliveryTime: 51,
      slaString: '51 MINS',
      lastMileTravel: 0,
      slugs: {
        restaurant: 'kfc-abids-road-abids-koti',
        city: 'Hyderabad',
      },
      cityState: '3',
      address: '',
      locality: 'Abids Road',
      parentId: 547,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 3100,
            message: '',
          },
          {
            name: 'BASE_TIME',
            fee: 0,
            message: '',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
            fee: 1500,
            message: '',
          },
        ],
        totalFees: 4600,
        message: '',
        title: 'Delivery Charge',
        amount: '4600',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'HEAVY',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '1.9 kms',
      hasSurge: false,
      cta: {
        link: 'swiggy://menu?restaurant_id=37103&source=collection&query=Burger',
        type: 'DEEPLINK',
        text: 'RESTAURANT_MENU',
      },
      sla: {
        restaurantId: '',
        deliveryTime: 51,
        minDeliveryTime: 51,
        maxDeliveryTime: 51,
        lastMileTravel: 0,
        lastMileDistance: 1.9,
        serviceability: 'SERVICEABLE',
        rainMode: 'HEAVY',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '4.0',
      totalRatings: 0,
      new: false,
    },
    subtype: 'basic',
  },
];

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  return (
    <div className="card">
      <img
        src={
          'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/' +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(', ')}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restaurant__list">
      {restaurentList.map((restaurant) => {
        return <RestaurantCard {...restaurant.data} />;
      })}
    </div>
  );
};

const Footer = () => {
  return <h4>Footer</h4>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
