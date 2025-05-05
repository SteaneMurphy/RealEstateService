import { doc, getDoc, addDoc, collection, query, getDocs } from "firebase/firestore";
import infoCardsData from "../backend/infoCards.json";
import footerCategoriesData from "../backend/footerCategories.json";
import listings from "../backend/listings.json";
import { db } from "./FirebaseInit";

/*
  INFO CARD:
    infoCardExists() - Check if collection exists
    fetchInfoCards() - Get all info cards in collection infoCards
*/

interface InfoCard {
    title: string;
    description: string;
    link: string;
    image: string;
}

interface InfoCards {
    buying: InfoCard[];
    renting: InfoCard[];
    selling: InfoCard[];
    researching: InfoCard[];
}

const infoCards: InfoCards = infoCardsData.infoCards;

const infoCardExists = async () => {
    // Get a reference to the "infoCards" collection
    const infoCardsRef = collection(db, "infoCards");
    
    // Query for the first document inside "infoCards" to check if it exists
    const querySnapshot = await getDocs(infoCardsRef);
    
    if (querySnapshot.empty) {
        // If the collection is empty, add the data
        console.log("No info cards found, adding data...");

        // Create a new document in the "infoCards" collection
        const infoCardDocRef = await addDoc(infoCardsRef, {});

        // Adding sub-collections to the new "infoCards" document
        const buyingRef = collection(infoCardDocRef, "buying");
        const rentingRef = collection(infoCardDocRef, "renting");
        const sellingRef = collection(infoCardDocRef, "selling");
        const researchingRef = collection(infoCardDocRef, "researching");

        // Add the cards to each sub-collection
        for (const card of infoCards.buying) {
            await addDoc(buyingRef, card);
        }
        for (const card of infoCards.renting) {
            await addDoc(rentingRef, card);
        }
        for (const card of infoCards.selling) {
            await addDoc(sellingRef, card);
        }
        for (const card of infoCards.researching) {
            await addDoc(researchingRef, card);
        }

        console.log("Info cards added to Firestore!");
    } 
    else 
    {
        console.log("Info cards already exist, no new data added.");
    }
};

const fetchInfoCards = async (): Promise<InfoCards | null> => {
  const infoCardsRef = collection(db, "infoCards");
  const querySnapshot = await getDocs(infoCardsRef);

  if (querySnapshot.empty) {
      console.log("No info cards found.");
      return null;  // No info cards exist
  }

  const infoCards: InfoCards = {
      buying: [],
      renting: [],
      selling: [],
      researching: []
  };

  // Fetch data from each sub-collection
  for (const docSnapshot of querySnapshot.docs) {
      const infoCardDocRef = doc(db, "infoCards", docSnapshot.id);

      // Fetch sub-collections (buying, renting, selling, researching)
      const buyingRef = collection(infoCardDocRef, "buying");
      const rentingRef = collection(infoCardDocRef, "renting");
      const sellingRef = collection(infoCardDocRef, "selling");
      const researchingRef = collection(infoCardDocRef, "researching");

      const buyingSnapshot = await getDocs(buyingRef);
      const rentingSnapshot = await getDocs(rentingRef);
      const sellingSnapshot = await getDocs(sellingRef);
      const researchingSnapshot = await getDocs(researchingRef);

      // Add data to infoCards object
      buyingSnapshot.forEach(doc => {
          const data = doc.data() as InfoCard;
          infoCards.buying.push(data);
      });
      rentingSnapshot.forEach(doc => {
          const data = doc.data() as InfoCard;
          infoCards.renting.push(data);
      });
      sellingSnapshot.forEach(doc => {
          const data = doc.data() as InfoCard;
          infoCards.selling.push(data);
      });
      researchingSnapshot.forEach(doc => {
          const data = doc.data() as InfoCard;
          infoCards.researching.push(data);
      });
  }

  console.log("Fetched info cards: ", infoCards);
  return infoCards;
};

/*
  FOOTER LINKS:
    footerCollectionExists() - Check if collection exists
    fetchFooterLinks() - Get all footer links in collection footerCategories
*/

interface Footerlink {
    title: string;
    links: 
    {
      text: string;
    }[];
};

interface FooterCategory {
    realestate: Footerlink;
    newhomes: Footerlink;
    popularareas: Footerlink;
    popularsearches: Footerlink;
};

const footerData: FooterCategory = footerCategoriesData.footerCategories;

