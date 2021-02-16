//ساخت انیمیشن کاور صفحه ومنو nav


$(document).ready(function() {
    $("#logoAnimate").fadeOut(8000);
});
setTimeout(function() {
    $("#header").slideDown(5000, function() {
        $("nav").css("borderColor", "red"),
            $(".nav-link").animate({
                opacity: "1"
            }, 2000)
    });
}, 7000);
setTimeout(function() {

    $("#smallLogo").animate({
        top: '600'
    }, 5000);
    $("#smallLogo").animate({
        left: '1270'
    }, 5000);
    $("#smallLogo").animate({
        top: '120'
    }, 5000);
    $("#smallLogo").fadeOut(2000);

}, 12000);



// دریافت ورودی از کاربر و استفاده از وردی با دستور پرامت
var getInfo;
getInfo = prompt("لطفا نام خود ری وارد کنید", "");
//  نمایش عکس و تغییر سورس عکس با کلیک و موس آور و نمایش متن مربوط به هر عکس
function chooseImage(x) {
    var showImage = document.getElementById("showImage");
    var picCap = document.getElementById("picCaption");
    showImage.src = 'images/' + x + '.jpg';
    if (x === 2) {
        picCap.innerHTML = "Thiland";
    } else {
        picCap.innerHTML = "";
    }

};
//تعویض بک گراند با ویزگی toggle و یک دکمه
function changeColor() {
    var mainTag = document.getElementById("main");
    mainTag.classList.toggle("toggle-color");
};
//زمان و روز تگ nav
//حتما از تابع آنلود استفاده شود
window.onload = function() {


        var now = new Date();
        var day = now.getDay();

        var timeLine = document.getElementsByClassName("time")[0];

        switch (day) {
            case 0:
                {
                    timeLine.innerHTML += "Sunday";
                    break;
                }
            case 1:
                {
                    timeLine.innerHTML += "Monday";
                    break;
                }
            case 2:
                {

                    timeLine.innerHTML += "Tuesday";
                    break;
                }
            case 3:
                {
                    timeLine.innerHTML += "Wednesday";
                    break;
                }
            case 4:
                {
                    timeLine.innerHTML += "Thursday";
                    break;
                }
            case 5:
                {
                    timeLine.innerHTML += "Friday";
                    break;
                }
            case 6:
                {
                    timeLine.innerHTML += "Saturday";
                    break;
                }
            default:
                {
                    alert("Not Found");

                    break;
                }


        }
        setInterval(timeFunction, 1000);
        //زمان NAV Bar
        function timeFunction() {
            var time = new Date().toLocaleTimeString();
            var saat = document.getElementById("saat");
            saat.innerHTML = time;

        }
        // وقتی استایل ها در فایل سی اس اس هست از این کد برای دسترسی به محتوای آن استفاده میشود
        var testt = document.getElementsByClassName("nav-link")[0];
        var test = getComputedStyle(testt).color;

    }
    //اعتبار سنجی ورودی عدد

function testing() {
    var inputText = document.getElementById("inputText").value;
    try {
        if (inputText == "") throw "Empty";
        if (isNaN(inputText)) throw "Not a number";
        if (inputText == null) throw "Put a number";
        if (inputText >= 0 && inputText <= 10) throw "too low";

        if (inputText > 10) {
            document.getElementById("inputTest").style.backgroundColor = "green";
            throw "Perfect";
        }


    } catch (error) {
        alert("Input is" + " " + error);

    } finally {
        document.getElementById("inputText").value = "";
    }

};
//اسلاید شو با استفاده از جی کویری
$(document).ready(function() {
    var i = 5;
    setInterval(function() {
        if (i == 1) {
            i = 5;
            $(".slide-show" + i).slideToggle(2000);
            i -= 1;
        } else {
            $(".slide-show" + i).slideToggle(2000);
            i -= 1;
        }

    }, 3000)

});
//تاییده سن مخاظب و تغییر رنگ nav با تایید
$(document).ready(function() {
    var navTag = document.getElementById("nav");
    var bodyTag = document.getElementsByTagName("body")[0];
    if (confirm("Are you 18?")) {
        navTag.style.borderColor = "green";
    } else {
        bodyTag.innerHTML = "";
        bodyTag.style.color = "white";
        bodyTag.style.fontSize = "80px";
        bodyTag.style.textAlign = "center";
        bodyTag.innerHTML += "you are not over 18!"

    }
});

