{const blink = document.querySelectorAll('a[href="#buy"]')  ;
for(let element of blink) {
  element.setAttribute('href','Assets/buy.html')
}

const Dlink = document.querySelectorAll('a[href="#details"]')
Dlink.forEach(element => element.setAttribute('href','Assets/product_page.html'))

const Clink = document.querySelectorAll('a[href="#addcart"]')
Clink.forEach(element => element.setAttribute('href','Assets/cart.html'))};


{aboutus.addEventListener('click',function () {
    alert('You have signed in successfuly')
})
aboutus.addEventListener('click',function(){
    alert('msg sent');
})
aboutus.addEventListener('click',function(){
    alert('Your Account is hacked @00008546');
})}
