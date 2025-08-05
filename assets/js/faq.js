var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}


var faqCategories = ['Getting Started & Basic Information', 'Revenue Generation & Staking', 'Token Burns & Deflationary Mechanics', 'Premium Features & AI Access', 'Technology & Transparency']
var activeFaqCategory = faqCategories[activeFaqNum];
var activeFaqNum = 0;

function changeFaqCategory(num) {
    activeFaqNum = num;
    document.querySelector('.fn-li-active').classList.remove("fn-li-active");
    document.querySelector(`#fn-li-${num}`).classList.add('fn-li-active');

    let faqItem = document.querySelectorAll('.faq-accordion');

    for(i=0; i < faqItem.length; i++) {
        if(faqItem[i].classList.contains(`faq-tree-${activeFaqNum}`)) {
            faqItem[i].classList.remove('hidden');
        } else {
            faqItem[i].classList.add('hidden');
        }
    }
}