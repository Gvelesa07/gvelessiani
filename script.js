const countries = [
    'Georgia',
    'USA',
    'Armenia',
    'UK',
    'Shri-Lanka',
    'Azerbaijan',
    'Turkey',
    'Somalia',
    'Lebanon',
    'Denmark',
    'Italy',
    'France',
    'Iceland',
    'Greenland',
    'Serbia',
    'Latvia',
    'Estonia',
    'Romania',
    'Germany',
    'Russia',
    'China',
    'Japan'
];

const ul = document.getElementById('countries'); 
const btn = document.getElementById('btn')
const inpt = document.getElementById('inpt')



btn.addEventListener('click', () => {
    addCountry(inpt.value)
    inpt.value = ''
})



function addCountry(str){
    let li = document.createElement('li'); 
    li.innerHTML = str+' ';
    ul.appendChild(li);

    let but = document.createElement('button')
    but.addEventListener('click',()=>{
        ul.removeChild(li)
    })
    but.innerHTML = 'delete'
    li.appendChild(but)

}

countries.forEach(c => addCountry(c));


// marto es gavakete sxva ver mivxvdi da verc vnaxe
function render(){
    // remove all child elements ()
    // render list
function removeAllChildelements(parent){
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}}

/**
 * function render, რომელიც არენდერებს ლისტს.
 * function addCounty, რომლითაც countries მასივში ხდება ჩანაწერის დამატება
 * როგორც კი დაემატება ჩანაწერი countries მასივში, გამოვიძახოთ იქვე მანამდე დაწერილი render ფუნქცია.
 * function deleteRecord, რომლითაც მოხდება ჩანაწერის წაშლა countries მასივიდან, გამოვიძახოთ აქვე render ფუნქცია.
 * 
 * countries.push()
 * countries.splice()
 * 
 */
