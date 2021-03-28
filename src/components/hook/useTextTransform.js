import { useEffect, useState } from "react"




function useTextTransform() {
    useEffect(() => {
        var a = "Hi, I'm Phong, i'm front-end web developer, i have skill on HTML, SCSS, responsive, reactjs.";

        const text = document.querySelector('.Introduction__content--para');
        console.log('da lay duoc');
        // text.innerHTML = a;
        a = a.split('');
        console.log(a.length);
        var newtext = '';
        var i = 0;

        const time = setInterval(() => {
            text.innerHTML += a[i];
            i++
            console.log(i);

        }, 100);



        return () => {
            // if (i >= a.length) 
            clearInterval(time);

        };
    }, []);
    return
}

export default useTextTransform;
// chua can den