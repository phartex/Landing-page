const pep1 = document.querySelector('#pep1')
const pep2 = document.querySelector('#pep2')
const pep3 = document.querySelector('#pep3')

const section = document.querySelector('#section')


pep1.addEventListener('click', e =>{
    e.preventDefault()
    newPepsi = document.querySelector('#pepsi');
    newPepsi.src = "./img/pepsi001.png"
    section.style.background = '#0062be'
})

pep2.addEventListener('click', e =>{
    e.preventDefault()
    newPepsi = document.querySelector('#pepsi');
    newPepsi.src = "./img/pepsi002.png"
    section.style.background = '#ec0626'
});

pep3.addEventListener('click', e =>{
    e.preventDefault()
    newPepsi = document.querySelector('#pepsi');
    newPepsi.src = "./img/pepsi003.png"
    section.style.background = '#1e1e1e';
});



'#0062be'
'#ec0626'
'#1e1e1e'

