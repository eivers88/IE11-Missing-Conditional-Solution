IE11-Missing-Conditional-Solution
=================================

A solution for the missing conditional statements in IE11

This solution was inspired by this current limitation of IE11: http://connect.microsoft.com/IE/feedback/details/806767/conditional-comments-do-not-work-when-emulating-document-modes-via-f12-developer-tools

This solution will not fix all conditional statements in your html document. It is designed to set IE classes on the html tag similar to many of the popular boilerplates out there.

Example:

<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->

The above comments will fail in IE11 emulation of older versions. Adding IE_Conditional_Fix.js to your page will fix this limitation in IE11.