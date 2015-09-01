import { UPDATE_ADVERT, ADVERT_FETCHED } from '../constants/ActionTypes';

const initialState = {
		
		title: "name",

  		categoryId: "",

  		locationId: "",

  		postcode: "",

  		visibleOnMap: false,

  		area: "",

  		termsAgreed: false,

	  	description: "",

	  	contactEmail: "",

		contactTelephone: "",

	  	contactUrl: "",

	  	useEmail: false,

	  	usePhone: false,

	  	useUrl: false,

	  	mainImageId: "",

	  	imageIds: [],

	  	youtubeLink: "",

	  	websiteUrl: "",

	  	attributes: {},

	  	features: {}

	  };

export default function advert(state = initialState, action) {
  switch (action.type) {
  case UPDATE_ADVERT:
  	//TODO Real data state management
    return state;
  case ADVERT_FETCHED:
  	//TODO Real data state management
    return state;

  default:
    return state;
  }
}
