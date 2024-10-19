import { useState } from "react";

export default function useSiteHeaderHelper() {
  const data = [
    {
      Text: "Masters",
      Menus: [
        { Text: "Employee Master", Link: "employee" },
        { Text: "Profile Master", Link: "profile" },
        { Text: "Data Master", Link: "data" },
      ],
    },
    {
      Text: "Transaction",
      Menus: [
        { Text: "Service Plan", Link: "employee" },
        { Text: "Event", Link: "profile" },
        {
          Text: "Data ",
          Link: "data",
          Menus: [
            { Text: "Data 1", Link: "employee" },
            { Text: "Data 2", Link: "employee" },
          ],
        },
      ],
    },
    {
      Text: "Utilities",
      Menus: [
        { Text: "Theme", Link: "employee" },
        { Text: "Notification", Link: "profile" },
        { Text: "SMS", Link: "employee" },
        { Text: "Notification", Link: "profile" },
        { Text: "Theme", Link: "employee" },
        { Text: "Notification", Link: "profile" },
      ],
    },
    {
      Text: "Components",
      Menus: [
        { Text: "Blogs", Link: "employee" },
        { Text: "Cards", Link: "profile" },
        {
          Text: "Headers",
          Link: "data",
          Menus: [
            { Text: "Sub Menu 1", Link: "employee" },
            { Text: "Sub Menu 2", Link: "employee" },
          ],
        },
      ],
    },
    {
      Text: "Concepts",
      Menus: [
        {
          Text: "Introduction",
          Link: "Introduction",
        },
        { Text: "Developer", Link: "Developer" },
        { Text: "Migration", Link: "Migration" },
      ],
    },
  ];

  const [menuData, setMenuData] = useState(data);

  return { menuData, setMenuData };
}
