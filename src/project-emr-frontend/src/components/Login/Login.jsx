import Login from "./Login.css";

const Login = async (event) => {
    if (event) {
      event.preventDefault();
    }

    //handle exceptions like: no email entered, no password entered, here.

    try {
      let response = await AuthApi.Login({
        email,
        password,
      });
      if (response.data && response.data.success === false) {
        //display error coming from server
        return setError(response.data.msg);
      }
      return setProfile(response);
    } catch (err) {
      //display error originating from server / other sources
      console.log(err);
      if (err.response) {
        return setError(err.response.data.msg);
      }
      return setError("There has been an error.");
    }
  }; 

  export default Login