//فرم فروش بلیط با تغییر لحظه ای
$(document).ready(function() {
    var submitForm = document.getElementById("sellingSubmitBtn");
    submitForm.disabled = true;
    var radiomakhfi = document.getElementById("makhfi");
    radiomakhfi.style.display = "none";
})

function changing() {
    var submitForm = document.getElementById("sellingSubmitBtn");
    var totalBand;
    var bandValue = document.querySelector("[name=bands]:checked").value;

    switch (bandValue) {
        case 'metallica':
            totalBand = 90;
            submitForm.value = "taeed";
            break;
        case 'behemoth':
            totalBand = 70;
            submitForm.value = "taeed";
            break;
        case 'belphegor':
            totalBand = 50;
            submitForm.value = "taeed";
            break;

        default:
            totalBand = 0;
            submitForm.value = "none"
            break;

    }

    var ticketNO = parseInt(document.getElementById("ticketNO").value);
    var bandTicketPrice = ticketNO * totalBand;
    var shippingPrice;
    var totalShipping = document.getElementById("shipping").value;
    switch (totalShipping) {
        case 'royalFirst':
            shippingPrice = 10;
            break;
        case 'royalSecond':
            shippingPrice = 15;
            break;
        case 'Hermes':
            shippingPrice = 20;
            break;
        case 'DHL':
            shippingPrice = 25;
            break;
        case 'select':
            shippingPrice = 0;
        default:
            break;
    };
    var totalPrice;
    totalPrice = bandTicketPrice + shippingPrice;
    var pricetext = document.getElementById("finalPrice");
    pricetext.innerHTML = "Final Price:" + " " + "$" + "";
    pricetext.innerHTML += totalPrice;
    var saleDiv = document.querySelectorAll(".sale-div");
    //ارور یابی بخش خرید بلیط-------------------------------------------------------------------------
    var i;
    var ShippingDiv = document.querySelector("#shipping");
    if (submitForm.value != "taeed") {
        submitForm.disabled = true;

        for (i = 0; i < saleDiv.length; i++) {
            saleDiv[i].style.borderColor = "red";
            saleDiv[i].style.borderWidth = "5px";
        }
    } else {
        for (i = 0; i < saleDiv.length; i++) {
            saleDiv[i].style.borderColor = "green";
            saleDiv[i].style.borderWidth = "5px";
        }
    };
    if (totalShipping == "select") {
        submitForm.disabled = true;
        ShippingDiv.style.borderColor = "red";
        ShippingDiv.style.color = "red";

    } else {
        ShippingDiv.style.borderColor = "green";
        ShippingDiv.style.color = "green";

    };
    if ((submitForm.value = "taeed") && (totalShipping != "select")) {
        submitForm.disabled = false;
    }
}
//----------------------------------------برنامه To Do List------------------------------------

$(document).ready(function() {
    var todoBtn = document.getElementById("todoButton");
    todoBtn.addEventListener("click", todoonclick);
})
$(document).ready(function() {
    var todoSection = document.getElementById("toDo");
    todoSection.addEventListener("mouseover", function() {
        $("#todoButton").show(2000);
    })
})


