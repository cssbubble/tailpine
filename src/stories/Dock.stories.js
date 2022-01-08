export default {
    title: 'Tailpine/Dock',
    // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
    argTypes: {},
};

const Template = ({ ...args }) => {
    return `
    <footer class="fixed bg-white bottom-2 p-4 mb-4 rounded-lg mx-auto w-auto shadow-2xl z-10 flex items-end"  style="height: 80px" 
          @mousemove="x = $event.clientX; y = $event.clientY" 
          @mouseleave="x=10000;y=10000" x-data="{
        x: 10000, y: 10000,
        scalefactor(el){
          let rect = el.getBoundingClientRect();
          let dx = Math.abs(this.x - (rect.left + rect.right)/2.0);
          let dy = Math.abs(this.y - (rect.top + rect.bottom)/2.0);
          let dist = Math.sqrt(dx ** 2 + dy ** 2);
          return Math.min(Math.max(1.0, (2.0 - (dist-20) / 120)), 2.0);
        },
        size(el){
          return String(Math.round(48 * this.scalefactor(el))) + 'px';
        }}">
     <div id="hoverarea" class="flex items-end gap-x-4" style="height: 96px">
       <button class="bg-green-500 text-white text-2xl font-bold rounded" :style="{ width: size($el), height: size($el) }" >A</button>
       <button class="bg-yellow-500 text-white text-2xl font-bold rounded" :style="{ width: size($el), height: size($el) }" >B</button>
       <button class="bg-red-500 text-white text-2xl font-bold rounded" :style="{ width: size($el), height: size($el) }" >C</button>
       <button class="bg-purple-500 text-white text-2xl font-bold rounded" :style="{ width: size($el), height: size($el) }" >D</button>
       <button class="bg-indigo-500 text-white text-2xl font-bold rounded" :style="{ width: size($el), height: size($el) }" >E</button>
       <button class="bg-pink-500 text-white text-2xl font-bold rounded" :style="{ width: size($el), height: size($el) }" >F</button>
       <button class="bg-red-500 text-white text-2xl font-bold rounded" :style="{ width: size($el), height: size($el) }" >G</button>
       <button class="bg-green-500 text-white text-2xl font-bold rounded" :style="{ width: size($el), height: size($el) }" >H</button>
     </div>
    </footer>
    `;
};

export const Standard = Template.bind({});
Standard.args = {};