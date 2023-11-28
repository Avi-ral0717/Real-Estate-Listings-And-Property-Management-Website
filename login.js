function validate() {
    const correctusername = '12311454';
    const correctpassword = '07172005';
    const correct_username = '12310937';
    const correct_password = '12082004';
    const correct__username = '12311288';
    const correct__password = '23072004';
    
    const inputname = document.querySelector('#name').value;
    const inputpass = document.querySelector('#password').value;
    if (inputname == correctusername || inputname==correct_username || inputname==correct__username && inputpass == correctpassword || inputpass==correct_password || inputpass==correct__password) {
        window.open('Buy Now.html');
    } else {
        alert('wrong password/username');
    }
}