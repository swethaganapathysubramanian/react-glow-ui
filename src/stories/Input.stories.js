import React from "react";

import { Input } from "../components/Input";

export default {
  title: "component/Input",
  component: Input,
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
  },
};

const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Input",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Input",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  placeholder: "Input",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Input",
};
