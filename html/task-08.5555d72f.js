document.querySelector(".login-form").addEventListener("submit",(function(e){e.preventDefault();var l=e.target,t=l.elements.email.value,a=l.elements.password.value;if(""!==t&&""!==a){var n={};n.email=t,n.login=a,console.log(n),l.reset()}else alert("all fields must be filled")}));
//# sourceMappingURL=task-08.5555d72f.js.map
