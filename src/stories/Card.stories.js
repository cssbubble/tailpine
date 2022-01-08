export default {
    title: 'Tailpine/Card',
    // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
    argTypes: {
      backgroundColor: { control: 'text' },
      label: { control: 'text' }
    },
};

const Template = ({ label, backgroundColor, ...args }) => {
    return `<a class="${backgroundColor} hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400" href="#">${label}</a>`;
};

export const Default = Template.bind({});
Default.args = {
  backgroundColor: 'bg-purple-500',
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  backgroundColor: 'bg-red-500',
  label: 'This should be large button',
};