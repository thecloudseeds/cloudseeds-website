// Fork & Work FAQ toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            // Toggle active class on the question
            this.classList.toggle('active');
            
            // Toggle show class on the answer
            const answer = this.nextElementSibling;
            answer.classList.toggle('show');
        });
    });
    
    // Show the first FAQ item by default
    if (faqQuestions.length > 0) {
        faqQuestions[0].classList.add('active');
        faqQuestions[0].nextElementSibling.classList.add('show');
    }
});