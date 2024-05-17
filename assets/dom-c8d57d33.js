import"./pl-vue-efdc9048.js";import{C as r}from"./index-df14454e.js";import"./marked-d5c18544.js";const s=()=>{const t=`
/*
金融机构大额交易和可疑交易报告管理办法
第五条　金融机构应当报告下列大额交易：
*/

knowledgebase DEJY
knowledge regulatedContract = ["financialTransaction"];
knowledge functionWithoutReport = ["normalTransaction"];
knowledge XJSZ = ["XJJC", "XJZQ", "XJJSH", "XCDH", "XJHK", "XJPJJF"];
// 现金收支：现金缴存、现金支取、现金结售汇、现钞兑换、现金汇款、现金票据解付
end 

rule DEJY5
reg contract(tx.to).name in knowledgebase(DEJY).regulatedContract and tx.function in knowledgebase(DEJY).functionWithoutReport:
prohibit tx.args.txtype in knowledgebase(DEJY).XJSZ and 
    (tx.args.currency == "RMB" and tx.args.amount >= 50000) or (tx.args.currency == "USD" and tx.args.amount >= 10000);
prohibit (tx.args.txtype == "JNKXHZ" or tx.args.txtype == "KJKXHZ") and contract(tx.to).state.accountType[tx.args.account] == "Non-person" and 
    ((tx.args.currency == "RMB" and tx.args.amount >= 2000000) or (tx.args.currency == "USD" and tx.args.amount >= 200000));
prohibit tx.args.txtype == "JNKXHZ" and contract(tx.to).state.accountType[tx.args.account] == "Person" and 
    ((tx.args.currency == "RMB" and tx.args.amount >= 500000) or (tx.args.currency == "USD" and tx.args.amount >= 100000));
prohibit tx.args.txtype == "KJKXHZ" and contract(tx.to).state.accountType[tx.args.account] == "Person" and 
    ((tx.args.currency == "RMB" and tx.args.amount >= 200000) or (tx.args.currency == "USD" and tx.args.amount >= 10000));
end 
`,n=new r({keywords:["rule","end","knowledgebase","knowledge","reg","require","prohibit","and","or","in","true","false"]}).output(t);document.getElementById("container").innerHTML=`<pre>${n}</pre>`};export{s as default};