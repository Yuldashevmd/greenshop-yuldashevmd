import { Navigate } from "react-router-dom";
import UserProfile from "../components/userProfile";
import BlogsPage from "../page/Blogs";
import PlantCarePage from "../page/PlantCare";
import ShopPage from "../page/Shop";

export const navbar = [
  {
    id: 1,
    title: "Home",
    path: "/home",
    component: <Navigate to="/home/house-plants" />,
  },
  {
    id: 2,
    title: "Shop",
    path: "/shop",
    component: <ShopPage />,
  },
  {
    id: 3,
    title: "Plant Care",
    path: "/plantcare",
    component: <PlantCarePage />,
  },
  {
    id: 4,
    title: "Blogs",
    path: "/blog",
    component: <BlogsPage />,
  },
  {
    id: 5,
    path: "/profile",
    component: <UserProfile />,
  },
];
