function  doGet(){
  
  
  /* createTemplateFromFileメソッドでHtmlTemplateHtmlTemplateオブジェクト生成
  　　HtmlTemplateオブジェクトはHTMLファイルにスクリプトタグがある場合に使用する。
    
      evaluateメソッド。。。
      evaluateメソッドによって、HtmlTemplateオブジェクトの中身…コードを評価し、実際にWebアプリケーションとして公開するためのhtmlOutputオブジェクトという形式に変換します。
      HtmlTemplateをHtmlOutputオブジェクトに変換してくれるもの（多分）*/
   var HtmlOutput = HtmlService.createTemplateFromFile('index').evaluate();
   
   return HtmlOutput
}