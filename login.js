// login js
function login(){

const user=document.getElementById("username").value
const pass=document.getElementById("password").value

if(user==="admin" && pass==="admin123"){

localStorage.setItem("login","true")

window.location.href="index.html"

}else{

alert("Invalid Credentials")

}

}




// main js

const API = "https://phi-lab-server.vercel.app/api/v1/lab/issues"

const issueCount = document.getElementById("issueCount")

async function loadIssues(type){

const res = await fetch(API)
const data = await res.json()

let issues = data.data

if(type !== "all"){
issues = issues.filter(issue => issue.status === type)
}

displayIssues(issues)

issueCount.innerText = issues.length + " Issues"

setActiveTab(type)

}

function displayIssues(issues){

const container = document.getElementById("issuesContainer")

container.innerHTML = ""

issues.forEach(issue => {

const card = document.createElement("div")

card.className =
"bg-white p-4 rounded-lg border shadow-sm hover:shadow-md cursor-pointer"

if(issue.status === "open"){
card.style.borderTop = "4px solid #22c55e"
}else{
card.style.borderTop = "4px solid #a855f7"
}

card.onclick = () => openIssueModal(issue)

card.innerHTML = `

<div class="flex justify-between items-start mb-2">

<h3 class="text-sm font-semibold">
${issue.title}
</h3>

<span class="badge badge-outline text-xs">
${issue.priority}
</span>

</div>

<p class="text-xs text-gray-500 mb-3">
${issue.description}
</p>

<p class="text-xs text-gray-400">
By ${issue.author}
</p>

<p class="text-xs text-gray-400">
${issue.createdAt}
</p>

`

container.appendChild(card)

})

}

async function searchIssue(){

const text = document.getElementById("searchInput").value

const res = await fetch(
`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${text}`
)

const data = await res.json()

displayIssues(data.data)

}

function setActiveTab(type){

document.querySelectorAll(".tab").forEach(tab => {
tab.classList.remove("tab-active")
})

if(type === "all") document.getElementById("allTab").classList.add("tab-active")

if(type === "open") document.getElementById("openTab").classList.add("tab-active")

if(type === "closed") document.getElementById("closedTab").classList.add("tab-active")

}

function openIssueModal(issue){

document.getElementById("modalTitle").innerText = issue.title
document.getElementById("modalDescription").innerText = issue.description
document.getElementById("modalAuthor").innerText = issue.author
document.getElementById("modalDate").innerText = issue.createdAt
document.getElementById("modalPriority").innerText = issue.priority
document.getElementById("modalStatus").innerText = issue.status

document.getElementById("issueModal").showModal()

}

loadIssues("all")