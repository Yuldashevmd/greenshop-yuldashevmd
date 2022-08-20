import BlogsPage from "../page/Blogs";
import HomePage from "../page/Home";
import PlantCarePage from "../page/PlantCare";
import ShopPage from "../page/Shop";

export const navbar = [
  {
    id: 1,
    title: "Home",
    path: "/home",
    component: <HomePage />,
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
];
