let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;

// for stat section
valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue  = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval/endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if(startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
})


// for faq section
function toggleFaq(element) {
    const faqItem = element.parentElement;
    faqItem.classList.toggle('active');
}

document.getElementById('sidebarToggle').addEventListener('click', function() {
    var sidebar = document.querySelector('.sidebar');
    if (sidebar.style.right === '-250px') {
        sidebar.style.right = '0';
    } else {
        sidebar.style.right = '-250px';
    }
});
