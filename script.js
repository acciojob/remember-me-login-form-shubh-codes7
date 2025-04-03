let user = document.querySelector("#username")
let pwd = document.querySelector("#password")
let checkBox = document.querySelector("#checkbox")
let btn = document.querySelector("#submit")
let existingUser = document.querySelector("#existing")

if(localStorage.getItem("username")){
	existingUser.style.display = "inline"
}

let v = "shu"
existingUser.addEventListener("click", ()=>{
	alert(`Logged in as ${v}`);
})

btn.addEventListener("click", ()=>{
	alert("Logged in as ", user.value);
	if(checkBox.checked){
		localStorage.setItem("username", user.value)
		localStorage.setItem("password", pwd.value)
	}else{
		localStorage.clear()
	}
	
})




