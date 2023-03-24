let first_h3_tag = document.querySelector(`h3`);

let ID_finder = document.querySelector(`#header`);

ID_finder[`style`][`fontSize`] = `76px`;
ID_finder[`style`][`fontWeight`] = `800`;
ID_finder[`style`][`width`] = `1%`;

let grab_class = document.querySelectorAll(`.text`);

function hacked(hacktext){




for(let counter = 0; counter < hacktext.length; counter = counter +1){

if(hacktext === true){
grab_class[counter][`innerHTML`] = `hacked` ;


} 

}


}

let insert_text = hacked(true);

for(let counter = 0; counter < grab_class.length; counter = counter +1){
    grab_class[counter][`innerHTML`] = `hacked`;
    
    }
    
    
let ID_finder_Element = document.getElementById(`span`);
 
let class_finder_element = document.getElementsByClassName(`text_2`);