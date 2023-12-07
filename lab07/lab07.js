function askPassword(ok, fail) {

    let password = prompt("Password?", '');
    if(password == "rockstar") ok();
    else fail();
}

let user = {
    name: 'John',

    loginOk(){
        alert(`${this.name} logged in`);
    },

    loginFail(){
        alert(`${this.name} failed to log in`);
    },
};

// using Wrapper
askPassword(function(){return user.loginOk();}, function(){return user.loginFail();});

// using bind
//askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

//using call
//askPassword(() => user.loginOk.call(user), () => user.loginFail.call(user));

// using apply
//askPassword(() => user.loginOk.apply(user), () => user.loginFail.apply(user));




let group = {

    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList: function() {
        this.students.forEach(function(student) {
        console.log(this.title + ": " + student);
        }.bind(this));
    }
};

group.showList();