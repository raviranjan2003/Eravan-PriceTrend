const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 
        'May','June','July','August','September',
        'October','November','December'],
        datasets: [{
            label: 'Price Trend',
            data: [12, 19, 3, 5, 2, 3,12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
function italianBasil(){
    let text = document.getElementById('italianBasil').innerHTML
    // console.log(text);
    document.getElementById('prod-name').innerHTML=text
    document.getElementById('prod-img').src="Price Trend Images/"+text+".jpg"
}
function swissChard(){
    let text = document.getElementById('swissChard').innerHTML
    // console.log(text);
    document.getElementById('prod-name').innerHTML=text
    document.getElementById('prod-img').src=`Price Trend Images/${text}.jpg`
}
function broccoli(){
    let text = document.getElementById('broccoli').innerHTML
    // console.log(text);
    document.getElementById('prod-name').innerHTML=text
    document.getElementById('prod-img').src="Price Trend Images/"+text+".jpg"
}
function kale(){
    let text = document.getElementById('kale').innerHTML
    // console.log(text);
    document.getElementById('prod-name').innerHTML=text
    document.getElementById('prod-img').src="Price Trend Images/"+text+".jpg"
}
function celery(){
    let text = document.getElementById('celery').innerHTML
    // console.log(text);
    document.getElementById('prod-name').innerHTML=text
    document.getElementById('prod-img').src="Price Trend Images/"+text+".jpg"
}
function rosemary(){
    let text = document.getElementById('rosemary').innerHTML
    // console.log(text);
    document.getElementById('prod-name').innerHTML=text
    document.getElementById('prod-img').src="Price Trend Images/"+text+".jpg"
}
function parsley100Grams(){
    let text = document.getElementById('parsley100Grams').innerHTML
    // console.log(text);
    document.getElementById('prod-name').innerHTML=text
    document.getElementById('prod-img').src="Price Trend Images/"+text+".jpg"
}
function pakChoi(){
    let text = document.getElementById('pakChoi').innerHTML
    // console.log(text);
    document.getElementById('prod-name').innerHTML=text
    document.getElementById('prod-img').src="Price Trend Images/"+text+".jpg"
}
function asparagus(){
    let text = document.getElementById('asparagus').innerHTML
    // console.log(text);
    document.getElementById('prod-name').innerHTML=text
    document.getElementById('prod-img').src="Price Trend Images/"+text+".jpg"
}
function thyme(){
    let text = document.getElementById('thyme').innerHTML
    // console.log(text);
    document.getElementById('prod-name').innerHTML=text
    document.getElementById('prod-img').src="Price Trend Images/"+text+".jpg"
}
function broccoliFlorets(){
    let text = document.getElementById('broccoliFlorets').innerHTML
    // console.log(text);
    document.getElementById('prod-name').innerHTML=text
    document.getElementById('prod-img').src="Price Trend Images/"+text+".jpg"
}
function lolloRossa(){
    let text = document.getElementById('lolloRossa').innerHTML
    // console.log(text);
    document.getElementById('prod-name').innerHTML=text
    document.getElementById('prod-img').src="Price Trend Images/"+text+".jpg"
}
function redOakLettuce(){
    let text = document.getElementById('redOakLettuce').innerHTML
    // console.log(text);
    document.getElementById('prod-name').innerHTML=text
    document.getElementById('prod-img').src="Price Trend Images/"+text+".jpg"
}
function greenButterHead(){
    let text = document.getElementById('greenButterHead').innerHTML
    // console.log(text);
    document.getElementById('prod-name').innerHTML=text
    document.getElementById('prod-img').src="Price Trend Images/"+text+".jpg"
}
function romaineLettuce(){
    let text = document.getElementById('romaineLettuce').innerHTML
    // console.log(text);
    document.getElementById('prod-name').innerHTML=text
    document.getElementById('prod-img').src="Price Trend Images/"+text+".jpg"
}
function tulsi(){
    let text = document.getElementById('tulsi').innerHTML
    // console.log(text);
    document.getElementById('prod-name').innerHTML=text
    document.getElementById('prod-img').src="Price Trend Images/"+text+".jpg"
}
function chineseCabbage(){
    let text = document.getElementById('chineseCabbage').innerHTML
    // console.log(text);
    document.getElementById('prod-name').innerHTML=text
    document.getElementById('prod-img').src="Price Trend Images/"+text+".jpg"
}
function leeks(){
    let text = document.getElementById('leeks').innerHTML
    // console.log(text);
    document.getElementById('prod-name').innerHTML=text
    document.getElementById('prod-img').src="Price Trend Images/"+text+".jpg"
}
function mint(){
    let text = document.getElementById('mint').innerHTML
    // console.log(text);
    document.getElementById('prod-name').innerHTML=text
    document.getElementById('prod-img').src="Price Trend Images/"+text+".jpg"
}
function amaranthus(){
    let text = document.getElementById('amaranthus').innerHTML
    // console.log(text);
    document.getElementById('prod-name').innerHTML=text
    document.getElementById('prod-img').src="Price Trend Images/"+text+".jpg"
}
function mintLeaves(){
    let text = document.getElementById('mintLeaves').innerHTML
    // console.log(text);
    document.getElementById('prod-name').innerHTML=text
    document.getElementById('prod-img').src="Price Trend Images/"+text+".jpg"
}
function palak(){
    let text = document.getElementById('palak').innerHTML
    // console.log(text);
    document.getElementById('prod-name').innerHTML=text
    document.getElementById('prod-img').src="Price Trend Images/"+text+".jpg"
}
function amaranthusGreen(){
    let text = document.getElementById('amaranthusGreen').innerHTML
    // console.log(text);
    document.getElementById('prod-name').innerHTML=text
    document.getElementById('prod-img').src="Price Trend Images/"+text+".jpg"
}
function colocasia(){
    let text = document.getElementById('colocasia').innerHTML
    // console.log(text);
    document.getElementById('prod-name').innerHTML=text
    document.getElementById('prod-img').src="Price Trend Images/"+text+".jpg"
}
function methi(){
    let text = document.getElementById('methi').innerHTML
    // console.log(text);
    document.getElementById('prod-name').innerHTML=text
    document.getElementById('prod-img').src="Price Trend Images/"+text+".jpg"
}