function todoonclick() {
    var inputValue = document.getElementById("todoInput");
    var newLi = document.createElement("li");
    var todoUl = document.getElementById("todoUl");
    var deleteBtn = document.createElement("button");
    if (inputValue.value == "" || inputValue.value == null || inputValue.value == false) {
        alert("Please insert your text!")
        inputValue.value = "";
    } else {

        newLi.innerHTML = inputValue.value;
        inputValue.value = "";
        todoUl.appendChild(newLi);
        deleteBtn.appendChild(document.createTextNode("X"));
        newLi.appendChild(deleteBtn);
        newLi.style.display = "none"; // First it's not showing then with jQuery it fades in!
        $(newLi).fadeIn(2000);
        deleteBtn.classList.add("delete-btn");
        newLi.style.position = "relative";

        //-------------------------------------------deleting Li-------------------
        deleteBtn.addEventListener("click", function() {
            $(newLi).fadeOut(1000);
        });

        function todoToggle() {
            newLi.classList.toggle("todo-check-toggle");

        }
        newLi.addEventListener("click", todoToggle);


    }


}
//adding Enter keypress--------------------------------------------------
function todoCheck() {
    var inputValue = document.getElementById("todoInput");
    return inputValue.value.length;
}


function todoKeyPress(event) {
    if (todoCheck() > 0 && event.which === 13) {
        todoonclick();
    }
}
$(document).ready(function() {
    var todoInput = document.getElementById("todoInput");
    todoInput.addEventListener("keypress", todoKeyPress);
});
//---------------نمایش پلاگین های مرورگر----------------------
$(document).ready(function() {
        var pluginsBtn = document.getElementById("pluginsBtn");
        var pluginsDiv = document.getElementsByClassName("plugins")[0];
        pluginsBtn.addEventListener("click", function() {
            var pluginsText = "";
            var i;
            for (var i = 0; i < navigator.plugins.length; i++) {
                pluginsText += navigator.plugins[i].name + "</br>";
                i++;
            }
            pluginsText += navigator.userAgent; //اطلاعات کاربر----------------------------------------------
            pluginsDiv.innerHTML = pluginsText;
            $(".plugins").show(2000);
            setTimeout(function() { $(".plugins").fadeOut(3500) }, 6000)
        })
    })
    //------------------ X O Game--------------------------------------------
    //My turn----------------------------

function gaming(i) {
    var result = document.getElementById("gameResult");
    var gameTable = document.getElementById("gameTable");
    var tableRow = parseInt(i / 3);
    var tableCell = i - tableRow * 3;
    var chooseCell = gameTable.rows[tableRow].cells[tableCell];
    if (chooseCell.innerHTML == " ") {
        chooseCell.innerHTML = "X";
        if (gameCheck(1)) {
            result.innerHTML = "You Won The Game"
            result.style.color = "green";
            $("#gameResult").show(1000);
            setTimeout("finishedGame()", 2000);


        } else if (checkMove()) {
            autoMove();

            if (gameCheck(2)) {
                result.innerHTML = "You Lose The Game";
                result.style.color = "red";
                $("#gameResult").show(1000);
                setTimeout("finishedGame()", 2000);
            }
        } else {
            result.innerHTML = "It's A Draw";
            result.style.color = "yellow";
            $("#gameResult").show(1000);
            setTimeout("finishedGame()", 2000);
        }
    }
}

