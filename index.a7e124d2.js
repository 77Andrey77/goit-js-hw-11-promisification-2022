const e=e=>new Promise((n=>n(e))),n=e=>console.log(`Resolved after ${e}ms`);e(2e3).then(n),e(1e3).then(n),e(1500).then(n);const t=[{name:"Mango",active:!0},{name:"Poly",active:!1},{name:"Ajax",active:!0},{name:"Lux",active:!1}],a=(e,n,t)=>{const a=e.map((e=>e.name===n?{...e,active:!e.active}:e));return new Promise((e=>{e(a)}))},o=e=>console.table(e);a(t,"Mango").then(o),a(t,"Lux").then(o);const c=e=>new Promise(((n,t)=>{const a=(o=200,c=500,Math.floor(Math.random()*(c-o+1)+o));var o,c;setTimeout((()=>{Math.random()>.3?n({id:e.id,time:a}):t(e.id)}),a)})),i=({id:e,time:n})=>{console.log(`Transaction ${e} processed in ${n}ms`)},s=e=>{console.warn(`Error processing transaction ${e}. Please try again later.`)};c({id:70,amount:150}).then(i).catch(s),c({id:71,amount:230}).then(i).catch(s),c({id:72,amount:75}).then(i).catch(s),c({id:73,amount:100}).then(i).catch(s);
//# sourceMappingURL=index.a7e124d2.js.map
