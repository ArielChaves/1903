AOS.init();const e=new Date("Mar 22, 2024 09:00:00").getTime();setInterval(function(){let o=e-new Date().getTime(),t=Math.floor(o/864e5),n=Math.floor(o%864e5/36e5),l=Math.floor(o%36e5/6e4),a=Math.floor(o%6e4/1e3);console.log(t),console.log(n),console.log(l),console.log(a),document.getElementById("contador").innerHTML=`${t}d ${n}h ${l}m ${a}s`},1e3);
//# sourceMappingURL=index.69fb15e9.js.map
