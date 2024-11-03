//NavBar
function toggleNavbar() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}
//Form 
function disp1(){
    var fname=document.getElementById("firstname").value;
    if(fname==""){
        document.getElementById("para1").innerHTML="Enter FirstName";
        document.getElementById("para1").style.color="red";
        return false;
    }
    else{
        document.getElementById("para1").style.display="none";
        return true;
        }
}
function disp2(){
    var lname=document.getElementById("lastname").value;
    if(lname==""){
        document.getElementById("para2").innerHTML="Enter LastName";
        document.getElementById("para2").style.color="red";
        return false;
    }
    else{
        document.getElementById("para2").style.display="none";
        return true;
        }
}
function disp3(){
    var newpass=document.getElementById("password").value;
    if(newpass==""){
        document.getElementById("para3").innerHTML="Enter password";
        document.getElementById("para3").style.color="red";
        return false;
    }
    else{
        document.getElementById("para3").style.display="none";
        return true;
        }
}
function disp4(){
    var pass=document.getElementById("confirmpassword").value;
    if(pass==""){
        document.getElementById("para4").innerHTML="Enter confirm password";
        document.getElementById("para4").style.color="red";
        return false;
    }
    else{
        document.getElementById("para4").style.display="none";
        return true;
        }

}
function disp5(){
    var mail=document.getElementById("email").value;
    if(mail==""){
        document.getElementById("para5").innerHTML="Enter email";
        document.getElementById("para5").style.color="red";
        return false;
    }
    else{
        document.getElementById("para5").style.display="none";
        return true;
        }
}


function disp(){
    var first=document.getElementById("firstname").value;
    var last=document.getElementById("lastname").value;
    var pass1=document.getElementById("password").value;
    var pass2=document.getElementById("confirmpassword").value;
    var email=document.getElementById("email").value;
    const hasNumbers=/\d/;
    if (hasNumbers.test(first) || hasNumbers.test(last)) {
        document.getElementById("error1").innerHTML="Numbers are not allowed in first name and last name";
        document.getElementById("error1").style.color="red";
        return false;
    } 
    if(first =="" || last=="" ||  pass1=="" ||pass2=="" || email=="" ){
        document.getElementById("error1").innerHTML="! Enter All The Fields"
        document.getElementById("error1").style.color="red"
        return false;
    }
    else if(pass1 === pass2){
        return true;
    }
    else{
        document.getElementById("error1").innerHTML="! password not matched"
        document.getElementById("error1").style.color="red"
        return false;
    }
    }
    

    //Dynamic Iamge Gallery

    function addImage() {
        const imageUrl = document.getElementById("imageUrl").value;
        if (!imageUrl) return alert("Please enter an image URL");

        const gallery = document.getElementById("gallery");
        const galleryItem = document.createElement("div");
        galleryItem.className = "gallery-item";

        const img = document.createElement("img");
        img.src = imageUrl;

        const removeBtn = document.createElement("button");
        removeBtn.className = "remove-btn";
        removeBtn.textContent = "X";
        removeBtn.onclick = () => gallery.removeChild(galleryItem);

        img.onclick = () => replaceImage(img);

        galleryItem.appendChild(img);
        galleryItem.appendChild(removeBtn);
        gallery.appendChild(galleryItem);

        document.getElementById("imageUrl").value = "";
    }

    function replaceImage(imgElement) {
        const newImageUrl = prompt("Enter the new image URL:");
        if (newImageUrl) {
            imgElement.src = newImageUrl;
        }
    }