///--------------------------Checking Status of Game----------------------------------
function gameCheck() {
    var gameTable = document.getElementById("gameTable");
    var cells = new Array();
    var i;
    for (var i = 0; i < 9; i++) {
        var tableRow = parseInt(i / 3);
        var tableCell = i - tableRow * 3;
        var chooseCell = gameTable.rows[tableRow].cells[tableCell];
        cells[i] = chooseCell.innerHTML;
    }
    var status = 0;

    if (cells[0] == cells[1] && cells[1] == cells[2] && cells[2] === "X") {
        status = 1;
    } else if (cells[3] == cells[4] && cells[4] == cells[5] && cells[5] == "X") {
        status = 1;
    } else if (cells[6] == cells[7] && cells[7] == cells[8] && cells[8] == "X") {
        status = 1;
    } else if (cells[0] == cells[3] && cells[3] == cells[6] && cells[6] == "X") {
        status = 1;
    } else if (cells[1] == cells[4] && cells[4] == cells[7] && cells[7] == "X") {
        status = 1;
    } else if (cells[2] == cells[5] && cells[5] == cells[8] && cells[8] == "X") {
        status = 1;
    } else if (cells[0] == cells[4] && cells[4] == cells[8] && cells[8] == "X") {
        status = 1;
    } else if (cells[2] == cells[4] && cells[4] == cells[6] && cells[6] == "X") {
        status = 1;
    } else if (cells[0] == cells[1] && cells[1] == cells[2] && cells[2] == "X") {
        status = 1;
    } else if (cells[0] == cells[1] && cells[1] == cells[2] && cells[2] == "X") {
        status = 1;
    } else if (cells[0] == cells[1] && cells[1] == cells[2] && cells[2] == "O") {
        status = 2;
    } else if (cells[3] == cells[4] && cells[4] == cells[5] && cells[5] == "O") {
        status = 2;
    } else if (cells[6] == cells[7] && cells[7] == cells[8] && cells[8] == "O") {
        status = 2;
    } else if (cells[0] == cells[3] && cells[3] == cells[6] && cells[6] == "O") {
        status = 2;
    } else if (cells[1] == cells[4] && cells[4] == cells[7] && cells[7] == "O") {
        status = 2;
    } else if (cells[2] == cells[5] && cells[5] == cells[8] && cells[8] == "O") {
        status = 2;
    } else if (cells[0] == cells[4] && cells[4] == cells[8] && cells[8] == "O") {
        status = 2;
    } else if (cells[2] == cells[4] && cells[4] == cells[6] && cells[6] == "O") {
        status = 2;
    } else if (cells[0] == cells[1] && cells[1] == cells[2] && cells[2] == "O") {
        status = 2;
    } else if (cells[0] == cells[1] && cells[1] == cells[2] && cells[2] == "O") {
        status = 2;
    }
    return status;
}
//-------------------------If system can move--------------------------------
function checkMove() {
    var gameTable = document.getElementById("gameTable");

    for (var i = 0; i < 9; i++) {
        var tableRow = parseInt(i / 3);
        var tableCell = i - tableRow * 3;
        var chooseCell = gameTable.rows[tableRow].cells[tableCell];
        if (chooseCell.innerHTML == " ") {
            return true;
        }
    }
    return false;
}
//----------System Turn-------------------------------------

function autoMove() {
    var table = document.getElementById("gameTable");
    var i;
    while (1) {
        i = Math.floor(Math.random() * 9);
        var row = parseInt(i / 3);
        var cell = i - row * 3;
        var chooseCell = table.rows[row].cells[cell];
        if (chooseCell.innerHTML == " ") {
            chooseCell.innerHTML = "O";
            break;
        }
    }
}
// -------------------------Finishing Game-----------------
function finishedGame() {
    var result = document.getElementById("gameResult");
    setTimeout(function() {

        $(".gameTd").html(" ");
        result.innerHTML = "";

    }, 3000);
    $("#gameResult").hide(3000);
}
//--------------------------------------------Full---ADDs----------------------------------
$(document).ready(function() {
        var adsBtn = document.getElementById("adsBtn");
        adsBtn.addEventListener("click", function() {
            $("#addsBack").show(3000);
        })
        var hideBtn = document.getElementById("hideAdds");
        hideBtn.addEventListener("click", function() {
            $("#addsBack").fadeOut(3000);
        })
    })
    //---------------------Slide ADDs---------------------------
