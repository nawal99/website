const linkItems = document.querySelectorAll(".link-item");

linkItems.forEach((linkItem, index) => {
    linkItem.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active");
        linkItem.classList.add("active");

        const indicator = document.querySelector(".indicator");

        indicator.style.left = `${index * 95 + 48}px`;
    })
})

$(function(){
    $("#nav-placeholder").load("nav.html");
  });

    function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("bdy").style.marginLeft = "300px";
    document.getElementById("bdy").style.marginRight = "-250px";
    /*document.getElementById("top").style.marginLeft = "260px";
    document.getElementById("top").style.marginRight = "-260px";*/
    }

    function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("bdy").style.marginLeft= "5%";
    document.getElementById("bdy").style.marginRight = "5%";/*
    document.getElementById("top").style.marginLeft = "10px";
    document.getElementById("top").style.marginRight = "0px";*/
    }

    function darkm() {
    document.getElementById("bdy").className = "black";
    document.getElementById("ltsw").style = "display: flex;margin-left: 2%;color:white;text-decoration: none;cursor:pointer;font-size: 30px;";
    document.getElementById("drksw").style = "display: none;";
    /*
    document.getElementById("ltsw").style = "position: absolute;top: 16px;right: 0px; font-size: 30px; margin-right: 5%; cursor:pointer;visibility:visible;color:white;display:block"*/

    }

    function lightm() {
    document.getElementById("bdy").className = "bg";
    document.getElementById("ltsw").style = "display: none;";
    document.getElementById("drksw").style = "display: flex;margin-left: 2%;color:rgb(31, 31, 31);text-decoration: none;cursor:pointer;font-size: 30px;";/*
    document.getElementById("drksw").style = "position: absolute;top: 16px;right: 0px; font-size: 30px; margin-right: 5%; cursor:pointer;visibility:visible;"*/
    }