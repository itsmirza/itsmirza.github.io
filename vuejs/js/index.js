let app1 = new Vue({
    el: "#app1",
    data: {
        message:"Hello Vue"
    }
});

let app2 = new Vue({
    el: "#app2",
    data: {
        message: "Loaded on " + new Date().toLocaleString(),
        linkUrl: "https://bbc.in/2LAnJs8",
        linkText: "Google is Down"
    }
});

//if true it will show, if false it will hide
let app3 = new Vue({
    el: "#app3",
    data: {
        showIt: true
    }
});

let app4 = new Vue({
    el: "#app4",
    data: {
        theList: [
            {
                text:"Learn HTML"
            },
            {
                text: "Learn CSS"
            },
            {
                text:"Learn Javascript"
            }
        ]
    }
});

let app5 = new Vue({
    el: "#app5",
    data:{
        msg: "Hakim Arif"
    },
    methods: {
        reveseMsg: function(){
            this.msg = this.msg.split("").reverse().join("");
        }
    }
});

let app6 = new Vue({
    el: "#app6",
    data:{
        message: "Hello World!"
    }
});

Vue.component("grocery-list",{
    props: ["todo"],
    templet: "<li>{{todo.desc}}</li>"
});

let app7 = new Vue ({
    el:"#app7",
    data: {
        groceryList: [
            {
                id: 0,
                desc: "Vegitables"
            },
            {
                id: 1,
                desc: "Mineral Water"
            },
            {
                id: 2,
                desc: "Cookies"
            }
        ]
    }
});