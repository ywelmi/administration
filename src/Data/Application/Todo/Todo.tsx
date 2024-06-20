import { Activity, Cast, CheckCircle, FilePlus, Trash } from "react-feather";
import { TodoDataType } from "../../../Types/Application/Todo/Todo";
import {
  AllTask,
  Completed,
  InProcess,
  Pending,
  TrashHeading,
} from "../../../utils/Constant";

export const sideBartList = [
  { color: "primary", icon: <FilePlus />, tittle: AllTask },
  { color: "success", icon: <CheckCircle />, tittle: Completed, badge: 3 },
  { color: "danger", icon: <Cast />, tittle: Pending, badge: 2 },
  { color: "info", icon: <Activity />, tittle: InProcess, badge: 2 },
  { color: "danger", icon: <Trash />, tittle: TrashHeading },
];

export const todoListData: TodoDataType[] = [
  {
    id: 0,
    title: "Weekly Bigbazar Shopping",
    status: "pending",
    badge: "In Progress",
    badgeClass: "bg-light-primary font-primary",
    timeLimit: "10 Nov",
  },
  {
    id: 1,
    title: "Go Outside Picnic on Sunday",
    status: "pending",
    badge: "Pending",
    badgeClass: "bg-light-danger font-danger",
    timeLimit: "04 Aug",
  },
  {
    id: 2,
    title: "Write a blog post",
    status: "completed",
    badge: "Done",
    badgeClass: "bg-light-success font-success",
    timeLimit: "25 Feb",
  },
  {
    id: 3,
    title: "Do the chicken dance",
    status: "pending",
    badge: "In Progress",
    badgeClass: "bg-light-primary font-primary",
    timeLimit: "15 Dec",
  },
  {
    id: 4,
    title: "Pay the electricity bills",
    status: "pending",
    badge: "Pending",
    badgeClass: "bg-light-danger font-danger",
    timeLimit: "11 Nov",
  },
  {
    id: 5,
    title: "Make dinner reservation",
    status: "completed",
    badge: "Done",
    badgeClass: "bg-light-success font-success",
    timeLimit: "08 July",
  },
  {
    id: 6,
    title: "Meeting with photographer",
    status: "completed",
    badge: "Done",
    badgeClass: "bg-light-success font-success",
    timeLimit: "08 Sep",
  },
  {
    id: 7,
    title: "Birthday wish to best friend",
    status: "completed",
    badge: "Done",
    badgeClass: "bg-light-success font-success",
    timeLimit: "08 Sep",
  },
];
