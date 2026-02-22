const form = document.querySelector('#contact-from');
const suceesState = document.querySelector('#success')
const resetBtn = document.querySelector('.reset-btn')


form.addEventListener("submit", (e)=>{
  e.preventDefault();
    const submitBtn = form.querySelector('.submit-btn');
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> sending....'
    submitBtn.Disabled = true;

    setTimeout(()=>{
        form.classList.add("hidden");
        suceesState.classList.remove("hidden")
    },2000)
})


resetBtn.addEventListener('click', () => {

    form.reset();
    form.classList.remove("hidden");
    suceesState.classList.add("hidden");

    const submitBtn = form.querySelector('.submit-btn');

    submitBtn.innerHTML = '<span>Send Massage</span><i class="fa-solid fa-paper-plane"></i>';
    submitBtn.disabled = false;

});