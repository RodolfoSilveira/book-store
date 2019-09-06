export const Types = {
  AUTH_REQUEST: 'subject/AUTH_REQUEST',
  AUTH_SUCCESS: 'subject/AUTH_SUCCESS',
  AUTH_ERROR: 'subject/AUTH_ERROR',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
};

export const Creators = {
  authorize: (email, password) => ({
    type: Types.AUTH_REQUEST,
    payload: {email, password},
  }),

  onSuccess: data => ({
    type: Types.AUTH_SUCCESS,
    payload: {data},
  }),

  onError: () => ({
    type: Types.AUTH_ERROR,
  }),
};

const subject = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case Types.AUTH_SUCCESS:
      return {
        ...state,
        data: payload.data,
        loading: false,
      };

    case Types.AUTH_ERROR:
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
