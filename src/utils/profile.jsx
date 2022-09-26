import AccountDetail from "../components/userProfile/accountDetail";
import AddressProfile from "../components/userProfile/addressProfile";
import Generic from "../page/Generic";

export const Account = [
  {
    id: 1,
    text: "Account Details",
    path: `/account-details`,
    component: <AccountDetail />,
  },
  {
    id: 2,
    text: "Address",
    path: "/address",
    component: <AddressProfile />,
  },
  {
    id: 3,
    text: "Orders",
    path: "/orders",
    component: <Generic />,
  },
  {
    id: 4,
    text: "Wishlist",
    path: "/wishlist",
    component: <Generic />,
  },
  {
    id: 5,
    text: "Reports",
    path: "/reports",
    component: <Generic />,
  },
  {
    id: 6,
    text: "Downloads",
    path: "/downloads",
    component: <Generic />,
  },
  {
    id: 7,
    text: "Support",
    path: "/support",
    component: <Generic />,
  },
];
