export default {
    title: 'Tailpine/SplitButton',
    // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
    argTypes: {},
};

const Template = ({ ...args }) => {
    return `
    <div class="inline ml-32">
    <div class="relative inline-flex shadow-sm rounded-md">
        <button class="cursor-pointer relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 text-sm leading-5 font-medium text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-blue active:bg-indigo-700">
          Want to learn
        </button>
    
    
      <span x-data="{ isopen: false }" class="-ml-px relative block">
        <button @click="isopen = !isopen" type="button" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-blue active:bg-indigo-700 transition ease-in-out duration-150" aria-label="Expand">
          <!-- Heroicon name: chevron-down -->
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
    
        <div    
        x-show="isopen"
        @click.away="isopen = false"
        x-transition:enter="transition ease-out duration-100 transform"
        x-transition:enter-start="opacity-0 scale-95"
        x-transition:enter-end="opacity-100 scale-100"
        x-transition:leave="transition ease-in duration-75 transform"
        x-transition:leave-start="opacity-100 scale-100"
        x-transition:leave-end="opacity-0 scale-95" 
        class="origin-top-right absolute right-0 mt-2 -mr-1 w-56 rounded-md shadow-lg z-40">
          <div class="rounded-md bg-white shadow-xs">
            <div class="py-1">
    
    
                  <a class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 cursor-pointer">Already learned</a>
    
    
              <div class="border-t border-gray-100">             </div>
    
              <a class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 cursor-pointer">Currently learning</a>
              
            </div>
          </div>
        </div>
      </span>
    </div>
    </div>    
    `;
};

export const Default = Template.bind({});
Default.args = {};