function IniciaModal(ModalID){
    const Modal = document.getElementById(ModalID);
    Modal.classList.add('Mostrar');
    Modal.addEventListener('click', function(e){
        if(e.target.id == ModalID || e.target.className == 'Button'){
            Modal.classList.remove('Mostrar');
        }
    } )
}

const Desconectar = document.querySelector('.Desconectar');
Desconectar.addEventListener('click', function(){
    IniciaModal('modal-Desconectar');
})