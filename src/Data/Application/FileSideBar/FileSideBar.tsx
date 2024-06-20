import { AlertCircle, Clock, Folder, Home, Star, Trash2 } from "react-feather";
import { MyFiles } from "../../../Types/Application/FileSideBar/FileSideBar";

export const sideButtons = [
  {
    className: "primary",
    icon: <Home />,
    title: "Home",
  },
  {
    className: "light",
    icon: <Folder />,
    title: "All",
  },
  {
    className: "light",
    icon: <Clock />,
    title: "Recent",
  },
  {
    className: "light",
    icon: <Star />,
    title: "Starred",
  },
  {
    className: "light",
    icon: <AlertCircle />,
    title: "Recovery",
  },
  {
    className: "light",
    icon: <Trash2 />,
    title: "Deleted",
  },
];

export const quickAccessData = [
  {
    title: "Videos",
    icons: "youtube-play",
    color: "danger",
  },
  {
    title: "Apps",
    icons: "th",
    color: "info",
  },
  {
    title: "Document",
    icons: "file-text",
    color: "secondary",
  },
  {
    title: "Music",
    icons: "music",
    color: "warning",
  },
  {
    title: "Download",
    icons: "download",
    color: "primary",
  },
  {
    title: "Folder",
    icons: "folder",
    color: "info",
  },
  {
    title: "Zip File",
    icons: "file-archive-o",
    color: "secondary",
  },
  {
    title: "Trash",
    icons: "trash",
    color: "danger",
  },
];

export const foldersData = [
  {
    icons: "file-archive-o",
    title: "Tivo admin",
    file: "20 file",
    time: "2 Hour ago",
  },
  {
    icons: "folder",
    title: "Viho admin",
    file: "14 file",
    time: "3 Hour ago",
  },
  {
    icons: "file-archive-o",
    title: "Unice admin",
    file: "15 file",
    time: "3 Day ago",
  },
  {
    icons: "folder",
    title: "Koho admin",
    file: "10 file",
    time: "1 Day ago",
  },
];

export const filesData: MyFiles[] = [
  {
    icons: "folder",
    title: "Logo.psd",
    details: "7 Hour ago, 2.0 MB",
    color: "info",
  },
  {
    icons: "file-excel-o",
    title: "Backend.xls",
    details: "2 Day ago, 3.0 GB",
    color: "success",
  },
  {
    icons: "file-archive-o",
    title: "Project.zip",
    details: "1 Day ago, 1.9 GB",
    color: "warning",
  },
  {
    icons: "folder",
    title: "Report.txt",
    details: "1 Day ago, 0.9 KB",
    color: "primary",
  },
];
