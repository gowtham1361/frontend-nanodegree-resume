
/*var awesomeThoughts = "I am gowtham and i am awesome!"
console.log(awesomeThoughts);
var funThoughts = awesomeThoughts.replace("awesome!", "FUN");
$("#main").append(funThoughts);
console.log(awesomeThoughts);
console.log(funThoughts);
var name = "Gowtham";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", "web-developer");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
var skills = [ "chilledout","teamplayer","programming","html","css"]
var bio= {
    "name": "Gowtham",
    "role": "web-developer",
    "contacts": {
        "mobile": "+918012727006",
        "email": "gowtham1361@gmail.com",
        "github": "gowtham1361"
    },
    "welcome message": "welcome to my online resume",
    "bioPic": "images/fry.jpg"
};

$("#main").append(bio.role);

var work = {};
work.position = "none";
work.employer = "none";
work.years = 0.3;

var education = {};
education.school = "laidlaw memorial school";
education,years = 10;
education.city = "ooty";

$("#main").append(work["position"]);
$("#main").append(education.school);*/

// TODO:
/*APPEND THE HTMLcontactGeneric AND THE BIOPIC ETC..
CHANGE FOR  IN LOOP TO FOR LOOP
ADD FOR LOOP FOR DISPLAYING SKILLS AT A GLANCE
ENCAPSULATE THE FUNCTIONS
ADD GOOGLE MAP TO RESUME
CUSTOMIZE THE RESUME */
var work = {
    "jobs": [{
        "employer": "Ravi garments",
        "title": "qualitychecker",
        "location": "Tirupur",
        "dates": "2015-2016",
        "description": "it involves the the clothings produced to be checked for any defects like  wrongprint, damages"
    },
    {
        "employer": "infosys",
        "title": "system-engineer",
        "location": "Bangalore",
        "dates": "2016-2017",
        "description": "not yet working will be updated soon"
    }]
}

var projects = {
    "projects": [{
        "title": "animal trading card ",
        "dates": "2016 sep",
        "description": "mocking a trading card",
        "images": []
    }, {
        "title": "portfolio project",
        "dates": "2016 oct",
        "description": "a portfolio site of myself",
        "images": []
    }, {
        "title": "polymer composite",
        "dates": "2016 may",
        "description": "a polymer composite with graphite as reinforcement",
        "images": []
    }]
}

var bio = {
    "name": "Gowtham Ravi",
    "role": "web-developer",
    "contacts": {
        "mobile": "+918012727006",
        "email": "gowtham1361@gmail.com",
        "github": "gowtham1361",
        "location": "Tirupur TN INDIA"
    },
    "skills": ["chilledout", "teamplayer", "programming", "html", "css"],
    "welcomeMessage": "welcome to my online resume",
    "biopic": "images/fry.jpg"
}

var education = {
    "schools": [{
        "name": "Amrita school of Engineering",
        "city": "Bangalore",
        "degree": "B.Tech",
        "major": ["mechanical"],
        "dates": "2012-2016",
        "url": "https://www.amrita.edu"
    }],
    "onlineCourses": [{
        "title": "front end web-development",
        "school": "udacity",
        "dates": 2016,
        "url": "https://classroom.udacity.com/nanodegrees/nd001"
    }]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", "web-developer");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

if (bio.skills.length >0) {

    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
    $("#skills").append(formattedSkill);

}

function displaywork() {

    for(job in work.jobs) {

    $("#workExperience").append(HTMLworkStart);

        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);

    }

}
displaywork();
// the location displayfunction
$(document).click(function(loc) {

  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
  // your code goes here!
});
//the internationalizeButton function
function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[0]= name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    name[1] = name[1].toUpperCase();
    return name[0] +" "+name[1];

}

$("#main").append(internationalizeButton);

//map
$("#mapDiv").append(googleMap);


//displayproject function encapsulation
projects.display = function(){
    for(var i=0;i<projects.projects.length;i++) {
           $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[i].title);
                         $(".project-entry:last").append(formattedTitle);
             var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[i].dates);
                        $(".project-entry:last").append(formattedDates);
            var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[i].description);
                         $(".project-entry:last").append(formattedDescription);
             var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[i].images);
                         $(".project-entry:last").append(formattedImage);

    }

}
projects.display();


/*
This is empty on purpose! Your code to build the resume will go here.
 */