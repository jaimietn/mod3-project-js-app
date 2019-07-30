const BASE_URL = "http://localhost:3000"
const USERS_URL = `${BASE_URL}/`
const TASKS_URL = `${BASE_URL}/`
const navBar = document.querySelector('#navbar')
const listShow = document.querySelector('.show-list')

navBar.addEventListener('click', (e) => {
	if (e.target.id === 'today') {
		console.log("today!")
	}
	if (e.target.id === 'week') {
		console.log("week!")
	}
	if (e.target.id === 'month') {
		console.log("month!")
	}
	if (e.target.id === 'year') {
		console.log("year!")
	}
	if (e.target.id === 'life') {
		console.log("life!")
	}
	if (e.target.id === 'reminders') {
		console.log("reminders!")
	}
	if (e.target.id === 'profile') {
		console.log("profile!")
	}
})

listShow.addEventListener('click', (e) => {
	e.preventDefault()
	if (e.target.id === 'submit-btn') {
		console.log('task submitted!')
	}
})
