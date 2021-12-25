let obj = {
    fun1 : function(){
        console.log("this person name is  " + this.fullname + " and having age of "+ this.age)
    },

    fun2 : function(){
        console.log("this person name is  " + obj.fullname + " and having age of "+ this.age)
    },

    fun3 : function(){
        console.log("this person name is  " + fullname + " and having age of "+ age) // here fullname and age is not defined
    },

    fullname : "Aqil Ahmad",

    age : 27,


}

obj.fun1();
obj.fun2();
obj.fun3();