const footerCollectionExists = async () => {
  const footerCollectionRef = collection(db, "footerCategories");
  const querySnapshot = await getDocs(footerCollectionRef);

  if (querySnapshot.empty) {
    console.log("No footer collection found, adding data...");

    const footerDocumentData = {
      realestate: {
        title: footerData.realestate.title,
        links: footerData.realestate.links
      },
      newhomes: {
        title: footerData.newhomes.title,
        links: footerData.newhomes.links
      },
      popularareas: {
        title: footerData.popularareas.title,
        links: footerData.popularareas.links
      },
      popularsearches: {
        title: footerData.popularsearches.title,
        links: footerData.popularsearches.links
      }
    };

    await addDoc(footerCollectionRef, footerDocumentData);

    console.log("Footer links added to Firestore!");
  }
  else
  {
    console.log("Footer links exist, no new data added.");
  }
};

const fetchFooterLinks = async (): Promise<FooterCategory | null> => {
  const footerCollectionRef = collection(db, "footerCategories");
  const querySnapshot = await getDocs(footerCollectionRef);

  if (querySnapshot.empty) {
      console.log("No footer link data found.");
      return null;
  }

  const footerLinks: FooterCategory = {
      realestate: { title: "", links: [] },
      newhomes: { title: "", links: [] },
      popularareas: { title: "", links: [] },
      popularsearches: { title: "", links: [] },
  };

  const footerDoc = querySnapshot.docs[0];
  const footerData = footerDoc.data();

  if (footerData.realestate) {
    footerLinks.realestate.title = footerData.realestate.title;
    footerLinks.realestate.links = footerData.realestate.links;
  }

  if (footerData.newhomes) {
    footerLinks.newhomes.title = footerData.newhomes.title;
    footerLinks.newhomes.links = footerData.newhomes.links;
  }

  if (footerData.popularareas) {
    footerLinks.popularareas.title = footerData.popularareas.title;
    footerLinks.popularareas.links = footerData.popularareas.links;
  }

  if (footerData.popularsearches) {
    footerLinks.popularsearches.title = footerData.popularsearches.title;
    footerLinks.popularsearches.links = footerData.popularsearches.links;
  }

  console.log("Fetched footer links: ", footerLinks);
  return footerLinks;
};

/*
  LISTING DATA:
    listingDataExists() - Check if collection exists
    fetchListingData() - Get all property data for search term
*/

interface ListingData {
  logo: string;
  logobackground: string;
  agentname: string;
  agentnamecolor: string;
  portrait: string;
  images: string[];
  price: string;
  address: string;
  bed: string;
  bath: string;
  car: string;
  square: string;
  type: string;
};

const listingData: ListingData[] = listings;

const listingDataExists = async () => {
  const listingCollectionRef = collection(db, "listings");
  const querySnapshot = await getDocs(listingCollectionRef);

  if (querySnapshot.empty) {
    console.log("No listing collection found, adding data...");

  for (const listing of listingData) {
    const listingDocumentData = {
      logo: listing.logo,
      logobackground: listing.logobackground,
      agentname: listing.agentname,
      agentnamecolor: listing.agentnamecolor,
      portrait: listing.portrait,
      images: listing.images,
      price: listing.price,
      address: listing.address,
      bed: listing.bed,
      bath: listing.bath,
      car: listing.car,
      square: listing.square,
      type: listing.type,
    };

    await addDoc(listingCollectionRef, listingDocumentData);
  }
    console.log("Listing data added to Firestore!");
  }
  else
  {
    console.log("Listing data exists, no new data added.");
  }
};

const fetchListingData = async (): Promise<ListingData[] | null> => {
  const listingCollectionRef = collection(db, "listings");
  const querySnapshot = await getDocs(listingCollectionRef);

  if (querySnapshot.empty) {
      console.log("No listing data found.");
      return null;
  }

  const listings: ListingData[] = [];

  querySnapshot.forEach((listingDoc) => {
    const listingDataRetrieved = listingDoc.data();

    const listingData: ListingData = {
      logo: listingDataRetrieved.logo || "",
      logobackground: listingDataRetrieved.logobackground || "",
      agentname: listingDataRetrieved.agentname || "",
      agentnamecolor: listingDataRetrieved.agentnamecolor || "",
      portrait: listingDataRetrieved.portrait || "",
      images: listingDataRetrieved.images || [],
      price: listingDataRetrieved.price || "",
      address: listingDataRetrieved.address || "",
      bed: listingDataRetrieved.bed || "",
      bath: listingDataRetrieved.bath || "",
      car: listingDataRetrieved.car || "",
      square: listingDataRetrieved.square || "",
      type: listingDataRetrieved.type || "",
    };

    listings.push(listingData);
  });

  console.log("Fetched listing data: ", listings);
  return listings;
};

export { infoCardExists, fetchInfoCards, footerCollectionExists, fetchFooterLinks, listingDataExists, fetchListingData};
