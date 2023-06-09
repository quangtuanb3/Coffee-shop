
function Validate() {
    this.CheckEmpty = function (id, value, error) {
        if (value.trim() === '') {
            document.getElementById(id).style.borderColor = "red";
            document.getElementById(error).style.display = "inline";

            return true;
        }
        document.getElementById(id).style.borderColor = "green";
        document.getElementById(error).style.display = "none";
        return false;
    }

    this.CheckToSetDefaultImg = function (imgSrc) {
        const http = new XMLHttpRequest();
        http.open('HEAD', imgSrc, false);
        http.send();
        if (http.status == 404) {
            imgSrc = "../../images/defaultProduct.webp";
        }
        return imgSrc;
    }


    this.CheckDuplicateId = function (id, listCoffee, error) {
        let idElement = document.getElementById(id);
        for (let i = 0; i < listCoffee.listCf.length; i++) {
            console.log(listCoffee.listCf[i].id)
            if (idElement.value == listCoffee.listCf[i].id) {
                idElement.style.borderColor = "red"
                document.getElementById(error).style.display = "inline";
                return true
            }
        }
        idElement.style.borderColor = "green";
        document.getElementById(error).style.display = "none";
        return false; s
    }
    this.CheckDuplicateName = function (id, listCoffee, error) {
        let idElement = document.getElementById(id);
        for (let i = 0; i < listCoffee.listCf.length; i++) {
            if (idElement.value == listCoffee.listCf[i].name) {
                idElement.style.borderColor = "red";
                document.getElementById(error).style.display = "inline";
                return true
            }
        }
        idElement.style.borderColor = "green";
        document.getElementById(error).style.display = "none";
        return false;
    }

    this.CheckBoundary = function (id, error) {
        let element = document.getElementById(id);
        if (Number(element.min) <= Number(element.value) && Number(element.value) <= Number(element.max)) {
            element.style.borderColor = "green";
            document.getElementById(error).style.display = "none";
            return false;
        } else {
            element.style.borderColor = "red";
            document.getElementById(error).style.display = "inline";
            return true;
        }
    }
    this.CheckLength = function (id, error) {
        let element = document.getElementById(id);
        if (Number(element.min) <= element.value.length && element.value.length <= Number(element.max)) {
            element.style.borderColor = "green";
            document.getElementById(error).style.display = "none";
            return false;
        } else {
            element.style.borderColor = "red";
            document.getElementById(error).style.display = "inline";
            return true;
        }
    }
    this.CheckDuplicateUser = function (email_path, listUser, errorMsg) {
        let emailEle = document.getElementById(email_path);
        for (let i = 0; i < listUser.listUsers.length; i++) {
            if (emailEle.value == listUser.listUsers[i].email) {
                emailEle.style.borderColor = "red";
                document.getElementById(errorMsg).style.display = 'block';
                document.getElementById(errorMsg).innerText = '* Email has been used!'
                return true;
            } else {
                document.getElementById(errorMsg).innerText = '* Invalid email';
                document.getElementById(errorMsg).style.display = 'none';
            }
        }
        emailEle.style.borderColor = "green";
        document.getElementById(errorMsg).style.display = 'none';
        return false;
    };
    this.CheckConfirmPw = function (pw, cfPw, errorMsg) {
        if (document.getElementById(pw).value === document.getElementById(cfPw).value) {
            document.getElementById(errorMsg).style.display = 'none';
            return false;
        } else {
            document.getElementById(errorMsg).style.display = 'block';
            return true;
        }
    }

}