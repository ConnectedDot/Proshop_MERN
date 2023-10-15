export const BASE_URL =
  process.env.NODE_ENV === "develeopment"
    ? "proshop-mern-backend.vercel.app"
    : "";
// export const BASE_URL = "proshop-mern-backend.vercel.app"; // If using proxy
export const PRODUCTS_URL = "/api/products";
export const USERS_URL = "/api/users";
export const ORDERS_URL = "/api/orders";
export const PAYPAL_URL = "/api/config/paypal";
