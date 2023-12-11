export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/redirect", "/dashboard", "/profile", "/booking"],
};
