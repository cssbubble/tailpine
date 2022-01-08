export default {
    title: 'Tailpine/StarRating',
    // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
    argTypes: {},
};

const Template = ({ ...args }) => {
    return `
    <div x-data="{ temp: 2, orig: 2 }" class="flex cursor-pointer text-4xl" @click="orig = temp">
    <input type="number" :value="orig" class="hidden"/>
  
    <template x-if="orig != null">
      <span class="text-gray-400 hover:text-gray-700" @mouseenter="temp = null" @mouseleave="temp = orig">⨯</span>
    </template>
  
    <template x-for="item in [1,2,3,4,5]">
     <span @mouseenter="temp = item" 
           @mouseleave="temp = orig"
           class="text-gray-300"
           :class="{'text-red-600': (temp >= item)}">★</span>
    </template>
  </div>  
    `;
};

export const Default = Template.bind({});
Default.args = {};