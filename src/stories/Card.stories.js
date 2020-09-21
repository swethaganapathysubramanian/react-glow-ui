import React from "react";

import Card from "../components/Card";

export default {
  title: "component/Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const First = Template.bind({});
First.args = {
  image:
    "https://i.pinimg.com/originals/37/35/ef/3735efded62478aae08e9868771abca8.png",
  alt: "Coldest Sunset",
  title: "Coldest Sunset",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
  tags: ["photography", "travel", "winter"],
};

export const Second = Template.bind({});
Second.args = {
  image:
    "https://cdn-image.departures.com/sites/default/files/styles/responsive_900x600/public/1581019741/header-mt-fuji-cherry-blossoms-JPCHERRYBLOSSOM0220.jpg?itok=HQVBDkju",
  alt: "Cherry Blossoms",
  title: "Cherry Blossoms",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
  tags: ["flowers", "travel", "japan", "spring"],
};
