import { GET_POPULARS } from './HomeAction'

const initialState = {
  populars:[
    {
      title: 'Gadget 1',
      description: 'ini deskripsi gadget',
      rating: 4
    },
    {
      title: 'Gadget 2',
      description: 'ini deskripsi gadget',
      rating: 5
    },
    {
      title: 'Gadget 3',
      description: 'ini deskripsi gadget',
      rating: 3
    },
    {
      title: 'Gadget 4',
      description: 'ini deskripsi gadget',
      rating: 4
    },
    {
      title: 'Gadget 5',
      description: 'ini deskripsi gadget',
      rating: 2
    },
  ]
}

export default function(state = initialState, action) {
  switch(action.type){
    case GET_POPULARS:
      return {
        ...state
      }
    default: 
      return state;
  }
}