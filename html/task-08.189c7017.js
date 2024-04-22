document.querySelector(".login-form").addEventListener("submit",(function(e){e.preventDefault();const l=e.target,t=l.elements.email.value,n=l.elements.password.value;if(""===t||""===n)return void alert("all fields must be filled");const o={};o.email=t,o.login=n,console.log(o),l.reset()}));
//# sourceMappingURL=task-08.189c7017.js.map
