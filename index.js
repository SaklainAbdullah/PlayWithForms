function animatedForm()
{
 const arrows = document.querySelectorAll('.fa-arrow-down');
  arrows.forEach(arrow=>{
      arrow.addEventListener('click',()=>{
          const input = arrow.previousElementSibling;
          const parent = arrow.parentElement;
          const nextForm = parent.nextElementSibling;
          console.log(input);


          if(input.type === "text" && validateUser(input))
          {
            nextSlide(parent,nextForm);
            console.log("haha");
          }
          else if(input.type === "email" && validateEmail(input))
          {
            nextSlide(parent,nextForm);
            console.log("haha");
          }
          else if(input.type === "password" && validateUser(input))
          {
            nextSlide(parent,nextForm);
            console.log("haha");
          }
          else {
            parent.style.animation = "shake 1s ease";
          }

          parent.addEventListener('animationend', ()=>{
              parent.style.animation = "";
          });
      });
  });
}

function validateUser(user)
{
  if(user.value.length < 6)
  {
       console.log("Error");
       error('rgb(189,87,87)');
  }
  else {
     error('rgb(87,189,130)');
     return true;
  }
}


function validateEmail(email)
{
    const validation =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(validation.test(email.value))
    {
      error('rgb(87,189,130)');
      return true;
    }
    else {
      console.log("Error");
      error('rgb(189,87,87)');
    }
}

function error(color)
{
  document.body.style.backgroundColor = color;
}

function nextSlide(parent,nextForm)
{
  parent.classList.add('innactive');
  parent.classList.remove('active');
  nextForm.classList.add('active');

}

animatedForm();
