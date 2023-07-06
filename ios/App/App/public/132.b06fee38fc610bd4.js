"use strict";(self.webpackChunkWeb_Lottired_Pos=self.webpackChunkWeb_Lottired_Pos||[]).push([[132],{2132:(P,u,s)=>{s.r(u),s.d(u,{RegistrationModule:()=>I});var c=s(6895),l=s(923),r=s(4006),e=s(4650),m=s(1261),p=s(529);let g=(()=>{class n{constructor(t){this.http=t,this.url=m.N.url}getAll(){return this.http.get(this.url+"/user/listar",{headers:{Authorization:"Basic "+window.btoa("admin1:admin1"),"Content-Type":"application/json"}})}registerUser(t){return this.http.post(this.url+"/user/guardar",t,{headers:{Authorization:"Basic "+window.btoa("admin1:admin1"),"Content-Type":"application/json"}})}deleteUser(t){return this.http.delete(this.url+"/user/guardar/"+t,{headers:{Authorization:"Basic "+window.btoa("admin1:admin1"),"Content-Type":"application/json"}})}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(p.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var d=s(3505);function f(n,i){1&n&&(e.TgZ(0,"div",11),e._uU(1," El nombre es requerido "),e.qZA())}function h(n,i){1&n&&(e.TgZ(0,"div",11),e._uU(1," El nombre debe tener al menos 3 caracteres "),e.qZA())}function v(n,i){1&n&&(e.TgZ(0,"div",11),e._uU(1," El correo electr\xf3nico es requerido "),e.qZA())}function b(n,i){1&n&&(e.TgZ(0,"div",11),e._uU(1," El correo electr\xf3nico no es v\xe1lido "),e.qZA())}function w(n,i){1&n&&(e.TgZ(0,"div",11),e._uU(1," La contrase\xf1a es requerida "),e.qZA())}function C(n,i){1&n&&(e.TgZ(0,"div",11),e._uU(1," La contrase\xf1a debe tener al menos 6 caracteres "),e.qZA())}function Z(n,i){1&n&&(e.TgZ(0,"div",11),e._uU(1," La confirmaci\xf3n de contrase\xf1a es requerida "),e.qZA())}function T(n,i){1&n&&(e.TgZ(0,"div",11),e._uU(1," Las contrase\xf1as no coinciden "),e.qZA())}function _(n,i){1&n&&(e.TgZ(0,"div",11),e._uU(1," Debes aceptar los t\xe9rminos y condiciones "),e.qZA())}const y=[{path:"",component:(()=>{class n{constructor(t,o){this.fb=t,this.usersService=o,this.showPassword=!0}ngOnInit(){this.usersService.getAll().subscribe(t=>{console.log(t)}),this.myForm=this.fb.group({name:["",[r.kI.required,r.kI.minLength(3)]],email:["",[r.kI.required,r.kI.email]],password:["",[r.kI.required,r.kI.minLength(6)]],confirmPassword:["",r.kI.required],agreeToTerms:[!1,r.kI.requiredTrue]},{validator:this.passwordMatchValidator})}submitForm(){this.myForm.valid&&(this.myForm.addControl("dateRegister",new r.NI(new Date)),this.usersService.registerUser(this.myForm.value).subscribe(t=>{console.log("data",t)}),console.log(this.myForm.value))}isFieldInvalid(t,o){const a=this.myForm.get(t);return a.invalid&&(a.dirty||a.touched)&&a.hasError(o)}passwordMatchValidator(t){t.get("password").value!==t.get("confirmPassword").value?t.get("confirmPassword").setErrors({passwordMismatch:!0}):t.get("confirmPassword").setErrors(null)}getInputType(){return this.showPassword?"text":"password"}toggleShowPassword(){this.showPassword=!this.showPassword}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(r.qu),e.Y36(g))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-registration"]],decls:34,vars:14,consts:[[3,"formGroup","ngSubmit"],[1,"form-group"],["formControlName","name","id","name","nbInput","","placeholder","Nombre"],["class","error-message",4,"ngIf"],["formControlName","email","id","email","nbInput","","placeholder","Correo Electr\xf3nico"],["formControlName","password","id","password","nbInput","","placeholder","Contrase\xf1a",3,"type"],["ghost","","nbButton","","nbSuffix","",3,"click"],["pack","eva",3,"icon"],["formControlName","confirmPassword","id","confirmPassword","nbInput","","placeholder","Confirmar Contrase\xf1a","type","password"],["formControlName","agreeToTerms"],["nbButton","","status","primary",3,"disabled"],[1,"error-message"]],template:function(t,o){1&t&&(e.TgZ(0,"nb-card")(1,"nb-card-header"),e._uU(2,"Formulario de Registro"),e.qZA(),e.TgZ(3,"nb-card-body")(4,"form",0),e.NdJ("ngSubmit",function(){return o.submitForm()}),e.TgZ(5,"div",1)(6,"nb-input-group"),e._UZ(7,"input",2),e.qZA(),e.YNc(8,f,2,0,"div",3),e.YNc(9,h,2,0,"div",3),e.qZA(),e.TgZ(10,"div",1)(11,"nb-input-group"),e._UZ(12,"input",4),e.qZA(),e.YNc(13,v,2,0,"div",3),e.YNc(14,b,2,0,"div",3),e.qZA(),e.TgZ(15,"div",1)(16,"nb-input-group"),e._UZ(17,"input",5),e.TgZ(18,"button",6),e.NdJ("click",function(){return o.toggleShowPassword()}),e._UZ(19,"nb-icon",7),e.qZA()(),e.YNc(20,w,2,0,"div",3),e.YNc(21,C,2,0,"div",3),e.qZA(),e.TgZ(22,"div",1)(23,"nb-input-group"),e._UZ(24,"input",8),e.qZA(),e.YNc(25,Z,2,0,"div",3),e.YNc(26,T,2,0,"div",3),e.qZA(),e.TgZ(27,"div",1)(28,"nb-checkbox",9),e._uU(29,"Acepto los t\xe9rminos y condiciones "),e.qZA(),e.YNc(30,_,2,0,"div",3),e.qZA(),e.TgZ(31,"div",1)(32,"button",10),e._uU(33," Registrarse "),e.qZA()()()()()),2&t&&(e.xp6(4),e.Q6J("formGroup",o.myForm),e.xp6(4),e.Q6J("ngIf",o.isFieldInvalid("name","required")),e.xp6(1),e.Q6J("ngIf",o.isFieldInvalid("name","minlength")),e.xp6(4),e.Q6J("ngIf",o.isFieldInvalid("email","required")),e.xp6(1),e.Q6J("ngIf",o.isFieldInvalid("email","email")),e.xp6(3),e.Q6J("type",o.getInputType()),e.xp6(2),e.Q6J("icon",o.showPassword?"eye-outline":"eye-off-2-outline"),e.uIk("aria-label",o.showPassword?"hide password":"show password"),e.xp6(1),e.Q6J("ngIf",o.isFieldInvalid("password","required")),e.xp6(1),e.Q6J("ngIf",o.isFieldInvalid("password","minlength")),e.xp6(4),e.Q6J("ngIf",o.isFieldInvalid("confirmPassword","required")),e.xp6(1),e.Q6J("ngIf",o.isFieldInvalid("confirmPassword","passwordMismatch")),e.xp6(4),e.Q6J("ngIf",o.isFieldInvalid("agreeToTerms","required")),e.xp6(2),e.Q6J("disabled",o.myForm.invalid))},dependencies:[c.O5,r._Y,r.Fj,r.JJ,r.JL,d.DPz,d.fMN,r.sg,r.u,d.Asz,d.yKW,d.ndF,d.h8i,d.NTf],styles:["nb-card[_ngcontent-%COMP%]{width:min-content;margin:0 auto;display:flex;justify-content:center;text-align:center}nb-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%]{padding:20px;font-size:24px;font-weight:700}nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]{padding:20px}nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{margin:20px}nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]{color:red;margin:5px;font-size:14px}"]}),n})()}];let F=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[l.Bz.forChild(y),l.Bz]}),n})(),I=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.ez,F]}),n})()}}]);