var bio = {
    "name": "Inna Badiul",
    "role": "Web Devepoler",
    "contacts": {
        "mobile": "6753423",
        "email": "inna.badiul@gmail.com",
        "github": "Inna-Badiul",
        "location": "Berlin"
    },
    "welcomeMessage": "Thanks for stopping by!",
    "skills": ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Git", "WordPress"],
    "biopic": "images/me.jpg"
};

bio.display = function() {
    var data = '%data%';
    var $header = $("#header");
    var formattedRole = HTMLheaderRole.replace(data, bio.role);
    var formattedName = HTMLheaderName.replace(data, bio.name);
    $header.prepend(formattedName, formattedRole);

    var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
    var formattedGitHub = HTMLgithub.replace(data, bio.contacts.github);
    var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
    $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGitHub, formattedLocation);

    var formattedwelcomeMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
    var formattedBioPic = HTMLbioPic.replace(data, bio.biopic);
    $header.append(formattedwelcomeMsg, formattedBioPic);

    $header.append(HTMLskillsStart);
    bio.skills.forEach(function(val) {
        var formattedSkills = HTMLskills.replace(data, val);
        $("#skills:last").append(formattedSkills);
    });
};

var education = {
    "schools": [{
        "name": "Odessa National Academy of Food Technologies",
        "location": "Odessa, Ukraine",
        "degree": "Hotel and restaurant business",
        "majors": ["Hospitality", "Restaurant management"],
        "dates": "2009 -2013",
        "url": "http://www.onaft.edu.ua/en/itfrhtb"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "titleUrl": 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001?v=fe1',
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com"
    }]
};

education.display = function() {
    var data = '%data%';

    education.schools.forEach(function(val) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace(data, val.name).replace("#", val.url);
        var formattedLocation = HTMLschoolLocation.replace(data, val.location);
        var formattedDegree = HTMLschoolDegree.replace(data, val.degree);
        var formattedMajor = HTMLschoolMajor.replace(data, val.majors);
        var formattedDates = HTMLschoolDates.replace(data, val.dates);
        var formattedSchool = formattedName + formattedDegree + formattedDates + formattedLocation + formattedMajor;
        $(".education-entry:last").append(formattedSchool);
    });

    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(val) {
        $("#education").append(HTMLschoolStart);
        var formattedTitle = HTMLonlineTitle.replace(data, val.title).replace("#", val.titleUrl);
        var formattedSchool = HTMLonlineSchool.replace(data, val.school);
        var formattedDates = HTMLonlineDates.replace(data, val.dates);
        var formattedUrl = HTMLonlineURL.replace("#", val.url).replace(data, val.url);
        var formattedOnlineCourses = formattedTitle + formattedSchool + formattedDates + formattedUrl;
        $(".education-entry:last").append(formattedOnlineCourses);
    });
};

var work = {
    "jobs": [{
        "employer": "Wedding-day",
        "title": "Freelance Web Developer",
        "location": "Odessa, Ukraine",
        "dates": "2015",
        "description": "My primary responsibilities involve all aspects of developing and supporting website."
    }, {
        "employer": "Coffeetime",
        "title": "Freelance Web Developer",
        "location": "Odessa, Ukraine",
        "dates": "2015",
        "description": "My primary responsibilities involve all aspects of developing and supporting website."
    }, {
        "employer": "Ceremony",
        "title": "Freelance Web Developer",
        "location": "Odessa, Ukraine",
        "dates": "2015",
        "description": "My primary responsibilities involve all aspects of developing and supporting website."
    }]
};

work.display = function() {
    var data = '%data%';

    work.jobs.forEach(function(val) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace(data, val.employer);
        var formattedTitle = HTMLworkTitle.replace(data, val.title);
        var formattedLocation = HTMLworkLocation.replace(data, val.location);
        var formattedDates = HTMLworkDates.replace(data, val.dates);
        var formattedDescription = HTMLworkDescription.replace(data, val.description);
        var formattedJobs = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription;
        $(".work-entry:last").append(formattedJobs);
    });
};

var projects = {
    "projects": [{
        "title": "Wedding-day",
        "dates": "2015",
        "description": "Created a website for wedding planner and organizer",
        "images": ["images/wd.png"]
    }, {
        "title": "Coffeetime",
        "dates": "2015",
        "description": "Created a website for Ukrainian entertainment organizers",
        "images": ["images/coffeetime.png"]
    }, {
        "title": "Ceremony",
        "dates": "2015",
        "description": "Created a website for an organizer of the wedding ceremony.",
        "images": ["images/ceremony.png"]
    }]
};

projects.display = function() {
    var data = '%data%';

    projects.projects.forEach(function(val) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace(data, val.title);
        var formattedDates = HTMLprojectDates.replace(data, val.dates);
        var formattedDescription = HTMLprojectDescription.replace(data, val.description);
        // var formattedImages = HTMLprojectImage.replace(data, val.images);
        var formattedProjects = formattedTitle + formattedDates  + formattedDescription;
        $(".project-entry:last").append(formattedProjects);

        if (val.images.length > 0){
            var formattedImages = HTMLprojectImage.replace(data, val.images);
            $(".project-entry:last").append(formattedImages);
        }
    });
};

bio.display();
education.display();
work.display();
projects.display();

$("#mapDiv").append(googleMap);