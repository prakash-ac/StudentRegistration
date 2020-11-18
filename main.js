const form = document.forms[0];

// handle clicks made on the form elements
form.addEventListener('click', function(e) {
    let firstNameElement = form.querySelector("#fName");
    let firstName = firstNameElement.value;
    let lastNameElement = form.querySelector('#lName');
    let lastName = lastNameElement.value;
    let ageElement = form.querySelector('#age');
    let age = ageElement.value;
    let genderElement = form.querySelector('#gender');
    let gender = genderElement.value;
    let phoneNoElement = form.querySelector('#phone');
    let phoneNo = phoneNoElement.value;
    let presentStreetElement = form.querySelector('#street1');
    let presentStreet = presentStreetElement.value;
    let presentCityElement = form.querySelector('#city1');
    let presentCity = presentCityElement.value;
    let presentStateElement = form.querySelector('#state1');
    let presentState= presentStateElement.value;
    let presentZipcodeElement = form.querySelector('#zipcode1');
    let presentZipcode = presentZipcodeElement.value;
    let isAddressesSame = false;

    // permanent address data
    let permStreetElement = form.querySelector('#street2');
    let permStreet = permStreetElement.value;
    let permCityElement = form.querySelector('#city2');
    let permCity = permCityElement.value;
    let permStateElement = form.querySelector('#state2');
    let permState = permStateElement.value;
    let permZipcodeElement = form.querySelector('#zipcode2');
    let permZipcode = permZipcodeElement.value;
    let studentData = [];
    let fieldsArray = [firstName, lastName, age, gender, phoneNo, presentStreet, presentCity, presentState,
        presentZipcode, permStreet, permCity, permState, permZipcode];
    
    errors = [];
    let valid = true;
    if(e.target.className == 'submit'){
        if(firstName == ""){
            errors.push(form.querySelector('#fNameError'));
        }
        if(lastName == ""){
            errors.push(form.querySelector('#lNameError'));
        }
        if(age == ""){
            errors.push(form.querySelector('#ageError'));
        }
        if(gender == "default"){

            errors.push(form.querySelector('#genderError'));
        }

        if(presentStreet == ""){
            errors.push(form.querySelector('#street1Error'));
        }
        if(presentCity == ""){
            errors.push(form.querySelector('#city1Error'));
        }
        if(presentState == ""){
            errors.push(form.querySelector('#state1Error'));
        }
        if(presentZipcode == ""){
            errors.push(form.querySelector('#zipcode1Error'));
        }

        if(permStreet == ""){
            errors.push(form.querySelector('#street2Error'));
        }
        if(permCity == ""){
            errors.push(form.querySelector('#city2Error'));
        }
        if(permState == ""){
            errors.push(form.querySelector('#state2Error'));
        }
        if(permZipcode == ""){
            errors.push(form.querySelector('#zipcode2Error'));
        }
        
        errors.forEach(element => {
            element.textContent = "This field cannot be empty.";
            element.style.color = 'red';
        });

        if(phoneNo.length<8){
            const error = form.querySelector('#phoneError');
            error.textContent = "Enter a valid phone number.";
            error.style.color = 'red';
        }

        if(errors.length > 0){
            //window.alert("Fill out the empty fields");
            valid = false;
        }

        if(valid){
            let presentAddress = presentStreet + ", " + presentCity + ", " + presentState + ", " + presentZipcode;
            let permanentAddress = permStreet + ", " + permCity + ", " + permState + ", " + permZipcode;
            studentData.push(new Student(firstName, lastName, age, gender, phoneNo, presentAddress, isAddressesSame, permanentAddress));
            firstNameElement.value = "";
            lastNameElement.value = ""; 
            ageElement.value = ""; 
            genderElement.value = ""; 
            phoneNoElement.value = "";
            presentStreetElement.value = "";
            presentCityElement.value = "";
            presentStateElement.value = "";
            presentZipcodeElement.value = ""; 
            permStreetElement.value = "";
            permCityElement.value = "";
            permStateElement.value = ""; 
            permZipcodeElement.value = "";
        }
    }

    else if(e.target.id == "fName"){
         const spanElement = form.querySelector('#fNameError');
         if(spanElement.textContent.length>0){
             spanElement.textContent = "";
         }
        //console.log("first name field clicked.");
    }

    else if(e.target.id == "lName"){
        const spanElement = form.querySelector('#lNameError');
        if(spanElement.textContent.length>0){
            spanElement.textContent = "";
        }
       //console.log("second name field clicked.");
   }

    else if(e.target.id == "age"){
        const spanElement = form.querySelector('#ageError');
        if(spanElement.textContent.length>0){
            spanElement.textContent = "";
        }
        //console.log("age field clicked.");
    }

    else if(e.target.id == "gender"){
        const spanElement = form.querySelector('#genderError');
        if(spanElement.textContent.length>0){
            spanElement.textContent = "";
        }
        //console.log("gender field clicked.");
    }

    else if(e.target.id == "phone"){
        const spanElement = form.querySelector('#phoneError');
        if(spanElement.textContent.length>0){
            spanElement.textContent = "";
        }
        //console.log("phone field clicked.");
    }

    else if(e.target.id == "street1"){
        const spanElement = form.querySelector('#street1Error');
        if(spanElement.textContent.length>0){
            spanElement.textContent = "";
        }
        //console.log("Street1 field clicked.");
    }

    else if(e.target.id == "city1"){
        const spanElement = form.querySelector('#city1Error');
        if(spanElement.textContent.length>0){
            spanElement.textContent = "";
        }
        //console.log("City1 field clicked.");
    }

    else if(e.target.id == "state1"){
        const spanElement = form.querySelector('#state1Error');
        if(spanElement.textContent.length>0){
            spanElement.textContent = "";
        }
        //console.log("STate1 field clicked.");
    }

    else if(e.target.id == "zipcode1"){
        const spanElement = form.querySelector('#zipcode1Error');
        if(spanElement.textContent.length>0){
            spanElement.textContent = "";
        }
        //console.log("zip code1 field clicked.");
    }

    else if(e.target.id == "street2"){
        const spanElement = form.querySelector('#street2Error');
        if(spanElement.textContent.length>0){
            spanElement.textContent = "";
        }
        //console.log("Street2 field clicked.");
    }

    else if(e.target.id == "city2"){
        const spanElement = form.querySelector('#city2Error');
        if(spanElement.textContent.length>0){
            spanElement.textContent = "";
        }
        //console.log("City2 field clicked.");
    }

    else if(e.target.id == "state2"){
        const spanElement = form.querySelector('#state2Error');
        if(spanElement.textContent.length>0){
            spanElement.textContent = "";
        }
        //console.log("STate2 field clicked.");
    }

    else if(e.target.id == "zipcode2"){
        const spanElement = form.querySelector('#zipcode2Error');
        if(spanElement.textContent.length>0){
            spanElement.textContent = "";
        }
        //console.log("zip code2 field clicked.");
    }


    studentData.forEach(element => console.log(element));

});

form.addEventListener('change', function(e) {
    const checkBox = form.querySelector('#addresses-same');
    if(checkBox.checked){
        console.log("Checkbox selected");
        form.querySelector('#street2').value = form.querySelector('#street1').value;
        form.querySelector('#city2').value = form.querySelector('#city1').value;
        form.querySelector('#state2').value = form.querySelector('#state1').value;
        form.querySelector('#zipcode2').value = form.querySelector('#zipcode1').value;
    } else{
        form.querySelector('#street2').value = "";
        form.querySelector('#city2').value = "";
        form.querySelector('#state2').value = "";
        form.querySelector('#zipcode2').value = "";
    }
})


class Student{
    constructor(firstName, lastName, age, gender, phoneNo, presentAddress, isAddressesSame, permanentAddress){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.phoneNo = phoneNo;
        this.presentAddress = presentAddress;
        this.isAddressesSame = isAddressesSame;
        this.permanentAddress = permanentAddress;
    }
}