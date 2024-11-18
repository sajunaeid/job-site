    // Select all FAQ items
    const faqItems = document.querySelectorAll('.faq-item');

    // Function to collapse all FAQ answers
    function closeAllFaqs() {
        faqItems.forEach(item => {
            item.classList.remove('active'); // Remove the 'active' class from all items
        });
    }

    // Add click event listener to each FAQ question
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', (event) => {
            // Close all other FAQ items if a new question is clicked
            if (!item.classList.contains('active')) {
                closeAllFaqs();
            }
            
            // Toggle the active class of the clicked FAQ item
            item.classList.toggle('active');
        });
    });

    // Close all FAQs if clicked outside the FAQ section
    document.addEventListener('click', (event) => {
        const isClickInsideFaq = event.target.closest('.faq-item');
        if (!isClickInsideFaq) {
            closeAllFaqs(); // Collapse all FAQs if clicked elsewhere
        }
    });