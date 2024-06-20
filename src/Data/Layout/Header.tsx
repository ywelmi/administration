import { ProfilesMessageType } from "../../Types/Layout/Header";

export const profilesMessage: ProfilesMessageType[] = [
  {
    name: "My Profile",
    icon: "User",
    link: `${process.env.PUBLIC_URL}/users/userprofile`,
  },
  {
    name: "Inbox",
    icon: "Mail",
    link: `${process.env.PUBLIC_URL}/email/letterbox`,
  },
  {
    name: "Settings",
    icon: "Settings",
    link: `${process.env.PUBLIC_URL}/users/useredit`,
  },
];

export const notificationTab = [
  {
    title: "All(3)",
    id: "1",
  },
  {
    title: "Messages",
    id: "2",
  },
  {
    title: "Cart",
    id: "3",
  },
];

export const userNotification = [
  {
    image: "5.jpg",
    name: "Floyd Miles",
    detail: "Sir, Can i remove part in des...",
  },
  {
    image: "6.jpg",
    name: "Dianne Russell",
    detail: "So, what is my next work ?",
  },
];

export const messageData = [
  {
    image: "3.jpg",
    name: "Robert D. Hambly",
    detail: "Hello Miss...😊",
    time: "44 sec",
  },
  {
    image: "7.jpg",
    name: "Courtney C. Strang",
    detail: "Wishing You a Happy Birthday Dear.. 🥳🎊",
    time: "52 min",
  },
  {
    image: "5.jpg",
    name: "Raye T. Sipes",
    detail: "Hello Dear!! This Theme Is Very beautiful",
    time: "48 min",
  },
  {
    image: "6.jpg",
    name: "Henry S. Miller",
    detail: "You’re older today than yesterday, happy birthday!",
    time: "3 min",
  },
];

export const cartData = [
  {
    image: "cart-img.jpg",
    title: "Furniture Chair for Home",
    amount: "500",
  },
  {
    image: "receiver-img.jpg",
    title: "Men Cotton Blend Blue T-Shirt",
    amount: "695.00",
  },
];

export const bookMarkData = [
  {
    icon: "form",
    path: `/forms/formscontrols/formvalidation`,
    title: "Form",
    color: "primary",
  },
  {
    icon: "user",
    path: `/users/userprofile`,
    title: "Profile",
    color: "secondary",
  },
  {
    icon: "table",
    path: `/table/reactstraptable/basictable`,
    title: "Tables",
    color: "warning",
  },
];
