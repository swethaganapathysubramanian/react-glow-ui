import React from "react";

import HorizontalCard from "../components/HorizontalCard";

export default {
  title: "component/HorizontalCard",
  component: HorizontalCard,
};

const Template = (args) => <HorizontalCard {...args} />;

export const First = Template.bind({});
First.args = {
  image:
    "https://i.pinimg.com/originals/37/35/ef/3735efded62478aae08e9868771abca8.png",
  alt: "Coldest Sunset",
  title: "Coldest Sunset",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
  userimg:
    "https://i2.wp.com/nofiredrills.com/wp-content/uploads/2016/10/myavatar.png?fit=400%2C400&ssl=1",
  useralt: "Swetha",
  name: "Swetha",
  date: "Aug 20",
};

export const Second = Template.bind({});
Second.args = {
  image:
    "https://www.incimages.com/uploaded_files/image/1024x576/getty_938993594_391384.jpg",
  alt: "Can coffee make you a better developer?",
  title: "Can coffee make you a better developer?",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
  userimg:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_WVdLJ1Pr_eUL7e91F9uR7qD8VQxZE6-GxQ&usqp=CAU",
  useralt: "Jonathan",
  name: "Jonathan",
  date: "Sep 20",
};
