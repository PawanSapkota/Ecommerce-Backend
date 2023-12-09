require("dotenv").config()
export const port =process.env.PORT || 3000

export const Info = {
    origin: "http://localhost:3000",
    accessTokenExpiresIn: 15,
    refreshTokenExpiresIn: 60,
    redisCacheExpiresIn: 60,
    // emailFrom: 'contact@codevoweb.com',
  };