import { Services } from ".";

export default {
  title: "Components/Services",
  component: Services,
  argTypes: {
    cardStates: {
      options: ["branding", "branding-2", "development", "marketing", "development-2", "marketing-2"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    cardStates: "branding",
    className: {},
  },
};
