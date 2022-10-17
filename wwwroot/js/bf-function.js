function BF_LoaderPage() {
    document.getElementById("ContentPage").style.display = "none";
    setTimeout(ShowContent , 300);
}

function ShowContent() {
    document.getElementById("LoaderPage").style.display = "none";
    document.getElementById("ContentPage").style.display = "block";
}

function BF_ExecuteCode() {
    document.getElementById("LoaderPage").style.display = "block";
    setTimeout(ExecuteCode , 500);
}

function ExecuteCode() {
    document.getElementById("LoaderPage").style.display = "none";
    document.getElementById("ContentPage").style.display = "none";
    document.getElementById("ExecuteResult").style.display = "block";
}