import { MdHomeFilled } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import { FaUsers } from "react-icons/fa";
import { TiThListOutline } from "react-icons/ti";
import { SiSimpleanalytics } from "react-icons/si";
import { MdAttachMoney } from "react-icons/md";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { GiPayMoney } from "react-icons/gi";
import img1 from "../assets/d.png";
import img2 from "../assets/I.jpg";
import img3 from "../assets/dks.jpg";

//sidebar data
export const SidebarData = [
  {
    icon: MdHomeFilled,
    heading: "Dashboard",
  },
  {
    icon: CgNotes,
    heading: "Orders",
  },
  {
    icon: FaUsers,
    heading: "Customers",
  },
  {
    icon: TiThListOutline,
    heading: "Products",
  },
  {
    icon: SiSimpleanalytics,
    heading: "Analytics",
  },
];

//for cards
export const CardsData = [
  {
    title: "Sales",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,124",
    png: MdAttachMoney,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FCD290 100%)",
      boxShadow: "0px 10px 20px 0px #FDCOC7",
    },
    barValue: 90,
    value: "13,280",
    png: FaMoneyCheckAlt,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "14,124",
    png: GiPayMoney,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

//for the updates
export const UpdatesData = [
  {
    img: img1,
    name: "Dinesh Budhathoki",
    noti: "has ordered shushi platter.",
    time: "3 seconds ago",
  },
  {
    img: img2,
    name: "Indra",
    noti: "has ordered pasta.",
    time: "5 seconds ago",
  },
  {
    img: img3,
    name: "Ducks",
    noti: "has ordered chicken parmi.",
    time: "2 minuts ago",
  },
];
