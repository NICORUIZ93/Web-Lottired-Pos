"use strict";(self.webpackChunkWeb_Lottired_Pos=self.webpackChunkWeb_Lottired_Pos||[]).push([[606],{2606:(v,l,u)=>{u.r(l),u.d(l,{SalesModule:()=>C});var s=u(6895),m=u(923),n=u(4006),e=u(4650),i=u(3505);function p(t,a){1&t&&e._uU(0,"Second step")}function d(t,a){1&t&&e._uU(0,"Second step")}function c(t,a){if(1&t&&(e.TgZ(0,"div",30),e._uU(1),e.qZA()),2&t){const o=a.$implicit;e.xp6(1),e.hij(" ",o," ")}}function g(t,a){1&t&&e._uU(0,"Second step")}const b=[{path:"",component:(()=>{class t{constructor(o,r){this.fb=o,this.router=r,this.loading=!1,this.randomNumbers=[]}ngOnInit(){this.initForm()}initForm(){this.ventaForm=this.fb.group({numeroTicket:["",n.kI.required],fechaVenta:["",n.kI.required],monto:["",[n.kI.required,n.kI.min(0)]],nombreComprador:["",n.kI.required],cedulaComprador:["",n.kI.required],telefonoComprador:["",n.kI.required],numeroLoteria:["",n.kI.required]})}validarPaso1(){return!!(this.ventaForm.get("numeroTicket").invalid||this.ventaForm.get("fechaVenta").invalid||this.ventaForm.get("monto").invalid)}validarPaso2(){return!!this.ventaForm.get("numeroLoteria").invalid}completarCompra(){this.loading=!0,setTimeout(()=>{console.log("hola"),console.log(this.ventaForm.value),this.ventaForm.reset(),this.router.navigate(["/auth/login"])},1e3)}generateRandomNumbers(){this.randomNumbers=Array.from({length:4},()=>+Math.floor(10*Math.random())),this.ventaForm.get("numeroLoteria").setValue(this.randomNumbers.join(""))}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(n.qu),e.Y36(m.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-sales"]],decls:54,vars:8,consts:[["nbSpinnerStatus","danger","nbSpinnerSize","large","nbSpinnerMessage","",3,"nbSpinner"],["orientation","horizontal"],["label","Paso 1"],["labelTwo",""],[3,"formGroup"],[1,"form-group"],["for","numeroTicket"],["type","text","id","numeroTicket","formControlName","numeroTicket","nbInput","","required",""],["for","fechaVenta"],["type","text","id","fechaVenta","formControlName","fechaVenta","nbInput","","required",""],["for","monto"],["type","text","id","monto","formControlName","monto","nbInput","","required",""],["nbButton","","nbStepperNext","","status","success",3,"disabled"],["label","Paso 2"],[1,"lottery-numbers"],[1,"number-container"],["class","number-item",4,"ngFor","ngForOf"],["id","numeroLoteria","nbButton","",3,"click"],[1,"button-group"],["nbButton","","nbStepperPrevious","","status","success",1,"button-previous"],["nbButton","","nbStepperNext","","status","success",1,"button-next",3,"disabled"],["label","Paso 3"],[3,"formGroup","ngSubmit"],["for","nombreComprador"],["type","text","id","nombreComprador","formControlName","nombreComprador","nbInput","","required",""],["for","cedulaComprador"],["type","text","id","cedulaComprador","formControlName","cedulaComprador","nbInput","","required",""],["for","telefonoComprador"],["type","text","id","telefonoComprador","formControlName","telefonoComprador","nbInput","","required",""],["nbButton","","type","submit","status","success",3,"disabled"],[1,"number-item"]],template:function(o,r){1&o&&(e.TgZ(0,"nb-card",0)(1,"nb-card-body")(2,"nb-stepper",1)(3,"nb-step",2),e.YNc(4,p,1,0,"ng-template",null,3,e.W1O),e.TgZ(6,"form",4)(7,"div",5)(8,"label",6),e._uU(9,"N\xfamero de Ticket:"),e.qZA(),e._UZ(10,"input",7),e.qZA(),e.TgZ(11,"div",5)(12,"label",8),e._uU(13,"Fecha de Venta:"),e.qZA(),e._UZ(14,"input",9),e.qZA(),e.TgZ(15,"div",5)(16,"label",10),e._uU(17,"Monto:"),e.qZA(),e._UZ(18,"input",11),e.qZA(),e.TgZ(19,"button",12),e._uU(20," Siguiente "),e.qZA()()(),e.TgZ(21,"nb-step",13),e.YNc(22,d,1,0,"ng-template",null,3,e.W1O),e.TgZ(24,"form",4)(25,"div",5)(26,"div",14)(27,"div",15),e.YNc(28,c,2,1,"div",16),e.qZA(),e.TgZ(29,"button",17),e.NdJ("click",function(){return r.generateRandomNumbers()}),e._uU(30," Generar n\xfameros "),e.qZA()(),e.TgZ(31,"div",18)(32,"button",19),e._uU(33," Atr\xe1s "),e.qZA(),e.TgZ(34,"button",20),e._uU(35," Siguiente "),e.qZA()()()()(),e.TgZ(36,"nb-step",21),e.YNc(37,g,1,0,"ng-template",null,3,e.W1O),e.TgZ(39,"form",22),e.NdJ("ngSubmit",function(){return r.completarCompra()}),e.TgZ(40,"div",5)(41,"label",23),e._uU(42,"Nombre del Comprador:"),e.qZA(),e._UZ(43,"input",24),e.qZA(),e.TgZ(44,"div",5)(45,"label",25),e._uU(46,"C\xe9dula del Comprador:"),e.qZA(),e._UZ(47,"input",26),e.qZA(),e.TgZ(48,"div",5)(49,"label",27),e._uU(50,"Tel\xe9fono del Comprador:"),e.qZA(),e._UZ(51,"input",28),e.qZA(),e.TgZ(52,"button",29),e._uU(53," Completar compra "),e.qZA()()()()()()),2&o&&(e.Q6J("nbSpinner",r.loading),e.xp6(6),e.Q6J("formGroup",r.ventaForm),e.xp6(13),e.Q6J("disabled",r.validarPaso1()),e.xp6(5),e.Q6J("formGroup",r.ventaForm),e.xp6(4),e.Q6J("ngForOf",r.randomNumbers),e.xp6(6),e.Q6J("disabled",r.validarPaso2()),e.xp6(5),e.Q6J("formGroup",r.ventaForm),e.xp6(13),e.Q6J("disabled",r.ventaForm.invalid))},dependencies:[s.sg,n._Y,n.Fj,n.JJ,n.JL,n.Q7,i.DPz,n.sg,n.u,i.Asz,i.yKW,i.h8i,i.TLo,i.Sv4,i.rAx,i.HFZ,i.Q7R],styles:[".lottery-numbers[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;margin-bottom:20px}.lottery-numbers[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-bottom:10px}.lottery-numbers[_ngcontent-%COMP%]   .number-container[_ngcontent-%COMP%]{display:flex;justify-content:center}.lottery-numbers[_ngcontent-%COMP%]   .number-container[_ngcontent-%COMP%]   .number-item[_ngcontent-%COMP%]{font-size:30px;font-weight:700;padding:10px;border:2px solid #000;border-radius:50%;margin:5px;animation:_ngcontent-%COMP%_lotteryAnimation .8s infinite}@keyframes _ngcontent-%COMP%_lotteryAnimation{0%{transform:scale(1)}50%{transform:scale(1.2)}to{transform:scale(1)}}.form-group[_ngcontent-%COMP%]{margin-bottom:20px}.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;font-weight:700;margin-bottom:5px}.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%}.button-group[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.button-group[_ngcontent-%COMP%]   .button-previous[_ngcontent-%COMP%]{margin-right:10px}.button-group[_ngcontent-%COMP%]   .button-next[_ngcontent-%COMP%]{margin-left:10px}"]}),t})()}];let f=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[m.Bz.forChild(b),m.Bz]}),t})(),C=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[s.ez,f]}),t})()}}]);