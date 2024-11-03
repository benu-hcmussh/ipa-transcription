// Array containing pairs of IPA transcriptions and their correct full sentences
const ipaQuestions = [
    { ipa: "| aɪd laɪk tə stɑːt wɪð səm ˈʤenərəl ədˈvaɪs əˈbaʊt ˈbiːɪŋ ən əˈprentɪs. |", answer: "I'd like to start with some general advice about being an apprentice." },
    { ipa: "| məʊst əv ju hæv ˈveri ˈlɪtl ɔː nəʊ ɪksˈpɪərɪəns əv ˈwɜːkɪŋ fər ə bɪg ˌɔːgənaɪˈzeɪʃən ənd ðə fɜːst wiːk ɔː səʊ meɪ bi kwaɪt ˈʧælɪnʤɪŋ. |", answer: "Most of you have very little or no experience of working for a big organization and the first week or so may be quite challenging." },
    { ipa: "| ðə wɪl bi ə lɒt əv njuː ˌɪnfəˈmeɪʃən tə teɪk ɪn bət dəʊnt ˈwʌri tuː mʌʧ əˈbaʊt ˈtraɪɪŋ tə rɪˈmembər ˈevrɪθɪŋ. |", answer: "There will be a lot of new information to take in but don't worry too much about trying to remember everything." },
    { ipa: "| ði ɪmˈpɔːtənt θɪŋ ɪz tə ʧek wɪð ˈsʌmwʌn ɪf ju ə nɒt ʃʊə wɒt tə duː. |", answer: "The important thing is to check with someone if you are not sure what to do." },
    { ipa: "| jʊə hɪə tə lɜːn səʊ meɪk ðə məʊst əv ðæt ˌɒpəˈtjuːnɪti. |", answer: "You're here to learn so make the most of that opportunity." },
    { ipa: "| juːl bi ˈspendɪŋ taɪm ɪn ˈdɪfrənt dɪˈpɑːtmənts ˈdjʊərɪŋ jə fɜːst wiːk səʊ meɪk ən ˈefət tə tɔːk tu əz ˈmeni ˈpiːpl əz ˈpɒsəbl əˈbaʊt ðeə wɜːk. |", answer: "You'll be spending time in different departments during your first week so make an effort to talk to as many people as possible about their work." },
    { ipa: "| juːl meɪk səm njuː frendz ənd faɪnd aʊt lɒts əv ˈjuːsfl ˌɪnfəˈmeɪʃən. |", answer: "You'll make some new friends and find out lots of useful information." },
    { ipa: "| ðɪs ˈpɜːsn wɪl bi ˈsʌmwʌn huːz ˈriːsntli kəmˈpliːtɪd ən əˈprentɪʃɪp ənd juːl miːt wɪð ðəm ɒn ə ˈwiːkli ˈbeɪsɪs. |", answer: "This person will be someone who's recently completed an apprenticeship and you'll meet with them on a weekly basis." },
    { ipa: "| ðeɪl bi ˈɑːskɪŋ ju əˈbaʊt wɒt gəʊlz juːv əˈʧiːvd səʊ fɑː, əz wel əz ˈhelpɪŋ ju tu aɪˈdentɪfaɪ ˈeni ˈeərɪəz fər ɪmˈpruːvmənt. |", answer: "They'll be asking you about what goals you've achieved so far, as well as helping you to identify any areas for improvement." },
    { ipa: "| ju kən ˈɔːlsəʊ dɪsˈkʌs jə mɔː ˈlɒŋtɜːm æmˈbɪʃnz wɪð ðəm əz wel. |", answer: "You can also discuss your more long-term ambitions with them as well." },
    { ipa: "| wi nəʊ ðət mɔː ðən hɑːf ðə wɜːldz ˌpɒpjuˈleɪʃən lɪvz ɪn ˈsɪtiz naʊ. |", answer: "We know that more than half the world's population lives in cities now." },
    { ipa: "| bət məʊst əv ðə ˈbɪgɪst ˈsɪtiz ər ˈækʧʊəli bɪlt baɪ ðə siː. |", answer: "But most of the biggest cities are actually built by the sea." },
    { ipa: "| ə lɒt əv ðəm ə bɪlt ət ˈpleɪsɪz weə ˈrɪvəz kʌm aʊt ˈɪntə ðə siː. |", answer: "A lot of them are built at places where rivers come out into the sea." },
    { ipa: "| əz ðə ˈsɪti ɪksˈpændz, ˈægrɪkʌlʧər ənd ˈɪndəstri tend tə spred ˈfɜːðər ˈɪnlənd əˈlɒŋ ðə ˈrɪvəz. |", answer: "As the city expands, agriculture and industry tend to spread further inland along the rivers." },
    { ipa: "| ɪt miːnz mɔːr ənd mɔː pəˈluːtənts ə dɪsˈʧɑːʤd ˈɪntə ðə ˈrɪvəz. |", answer: "It means more and more pollutants are discharged into the rivers." },
    { ipa: "| ðeɪ bɪld ˈʧænlz tə dreɪn əˈweɪ ðə ˈwɔːtər ɪn keɪs əv ˈflʌdɪŋ. |", answer: "They build channels to drain away the water in case of flooding." },
    { ipa: "| bət wɒt ðeɪ dɪdnt teɪk ˈɪntə əˈkaʊnt wəz ˈgləʊbəl ˈwɔːmɪŋ. |", answer: "But what they didn't take into account was global warming." },
    { ipa: "| ɪf ðəz ə lɒt əv reɪn, ðə ˈwɔːtə kɑːnt rʌn əˈweɪ, ðəz ˈnəʊweə fər ɪt tə gəʊ. |", answer: "If there's a lot of rain, the water can't run away, there's nowhere for it to go." },
    { ipa: "| ˈevrɪwʌn nəʊz wɒt ðə ˈprɒbləmz ɑːr ənd ɪnˌvaɪərənˈmentəlɪsts həv ə ˈprɪti gʊd aɪˈdɪə əv wɒt wi ʃəd bi ˈduːɪŋ əˈbaʊt ðem. |", answer: "Everyone knows what the problems are and environmentalists have a pretty good idea of what we should be doing about them." },
    { ipa: "/ ðə ˈgreɪtɪst ˈglɔːri ɪn ˈlɪvɪŋ laɪz nɒt ɪn ˈnevə ˈfɔːlɪŋ, bət ɪn ˈraɪzɪŋ ˈevri taɪm wi fɔːl. /", answer: "The greatest glory in living lies not in never falling, but in rising every time we fall." },
    { ipa: "/ ɪf laɪf wə prɪˈdɪktəbl ɪt wəd siːs tə bi laɪf, ənd bi wɪˈðaʊt ˈfleɪvə. /", answer: "If life were predictable it would cease to be life, and be without flavor." },
    { ipa: "/ ɪf ju lʊk ət wɒt ju hæv ɪn laɪf, juːl ˈɔːlweɪz hæv mɔː. ɪf ju lʊk ət wɒt ju dəʊnt hæv ɪn laɪf, juːl ˈnevə hæv ɪˈnʌf. /", answer: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough." },
    { ipa: "/ ɪt ɪz ˈdjʊərɪŋ ˈaʊə ˈdɑːkɪst ˈməʊmənts ðət wi məst ˈfəʊkəs tə siː ðə laɪt. /", answer: "It is during our darkest moments that we must focus to see the light." },
    { ipa: "/ ɪf ju set jə gəʊlz rɪˈdɪkjələsli haɪ ənd ɪts ə ˈfeɪljə, ju wɪl feɪl əˈbʌv ˈevrɪwʌn ˈelsɪz səkˈses. /", answer: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success." },
    { ipa: "/ jə taɪm ɪz ˈlɪmɪtɪd, səʊ dəʊnt weɪst ɪt ˈlɪvɪŋ ˈsʌmwʌn ˈelsɪz laɪf. dəʊnt bi træpt baɪ ˈdɒgmə – wɪʧ ɪz ˈlɪvɪŋ wɪð ðə rɪˈzʌlts əv ˈʌðə ˈpiːplz ˈθɪŋkɪŋ. /", answer: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking." },
    { ipa: "/ ðə best ənd məʊst ˈbjuːtɪfl θɪŋz ɪn ðə wɜːld ˈkænɒt bi siːn ɔːr ˈiːvən tʌʧt – ðeɪ məst bi felt wɪð ðə hɑːt. /", answer: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart." },
    { ipa: "/ ˈmeni əv laɪfs ˈfeɪljəz ə ˈpiːpl huː dɪd nɒt ˈrɪəlaɪz haʊ kləʊs ðeɪ wə tə səkˈses wen ðeɪ geɪv ʌp. /", answer: "Many of life's failures are people who did not realize how close they were to success when they gave up." },
    { ipa: "/ ju hæv breɪnz ɪn jə hed. ju hæv fiːt ɪn jə ʃuːz. ju kən stɪə jɔːˈself ˈeni daɪˈrekʃn ju ʧuːz. /", answer: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose." },
    { ipa: "| wʌn θɜːd əv ðə wɜːldz ˌpɒpjəˈleɪʃᵊn kənˈsjuːmz tuː θɜːdz əv ðə wɜːldz rɪˈzɔːsɪz. |", answer: "One third of the world's population consumes two thirds of the world's resources." },
    { ipa: "| ˈstjuːdᵊnts wɪl həv mɔːr ˈæksɛs tə rɪˈzɔːsɪz ənd səˈpɔːt, bəʊθ ˈvɜːʧuəl ənd ˈfɪzɪkᵊl. |", answer: "Students will have more access to resources and support, both virtual and physical." },
    { ipa: "| ˈwɒʧɪŋ ðə ˈʃɒpəz ət ðə seɪlz ɡeɪv hər ə ˈfɜːstˈhænd ˈɪnsaɪt ˈɪntə kraʊd saɪˈkɒləʤi. |", answer: "Watching the shoppers at the sales gave her a first-hand insight into crowd psychology." },
    { ipa: "| ðiːz ˈeəriəz ə sɛt əˈsaɪd fə ˈpʌblɪk ˌrɛkriˈeɪʃᵊnᵊl juːz. |", answer: "These areas are set aside for public recreational use." },
    { ipa: "| əv ðə fɔː ˈmɪljən ˈpiːpᵊl huː həv bɪˈkʌm ˌvɛʤɪˈteəriənz ɪn ðɪs ˈkʌntri, ˈnɪəli tuː θɜːdz ə ˈwɪmɪn. |", answer: "Of the four million people who have become vegetarians in this country, nearly two thirds are women." },
    { ipa: "| ði ɔːˈθɒrətiz kənˈtrəʊld ðə ˈpiːpᵊl θruː ˈmɪlɪtᵊri fɔːs. |", answer: "The authorities controlled the people through military force." },
    { ipa: "| ðeɪ wəd həv biːn hɪə baɪ naʊ ɪf ðeɪd kɔːt ði ˈɜːli treɪn. |", answer: "They would have been here by now if they'd caught the early train." },
    { ipa: "| wi ʃəd kriˈeɪt mɔː ɡriːn ˈspeɪsɪz laɪk pɑːks ənd ˈpleɪɡraʊndz. ðeɪ wəd bi ɡreɪt ˈpleɪsɪz tə plɑːnt mɔː triːz. ɪt wɪl ˈɔːlsəʊ prəˈvaɪd mɔː ˈspeɪsɪz fər ˈænɪmᵊlz ənd bɜːdz tə lɪv. ðɪs ʃəd brɪŋ mɔː ˈwaɪldlaɪf tu ˈaʊə ˈsɪti. |", answer: "We should create more green spaces like parks and playgrounds. They would be great places to plant more trees. It will also provide more spaces for animals and birds to live. This should bring more wildlife to our city." },
    { ipa: "| aɪ dəʊnt wɒnt tə bəʊst, bət aɪ kən ˈækʧuəli spiːk sɪks ˈlæŋɡwɪʤɪz. |", answer: "I don't want to boast, but I can actually speak six languages." },
    { ipa: "| hiːz ˈɔːlweɪz məˈtɪkjələs ɪn ˈkiːpɪŋ ðə ˈrɛkɔːdz ʌp tə deɪt. |", answer: "He's always meticulous in keeping the records up to date." }
];

// Function to shuffle the questions array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to load questions dynamically from the shuffled ipaQuestions array
function loadQuestions() {
    const container = document.getElementById('questions-container');

    // Shuffle the questions array before displaying
    shuffleArray(ipaQuestions);

    ipaQuestions.forEach((question, index) => {
        // Create a div for each question
        const ipaItem = document.createElement('div');
        ipaItem.classList.add('ipa-item');

        // Display the IPA transcription
        const ipaContent = document.createElement('div');
        ipaContent.classList.add('ipa-content');
        ipaContent.textContent = question.ipa;
        ipaItem.appendChild(ipaContent);

        // Add a text area for user to input the answer
        const inputArea = document.createElement('textarea');
        inputArea.classList.add('input-area');
        inputArea.setAttribute('rows', '2');
        inputArea.setAttribute('placeholder', 'Write the full sentence here...');
        inputArea.setAttribute('data-index', index); // Store index for later retrieval
        ipaItem.appendChild(inputArea);

        // Add a submit button for each question
        const submitButton = document.createElement('button');
        submitButton.classList.add('submit-button');
        submitButton.textContent = 'Submit';
        submitButton.onclick = () => processAnswer(index, inputArea); // Pass index and input element
        ipaItem.appendChild(submitButton);

        // Add a show answer button for each question
        const showAnswerButton = document.createElement('button');
        showAnswerButton.classList.add('show-answer-button');
        showAnswerButton.textContent = 'Show Answer';
        showAnswerButton.onclick = () => showAnswer(index, inputArea); // Show answer in the text area
        ipaItem.appendChild(showAnswerButton);

        // Append each item to the main container
        container.appendChild(ipaItem);
    });
}

// Function to process and check an individual answer
function processAnswer(index, inputArea) {
    const userAnswer = inputArea.value.trim();
    const correctAnswer = ipaQuestions[index].answer;

    // Show feedback in the modal overlay
    const feedbackMessage = document.getElementById('feedback-message');
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        feedbackMessage.textContent = "Correct!";
        feedbackMessage.style.color = 'green';
        inputArea.style.borderColor = 'green'; // Set border to green for correct answer
    } else {
        feedbackMessage.textContent = "Incorrect. Try again!";
        feedbackMessage.style.color = 'red';
        inputArea.style.borderColor = 'red'; // Set border to red for incorrect answer
    }
    // Display the modal overlay
    document.getElementById('modal-overlay').style.display = 'flex';
}

// Function to show the correct answer in the input area
function showAnswer(index, inputArea) {
    inputArea.value = ipaQuestions[index].answer; // Set input area value to correct answer
}

// Function to close the modal overlay
function closeModal() {
    document.getElementById('modal-overlay').style.display = 'none';
    const inputs = document.querySelectorAll('.input-area');
    inputs.forEach(input => {
        input.style.borderColor = ''; // Reset border color on modal close
    });
}

function toggleAudio() {
    const audio = document.getElementById("background-audio");
    const icon = document.getElementById("audio-icon");
    
    if (audio.paused) {
        audio.play();
        icon.textContent = "🔊"; // Icon for "playing"
    } else {
        audio.pause();
        icon.textContent = "🔇"; // Icon for "muted"
    }
}

// Load the questions on page load
window.onload = loadQuestions;