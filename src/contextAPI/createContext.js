import createDataProvider from "./createDataProvide";

const intialState = {
  formData: {
    initial: 1,
    fixedLegth: 7,
    create: "NO",
  },
};

const validate = (data, id) => {
  console.log(data);
  console.log("id : " + id);
  return data.initial === id
    ? { ...data, initial: data.initial + 1, create: "YES" }
    : { ...data, create: "NO" };
};

const globalReducer = (state = intialState, action) => {
  switch (action.type) {
    case "Increase": {
      state = {
        ...state,
        formData: validate(state.formData, action.payload),
      };
      console.log("AFTER" + JSON.stringify(state));
      return state;
    }
    default:
      return state;
  }
};

// const signIn = (dispatch) => async ({ email, password }: any) => {
//   try {
//     const response = await trackApi.post("/signin", { email, password });
//     await AsyncStorage.setItem("token", response.data.token);
//     dispatch({ type: "signup", payload: response.data.token });
//   } catch (error) {
//     console.log(error);
//     dispatch({ type: "add_error", payload: "Oops..!! Something went wrong!!" });
//   }
// };

const createNew = (dispatch) => (id) => {
  try {
    dispatch({ type: "Increase", payload: id });
  } catch (error) {
    console.log({ error });
  }
};

export const { Context, Provider } = createDataProvider(
  globalReducer,
  { createNew }, //Funcions
  intialState //IntialState
);
