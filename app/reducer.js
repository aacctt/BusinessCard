export const SET_OCR = 'ocr/set';
export const GET_OCR = "ocr/get";

export default function reducer(state = { strings: [] }, action) {
  switch (action.type) {
  	case  SET_OCR : {
  		return Object.assign({}, state, {
        	strings: action.data
      	})
  	}
  	case GET_OCR : {
  		return state.strings;
  	}
    default:
      return state;
  }
}

const initialState = {
  strings : []
}


export function setOcr(strings) {
	console.log("setOcr called");
  return {
    type: SET_OCR,
    data: strings
  };
}

export function getOcr(strings) {
  return {
    type: GET_OCR
  };
}