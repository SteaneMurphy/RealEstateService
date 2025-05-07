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

/*
  This function checks if the document collection 'infoCards' exists and if
  it doesn't, it creates a new collection and populates it using the supplied
  'infoCards.json' file.

  As this function is more complicated than others, I have annotated each line.

  Quick explanation of some of the functions:
    - getDocs: tries to retrieve a document from the supplied collection name
    - addDoc: adds a new document to the supplied collection name
    - collection: defines a new collection (in this case a sub-collection)
  
  When learning to use this library, AI assistance used the words 'snapshot'
  and 'ref'. I felt these were suitable and readable and decided to use this
  naming convention to describe a reference variable or a database query.
*/
const infoCardExists = async () => {
    const infoCardsRef = collection(db, "infoCards");                         //creates a reference to the 'infoCards' collection
    
    const querySnapshot = await getDocs(infoCardsRef);                        //queries for a single document inside of the collection
                                                                              //this is used as a quick way to check the collection exists
    if (querySnapshot.empty) {
        console.log("No info cards found, adding data...");                   //if the collection doesn't exist, create a new collection
        const infoCardDocRef = await addDoc(infoCardsRef, {});

        const buyingRef = collection(infoCardDocRef, "buying");               //this particular collection contains sub-collections
        const rentingRef = collection(infoCardDocRef, "renting");             //each sub-collection is given a reference
        const sellingRef = collection(infoCardDocRef, "selling");
        const researchingRef = collection(infoCardDocRef, "researching");

        for (const card of infoCards.buying) {                                //for each entry in the sub-collection in the JSON file
            await addDoc(buyingRef, card);                                    //add a new document with the information in the JSON file
        }                                                                     //this is done for each of the four sub-collections that are
        for (const card of infoCards.renting) {                               //attatched to the main collection 'infoCards'
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
  const infoCardsRef = collection(db, "infoCards");                          //creates a reference to the 'infoCards' collection
  const querySnapshot = await getDocs(infoCardsRef);                         //checks to see if the collection exists or is empty

  if (querySnapshot.empty) {
      console.log("No info cards found.");
      return null;
  }

  const infoCards: InfoCards = {                                            //structure for a returned infoCards collection
      buying: [],                                                           //includes four sub-collections which are arrays
      renting: [],
      selling: [],
      researching: []
  };

  for (const docSnapshot of querySnapshot.docs) {                           //for each sub-collection document
      const infoCardDocRef = doc(db, "infoCards", docSnapshot.id);          //in the main collection 'infoCards'

      const buyingRef = collection(infoCardDocRef, "buying");               //get a reference to each sub-collection
      const rentingRef = collection(infoCardDocRef, "renting");
      const sellingRef = collection(infoCardDocRef, "selling");
      const researchingRef = collection(infoCardDocRef, "researching");

      const buyingSnapshot = await getDocs(buyingRef);                      //retrieve all data belonging to each sub-collection
      const rentingSnapshot = await getDocs(rentingRef);                    //and store in the relevant 'snapshot' variable
      const sellingSnapshot = await getDocs(sellingRef);
      const researchingSnapshot = await getDocs(researchingRef);

      buyingSnapshot.forEach(doc => {                                       //convert the retreived results for each sub-collection
          const data = doc.data() as InfoCard;                              //into the data structure defined in the typescript interface
          infoCards.buying.push(data);                                      //above. Push this data to the new structure as a new array
      });                                                                   //entry.
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
  return infoCards;                                                        //return the final data structure 'infoCards' which contains
};                                                                         //all the information in the four sub-collection as a JSON object

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

/*
  This uses the same functionality as the 'infoCards' API. In this case
  I have defined the JSON structure as a single variable and pass this
  as a single document to the collection. This avoided creating multiple
  layers of TypeScript types and data structures.
*/
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

/*
  This function fetches data from the database in a similar way to the 'infoCards'
  API. I create a temporary data structure variable that is the same layout as the
  stored data in the collection. I then assign the retreived data to this variable
  and return it as a JSON object. This was possible as the original document was stored
  as a single array rather than sub-collection like 'infoCards'.
*/

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
  id?: string;
  logo: string;
  logobackground: string;
  agentname: string;
  agentnamecolor: string;
  portrait: string;
  images: string[];
  price: string;
  address: string;
  suburb: string;
  state: string;
  postcode: string;
  bed: string;
  bath: string;
  car: string;
  square: string;
  type: string;
  descriptiontitle: string;
  description: string;
};

const listingData: ListingData[] = listings;

/*
  This uses the same functionality as the 'infoCards' API. In this case
  I have defined the JSON structure as a single variable and pass this
  as a single document to the collection. This avoided creating multiple
  layers of TypeScript types and data structures.
*/

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
      suburb: listing.suburb,
      state: listing.state,
      postcode: listing.postcode,
      bed: listing.bed,
      bath: listing.bath,
      car: listing.car,
      square: listing.square,
      type: listing.type,
      descriptiontitle: listing.descriptiontitle,
      description: listing.description
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

/*
  This function fetches data from the database in a similar way to the 'infoCards'
  API. I create a temporary data structure variable that is the same layout as the
  stored data in the collection. I then assign the retreived data to this variable
  and return it as a JSON object. This was possible as the original document was stored
  as a single array rather than sub-collection like 'infoCards'.
*/

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
      id: listingDoc.id,
      logo: listingDataRetrieved.logo || "",
      logobackground: listingDataRetrieved.logobackground || "",
      agentname: listingDataRetrieved.agentname || "",
      agentnamecolor: listingDataRetrieved.agentnamecolor || "",
      portrait: listingDataRetrieved.portrait || "",
      images: listingDataRetrieved.images || [],
      price: listingDataRetrieved.price || "",
      address: listingDataRetrieved.address || "",
      suburb: listingDataRetrieved.suburb || "",
      state: listingDataRetrieved.state || "",
      postcode: listingDataRetrieved.postcode || "",
      bed: listingDataRetrieved.bed || "",
      bath: listingDataRetrieved.bath || "",
      car: listingDataRetrieved.car || "",
      square: listingDataRetrieved.square || "",
      type: listingDataRetrieved.type || "",
      descriptiontitle: listingDataRetrieved.descriptiontitle || "",
      description: listingDataRetrieved.description || ""
    };

    listings.push(listingData);
  });

  console.log("Fetched listing data: ", listings);
  return listings;
};

export { infoCardExists, fetchInfoCards, footerCollectionExists, fetchFooterLinks, listingDataExists, fetchListingData};
