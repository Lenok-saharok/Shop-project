//add to cart
let productsCountEl= document.getElementById("products-count");
let addToCartButtons= document.querySelectorAll(".add-to-cart");

    for(let i=0; i<addToCartButtons.length; i++) {
        addToCartButtons[i].addEventListener("click",function (event){
            
            productsCountEl.textContent = +productsCountEl +1;
        })

    }


    //add modal

    let modal=document.querySelector(".modal");
    let moreDetailsBtns=document.querySelectorAll(".more-details");
    let closeBtn=document.querySelector(".btn-close");

moreDetailsBtns.forEach((btn) => {
    btn.addEventListener("click", openModal);
})
 
function openModal(event) {
  if(event){
    event.preventDefault();
  }
   
    modal.classList.add("show");
    modal.classList.remove("hide");
}

function closeModal(){
    modal.classList.add("hide");
    modal.classList.remove("show");
}

closeBtn.addEventListener("click", closeModal);
   
modal.addEventListener("click", function(e){
    if(e.target==modal){
        closeModal();
    }
})

function showModalByScroll(){
    if(window.pageYOffset>document.body.scrollHeight/2){
      openModal();
      window.removeEventListener("scroll",showModalByScroll);
    }
}
window.addEventListener("scroll",showModalByScroll);

//like button

let likeButons=document.querySelectorAll(".card_thambnail-heart");
likeButons.forEach((btn) => {
    btn.addEventListener("click", function(e){
       this.classList.toggle("liked");
      
    })
})