import{h as o}from"./pl-vue-2c9f6500.js";import{C as t}from"./index-09f57008.js";import"./marked-d5c18544.js";function d(){const n=`
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
  end 
`,e=new t({keywords:["rule","end","knowledgebase","knowledge","reg","require","prohibit","and","or","in","true","false"]}).output(n);return o("pre",{innerHTML:e,style:"font-size: 14px"})}export{d as default};
