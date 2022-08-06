Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
 Webcam.attach( '#camera');


function take_picture()
{
    Webcam.snap( function(data_uri) {
        // display results in page
        document.getElementById('result').innerHTML = 
         '<img id="image1" src="'+data_uri+'"/>';
    } );
}

console.log(ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Wl8zGqrh2/model.json",modelready);
function modelready()
{
    console.log("model s")
}
function identify() 
{
    myimage= document.getElementById("image1");
    classifier.classify(myimage,gotresult);
}

function gotresult(error,result)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(result)
    }
}