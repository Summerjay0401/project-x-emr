const setProfile = (response) => {
    let user = { ...response.data.user };
    user.token = response.data.token;
    user = JSON.stringify(user);
    //setUser is imported from the useAuth React Context
    setUser(user);
    //also set the user in local storage
    localStorage.setItem("user", user);
    return history.push("/admin/dashboard");
  }; 