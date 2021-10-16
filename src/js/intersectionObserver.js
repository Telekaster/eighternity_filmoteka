

export default async function observeCards(list) {

    const options = {};

const observer = new IntersectionObserver(clb, options);
 function clb(entries, observer) {
     entries.forEach((entry, index) => {
              entry.isIntersecting
            ? entry.target.classList.add('observe')
             : entry.target.classList.remove('observe')
     
    });
    }
   
    const itemsArr = [...list.children];
    itemsArr.forEach((li) => {
         observer.observe(li);
    })

}
 

