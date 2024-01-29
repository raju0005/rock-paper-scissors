const gamePad = document.querySelector(".game-pad");
const userResult = document.querySelector(".user-result img");
const cpuResult = document.querySelector(".cpu-result img");
const resultText = document.querySelector(".result-text");
const optionImages = document.querySelectorAll(" .option-logo");
const resultField=document.querySelector(".result-field");

optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        userResult.src = cpuResult.src = "https://res.cloudinary.com/dz44aff9v/image/upload/v1706521123/Picsart_24-01-29_15-04-50-045_wcq6lm.jpg";
        resultText.textContent = "Wait....";
        optionImages.forEach((image2, index2) => {
            index !== index2 && image2.classList.remove("active");
        });
         resultField.classList.add("start");
         document.querySelector(".options-field").classList.add("start");
         
        let time = setTimeout(() => {
            resultField.classList.remove("start");
            document.querySelector(".options-field").classList.remove("start");
            
            let imageSrc = e.target.querySelector("img").src;
            userResult.src = imageSrc;
            let randomNum = Math.floor(Math.random() * 3);
            let cpuImages = ["https://res.cloudinary.com/dz44aff9v/image/upload/v1706521123/Picsart_24-01-29_15-04-50-045_wcq6lm.jpg","https://res.cloudinary.com/dz44aff9v/image/upload/v1706521123/Picsart_24-01-29_15-05-29-353_u3nqxb.jpg" ,"https://res.cloudinary.com/dz44aff9v/image/upload/v1706522327/Picsart_24-01-29_15-27-59-139_ruulsr.jpg"];
            cpuResult.src= cpuImages[randomNum];
            let cpuValue = ["R", "P", "S"][randomNum];
            let userValue = ["R", "P", "S"][index];
            let outcomes = {
                RR: "Draw",
                RP: "Cpu Won",
                RS: "You Won",
                PP: "Draw",
                PR: "You Won",
                PS: "Cpu Won",
                SS: "Draw",
                SR: "Cpu Won",
                SP: "You Won",
            };
            let outcomeValue = outcomes[userValue + cpuValue];
            let resultMessage;
            if (userValue === cpuValue) {
                resultMessage = "Match draw";

            }
            else {
                resultMessage = `${outcomeValue}!!`;
            }
            resultText.textContent=resultMessage;

        } ,2500);

    });
});
