import React from "react";

import ButtonTypes from "../components/ButtonTypes";

export default {
  title: "Component/ButtonTypes",
  component: ButtonTypes,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <ButtonTypes {...args} />;

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
  outlined: true,
};

export const Red = Template.bind({});
Red.args = {
  label: "Button",
  backgroundColor: "red",
};

export const Blue = Template.bind({});
Blue.args = {
  label: "Button",
  backgroundColor: "Blue",
};

export const Green = Template.bind({});
Green.args = {
  label: "Button",
  backgroundColor: "green",
};

export const OrangeRed = Template.bind({});
OrangeRed.args = {
  label: "Button",
  backgroundColor: "Orange",
};
