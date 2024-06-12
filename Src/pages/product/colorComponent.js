const colors = [
    { name: 'Black', hex: '#000000' },
    { name: 'Blue', hex: '#1790C8' },
    { name: 'Brown', hex: '#825D41' },
    { name: 'Green', hex: '#7BBA3C' },
    { name: 'Gray', hex: '#808080' },
    { name: 'Black', hex: '#000000' },
    { name: 'Orange', hex: '#F36B26' },
    { name: 'Pink', hex: '#F0728F' },
    { name: 'Purple', hex: '#8D429F' },
    { name: 'Red', hex: '#E7352B' },
    { name: 'White', hex: '#FFFFFF' },
    { name: 'Yellow', hex: '#FED533' }
];

const colorElements = colors.map(color => `
    <div class="flex flex-col justify-center items-center">
        <div class="bg-[${color.hex}] size-7 rounded-full"></div>
        <span>${color.name}</span>
    </div>
`).join('');

const colorPaletteHTML = ()=>{
    return `<div class="space-y-4">
    <h1 class="font-semibold">Color</h1>
    <div class="grid grid-cols-3 gap-3 space-y-2">
        ${colorElements}
    </div>
    </div>`;
}
class ColorsComponent extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = colorPaletteHTML();
    }
}
customElements.define("colors-compoent", ColorsComponent)

