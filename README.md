# AlertX (JavaScript Alert)
<hr>
<h2>INSTALL</h2>
<p>To install and use, just place the CDN in the head tag.</p>
<h4>Normall</h4>
<pre><script src="https://cdn.jsdelivr.net/gh/thephibonacci/AlertX@main/src/AlertX.js"></script></pre>
<h4>Minify (Recommended)</h4>
<pre><script src="https://cdn.jsdelivr.net/gh/thephibonacci/AlertX@main/min/AlertX.js"></script></pre>
<hr>
<h2>USE</h2>
<h3>Step 1: </h3>
<pre>var Alert = new AlertX()</pre>
<h3>Step 2: </h3>
<h4>Set option for alert type </h4>
<pre>
Alert.option({
type:"",
position:"",
status:"",
theme:""
})
</pre>

<h4>Set option for confirm type </h4>
<pre>
Alert.option({
      type: "confirm",
      position: "topLeft",
      status: "danger",
      theme: "dark",
      showBtnCancel: true or false,
      showBtnConfirm: true or false,
      btnConfirmBgColor: "lime" or "#00ff00" or "rgb(0,255,0)",
      btnCancelBgColor: "lime" or "#00ff00" or "rgb(0,255,0)",
      btnConfirmTxt: "Confirm",
      btnCancelTxt: "Cancel",
 })
</pre>

<h3>Step 3: </h3>
<pre>Alert.exec(text,title,time)</pre>

<hr>
<h2>Quick doc's</h2> 

<h3>Theme's:</h3>

<ul>
  <li>dark</li>  
  <li>light</li>
</ul>

<h3>Position's:</h3>

<ul>
  <li>topLeft</li>  
  <li>centerLeft</li>
  <li>bottomLeft</li>
  <li>topCenter</li>
  <li>center</li>
  <li>bottomCenter</li>
  <li>topRight</li>
  <li>centerRight</li>
  <li>bottomRight</li>
</ul>

<h3>Type's:</h3>

<ul>
  <li>alert</li>
  <li>alertx</li>
  <li>alertz</li>
</ul>

<h3>Status's:</h3>

<ul>
  <li>danger</li>
  <li>warning</li>
  <li>success</li>
  <li>primary</li>
</ul>

<hr><hr><hr><hr><hr>
