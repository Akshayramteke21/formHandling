

const loginValidation=(values)=>{

    let err= {}

    const email_pttrn= /^[^\s@]+@[^\s@]+\s@]+$/ 

    const password_pttrn= /^(?=.*\d)(?=.*[a-z])(?==.*[A-Z])[a-zA-Z0-9]{8,}$/ 



    if(values.email ===''){
        err.email="Name should not be empty"
    }

    else if(!email_pttrn.test(values.email)){
        err.email="Email didnt match"
    }

    else{

        err.email=""
    }

    if(values.password===" "){
        err.password="password should not be empty"

    }
    else if(!password_pttrn.test(values.password)){

        err.password="password didnt match"
    }

    else{
        err.password=" "
    }

}

export default loginValidation;