$(document).ready(function() {

        var addBtn = document.getElementById("slideAddBtn");
        var ertefa = document.defaultView.getComputedStyle(slideAddDiv, null);
        h = parseInt(ertefa.height);
        var increaseTime;
        var decreaseTime;
        addBtn.addEventListener("click", function(event) {
            if (h == 0) {
                increaseTime = setInterval(increasing, 20);

            } else if (h == 402) {
                $("#slideAddDiv").css("background", "url('https://www.nme.com/wp-content/uploads/2019/08/nergal-696x442.jpg')");
                decreaseTime = setInterval(decreasing, 20);


            } else {
                event.preventDefault();
            }


            var slideAddDiv = document.getElementById("slideAddDiv");

            var height = document.defaultView.getComputedStyle(slideAddDiv, null);
            h = parseInt(height.height);
        })

        function decreasing() {
            var ertefa = document.defaultView.getComputedStyle(slideAddDiv, null);
            h = parseInt(ertefa.height);
            if (h > 0) {
                slideAddDiv.style.height = (h - 1) + "px";


            } else {
                clearInterval(decreaseTime);


            }
        }

        function increasing() {
            var ertefa = document.defaultView.getComputedStyle(slideAddDiv, null);
            h = parseInt(ertefa.height);
            if (h < 400) {
                slideAddDiv.style.height = (h + 3) + "px";
                $("#slideAddDiv").css("background", "url('https://cdn.mos.cms.futurecdn.net/wnBEmNPkCDZuE6hfGZqLFo-970-80.jpg.webp')");
                $("#slideAddDiv").css("background-size", "cover");
            } else {
                clearInterval(increaseTime);


            }
        }
    })
    //-------------------------------------------CANVAS_----------------------------------------------------
    //-------------------------------------CANVAS SHAPE AND WRITING_____________________
$(document).ready(function() {
        var myCanvas = document.getElementById("canvas");
        var context = myCanvas.getContext("2d");
        var canvasImg = new Image();
        canvasImg.addEventListener("load", function() {
            context.drawImage(canvasImg, 250, 150, 300, 500);

        });
        canvasImg.src = "images/maman.jpeg";


        context.strokeStyle = "blue";
        context.lineWidth = 3;
        context.beginPath();
        context.font = "70px Arial";
        context.fillText("روز مادر مبارک", 200, 100);





        //---------------------------------CANVAS BALL-----------------------------------

        var canvasBall = new Object;
        var increaseBall;
        var decreaseBall;
        canvasBall.x = 100;
        canvasBall.y = 100;
        canvasBall.speed = 10;
        canvasBall.radius = 40;
        increasingBall();

        function increasingBall() {
            if (canvasBall.y < 699) {

                increaseBall = setInterval(function() {
                    if (canvasBall.y < 699) {
                        //------------estekak-------------
                        canvasBall.speed *= 0.990;
                        //-----------------------------------
                        canvasBall.y += canvasBall.speed;
                        context.beginPath();
                        context.clearRect(0, 0, 150, 800);
                        context.arc(canvasBall.x, canvasBall.y, canvasBall.radius, 0, 2 * Math.PI);
                        context.stroke();
                        context.closePath();


                    } else {
                        clearInterval(increaseBall);
                        decreasingBall();

                    }
                }, 50)
            }
        }


        function decreasingBall() {
            decreaseBall = setInterval(function() {

                if (canvasBall.y > 101) {
                    //------------------------------bedoon estekak-----------------------------
                    canvasBall.speed = 10;
                    canvasBall.y -= canvasBall.speed;
                    context.beginPath();
                    context.clearRect(0, 0, 150, 800);
                    context.arc(canvasBall.x, canvasBall.y, canvasBall.radius, 0, 2 * Math.PI);
                    context.stroke();

                    context.closePath();


                } else {
                    clearInterval(decreaseBall);
                    increasingBall();

                }
            }, 50)
        }
        //------------------------------------------Moving Balls-------------------------------------
        var runBtn = document.getElementById("canvasRunBtn");
        runBtn.addEventListener("click", makingBalls);

        function makingBalls() {
            window.clearInterval(movingLoop);
            var ballCount = 10;
            var movingBall = new Array(ballCount);
            var movingLoop;
            context.clearRect(0, 0, 1200, 800);
            //---------------------------------------------Three Colors-------------------------------
            var firstBG = document.getElementById("firstCanvasColor");
            var secondBG = document.getElementById("secondCanvasColor");
            var thirdBG = document.getElementById("thirdCanvasColor");

            // --------------------Stop Looping after changing the values-----------------------------------------
            function stopLooping() {
                window.clearInterval(movingLoop);
                context.clearRect(0, 0, 1200, 800);
                return false;
            }
            //-------------------------------------------------------------------------------------------------
            movingLoop = window.setInterval(function() {
                var ballColor = context.createLinearGradient(0, 0, 0, 800);
                // -----------------------------------we put them here for be changed any time---------------
                firstBG.addEventListener("input", stopLooping);
                secondBG.addEventListener("input", stopLooping);
                thirdBG.addEventListener("input", stopLooping);
                // -------We can't put in FOR LOOP ====> Remove Stoping Loop and put this in FOR LOOP to see the result------
                ballColor.addColorStop(0, firstBG.value);
                ballColor.addColorStop(.5, secondBG.value);
                ballColor.addColorStop(1, thirdBG.value);


                for (var p = 0; p < movingBall.length; p++) {
                    movingBall[p] = new Object();
                    movingBall[p].x = Math.floor(Math.random() * 1200);
                    movingBall[p].y = Math.floor(Math.random() * 1200);
                    movingBall[p].speed = 2;
                    movingBall[p].radius = 10;
                    movingBall[p].angel = Math.floor(Math.random() * 360) * Math.PI / 180;
                    context.beginPath();
                    context.arc(movingBall[p].x, movingBall[p].y, movingBall[p].radius, 0, 2 * Math.PI);
                    context.fill();


                }
                context.fillStyle = ballColor;

                context.closePath();
            }, 5);


        }

    })
    //------------------------------------------------------------------------------------------------
    //------------------------------------CANVAS 2   MOVING BALLS---------------------------------------
    //---------------------------------------------------------------------------------------------------
