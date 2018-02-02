//visibility  tesla=open,close,toggle tsopen tstoggle tsclose


//OPEN

window.addEventListener('load',()=>{
    let loader = document.getElementsByTagName('ts-loader');
    if( loader.length ) {
        loader[0].style.display = 'none';
    }
});


let events = {
    'ts-open':(val)=>{
        let elems = document.querySelectorAll(val);
        for(let el of elems){
            el.style.display = 'flex';
        }
    },
    'ts-close':(val)=>{
        let elems = document.querySelectorAll(val);
        for(let el of elems){
            el.style.display = 'none';
        }
    },
    'ts-toggle':(val)=> {
        let elems = document.querySelectorAll(val);
        for(let el of elems){
            if(el.style.display == 'none'){
                el.style.display ='flex';
            }
            else{
                el.style.display ='none';
            }
        }
    },
    'ts-tab':(val)=>{
        let el = document.querySelector(val);

        let inactiveEls = el.parentElement.querySelectorAll(".ts-tab");
        for(let inactiveEl of inactiveEls){
            inactiveEl.style.display = 'none';
        }
        el.style.display = 'flex';

    }
    // 'tsclose'

};

document.addEventListener('click',(e)=>{
    Object.keys(events).forEach((eventName)=>{
        let val = e.target.getAttribute(eventName);
        if(val){
            events[eventName](val);
        };
    });
},false);
