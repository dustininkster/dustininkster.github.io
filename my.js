function firstProject(){
    document.getElementById("projectLabel").innerHTML= "Mix Design Tracker";
    document.getElementById("details").innerHTML =
    "Concrete Mix Design Tracker - A project to track concrete mixtures through all phases of the development process.  The program is coded in C# with .Net framework. " +
    "Data is stored in an MS SQL database created and managed with TSQL.  All development was done in Visual Studio 2019 and synced through Github for access from various locations. " +
    "The graphical user interface is created programatically and is controlled through a View object that extends the Form class.  The business logic is handled by a Controller static " +
    "class, and all of the LINQ to SQL code is handled by a data access static class called Model.";
    document.getElementById("projectLink").innerHTML= "<a href=\"https://github.com/dustininkster/Concrete-Mix-Design-Tracker\" target=\"_blank\">View code on GitHub</a>"
}
function secondProject(){
    document.getElementById("projectLabel").innerHTML= "Leaf Counter";
    document.getElementById("details").innerHTML =
    "A C++ console application written in Visual Studio that tracks employees and employee numbers.  Employee numbers are stored in EmployeeInfo objects that are then added to a " +
    "BinaryTree object implemented from a BinaryTree Template class.  The main program provides a menu to view, add, or delete nodes of the binary tree.";
    document.getElementById("projectLink").innerHTML= "<a href=\"https://github.com/dustininkster/Leaf-Counter\" target=\"_blank\">View code on GitHub</pa"
}
function thirdProject(){
    document.getElementById("projectLabel").innerHTML= "QC Helper";
    document.getElementById("details").innerHTML = 
    "A good friend and I wrote this in Java using Android Studio and is an Android only app available for free on the Google Play Store.  The app has calculators for two common quality "+
    "control tests required by the Texas Department of Transportation. One is a free moisture test required to determine the moisture content of concrete aggregates and the other " +
    "is a calculation of the amount of fine material contained in concrete aggregates.  I wrote the free moisture portion of the app and my friend Michael Black wrote the fine material portion.";
    document.getElementById("projectLink").innerHTML="<a href=\"https://github.com/dustininkster/Texas-Engineering-Toolkit/blob/master/OMGAndroid/app/src/main/java/dustin/omgandroid/MainActivity.java\" target=\"_blank\">View code on GitHub</a><p> or </p><a href=\"https://play.google.com/store/apps/details?id=dustin.omgandroid&hl=en_US&gl=US\" target=\"_blank\">View app in Google Play Store</a>";
}

function fourthProject(){
    document.getElementById("projectLabel").innerHTML= "Mythic Plus Group Generator";
    document.getElementById("details").innerHTML =
    "While I am no stranger to the hard work and long hours associated with the construction trade, I have been known to have fun. One of my favorite passtimes to pursue with friends is online video games"+
    "This project creates a viable group for World of Warcraft based on the friends that are present and ready to play.  The project was the result of " +
    "instances where we couldn't easily determine what combinations of players and characters would make a viable group.  The interface is coded in C# with .Net Framework. " +
    "Menus allow for the user to add new players and characters then select which characters are available to play.  The user then presses a button that displays a randomly selected " +
    "group that meets the requirements for the content.";
    document.getElementById("projectLink").innerHTML="<a href=\"https://github.com/dustininkster/MythicPlusParty\" target=\"_blank\">View code on GitHub</a>"
}