$(document).ready(function() {
        var myCanvas = document.getElementById("movingBallsCanvas");
        var context = myCanvas.getContext("2d");
        var color = context.createLinearGradient(0, 0, 0, 400);
        color.addColorStop(0, 'red');
        color.addColorStop(.2, 'blue');
        color.addColorStop(.4, 'yellow');
        color.addColorStop(.6, 'green');
        color.addColorStop(.8, 'orange');
        color.addColorStop(1, 'pink');
        context.fillStyle = color;
        var ballCount = 10;
        var ball = new Array(ballCount);
        for (var i = 0; i < ballCount; i++) {
            ball[i] = new Object();
            ball[i].x = Math.floor(Math.random() * 380) + 10;
            ball[i].y = Math.floor(Math.random() * 380) + 10;
            ball[i].radius = 10;
            ball[i].speed = 2;
            ball[i].angel = Math.floor(Math.random() * 360) * Math.PI / 180;
        }

        window.setInterval(moving, 30);

        function moving() {
            screenUpdate();
            context.clearRect(0, 0, 400, 400);

            for (i = 0; i < ballCount; i++) {
                context.beginPath();
                context.arc(ball[i].x, ball[i].y, ball[i].radius, 0, 20);
                context.fill();

            }
            context.closePath();

        }

        function screenUpdate() {
            //--------------------------------------Uncommand to see the changes!
            // detectBalls();
            for (i = 0; i < ballCount; i++) {
                var xSpeed = ball[i].speed * Math.cos(ball[i].angel);
                var ySpeed = ball[i].speed * Math.sin(ball[i].angel);
                ball[i].x += xSpeed;
                ball[i].y += ySpeed;
                if (ball[i].x > (myCanvas.width - ball[i].radius) || ball[i].x < ball[i].radius) {
                    ball[i].angel = Math.PI - ball[i].angel;
                };
                if (ball[i].y > (myCanvas.height - ball[i].radius) || ball[i].y < ball[i].radius) {
                    ball[i].angel = (2 * Math.PI) - ball[i].angel;
                }

            }

        }
        //-------------------------------------------Uncommand to see the changes------------------------------------------
        // function detectBalls() {
        //     for (var i = 0; i < ballCount; i++) {
        //         for (var j = i + 1; j < ballCount; j++) {
        //             if (test(ball[i], ball[j])) {
        //                 ball[i].radius = 0;
        //                 ball[j].radius = 0;

        //             }
        //         }
        //     }
        // }

        // function test(c, v) {
        //     var dx = c.x - v.x;
        //     var dy = c.y - v.y;
        //     var d = Math.sqrt(dx * dx + dy * dy);
        //     if (d <= (c.radius + v.radius) && c.radius > 0 && v.radius > 0) {
        //         return true;
        //     } else {
        //         return false;
        //     }
        // }

    })
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //------------------------------------------------CANVAS ANIMATION------------------------------------------------
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function() {
        var myCanvas = document.getElementById("canvasAnimation");
        var context = myCanvas.getContext("2d");
        var currentImage = 1;
        var remainImages = 20;
        var movingOnX = 0;
        var image = new Array(21);
        var goingLoop;
        var backingLoop;
        for (var i = 1; i <= 20; i++) {
            if (remainImages == 20) {
                image[i] = new Image();
                image[i].onload = function() {
                    remainImages--;
                    if (remainImages == 0) {
                        startAnimate();
                    }
                }
            }
            image[i].src = "images/" + i + ".png";
        }

        function startAnimate() {
            if (movingOnX == 0) {
                clearInterval(backingLoop);
                goingLoop = setInterval(function() {
                    if (movingOnX < 321) {

                        context.clearRect(0, 0, 400, 400);
                        context.drawImage(image[currentImage], movingOnX += 5, 100, 80, 100);
                        currentImage++;
                        if (currentImage > 20) {
                            currentImage = 1;
                        }

                    };
                    startAnimate();
                }, 50)

            } else if (movingOnX == 325) {
                clearInterval(goingLoop);
                backingLoop = setInterval(function() {
                    if (movingOnX > 0) {

                        context.clearRect(0, 0, 400, 400);
                        context.drawImage(image[currentImage], movingOnX -= 5, 100, 80, 100);
                        currentImage--;
                        if (currentImage < 1) {
                            currentImage = 20;
                        };
                    };
                    startAnimate();

                }, 50)
            }


        }
    })
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //------------------------------------------SLIDE SHOW IN CANVAS--------------------------------------------------
    //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
