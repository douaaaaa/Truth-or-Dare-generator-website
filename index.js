document.querySelector("button").addEventListener("click", initGame)

function initGame() {
    let randObj = challengesArray[Math.floor(Math.random() * challengesArray.length)]; 
    document.querySelector(".challPara").textContent = randObj.text;
    document.documentElement.style.setProperty("--clr-start", randObj.color); 
    document.querySelector("img").setAttribute("src", randObj.image);
    document.querySelector("button").textContent = 'refresh';
}

let challengesArray = [
        {
            text: `What's the last lie you told?`, 
            image: 'https://cdn-icons-png.flaticon.com/512/6969/6969349.png',
            color: '#E17B8D',
        },
    
        {
            text: `What was the most embarrassing thing you've ever done on a date?`,
            image: 'https://cdn-icons-png.flaticon.com/512/6620/6620145.png', 
            color: '#E9BB00',
        },
    
        {
            text: `Have you ever accidentally hit something (or someone!) with your car?`,
            image: 'https://cdn-icons-png.flaticon.com/512/7396/7396429.png', 
            color: '#52AFA6',
        },
    
        {
            text: `Name someone you've pretended to like but actually couldn't stand.`,
            image: 'https://cdn-icons-png.flaticon.com/512/6133/6133470.png', 
            color: '#FFB35F',
        },
    
        {
            text: `What's your most bizarre nickname?`,
            image: 'https://cdn-icons-png.flaticon.com/512/4392/4392571.png', 
            color: '#ED500A',
        },
    
        {
            text: `What's been your most physically painful experience?`,
            image: 'https://cdn-icons-png.flaticon.com/512/4678/4678370.png', 
            color: '#FFB2B9',
        },
    
        {
            text: `What's the craziest thing you've done on public transportation?`,
            image: 'https://cdn-icons-png.flaticon.com/512/4681/4681514.png', 
            color: '#FCCE5A',
        },
    
        {
            text: `If you met Santa Claus, what would your wish be?`,
            image: 'https://cdn-icons-png.flaticon.com/512/4193/4193265.png', 
            color: '#E74B4D',
        },
    
        {
            text: `If you could write anyone on Earth in for President of the United States, who would it be and why?`,
            image: 'https://cdn-icons-png.flaticon.com/512/7076/7076864.png', 
            color: '#52AFA6',
        },
    
        {
            text: `What's the meanest thing you've ever said to someone else?`,
            image: 'https://cdn-icons-png.flaticon.com/512/6133/6133465.png', 
            color: '#FF4F59',
        },
    
        {
            text: `What's one thing you'd do if you knew there no consequences?`,
            image: 'https://cdn-icons-png.flaticon.com/512/4891/4891186.png', 
            color: '#6C92E5',
        },
    
        {
            text: `What's the craziest thing you've done in front of a mirror?`,
            image: 'https://cdn-icons-png.flaticon.com/512/4359/4359793.png', 
            color: '#E9828C',
        },
    
        {
            text: ` What's the meanest thing you've ever said about someone else?`,
            image: 'https://cdn-icons-png.flaticon.com/512/6133/6133420.png', 
            color: '#8BC6B9',
        },
    
        {
            text: `What's something you love to do with your friends that you'd never do in front of your partner?`,
            image: 'https://cdn-icons-png.flaticon.com/512/7915/7915540.png', 
            color: '#E17B8D',
        },
    
        {
            text: `Who are you most jealous of?`,
            image: 'https://cdn-icons-png.flaticon.com/512/7243/7243772.png', 
            color: '#00D5FE',
        },
    
        {
            text: ` What do your favorite pajamas look like?`,
            image: 'https://cdn-icons-png.flaticon.com/512/4105/4105446.png', 
            color: '#9CD1C3',
        },
    
        {
            text: `Have you ever faked sick to get out of a party?`,
            image: 'https://cdn-icons-png.flaticon.com/512/6133/6133460.png', 
            color: '#7fcab9',
        },
    
        {
            text: `Who's the oldest person you've dated?`,
            image: 'https://cdn-icons-png.flaticon.com/512/4359/4359980.png', 
            color: '#6F5D7A',
        },
    
        {
            text: `How many selfies do you take a day?`,
            image: 'https://cdn-icons-png.flaticon.com/512/5038/5038660.png', 
            color: '#55B2AA',
        },
    
        {
            text: `Meatloaf says he'd do anything for love, but he won't do "that." What's your "that?"`,
            image: 'https://cdn-icons-png.flaticon.com/512/7647/7647735.png', 
            color: '#DBEEF8',
        },
    
        {
            text: `How many times a week do you wear the same pants?`,
            image: 'https://cdn-icons-png.flaticon.com/512/7418/7418810.png', 
            color: '#4B7BA3',
        },
    
        {
            text: `Would you date your high school crush today?`,
            image: 'https://cdn-icons-png.flaticon.com/512/7139/7139084.png', 
            color: '#008CF7',
        },
    
        {
            text: `Do you believe in any superstitions? If so, which ones?`,
            image: 'https://cdn-icons-png.flaticon.com/512/5868/5868643.png', 
            color: '#BBD86C',
        },
    
        {
            text: `What's one movie you're embarrassed to admit you enjoy?`,
            image: 'https://cdn-icons-png.flaticon.com/512/4891/4891157.png', 
            color: '#6C92E5',
        },
    
        {
            text: `When's the last time you apologized? What for?`,
            image: 'https://cdn-icons-png.flaticon.com/512/6983/6983863.png', 
            color: '#7BEFE5',
        },
    
        {
            text: `Where do most of your embarrassing odors come from?`,
            image: 'https://cdn-icons-png.flaticon.com/512/7746/7746166.png', 
            color: 'black',
        },
    
        {
            text: `Have you ever considered cheating on a partner?`,
            image: 'https://cdn-icons-png.flaticon.com/512/8014/8014429.png', 
            color: '#E17B8D',
        },
    
        {
            text: `Have you ever cheated on a partner?`,
            image: 'https://cdn-icons-png.flaticon.com/512/8014/8014426.png', 
            color: '#52AFA6',
        },
    
        {
            text: `Have you ever peed in a pool?`,
            image: 'https://cdn-icons-png.flaticon.com/512/6639/6639759.png', 
            color: '#67D5E8',
        },
    
        {
            text: `If you were guaranteed to never get caught, who on Earth would you murder?`,
            image: 'https://cdn-icons-png.flaticon.com/512/5345/5345592.png', 
            color: '#3A003C',
        },
    
        {
            text: `What's the cheapest gift you've ever gotten for someone else?`,
            image: 'https://cdn-icons-png.flaticon.com/512/4213/4213650.png', 
            color: '#76206A',
        },
    
        {
            text: `What app do you waste the most time on?`,
            image: 'https://cdn-icons-png.flaticon.com/512/6486/6486137.png', 
            color: '#00ABFE',
        },
    
        {
            text: `What's the weirdest thing you've done on a plane?`,
            image: 'https://cdn-icons-png.flaticon.com/512/6032/6032436.png', 
            color: '#B1739A',
        },
    
        {
            text: `Have you ever been nude in public?`,
            image: 'https://cdn-icons-png.flaticon.com/512/7598/7598084.png', 
            color: '#FFD881',
        },
    
        {
            text: ` How many gossip blogs do you read a day?`,
            image: 'https://cdn-icons-png.flaticon.com/512/4105/4105448.png', 
            color: '#E9546A',
        },
    
        {
            text: `What is the youngest age partner you'd date?`,
            image: 'https://cdn-icons-png.flaticon.com/512/4681/4681519.png', 
            color: '#E25C81',
        },
    
        {
            text: `Have you ever picked your nose in public?`,
            image: 'https://cdn-icons-png.flaticon.com/512/7268/7268636.png', 
            color: 'black',
        },
    
        {
            text: `Have you ever lied about your age?`,
            image: 'https://cdn-icons-png.flaticon.com/512/4825/4825096.png', 
            color: '#7EA8C5',
        },
    
        {
            text: `If you had to delete one app from your phone, which one would it be?`,
            image: 'https://cdn-icons-png.flaticon.com/512/6064/6064952.png', 
            color: '#E99100',
        },
    
        {
            text: ` What's the longest you've gone without showering?`,
            image: 'https://cdn-icons-png.flaticon.com/512/4105/4105461.png', 
            color: '#9CD1C3',
        },
    
        {
            text: `Which of your family members annoys you the most and why?`,
            image: 'https://cdn-icons-png.flaticon.com/512/7598/7598091.png', 
            color: '#FFD881',
        },
    
        {
            text: `What is your greatest fear in a relationship?`,
            image: 'https://cdn-icons-png.flaticon.com/512/4359/4359896.png', 
            color: '#FF4E4E',
        },
    
        {
            text: `What's your biggest pet peeve about the person to your left?`,
            image: 'https://cdn-icons-png.flaticon.com/512/5695/5695731.png', 
            color: '#7404A3',
        },
    
        {
            text: `What's the most embarrassing text in your phone right now?`,
            image: 'https://cdn-icons-png.flaticon.com/512/6717/6717600.png', 
            color: '#000000',
        },
    
        // {
        //     text: ``,
        //     image: '', 
        //     color: '',
        // },
]    
