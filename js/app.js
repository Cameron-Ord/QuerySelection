let first_h3_tag = document.querySelector(`h3`);

let ID_finder = document.querySelector(`#header`);

ID_finder[`style`][`fontSize`] = `76px`;
ID_finder[`style`][`fontWeight`] = `800`;
ID_finder[`style`][`width`] = `1%`;

let grab_class = document.querySelectorAll(`.text`);


for(let counter = 0; counter < grab_class.length; counter = counter +1){
    grab_class[counter][`innerHTML`] = `hacked`;
    
    }
    
    
let ID_finder_Element = document.getElementById(`span`);
 
let class_finder_element = document.getElementsByClassName(`text_2`);


let my_text = document.querySelector(`#single_text`);
my_text.insertAdjacentHTML(`beforebegin`, `<p>I AM BEFORE</p>`);
my_text.insertAdjacentHTML(`afterbegin`, `<p>I AM AFTER</p>`);
my_text.insertAdjacentHTML(`beforeend`, `<p>I AM BEFORERER</p>`);
my_text.insertAdjacentHTML(`afterend`, `<p>I AM AFTERER</p>`);

let image = document.getElementById(`image`);
image.setAttribute(`src`, `https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png`);