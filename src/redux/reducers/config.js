import options from '../../constants/options';

const initialState = {
  top: {
    ...options.tops.basic,
  },
  spreader: {
    ...options.spreaders.basic,
  },
  basket: {},
  bottom: {},
};

console.log(initialState);

export default function config(state = initialState, action) {
  switch (action.type) {
    default: return state;
  }
}
