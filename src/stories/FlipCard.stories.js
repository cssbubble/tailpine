export default {
    title: 'Tailpine/FlipCard',
    // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
    argTypes: {},
};

const Template = ({ ...args }) => {
    return `
    <div x-data="{ flipped: false }" class="py-32 relative w-96 h-96 mx-auto mt-8 mb-8 cursor-pointer text-center font-bold tracking-light text-lg">
    <div x-show="!flipped" x-transition.scale.5.duration.400ms class="absolute text-center py-16 bg-gradient-to-br from-red-500 via-pink-300 to-transparent overflow-hidden inset-0 rounded-lg shadow-lg" @click="flipped = true;" >
          Front
    </div>
    <div x-show="flipped" x-transition.scale.5.duration.400ms style="display: none;" class="absolute text-center py-16 bg-gradient-to-br from-white via-yellow-200 to-green-300 bg-blue-300 overflow-hidden inset-0 rounded-lg shadow-lg" @click="flipped = false;" >
      Back
    </div>
  </div>  
    `;
};

export const Default = Template.bind({});
Default.args = {};