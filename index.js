var a,b;
var max = 999999, min = 100000

var state = 1;
var page = tabris.create("Page",{
    title: 'Main page',
    topLevel: true,
    //background: "red"
});

var button = tabris.create('Button',{
    text: 'Generate',
    layoutData: {centerX: 0, top: 150},
    background: "white"
}).appendTo(page);

var labela = tabris.create("TextView", {
  font: "24px",
  layoutData: {left: 50, top: 50},
  background: "white"
}).appendTo(page);

var labelb = tabris.create("TextView", {
  font: "24px",
  layoutData: {right: 50, top: 50},
  background: "white"
}).appendTo(page);

var answer = tabris.create("TextView",{
    font: "24px",
    layoutData: {centerX:0,top: 50},
    background: "white"
}).appendTo(page);

var answerButton = tabris.create("Button",{
    text: "Answer",
    layoutData: {centerX:0,top:200},
    visible: false
}).on("select",function(){
    console.log(answerButton);
    labela.set("visible",false);
    labelb.set("visible",false);
    answer.set("text",(a+b).toString());
    answerButton.set("visible",true);
}).appendTo(page)

function getRandomInt() {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateNumbers(){
    state = 2
    answer.set("text","");
    console.log(answerButton);
    answerButton.set("visible",true);
    //answerButton.visible = true;
    a = getRandomInt();
    b = getRandomInt();
    labela.set("visible",true);
    labelb.set("visible",true);
    labela.set("text",a.toString())
    labelb.set("text",b.toString())
}
button.on("select",function(){
    generateNumbers()
});

page.open()