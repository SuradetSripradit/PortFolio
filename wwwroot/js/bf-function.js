// Declare variable
const SiteList = {
    Linkedin:"https://www.linkedin.com/in/suradet-spd/",
    GithubRepo: "https://suradet-spd.github.io/Portfolio/",
    GitHub: "https://github.com/suradet-spd",
    Instragram: "https://www.instagram.com/yub_suradet/",
    Facebook:"https://www.facebook.com/suradat.sripradist/",
    Email1:"mailto:suradet.spd@outlook.com",
    Email2:"mailto:suradet.spd@gmail.com"
};

// Function
function BF_LoaderPage() {
    document.getElementById("ContentPage").style.display = "none";
    setTimeout(ShowContent , 1000);
}

function ShowContent() {
    document.getElementById("LoaderPage").style.display = "none";
    document.getElementById("ContentPage").style.display = "block";
}

function BF_ExecuteCode() {
    document.getElementById("LoaderPage").style.display = "block";
    setTimeout(ExecuteCode , 1000);
}

function ExecuteCode() {
    document.getElementById("LoaderPage").style.display = "none";
    document.getElementById("ContentPage").style.display = "none";
    document.getElementById("ExecuteResult").style.display = "block";
}


function OtherSite(SiteName) {
    if (SiteName == "Linkedin") {
        window.open(SiteList.Linkedin, '_blank');
    } else if(SiteName == "GithubRepo") {
        window.open(SiteList.GithubRepo, '_blank');
    } else if(SiteName == "GitHub") {
        window.open(SiteList.GitHub, '_blank');
    } else if (SiteName == "Instragram") {
        window.open(SiteList.Instragram, '_blank');
    } else if (SiteName == "Facebook") {
        window.open(SiteList.Facebook, '_blank');
    } else if (SiteName == "Email1") {
        window.open(SiteList.Email1, '_blank');
    } else if (SiteName == "Email2") {
        window.open(SiteList.Email2, '_blank');
    } else {
        window.location.reload();
    }
}