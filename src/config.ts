require("dotenv").config()
export const port =process.env.PORT || 3001

export const Info = {
    origin: "http://localhost:3001",
    accessTokenExpiresIn: 15,
    refreshTokenExpiresIn: 60,
    redisCacheExpiresIn: 60,
    // emailFrom: 'contact@codevoweb.com',
  };