var handleCountdownTimer=function(){var newYear=new Date();newYear=new Date(newYear.getFullYear()+1,1-1,1);$('#timer').countdown({until:newYear});};var ComingSoon=function(){"use strict";return{init:function(){handleCountdownTimer();}};}();$(document).ready(function(){ComingSoon.init();});