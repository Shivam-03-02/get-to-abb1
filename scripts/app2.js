const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');
const gradients= ['linear-gradient(to right top ,#6A9113,#141517)',
'linear-gradient(to right top ,rgba(239, 237, 237, 0.5),rgba(237, 209, 209, 0.5))',
'linear-gradient(to right top ,rgba(239, 237, 237, 0.5),rgba(237, 209, 209, 0.5))',
'linear-gradient(to right top ,rgba(239, 237, 237, 0.5),rgba(237, 209, 209, 0.5))'
];


const options={
    threshold:0.7
};

let observer = new IntersectionObserver(navcheck,options);

function navcheck(entries) {
    entries.forEach(entry =>  {
        const className=entry.target.className;
        console.log(className);
        const activeanchor=document.querySelector(`[data-page=${className}]`)
         const gradientindex= entry.target.getAttribute('data-index');
         const cords=activeanchor.getBoundingClientRect();
         const directions={
            height: cords.height,
            width: cords.width,
            top: cords.top,
            left:cords.left
         };
         if(entry.isIntersecting){
            bubble.computedStyleMap.setProperty("left",`${directions.left}px`);
            bubble.computedStyleMap.setProperty("top",`${directions.top}px`);
            bubble.computedStyleMap.setProperty("width",`${directions.width}px`);
            bubble.computedStyleMap.setProperty("height",`${directions.height}px`);

         }
    });
}

sections.forEach(section =>{
    observer.observe(section);
});