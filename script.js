function sendEmail(){
   var name = $('#name').val();
   var email = $('#email').val();
   var subject = $('#subject').val();
   var message = $('#message').val();

Email.send({
   Host : "smtp.gmail.com",
   Username : "mohitvaishnav4765@gmail.com",
   Password : "MohitVaishnav@4765",
   To : 'mohitvaishnav4765@gmail.com',
   From : email,
   Subject : subject,
   Body : message
}).then(
 message => {
    if(message == 'ok'){
       alert('tour message is recieved');
    }else{
       alert('your message is not to be send');
    }
 }
);
}