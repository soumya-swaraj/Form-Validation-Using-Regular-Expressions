let uname = document.getElementById("name");
let email = document.getElementById("email");
let mobileno = document.getElementById("mobileno");
let age = document.getElementById("age");
let area = document.getElementById("area");
let city = document.getElementById("city");
let district = document.getElementById("district");
let pincode = document.getElementById("pincode");
let submitBtn = document.getElementById("submit_btn");

let validname = false;
let validemail = false;
let validmonumber = false;
let validage = false;
let validarea = false;
let validcity = false;
let validdistrict = false;
let validpincode = false;

uname.addEventListener("blur", () => {
    let regex = /^[a-zA-Z]([a-zA-Z ]){3,29}$/;
    //regular expression allows those string who starts with a-z and A-Z , it can contain a-z and A-Z and white space . length must be in between 4-30 and end with a alphabet
    let str = uname.value;
    if (regex.test(str)) {
        uname.classList.remove("is-invalid");
        validname = true;
    } else {
        uname.classList.add("is-invalid");
        validname = false;
    }
});

email.addEventListener("blur", () => {
    let regex = /(^[a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]+)$/;
    //regular expression allows those string who starts with a-z and A-Z , it can contain a-z and A-Z and white space . length must be in between 4-30 and end with a alphabet
    let str = email.value;
    if (regex.test(str)) {
        email.classList.remove("is-invalid");
        validemail = true;
    } else {
        email.classList.add("is-invalid")
        validemail = false;
    }
});

mobileno.addEventListener("blur", () => {
    let regex = /^[0-9]{10}$/;
    //regex = all character must be 0 to 9 .end and start with numeric character and 10 character allowed
    let str = mobileno.value;
    if (regex.test(str)) {
        mobileno.classList.remove("is-invalid")
        validmonumber = true;
    } else {
        mobileno.classList.add("is-invalid")
        validmonumber = false;
    }
});

age.addEventListener("blur", () => {
    let regex = /^([0-9]){1,2}$/;
    let str = age.value;
    if (regex.test(str)) {
        age.classList.remove("is-invalid")
        validage = true;
    } else {
        age.classList.add("is-invalid")
        validage = false;
    }
});

area.addEventListener("blur", () => {
    let regex = /^[a-zA-Z]+$/;
    //regular expression allows those string who starts with a-z and A-Z , it can contain a-z and A-Z and white space . length must be in between 4-30 and end with a alphabet
    let str = area.value;
    if (regex.test(str)) {
        area.classList.remove("is-invalid")
        validarea = true;
    } else {
        area.classList.add("is-invalid")
        validarea = false;
    }
});

city.addEventListener("blur", () => {
    let regex = /^[a-zA-Z]+$/;
    let str = city.value;
    if (regex.test(str)) {
        city.classList.remove("is-invalid")
        validcity = true;
    } else {
        city.classList.add("is-invalid")
        validcity = false;
    }
});

district.addEventListener("blur", () => {
    let regex = /^[a-zA-Z]+$/;
    let str = district.value;
    if (regex.test(str)) {
        district.classList.remove("is-invalid")
        validdistrict = true;
    } else {
        district.classList.add("is-invalid")
        validdistrict = false;
    }
});

pincode.addEventListener("blur", () => {
    let regex = /^[0-9]{6}$/;
    let str = pincode.value;
    if (regex.test(str)) {
        pincode.classList.remove("is-invalid")
        validpincode = true;
    } else {
        pincode.classList.add("is-invalid")
        validpincode = false;
    }
});

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (validname == true && validemail == true && validmonumber == true && validage == true && validarea == true && validcity == true && validdistrict == true && validpincode == true) {
        let successfullyaddedmsg = document.getElementById("successfullyaddedmsg");
        successfullyaddedmsg.classList.add("show");
        setTimeout(
            () => {
                successfullyaddedmsg.classList.remove("show");
            }
            , 1000);
        let form = document.getElementById("form");
        form.reset();
    }
});
