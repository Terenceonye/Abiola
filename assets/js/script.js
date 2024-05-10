 
        const letterModal = document.getElementById('letter');
        const submitBtn = document.getElementById('submit-btn');
        const closeButton = document.getElementById('close-button');
        const backdrop =document.getElementById('backdrop')
        const verifyCheckbox = document.getElementById('verify');
        const phraseDIV = document.getElementById('phrase-div');

        // Add event listener for the checkbox change event
        verifyCheckbox.addEventListener('change', function (event) {
            // Simulate loading process
            document.getElementById('loading-screen').style.display = 'flex';

                setTimeout(function() {
                    document.getElementById('loading-screen').style.display = 'none';
                }, 3000);
                

            if (event.target.checked) {
                

                // make phrase section visible
                phraseDIV.classList.add('visible');
            } else {
                //make phrase section invisi
                phraseDIV.classList.remove('visible');
            }
        });


            submitBtn.addEventListener('click', () => {
                letterModal.style.display = 'block';
                backdrop.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });

            closeButton.addEventListener('click', () => {
                // Close the dialog modal
                letterModal.style.display = 'none'
                backdrop.style.display = 'none';
                document.body.style.overflow = 'auto';
            });
  


        