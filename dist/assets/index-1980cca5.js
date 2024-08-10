(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const m=n=>{let o=n.meals[0].strInstructions;const c=new RegExp("(?<=\\.)\\s+(?=[A-Z])","g"),s=o.split(c),e=document.querySelector(".recipe-instructions");return e&&(e.innerHTML="",s.forEach(t=>{const r=document.createElement("li");r.textContent=t.trim(),e.appendChild(r)})),n},y=n=>{const o=document.getElementById("table-body"),c=document.getElementById("myTable");o.innerHTML="",c.style.display="table";for(let s=1;s<=20;s++){const e=n.meals[0][`strIngredient${s}`],t=n.meals[0][`strMeasure${s}`];if(e){const r=document.createElement("tr"),i=document.createElement("td"),u=document.createElement("td");(e&&t!==void 0||e&&t!==null)&&(i.textContent=e,u.textContent=t),r.appendChild(i),r.appendChild(u),o.appendChild(r)}}},p=n=>{if(n){const{strMeal:o,strMealThumb:c}=n.meals[0],s=document.querySelector(".recipe-title"),e=document.querySelector(".recipe-instruction-title"),t=document.getElementById("getRecipeBtn"),r=document.querySelector(".recipe-image"),i=document.getElementById("resetButton");s.textContent=o,m(n),r.style.display="block",r.src=c,r.alt="Recipe Image",y(n),e.style.display="block",t.style.display="none",i.style.display="block"}else console.error("No meals found in the recipe data.");return n};let l;const f=async n=>{try{const o=await fetch(n);if(!o.ok)throw new Error(`HTTP error! status: ${o.status}`);if(l=await o.json(),console.log(l),l.meals.length===0)throw new Error("No meals found");return l}catch(o){throw console.log("Error fetching data: ",o),o}},g=()=>{l=null,console.log(l)},h=()=>{const n=document.getElementById("resetButton"),o=document.getElementById("table-body"),c=document.getElementById("myTable"),s=document.getElementById("getRecipeBtn"),e=document.querySelector(".recipe-title"),t=document.querySelector(".recipe-instructions"),r=document.querySelector(".recipe-instruction-title"),i=document.querySelector(".recipe-image");o.innerHTML="",e.innerHTML="",t.innerHTML="",r.style.display="none",i.style.display="none",i.src="",i.alt="",c.style.display="none",s.style.display="inline-block",n.style.display="none",g()},E="https://www.themealdb.com/api/json/v1/1/random.php",b=async()=>{try{const n=await f(E);p(n)}catch(n){console.error("Error fetching recipe:",n)}},d=document.getElementById("getRecipeBtn");d==null||d.addEventListener("click",b);const a=document.getElementById("resetButton");a==null||a.addEventListener("click",h);
