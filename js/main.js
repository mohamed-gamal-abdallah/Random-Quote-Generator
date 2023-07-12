var qoutes=[
    {qoute:"Be yourself; everyone else is already taken.", auther:'--Oscar Wilde'},
    {qoute:"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.", auther:'--Marilyn Monroe'},
    {qoute:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", auther:'--Albert Einstein'},
    {qoute:"So many books, so little time.", auther:'--Frank Zappa'},
    {qoute:"A room without books is like a body without a soul.", auther:'--Marcus Tullius Cicero'},
    {qoute:"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.", auther:'--Bernard M. Baruch'},
    {qoute:"You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening, And live like it's heaven on earth.", auther:'--William W. Purkey'},
    {qoute:"You know you're in love when you can't fall asleep because reality is finally better than your dreams.", auther:'--Dr. Seuss'},
    {qoute:"You only live once, but if you do it right, once is enough.", auther:'--Mae West'},
    {qoute:"Be the change that you wish to see in the world.", auther:'--Mahatma Gandhi'},
    {qoute:"In three words I can sum up everything I've learned about life: it goes on.", auther:'--Robert Frost'},
    {qoute:"If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.", auther:'--J.K. Rowling, Harry Potter and the Goblet of Fire'},
    {qoute:"Don’t walk in front of me… I may not follow    Don’t walk behind me… I may not leadWalk beside me… just be my friend", auther:'--Albert Camus'},
    {qoute:"If you tell the truth, you don't have to remember anything.", auther:'--Mark Twain'},
    {qoute:" Friendship ... is born at the moment when one man says to another What! You too? I thought that no one but myself ", auther:'--C.S. Lewis, The Four Loves'},
    {qoute:"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", auther:'--Maya Angelou'},
    {qoute:"A friend is someone who knows all about you and still loves you. ", auther:'--Elbert Hubbard'}


]


function display1(){
    document.getElementById('quote').innerHTML="" 
        document.getElementById('author').innerHTML=""
    for(var i=0;i<=qoutes.length;i++){
        
        var m=Math.floor(Math.random()*i)
        } 
        document.getElementById('quote').innerHTML=qoutes[m].qoute 
        document.getElementById('author').innerHTML=qoutes[m].auther 
}


