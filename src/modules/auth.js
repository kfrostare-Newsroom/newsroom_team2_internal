import JtockAuth from "j-tockauth";
const auth = new JtockAuth({
  // host: "http://localhost:3000",
  host: "https://urban-living.herokuapp.com/api/",
  prefixUrl: "/api"
});

export default auth;
