"use strict";
$(document).ready(function () {
    var count = 0; //count variable for left and right positioning
    var arr = []; //array used for storing the filled position for shuffling
    var EMPTY_SQUARE = {}; //store and updates empty div
    EMPTY_SQUARE.leftx = "300px"; //initial left position
    EMPTY_SQUARE.toppx = "300px"; //initial top position

    //set the position and css for the filled squares
    $('#puzzlearea div').each(function () {
        var filledSquares = {};
        var x = ((count % 4) * 100);
        var y = (Math.floor(count / 4) * 100);
        $(this).addClass('puzzlepiece');
        var leftpx = x + 'px';
        var toppx = y + 'px';
        filledSquares.leftpx = leftpx;
        filledSquares.toppx = toppx;
        arr.push(filledSquares);
        // set image background
        $(this).css({ "left": leftpx, "top": toppx, "backgroundImage": 'url("./images/background.jpeg")', "backgroundPosition": -x + 'px ' + (-y) + 'px' });
        count++;
    });
    //check if the square can be moved, and swap the value for emptysquare
    $('.puzzlepiece').click(function () {
        var changedleft = $(this).css("left");
        var changedtop = $(this).css("top");

        if (clickableleft(changedleft, changedtop)) {
            $(this).css({ "left": EMPTY_SQUARE.leftx, "top": EMPTY_SQUARE.toppx });
            EMPTY_SQUARE.leftx = changedleft;
            EMPTY_SQUARE.toppx = changedtop;
        } else if (clickableTop(changedleft, changedtop)) {
            $(this).css({ "left": EMPTY_SQUARE.leftx, "top": EMPTY_SQUARE.toppx });
            EMPTY_SQUARE.leftx = changedleft;
            EMPTY_SQUARE.toppx = changedtop;

        }
    });
    //change the index of the divs stored as objects in the array (shuffle)
    $('#shufflebutton').click(function () {
        var i = 0, j = 0, suff = 0, temp = null;

        for (i = arr.length - 1; i > 0; i -= 1) {
            j = Math.floor(Math.random() * (i + 1));
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }

        //set css after suffling
        $('#puzzlearea div').each(function () {
            $(this).css({ "left": arr[suff].leftpx, "top": arr[suff].toppx });
            suff++;
        });

        suff = 0;

        EMPTY_SQUARE.leftx = "300px";
        EMPTY_SQUARE.toppx = "300px";
    });

    //Change css and remove css on hover
    $('.puzzlepiece').hover(function () {
        var changedleft = $(this).css("left");
        var changedtop = $(this).css("top");

        if (clickableleft(changedleft, changedtop)) {
            $(this).addClass('movablepiece');
        } else if (clickableTop(changedleft, changedtop)) {
            $(this).addClass('movablepiece');
        }
    }, function () {
        $(this).removeClass('movablepiece');
    });

     //find the neighbouring elements on the left
    var clickableleft = function (changedleft, changedtop) {
        if (parseInt(changedtop) === parseInt(EMPTY_SQUARE.toppx)) {
            //check whether element neighbour is an empty div
            if (parseInt(changedleft) + 100 === parseInt(EMPTY_SQUARE.leftx) || parseInt(changedleft) - 100 === parseInt(EMPTY_SQUARE.leftx)) {
                return true;
            } else {
                return false;
            }
        }
    };

    //helper function for finding the neighbouring elements on the right
    var clickableTop = function (changedleft, changedtop) {
        if (parseInt(changedleft) === parseInt(EMPTY_SQUARE.leftx)) {
            //check whether element neighbour is an empty div
            if (parseInt(changedtop) + 100 === parseInt(EMPTY_SQUARE.toppx) || parseInt(changedtop) - 100 === parseInt(EMPTY_SQUARE.toppx)) {
                return true;
            } else {
                return false;
            }
        }
    };
});