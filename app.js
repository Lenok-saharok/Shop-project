//add to cart
let productsCountEl= document.getElementById("products-count");
let addToCartButtons= document.querySelectorAll(".add-to-cart");

    for(let i=0; i<addToCartButtons.length; i++) {
        addToCartButtons[i].addEventListener("click",function (event){
            event.preventDefault();
            
           let count= +event.target.closest(".product").querySelector(".product-quantity input").value;
           productsCountEl.textContent = +productsCountEl.textContent +count;
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

// change product count 

let decrementBtns=document.querySelectorAll(".decrement-btn");
let incrementBtns=document.querySelectorAll(".increment-btn");
let quantityValue=document.querySelectorAll(".product-quantity input");

// function toggleButtonState (nextCount, btn){
//     let dcbt=btn.closest(".product-quantity").querySelector(".decrement-btn");
//     let icbt=btn.closest(".product-quantity").querySelector(".increment-btn");
//     if(nextCount>=5){
//         icbt.disabled=true;
//     } else if(nextCount<=5){
//         icbt.disabled=false;
//     }
//     if(nextCount<=1){
//         dcbt.disabled=true;
//     }else{
//         dcbt.disabled=false;
//     }
    
// }


// function getInput(btn){
// return btn.closest(".product-quantity").querySelector("input");
// }

// incrementBtns.forEach(function(btn){
//     btn.addEventListener("click", function(event){
//         event.preventDefault();
//        let quantityValue=getInput(btn);
//         let currentCount= +quantityValue.value;
//         let nextCount=currentCount+1;
//         quantityValue.value=nextCount;
        
//         toggleButtonState(nextCount, btn);
//     })
// })


// decrementBtns.forEach(function(btn){
// btn.addEventListener("click", function(event){
//     event.preventDefault();
//     let quantityValue=getInput(btn);
//     let currentCount= +quantityValue.value;
//     let nextCount=currentCount-1;
//     quantityValue.value=nextCount;

   
//     toggleButtonState(nextCount, btn);
// })
// })

function Counter (incrementBtn,decrementBtn,inputField,minCount=1, maxCount=5){
    this.domRefs={
        incrementBtn,
        decrementBtn,
        inputField,

    }
    this.toggleButtonState=function(){

        let count=this.domRefs.inputField.value;
        this.domRefs.decrementBtn.disabled=count <= minCount;
        this.domRefs.incrementBtn.disabled=count >= maxCount;
    }
    

    this.toggleButtonState();
    this.increment=function(event){
        event.preventDefault();
        let currentCount= +this.domRefs.inputField.value;
       let nextCount=currentCount+1;
       this.domRefs.inputField.value = nextCount;
    
       this.toggleButtonState()
    }

    this.decrement=function(event){
        event.preventDefault();
        let currentCount= +this.domRefs.inputField.value;
       let nextCount=currentCount-1;
       this.domRefs.inputField.value = nextCount;
    
       this.toggleButtonState()
    }

    this.domRefs.incrementBtn.addEventListener("click", this.increment.bind(this));
    this.domRefs.decrementBtn.addEventListener("click", this.decrement.bind(this));
    console.log(this)
}
for(let i=0; i<incrementBtns.length; i++){
    const counter=new Counter(incrementBtns[i],decrementBtns[i],quantityValue[i]);
} 


