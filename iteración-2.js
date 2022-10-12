// 2.1 Inserta dinamicamente en un html un div vacio con javascript.

const div$$ = document.body.appendChild(document.createElement('div')); 

// 2.2 Inserta dinamicamente en un html un div que contenga una p 
// con javascript.

const div2$$ = document.createElement('div');
const p$$ = document.createElement('p');
div2$$.appendChild(p$$);
document.body.appendChild(div2$$);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p 
// utilizando un loop con javascript.

const div3$$ = document.createElement('div');
for (let i = 0; i < 6; i++) {
    const p1$$ = document.createElement('p');
    div3$$.appendChild(p1$$);
}
document.body.appendChild(div3$$);

// 2.4 Inserta dinamicamente con javascript en un html una p con 
// el texto 'Soy dinámico!'.

const p2$$ = document.createElement('p');
p2$$.textContent = 'Soy dinámico';
document.body.appendChild(p2$$);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 
// 'Wubba Lubba dub dub'.

const text1 = document.querySelector('.fn-insert-here');
text1.textContent = 'Wubba Lubba dub dub';

// 2.6 Basandote en el siguiente array crea una lista ul > li con 
// los textos del array.
// const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 
// 'Twitter'];

const ul$$ = document.createElement('ul');
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']

for (let i = 0; i < apps.length; i++) {
    let li$$ = document.createElement('li');
    li$$.textContent = apps[i];
    ul$$.appendChild(li$$);
}
document.body.appendChild(ul$$);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const removeNodos$$ = document.querySelectorAll('.fn-remove-me');
 for (let i = 0; i < removeNodos$$.length; i++) {
     removeNodos$$[i].remove(); 
}
//* Haciendolo con el forof:
//* for (const nodo of removeNodos$$) {
//*     nodo.remove();
//* }

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// Recuerda que no solo puedes insertar elementos con .appendChild.

const p3$$ = document.createElement('p');
p3$$.textContent = 'Voy en medio!';
const divs$$ = document.querySelectorAll('div');
document.body.insertBefore(p3$$, divs$$[3]);

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los 
// div con la clase .fn-insert-here

const mario = document.querySelectorAll('.fn-insert-here');

for (let i = 1; i < mario.length; i++) {
    const element = mario[i];
    let p4$$ = document.createElement('p');
    p4$$.textContent = 'Voy dentro!';
    mario[i].appendChild(p4$$);
}

