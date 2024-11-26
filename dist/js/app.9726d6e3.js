(function(){"use strict";var e={3516:function(e,t,o){var r=o(5130),n=o(6768);const i={key:0};function s(e,t,o,r,s,a){const l=(0,n.g2)("router-link"),u=(0,n.g2)("router-view");return(0,n.uX)(),(0,n.CE)(n.FK,null,[s.notother?((0,n.uX)(),(0,n.CE)("nav",i,[(0,n.bF)(l,{to:"/"},{default:(0,n.k6)((()=>t[0]||(t[0]=[(0,n.eW)("Home")]))),_:1}),t[3]||(t[3]=(0,n.eW)(" | ")),(0,n.bF)(l,{to:{name:"about"}},{default:(0,n.k6)((()=>t[1]||(t[1]=[(0,n.eW)("About")]))),_:1}),t[4]||(t[4]=(0,n.eW)(" | ")),(0,n.bF)(l,{to:{name:"help"}},{default:(0,n.k6)((()=>t[2]||(t[2]=[(0,n.eW)("Help")]))),_:1})])):(0,n.Q3)("",!0),(0,n.bF)(u)],64)}o(4114);var a={data(){return{notother:!0,gameorhost:!1}},methods:{goback(){this.$router.go(-1)},goforward(){this.$router.go(1)},goHome(){this.$router.push({name:"home"}),console.log("click1")}}},l=o(1241);const u=(0,l.A)(a,[["render",s]]);var h=u,m=o(1387);const c={class:"wrapper"},d={class:"container"},p={class:"button-host-or-join"};function b(e,t,o,r,i,s){return(0,n.uX)(),(0,n.CE)("div",c,[(0,n.Lk)("div",d,[t[2]||(t[2]=(0,n.Fv)('<h1><span class="text-purple">Mathe</span><span class="text-orange">nic</span></h1><p class="p-quiznow"><b><span class="text-purple">Quiz</span><span class="text-orange">now.</span></b><br><b>Sharpen your Math skills, Compete in Real time, and Learn with every Quiz!</b></p>',2)),(0,n.Lk)("div",p,[(0,n.Lk)("button",{class:"main-button",onClick:t[0]||(t[0]=(...e)=>s.gohost&&s.gohost(...e))},"Host"),(0,n.Lk)("button",{class:"main-button",onClick:t[1]||(t[1]=(...e)=>s.gojion&&s.gojion(...e))},"Join")])])])}var k={data(){return{}},methods:{gojion(){this.$router.push({name:"lobby",query:{game_id:"",player_id:""}})},gohost(){this.$router.push({name:"hostpage",query:{roomid:"",roomkey:""}})},goback(){this.$router.go(-1)}}};const g=(0,l.A)(k,[["render",b]]);var f=g;const y={class:"box"};function _(e,t){return(0,n.uX)(),(0,n.CE)("div",y,t[0]||(t[0]=[(0,n.Lk)("h1",null,[(0,n.eW)("About "),(0,n.Lk)("span",{style:{color:"purple"}},"Mathe"),(0,n.Lk)("span",{class:"text-orange"},"nic"),(0,n.eW)(": Where Learning Meets Fun")],-1),(0,n.Lk)("p",null,"Mathenic is more than just a quiz app; it's a vibrant community of learners who love to test their knowledge and compete in real-time. We believe that learning should be engaging, exciting, and rewarding, and that's exactly what Mathenic offers.",-1),(0,n.Lk)("h1",null,"Our Mission:",-1),(0,n.Lk)("p",null,"To create a platform where everyone can learn and grow through the power of interactive quizzes. We aim to make learning fun, accessible, and competitive, fostering a love for knowledge in every participant.",-1)]))}const v={},L=(0,l.A)(v,[["render",_]]);var w=L;const M={class:"container"};function q(e,t){return(0,n.uX)(),(0,n.CE)("div",M,t[0]||(t[0]=[(0,n.Fv)('<h1 class="title"><span>Mathe</span><span class="text-orange">nic</span></h1><div class="instructions"><h2 class="text-center" style="color:#6a1b9a;">For Host</h2><ol class="instruction-list mx-auto"><li>Click the host button to start</li><li>Set up your prepared operation, timer, and number of questions, then click create when done.</li><li>Wait for the student to join.</li><li>Click the start button.</li></ol><h2 class="text-center" style="color:#6a1b9a;">For Join</h2><ol class="instruction-list mx-auto"><li>Click the join button.</li><li>Enter the room ID/lobby ID and your name.</li><li>Wait for the host to start.</li><li>Start answering the following questions.</li></ol></div>',2)]))}const C={},U=(0,l.A)(C,[["render",q]]);var $=U,E=o(4232);const O={class:"container"},X={key:0,class:"login-section"},x={class:"form-group"},D={class:"form-group"},S={key:1,class:"player-list-section"},j={class:"player-list-container"},I={class:"player-list"},F={key:2,class:"game-section"},A={class:"number"},Q={class:"operation-display"},P={key:0},W={key:1},T={key:2},R={key:3},H={class:"number"},J={key:3,class:"congrats-section"},z={id:"score-container"},V={id:"score-display"};function K(e,t,o,i,s,a){return(0,n.uX)(),(0,n.CE)("div",O,[s.Ui_render.login?((0,n.uX)(),(0,n.CE)("div",X,[(0,n.Lk)("div",x,[t[7]||(t[7]=(0,n.Lk)("h1",{class:"title"},[(0,n.Lk)("span",null,"Mathe"),(0,n.Lk)("span",{class:"text-orange"},"nic")],-1)),t[8]||(t[8]=(0,n.Lk)("br",null,null,-1)),t[9]||(t[9]=(0,n.Lk)("br",null,null,-1)),t[10]||(t[10]=(0,n.Lk)("label",{for:"name"},"Enter name:",-1)),(0,n.bo)((0,n.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>s.playername=e),class:"input-field",placeholder:"Your Name",required:""},null,512),[[r.Jo,s.playername]])]),(0,n.Lk)("div",D,[t[11]||(t[11]=(0,n.Lk)("br",null,null,-1)),t[12]||(t[12]=(0,n.Lk)("br",null,null,-1)),t[13]||(t[13]=(0,n.Lk)("br",null,null,-1)),t[14]||(t[14]=(0,n.Lk)("label",{for:"room-id"},"Enter room ID:",-1)),(0,n.bo)((0,n.Lk)("input",{type:"text",name:"",id:"","onUpdate:modelValue":t[1]||(t[1]=e=>s.roomID=e),class:"input-field",placeholder:"Room ID",required:""},null,512),[[r.Jo,s.roomID]])]),t[15]||(t[15]=(0,n.Lk)("br",null,null,-1)),t[16]||(t[16]=(0,n.Lk)("br",null,null,-1)),t[17]||(t[17]=(0,n.Lk)("br",null,null,-1)),t[18]||(t[18]=(0,n.Lk)("br",null,null,-1)),(0,n.Lk)("button",{onClick:t[2]||(t[2]=(...e)=>a.join_room&&a.join_room(...e)),class:"btn"},"join")])):(0,n.Q3)("",!0),s.Ui_render.otherPlayerList?((0,n.uX)(),(0,n.CE)("div",S,[(0,n.Lk)("h3",null,"Room ID : "+(0,E.v_)(s.roomID),1),(0,n.Lk)("h4",null,"Players : "+(0,E.v_)(s.playerlist.length),1),t[19]||(t[19]=(0,n.Lk)("h1",null,"Waiting to the host to Start :",-1)),(0,n.Lk)("button",{onClick:t[3]||(t[3]=(...e)=>a.LeaveRoom&&a.LeaveRoom(...e)),class:"btn"},"Leave Room"),(0,n.Lk)("div",j,[(0,n.Lk)("ul",I,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(s.playerlist,(e=>((0,n.uX)(),(0,n.CE)("li",{key:s.playerlist.username},(0,E.v_)(e.username),1)))),128))])])])):(0,n.Q3)("",!0),s.Ui_render.game_started?((0,n.uX)(),(0,n.CE)("div",F,[(0,n.Lk)("h1",null,(0,E.v_)(s.gameneeds.operation),1),(0,n.Lk)("h3",null,(0,E.v_)(a.mins)+" : "+(0,E.v_)(a.timecounter),1),(0,n.Lk)("p",A,(0,E.v_)(s.fnumber),1),(0,n.Lk)("div",Q,["Addition"===s.gameneeds.operation?((0,n.uX)(),(0,n.CE)("p",P," + ")):"Subtraction"===s.gameneeds.operation?((0,n.uX)(),(0,n.CE)("p",W," - ")):"Multiplication"==s.gameneeds.operation?((0,n.uX)(),(0,n.CE)("p",T," * ")):"Division"===s.gameneeds.operation?((0,n.uX)(),(0,n.CE)("p",R," / ")):(0,n.Q3)("",!0)]),(0,n.Lk)("p",H,(0,E.v_)(s.snumber),1),t[20]||(t[20]=(0,n.Lk)("br",null,null,-1)),t[21]||(t[21]=(0,n.Lk)("label",{for:"answerimput"},"Answer : ",-1)),(0,n.bo)((0,n.Lk)("input",{type:"number",name:"answerimput",id:"answerimput","onUpdate:modelValue":t[4]||(t[4]=e=>s.inputanswer=e),class:"input-field"},null,512),[[r.Jo,s.inputanswer]]),(0,n.Lk)("button",{onClick:t[5]||(t[5]=(...e)=>a.submit_ans&&a.submit_ans(...e)),class:"btn"},"Submit")])):(0,n.Q3)("",!0),s.Ui_render.all_done?((0,n.uX)(),(0,n.CE)("div",J,[t[23]||(t[23]=(0,n.Lk)("h1",null,"Congrats",-1)),(0,n.Lk)("div",z,[t[22]||(t[22]=(0,n.Lk)("h2",null,"Your Score Result:",-1)),(0,n.Lk)("p",V,"You scored: "+(0,E.v_)(s.score),1)]),t[24]||(t[24]=(0,n.Lk)("br",null,null,-1)),(0,n.Lk)("button",{onClick:t[6]||(t[6]=(...e)=>a.go_home&&a.go_home(...e)),class:"btn"},"Leave Room")])):(0,n.Q3)("",!0)])}var Y=o(1714),N={data(){return{logopic:o(7617),Ui_render:{login:!0,otherPlayerList:!1,game_started:!1,all_done:!1},gameneeds:{time:0,operation:null,numberOfQuestions:0},playername:"",roomID:"",playerlist:[],isrunning:!1,timer:null,fnumber:0,snumber:0,inputanswer:null,score:0}},methods:{join_room(){""!==this.roomID.trim()&&""!==this.playername.trim()?this.socket.emit("join_room",{username:this.playername,room_id:this.roomID}):alert("please enter")},detect_query(){if(""===this.$route.query.game_id||""===this.$route.query.userid)console.log("no gameid");else{let e=(0,m.lq)();console.log("route : ",e.path),console.log("reload"),"/lobbies"===e.path&&(console.log("needs"),this.socket.emit("accidental_reload",{playerid:this.$route.query.userid,roomid:this.$route.query.game_id}))}},start_timer(){!this.isrunning&&this.gameneeds.time>0&&(this.isrunning=!0,this.timer=setInterval((()=>{this.gameneeds.time>0?this.gameneeds.time-=1:(this.Ui_render.game_started=!1,console.log("game done"),this.Ui_render.login=!1,this.Ui_render.otherPlayerList=!1,this.Ui_render.game_started=!1,this.Ui_render.all_done=!0,this.update_score(),this.stoptimer())}),1e3))},submit_ans(){console.log(this.inputanswer),"Addition"===this.gameneeds.operation?this.inputanswer==this.fnumber+this.snumber&&(this.score+=1,console.log("correct!!")):"Subtraction"===this.gameneeds.operation?this.inputanswer==this.fnumber-this.snumber&&(this.score+=1):"Multiplication"===this.gameneeds.operation?this.inputanswer==this.fnumber*this.snumber&&(this.score+=1):"Division"===this.gameneeds.operation&&this.inputanswer==this.fnumber/this.snumber&&(this.score+=1),this.randomnumber(),this.inputanswer=null,this.gameneeds.numberOfQuestions-=1,0===this.gameneeds.numberOfQuestions&&(this.stoptimer(),this.update_score(),this.Ui_render.login=!1,this.Ui_render.otherPlayerList=!1,this.Ui_render.game_started=!1,this.Ui_render.all_done=!0,console.log("done"))},stoptimer(){clearInterval(this.timer),this.isrunning=!1,this.timer=null},update_score(){this.socket.emit("score_update",{room_id:this.$route.query.game_id,userid:this.$route.query.userid,score:this.score})},LeaveRoom(){this.$router.push({name:"home"}),this.socket.emit("leaveroom",{room_id:this.$route.query.game_id,userid:this.$route.query.userid,score:this.score})},go_home(){this.$router.push({name:"home"})},randomnumber(){if("Addition"===this.gameneeds.operation){this.fnumber=Math.floor(99*Math.random())+1;while(this.fnumber>99)this.fnumber=Math.floor(99*Math.random())+1;this.snumber=Math.floor(99*Math.random())+1;while(this.snumber>99)this.snumber=Math.floor(99*Math.random())+1}else if("Subtraction"===this.gameneeds.operation){this.fnumber=Math.floor(150*Math.random())+50;while(this.fnumber>150)this.fnumber=Math.floor(150*Math.random())+50;do{this.snumber=Math.floor(99*Math.random())+1}while(this.snumber>99||this.snumber>this.fnumber)}else if("Multiplication"===this.gameneeds.operation){this.fnumber=Math.floor(99*Math.random())+1;while(this.fnumber>99)this.fnumber=Math.floor(99*Math.random())+1;this.snumber=Math.floor(20*Math.random())+1;while(this.snumber>20)this.snumber=Math.floor(20*Math.random())+1}else if("Division"===this.gameneeds.operation){this.snumber=Math.floor(12*Math.random())+1;while(this.snumber>12)this.snumber=Math.floor(12*Math.random())+1;const e=Math.floor(20*Math.random())+1;while(e>20)e=Math.floor(20*Math.random())+1;this.fnumber=e*this.snumber}}},mounted(){this.socket=(0,Y.io)("https://mathenic-backend123.onrender.com"),this.detect_query(),this.socket.emit("connection","hello backend"),this.socket.on("connection",(e=>{console.log(e)})),this.socket.on("error",(e=>{alert(e),this.$router.replace({query:{game_id:"",userid:""}})})),this.socket.on("Room_update",(e=>{this.playerlist=e,this.roomID=this.$route.query.game_id})),this.socket.on("userJoined",(e=>{this.$router.replace({query:{game_id:this.roomID,userid:e}}),this.Ui_render.login=!1,this.Ui_render.otherPlayerList=!0,!0===this.Ui_render.game_started&&(this.Ui_render.otherPlayerList=!1)})),this.socket.on("showscore",(e=>{this.Ui_render.login=!1,this.Ui_render.otherPlayerList=!1,this.Ui_render.game_started=!1,this.Ui_render.all_done=!0,this.score=e})),this.socket.on("gamestart",(e=>{this.gameneeds.time=60*e.time,this.gameneeds.operation=e.operation,this.gameneeds.numberOfQuestions=e.numberOfQuestion,this.Ui_render.login=!1,this.Ui_render.otherPlayerList=!1,this.Ui_render.game_started=!0,this.Ui_render.all_done=!1,console.log("q :",this.gameneeds.numberOfQuestions),this.randomnumber(),this.start_timer()}))},computed:{timecounter(){const e=String(this.gameneeds.time%60).padStart(2,"0");return e},mins(){const e=Math.floor(this.gameneeds.time/60);return 0===e?"0":e},hours(){const e=Math.floor(this.gameneeds.time/60/60);return 0===e?"0":e}},beforeDestroy(){this.stoptimer()}};const G=(0,l.A)(N,[["render",K]]);var B=G;const Z={class:"col-md-6 left-section"},ee={key:0},te={class:"form-group"},oe={class:"form-group"},re={class:"form-group"},ne={class:"form-group"},ie={key:1},se={class:"players-list"},ae={class:"player-avatar"},le={class:"player-details"},ue={class:"player-name"},he={key:2},me={class:"scoreboard-box"},ce={class:"player-name"},de={class:"player-score"};function pe(e,t,o,i,s,a){return(0,n.uX)(),(0,n.CE)("div",Z,[t[12]||(t[12]=(0,n.Lk)("h1",null,[(0,n.Lk)("span",{class:"Math"},"Mathe"),(0,n.Lk)("span",{class:"nic"},"nic")],-1)),s.ui_render.create?((0,n.uX)(),(0,n.CE)("div",ee,[t[10]||(t[10]=(0,n.Lk)("h2",null,"Set Up",-1)),(0,n.Lk)("div",te,[t[7]||(t[7]=(0,n.Lk)("label",{for:"operation"},"Operation",-1)),(0,n.bo)((0,n.Lk)("select",{id:"operation",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=e=>s.room.operation=e)},t[6]||(t[6]=[(0,n.Fv)('<option value="" data-v-27d7bc22>Select Operation</option><option value="Addition" data-v-27d7bc22>Addition</option><option value="Subtraction" data-v-27d7bc22>Subtraction</option><option value="Multiplication" data-v-27d7bc22>Multiplication</option><option value="Division" data-v-27d7bc22>Division</option>',5)]),512),[[r.u1,s.room.operation]])]),(0,n.Lk)("div",oe,[t[8]||(t[8]=(0,n.Lk)("label",{for:"timer"},"Timer ( In minutes)",-1)),(0,n.bo)((0,n.Lk)("input",{type:"number",name:"timer",id:"timer",class:"form-control timer-input","onUpdate:modelValue":t[1]||(t[1]=e=>s.room.time=e)},null,512),[[r.Jo,s.room.time]])]),(0,n.Lk)("div",re,[t[9]||(t[9]=(0,n.Lk)("label",{for:"question"},"No. of Question",-1)),(0,n.bo)((0,n.Lk)("input",{type:"number",name:"question",id:"question",class:"form-control question-input","onUpdate:modelValue":t[2]||(t[2]=e=>s.room.noOFquestion=e)},null,512),[[r.Jo,s.room.noOFquestion]])]),(0,n.Lk)("div",ne,[(0,n.Lk)("button",{onClick:t[3]||(t[3]=(...e)=>a.createLobby&&a.createLobby(...e)),class:"btn btn-primary"},"create")])])):s.ui_render.showplayer?((0,n.uX)(),(0,n.CE)("div",ie,[(0,n.Lk)("h3",null," Game id : "+(0,E.v_)(s.roomid),1),(0,n.eW)(" All players : "+(0,E.v_)(s.players.length)+" ",1),(0,n.Lk)("button",{onClick:t[4]||(t[4]=(...e)=>a.start_game&&a.start_game(...e)),class:"btn btn-success"},"Start"),(0,n.Lk)("div",se,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(s.players,(e=>((0,n.uX)(),(0,n.CE)("div",{class:"player-item",key:e.username},[(0,n.Lk)("div",ae,(0,E.v_)(e.username[0]),1),(0,n.Lk)("div",le,[(0,n.Lk)("span",ue,(0,E.v_)(e.username),1)])])))),128))])])):s.ui_render.showscoreboard?((0,n.uX)(),(0,n.CE)("div",he,[(0,n.Lk)("h3",null,"player done : "+(0,E.v_)(s.playersdone.length)+" All players : "+(0,E.v_)(s.players.length),1),t[11]||(t[11]=(0,n.Lk)("h1",null,"player score",-1)),(0,n.Lk)("button",{onClick:t[5]||(t[5]=(...e)=>a.endThematch&&a.endThematch(...e)),class:"btn btn-danger"},"End the match"),(0,n.Lk)("div",me,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(a.sortToDone,(e=>((0,n.uX)(),(0,n.CE)("div",{class:"scoreboard-item",key:e.username},[(0,n.Lk)("span",ce,(0,E.v_)(e.username),1),(0,n.Lk)("span",de,(0,E.v_)(e.score),1)])))),128))])])):(0,n.Q3)("",!0)])}var be={data(){return{ui_render:{create:!0,showplayer:!1,showscoreboard:!1},players:[],playersdone:[],room:{operation:"",time:0,noOFquestion:0},roomid:""}},methods:{createLobby(){this.socket.emit("create_lobby",this.room)},handle_reload(){if(""===this.$route.query.roomid||""===this.$route.query.roomkey||null===this.$route.query)console.log("reload from host");else{const e=(0,m.lq)();"/home/hosting"===e.path&&(console.log("hello from host"),console.log(this.players),this.socket.emit("handle_ar_host",{roomid:this.$route.query.roomid,roomkey:this.$route.query.roomkey}))}},start_game(){this.socket.emit("start_game",{roomid:this.$route.query.roomid,roomkey:this.$route.query.roomkey})},endThematch(){this.socket.emit("delete_room",{roomid:this.$route.query.roomid,roomkey:this.$route.query.roomkey}),this.$router.push({name:"home"})},detect_to_delete(){this.playersdone.length()===this.players.length()&&this.endThematch()}},mounted(){this.socket=(0,Y.io)("https://mathenic-backend123.onrender.com"),this.handle_reload(),this.socket.emit("connection","hello backend"),this.socket.on("connection",(e=>{console.log(e)})),this.socket.on("room_created",(e=>{this.$router.replace({query:{roomid:e.roomid,roomkey:e.roomkey}}),this.roomid=e.roomid,this.ui_render.create=!1,this.ui_render.showplayer=!0,this.ui_render.showscoreboard=!1})),this.socket.on("Room_Update",(e=>{this.players=e})),this.socket.on("error",(e=>{alert(e),"the room is successfully deleted"===e&&this.$router.push({name:"home"}),this.$router.replace({query:{roomid:"",roomkey:""}})})),this.socket.on("alerthost_gamestarted",(()=>{this.ui_render.create=!1,this.ui_render.showplayer=!1,this.ui_render.showscoreboard=!0})),this.socket.on("Update_score",(e=>{this.playersdone.push(e)}))},computed:{sortToDone(){let e=this.playersdone.slice().sort(((e,t)=>t.score-e.score));return e}},beforeDestroy(){this.detect_to_delete(),this.socket.disconnect()}};const ke=(0,l.A)(be,[["render",pe],["__scopeId","data-v-27d7bc22"]]);var ge=ke;function fe(e,t,o,r,i,s){return(0,n.uX)(),(0,n.CE)(n.FK,null,[t[1]||(t[1]=(0,n.Lk)("h1",{id:"error"},"404",-1)),t[2]||(t[2]=(0,n.Lk)("h1",{id:"error"},"Page not found",-1)),(0,n.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>s.goHome&&s.goHome(...e))},"go back")],64)}var ye={methods:{goHome(){this.$router.push({name:"home"})}}};const _e=(0,l.A)(ye,[["render",fe]]);var ve=_e;const Le=(0,m.aE)({history:(0,m.LA)(),routes:[{path:"/",name:"home",component:f},{path:"/about",name:"about",component:w},{path:"/help",name:"help",component:$},{path:"/lobbies",name:"lobby",component:B},{path:"/home/hosting",name:"hostpage",component:ge},{path:"/:catchall(.*)",name:"notfound",component:ve}]});var we=Le;(0,r.Ef)(h).use(we).mount("#app")},7617:function(e,t,o){e.exports=o.p+"img/Mathenic_logo.ad8d9ae2.png"}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,o),i.exports}o.m=e,function(){var e=[];o.O=function(t,r,n,i){if(!r){var s=1/0;for(h=0;h<e.length;h++){r=e[h][0],n=e[h][1],i=e[h][2];for(var a=!0,l=0;l<r.length;l++)(!1&i||s>=i)&&Object.keys(o.O).every((function(e){return o.O[e](r[l])}))?r.splice(l--,1):(a=!1,i<s&&(s=i));if(a){e.splice(h--,1);var u=n();void 0!==u&&(t=u)}}return t}i=i||0;for(var h=e.length;h>0&&e[h-1][2]>i;h--)e[h]=e[h-1];e[h]=[r,n,i]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/"}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,i,s=r[0],a=r[1],l=r[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(n in a)o.o(a,n)&&(o.m[n]=a[n]);if(l)var h=l(o)}for(t&&t(r);u<s.length;u++)i=s[u],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(h)},r=self["webpackChunkfrontend_vue"]=self["webpackChunkfrontend_vue"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=o.O(void 0,[504],(function(){return o(3516)}));r=o.O(r)})();
//# sourceMappingURL=app.9726d6e3.js.map