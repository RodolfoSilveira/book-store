export const Types = {
  REGISTER_REQUEST: 'subject/REGISTER_REQUEST',
  REGISTER_SUCCESS: 'subject/REGISTER_SUCCESS',
  REGISTER_ERROR: 'subject/REGISTER_ERROR',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
};

export const Creators = {
  register: formData => ({
    type: Types.REGISTER_REQUEST,
    payload: {formData},
  }),

  onSuccess: data => ({
    type: Types.REGISTER_SUCCESS,
    payload: {data},
  }),

  onError: () => ({
    type: Types.AUTH_ERROR,
  }),
};

const subject = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case Types.REGISTER_SUCCESS:
      return {
        ...state,
        data: payload.data,
        loading: false,
      };

    case Types.REGISTER_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default subject;