$(document).ready(function() {
    var myCanvas = document.getElementById("canvasSlideshow");
    var context = myCanvas.getContext("2d");
    var frames = 5;
    var currentImage = 1;
    var nextImage = 2;
    var remainImage = 4;
    var movingOnX = 0;
    var image = new Array(5);
    for (var i = 1; i < 6; i++) {
        image[i] = new Image();
        image[i].onload = function() {
            remainImage--;
            if (remainImage == 0) {
                context.drawImage(image[currentImage], 0, 0, 420, 500);
            }
        }
        image[i].src = "images/" + 3 + i + ".jpg";
    }
    window.setInterval(function() {
        movingOnX += 2;
        context.drawImage(image[currentImage], 0 - movingOnX, 0, 420, 500);
        context.drawImage(image[nextImage], 420 - movingOnX, 0, 420, 500);
        if (movingOnX == 420) {
            switch (currentImage) {
                case 1:
                    currentImage = 2;
                    nextImage = 3;
                    break;
                case 2:
                    currentImage = 3;
                    nextImage = 4;

                    break;
                case 3:
                    currentImage = 4;
                    nextImage = 5;

                    break;
                case 4:
                    currentImage = 5;
                    nextImage = 1;

                    break;

                default:
                    currentImage = 1;
                    nextImage = 2;

                    break;
            }
            movingOnX = 0;
        }

    }, 20);



})