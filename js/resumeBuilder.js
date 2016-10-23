
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


//CUSTOMIZE THE RESUME
var work = {
    "jobs": [{
        "employer": "Ravi garments",
        "title": "Quality Checker",
        "location": "Tirupur",
        "dates": "2015-2016",
        "description": "The clothings produced have to be checked for any defects like  wrongprint, damages.The pieces that are defective are rejected and are not exported.These rejected pieces are sold in the local market for a lower cost."
    },
    {
        "employer": "infosys",
        "title": "System Engineer",
        "location": "Bangalore",
        "dates": "2016-2017",
        "description": "not yet working will be updated soon"
    }]
}

var projects = {
    "projects": [{
        "title": "animal trading card ",
        "dates": "2016 sep",
        "description": "Mocking a trading card using the given html framework.This was mainly developing the css of the trading card.I made a trading card of Cheetah.",
        "images": []
    }, {
        "title": "portfolio project",
        "dates": "2016 oct",
        "description": "A portfolio site of myself having links to my projects done till now.This was developed as part of my front-end-web-developer-nanodegree--nd001.I completed it with the help of html,css and bootstrap. ",
        "images": ["images/Cheetah.jpg","images/horses-small.jpg","images/portfolio.jpg"]
    }, {
        "title": "Polymer Composite",
        "dates": "2016 may",
        "description": "A polymer composite with graphite as reinforcement.this was done as my final year project.The polymer composite produced has a high tensile strength and low compression strength. The density of the composite is very less comparatively , it can be used as in automotive and aerospace industry to make low density frictional parts.",
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
    "welcomeMessage": "welcome to my online resume an interactive one!",
    "biopic": "images/fry.jpg"
}

var education = {
    "schools": [{
        "name": "Amrita school of Engineering",
        "location": "Bangalore",
        "degree": "B.Tech",
        "major": ["mechanical"],
        "dates": "2012-2016",
        "url": "https://www.amrita.edu"
    }],
    "onlineCourses": [{
        "title": "front end web-development",
        "school": "udacity",
        "dates": 2016,
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    },
    {
        "title": "Intro to computer science",
        "school": "udacity",
        "dates": 2016,
        "url": "https://in.udacity.com"
    }
    ]
}

//end of json
//functions to display work,project,bio ..
/*var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';
*/

education.display = function() {

    for(var i=0;i<education.schools.length;i++) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%",education.schools[i].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[i].degree);
        var formattedNameDegree = formattedName + formattedDegree;
        $(".education-entry:last").append(formattedNameDegree);
        var formattedDates = HTMLschoolDates.replace("%data%",education.schools[i].dates);
        $(".education-entry:last").append(formattedDates);
        var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[i].location);
        $(".education-entry:last").append(formattedLocation);
        var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[i].major);
        $(".education-entry:last").append(formattedMajor);


    }

    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);

    for(var i=0;i<education.onlineCourses.length;i++) {


        var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[i].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[i].school);
        var formattedTitleSchool = formattedTitle + formattedSchool;
        $(".education-entry:last").append(formattedTitleSchool);
        var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[i].dates);
        $(".education-entry:last").append(formattedDates);
        var formattedUrl = HTMLonlineURL.replace("%data%",education.onlineCourses[i].url);
        $(".education-entry:last").append(formattedUrl);

    }


}
education.display();

//work display fn
 work.display = function() {

  for(var i=0;i<work.jobs.length;i++){
        $("#workExperience").append(HTMLworkStart);

        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedDescription);

    }
}
work.display();

//bio displayfn
bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", "web-developer");
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
        var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
        $("#topContacts").append(formattedMobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").append(formattedEmail);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts").append(formattedGithub);
         var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(formattedLocation);
        var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
        $("#header").append(formattedWelcomeMessage);
        var formattedBiopic = HTMLbioPic.replace("%data%",bio.biopic);
        $("#header").append(formattedBiopic);

  if (bio.skills.length >0) {
      $("#header").append(HTMLskillsStart);

    for (var i=0;i<bio.skills.length;i++){
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    }
}
}
bio.display();//bio.display fn functional..




//displayproject function
projects.display = function(){
    for(var i=0;i<projects.projects.length;i++) {
           $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[i].title);
                         $(".project-entry:last").append(formattedTitle);
             var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[i].dates);
                        $(".project-entry:last").append(formattedDates);
            var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[i].description);
                         $(".project-entry:last").append(formattedDescription);

    if(projects.projects[i].images.length > 0) {

            for(var j=0;j<projects.projects[i].images.length;j++) {

                var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[i].images[j]);
                         $(".project-entry:last").append(formattedImage);

        }
    }
  }

}
projects.display();

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


/*
This is empty on purpose! Your code to build the resume will go here.
 */