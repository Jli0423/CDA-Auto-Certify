Survey.Survey.cssType = "bootstrap";
Survey.defaultBootstrapCss.navigationButton = "btn btn-green";

window.survey = new Survey.Model({ questions: [
    {type: "text", name: "firstName", title: "First Name:"},
    {type: "text", name: "lastName", title: "Last Name:"},
    {type: "text", name: "licenseNum", title: "Driver's License Number"},
    {type: "text", name: "startDateClass", title: "In-Class Start Date"},
    {type: "text", name: "startDateCar", title: "In-Car Start Date"},
    {type: "text", name: "endDateClass", title: "In-Class End Date"},
    {type: "text", name: "endDateCar", title: "In-Car Start Date"},
    {type: "text", name: "classMark", title: "In-Class Final Mark"},
    {type: "text", name: "carMark", title: "In-Car Final Mark"}
]});
survey.onComplete.add(function(result) {
	document.querySelector('#surveyResult').innerHTML = "result: " + JSON.stringify(result.data);
});

var data = {};
var surveyValueChanged = function (sender, options) {
    var el = document.getElementById(options.name);
    if(el) {
        el.value = options.value;
    }
};

var firstName = survey.getValue('firstName');
console.log(firstName);

$("#surveyElement").Survey({
    model: survey,
    data: data,
    onValueChanged: surveyValueChanged
});
