document.getElementById('navBtn').addEventListener('click', function () {
    const sidebar = document.getElementById('sideBar');
    sidebar.classList.toggle('active');
    const sideBarBtn = document.getElementById('navBtn')
    sideBarBtn.classList.toggle('active');
    console.log("your code is great ")
})